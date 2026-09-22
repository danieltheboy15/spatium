import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { CLINIC_INFO } from "../types";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-gradient-wellness font-sans">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-elegant text-center">
        <span className="text-6xl font-extrabold text-primary/30 block mb-4">404</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          The page you are looking for may have been moved or does not exist.
          Return to our home page or reach out to our team directly.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3.5 px-4 bg-primary text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors"
            style={{ background: "#007045" }}
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href={`tel:${CLINIC_INFO.phoneNumeric}`}
            className="w-full py-3 px-4 border border-slate-200 text-slate-700 font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>Call Clinic ({CLINIC_INFO.phoneNumeric})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
