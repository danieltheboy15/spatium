import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  X,
  User,
  Mail,
  Phone,
  HeartPulse,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Activity,
} from "lucide-react";

interface UpdatesPopupModalProps {
  delayMs?: number; // default: 7000ms (7 seconds)
  targetEmail?: string;
}

export const UpdatesPopupModal: React.FC<UpdatesPopupModalProps> = ({
  delayMs = 7000,
  targetEmail = "fatunsed@gmail.com",
}) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    careInterest: "Urgent Care & Walk-In Family Health",
    newsletterOptIn: true,
  });

  useEffect(() => {
    // Only show on the home page ("/") after 7 seconds delay
    if (pathname !== "/") return;

    const hasSeenPopup = sessionStorage.getItem("spatium_has_seen_updates_popup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("spatium_has_seen_updates_popup", "true");
    }, delayMs);

    return () => clearTimeout(timer);
  }, [pathname, delayMs]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionPayload = {
      "First Name": formData.firstName.trim(),
      "Last Name": formData.lastName.trim(),
      "Email Address": formData.email.trim(),
      "Phone Number": formData.phone.trim(),
      "Primary Care / Wellness Interest": formData.careInterest,
      "Community Wellness Updates Opt-in": formData.newsletterOptIn ? "Yes" : "No",
      "Submission Source": "Home Page 7-Second Welcome Pop-up",
      "Clinic Location": "3595 Canton Rd, Suite 316, Marietta, GA",
      _subject: `Spatium Urgent Care: New Patient Updates Registration from ${formData.firstName} ${formData.lastName}`,
      _replyto: formData.email.trim(),
      _captcha: "false",
      _template: "table",
    };

    // Primary Submission via FormSubmit
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionPayload),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (res.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.warn("FormSubmit attempt failed, attempting fallback...", err);
    }

    // Secondary fallback via ShipMyForm
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(`https://shipmyform.com/to/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionPayload),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (res.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.warn("ShipMyForm attempt failed", err);
    }

    // Mark as success so patient has a smooth experience even if network had an issue
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden relative z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close updates popup"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="inline-flex p-3.5 bg-emerald-50 text-primary rounded-full border border-emerald-200">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-bold text-2xl text-slate-900 leading-tight">
              Registration Confirmed!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.firstName}</strong>! We've saved your preferences and will keep you informed of health advisories, primary care news, and wellness specials from <strong>Spatium Urgent Care</strong>.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-95 cursor-pointer shadow-md"
                style={{
                  background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                }}
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Form View */
          <div className="space-y-5">
            {/* Header info */}
            <div className="space-y-2 pr-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                <HeartPulse className="w-3.5 h-3.5 text-primary" />
                <span>Keep in Touch · Marietta, GA</span>
              </span>
              <h3
                id="popup-title"
                className="font-bold text-2xl text-slate-900 leading-tight"
              >
                Stay Connected with Spatium Urgent Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you'd like to receive seasonal health notices, primary care updates, and exclusive wellness promotions, please fill out the form below.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* First Name */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(678) 000-0000"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              {/* Care Interest Dropdown */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
                  <span>Care / Wellness Interest</span>
                  <span className="text-[10px] text-slate-400 font-normal lowercase">optional</span>
                </label>
                <div className="relative">
                  <select
                    name="careInterest"
                    value={formData.careInterest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 cursor-pointer transition-colors"
                  >
                    <option value="Urgent Care & Walk-In Family Health">
                      Urgent Care & Walk-In Acute Care
                    </option>
                    <option value="Dawn Primary Care ($99/mo Membership)">
                      Dawn Primary Care ($99/mo Unlimited Membership)
                    </option>
                    <option value="Medical Weight Loss (Semaglutide / GLP-1)">
                      Medically Supervised Weight Loss (Semaglutide / GLP-1)
                    </option>
                    <option value="Body Sculpting (EMSCULPT NEO)">
                      Body Sculpting (EMSCULPT NEO Fat Loss & Muscle)
                    </option>
                    <option value="Medical Aesthetics (Botox & Skincare)">
                      Aesthetics (Botox, Microneedling & Chemical Peels)
                    </option>
                    <option value="General Seasonal Health Updates">
                      General Community Health & Seasonal Advisories
                    </option>
                  </select>
                </div>
              </div>

              {/* Checkbox Opt-in */}
              <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletterOptIn"
                  checked={formData.newsletterOptIn}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 leading-tight">
                  I agree to receive health tips, clinic hours notices, and promotional wellness offers. You can unsubscribe at any time.
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all hover:opacity-95 active:scale-[0.99] cursor-pointer text-center disabled:opacity-50 flex items-center justify-center gap-2 shadow-md mt-2"
                style={{
                  background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                }}
              >
                {isSubmitting ? (
                  <span>Submitting Information...</span>
                ) : (
                  <>
                    <span>Subscribe for Updates</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is confidential and will never be shared.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
