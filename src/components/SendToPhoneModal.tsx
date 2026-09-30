import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import {
  Smartphone,
  X,
  Navigation,
  Phone,
  Contact,
  Calendar,
  Share2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { CLINIC_INFO } from "../types";
import { Button } from "./ui/button";

interface SendToPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SendToPhoneModal: React.FC<SendToPhoneModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"maps" | "call" | "contact" | "book">("maps");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Targets for QR codes
  const mapsTarget = CLINIC_INFO.mapsUrl;
  const callTarget = `tel:${CLINIC_INFO.phoneNumeric}`;
  const bookTarget = CLINIC_INFO.bookingUrl;

  // vCard target
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Spatium Urgent Care & Wellness
ORG:Spatium Urgent Care
TEL;TYPE=WORK,VOICE:678-932-2121
ADR;TYPE=WORK:;;3595 Canton Rd, Suite 316;Marietta;GA;30066;USA
URL:https://spatiumurgentcare.com
NOTE:Fast, quality urgent care, primary care, aesthetics, and weight loss in Marietta, GA. Mon-Fri 10am-7pm.
END:VCARD`;

  useEffect(() => {
    let target = mapsTarget;
    if (activeTab === "call") target = callTarget;
    if (activeTab === "book") target = bookTarget;
    if (activeTab === "contact") target = vCardData;

    QRCode.toDataURL(target, {
      width: 240,
      margin: 2,
      color: {
        dark: "#005836",
        light: "#ffffff",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code generation error", err));
  }, [activeTab, mapsTarget, callTarget, bookTarget, vCardData]);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("3595 Canton Rd, Suite 316, Marietta, GA 30066");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Spatium_Urgent_Care.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 py-4 text-white flex items-center justify-between"
          style={{
            background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg leading-tight">
                Send Clinic Info to Your Phone
              </h3>
              <p className="text-xs text-white/85">
                Scan with your smartphone camera for instant action
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-3 bg-slate-50 border-b border-slate-200">
          {[
            { id: "maps", label: "GPS Driving Route", icon: Navigation },
            { id: "call", label: "Direct Call", icon: Phone },
            { id: "contact", label: "Save Contact", icon: Contact },
            { id: "book", label: "Book on Mobile", icon: Calendar },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-emerald-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-primary" : "text-slate-500"}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Body content with QR code */}
        <div className="p-6 text-center space-y-4">
          <div className="w-48 h-48 mx-auto bg-white p-2.5 rounded-2xl border-2 border-emerald-100 shadow-sm flex items-center justify-center">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR Code for mobile action"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-xs text-slate-400">Generating QR code...</div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {activeTab === "maps" && "🚗 Scan to Launch GPS Navigation"}
              {activeTab === "call" && "📞 Scan to Call Front Desk Immediately"}
              {activeTab === "contact" && "📇 Scan to Save Spatium in Your Phone Contacts"}
              {activeTab === "book" && "📅 Scan to Open Mobile Reservation"}
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Open your iPhone or Android camera and point it at the QR code above. No app download needed.
            </p>
          </div>

          {/* Quick link & utility bar */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="truncate text-left text-[11px] sm:text-xs">
              <strong>Address:</strong> 3595 Canton Rd, Ste 316, Marietta, GA
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-300 rounded-md text-[11px] font-semibold text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              {activeTab === "contact" && (
                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="px-2.5 py-1 bg-primary text-white rounded-md text-[11px] font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Download .vcf
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Need help? Call (678) 932-2121</span>
          <a
            href={`sms:?&body=Spatium%20Urgent%20Care%20Marietta%20GA:%203595%20Canton%20Rd%20Suite%20316,%20Marietta,%20GA%2030066.%20Phone:%20678-932-2121.%20Directions:%20${encodeURIComponent(CLINIC_INFO.mapsUrl)}`}
            className="font-bold text-primary hover:underline flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Text to Phone (SMS)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
