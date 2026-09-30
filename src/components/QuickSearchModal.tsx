import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Phone,
  Calendar,
  Clock,
  MapPin,
  HeartPulse,
  Activity,
  CreditCard,
  TestTubes,
} from "lucide-react";
import { CLINIC_INFO } from "../types";

interface SearchEntry {
  title: string;
  category: string;
  description: string;
  path?: string;
  externalUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SEARCH_DIRECTORY: SearchEntry[] = [
  {
    title: "Urgent Care Walk-In Services",
    category: "Urgent Care",
    description: "Acute illness treatment, minor injuries, cuts/stitches, sprains, infections.",
    path: "/",
    icon: Activity,
  },
  {
    title: "Dawn Primary Care & Family Medicine",
    category: "Primary Care",
    description: "Annual physicals, chronic disease management (diabetes, hypertension), $99/mo membership.",
    path: "/dawn-primary-care-service",
    icon: HeartPulse,
  },
  {
    title: "Medically Supervised Weight Loss (Semaglutide / Tirzepatide)",
    category: "Wellness",
    description: "Doctor-guided GLP-1 weight loss therapy, diet guidance, $199 promotional starter package.",
    path: "/weight-loss-program-spatium",
    icon: Sparkles,
  },
  {
    title: "EMSCULPT NEO Body Sculpting",
    category: "Body Contouring",
    description: "FDA-cleared 30-minute procedure that burns fat and builds muscle simultaneously.",
    path: "/body-sculpting",
    icon: Sparkles,
  },
  {
    title: "Aesthetics Menu (Botox, Microneedling, Peels)",
    category: "Aesthetics",
    description: "Anti-aging injectables, revitalizing facials, chemical peels, dermaplaning.",
    path: "/aesthetics",
    icon: Sparkles,
  },
  {
    title: "Rapid COVID-19 & Infectious Disease Testing",
    category: "Lab & Diagnostics",
    description: "Rapid COVID antigen & PCR, Flu A/B, Strep, RSV with results in 15 minutes.",
    path: "/covid-19-testing",
    icon: TestTubes,
  },
  {
    title: "Cherry Patient Financing (0% APR)",
    category: "Billing & Financing",
    description: "Flexible monthly payment plans for aesthetic and wellness treatments.",
    path: "/financing",
    icon: CreditCard,
  },
  {
    title: "Contact, Clinic Hours & Location",
    category: "Clinic Info",
    description: "3595 Canton Rd, Suite 316, Marietta, GA. Phone: 678-932-2121. Mon-Fri 10am-7pm.",
    path: "/contact",
    icon: MapPin,
  },
  {
    title: "Online Appointment Booking & Queue",
    category: "Booking",
    description: "Reserve your urgent care or wellness visit online to skip the waiting room.",
    externalUrl: CLINIC_INFO.bookingUrl,
    icon: Calendar,
  },
];

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Listen for keyboard Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = SEARCH_DIRECTORY.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: SearchEntry) => {
    onClose();
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments, symptoms, doctors, financing, hours..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {results.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-medium">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            );
          })}

          {results.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm font-semibold">No services found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "weight loss", "botox", "hours", "urgent care", or "covid".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Call us directly:</span>
            <a href={`tel:${CLINIC_INFO.phoneNumeric}`} className="font-bold text-slate-700 hover:text-primary">
              (678) 932-2121
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">ESC</kbd> to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
