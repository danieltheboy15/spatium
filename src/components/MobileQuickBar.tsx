import React from "react";
import { Phone, Calendar, Navigation } from "lucide-react";
import { CLINIC_INFO } from "../types";

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-lg pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneNumeric}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-50 text-primary border border-emerald-200 rounded-lg text-xs sm:text-sm font-semibold hover:bg-emerald-100 active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 text-primary shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Book Button */}
        <a
          href={CLINIC_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-emerald-800 shadow-sm active:scale-[0.98] transition-all"
          style={{ background: "#007045" }}
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Visit</span>
        </a>

        {/* Directions Button */}
        <a
          href={CLINIC_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs sm:text-sm font-medium active:scale-[0.98] transition-all"
        >
          <Navigation className="w-4 h-4 text-slate-600 shrink-0" />
          <span className="truncate">Map</span>
        </a>
      </div>
    </aside>
  );
};
