import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Calendar,
  QrCode,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onOpenSendToPhone?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSendToPhone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem("spatium_theme") === "dark";
    } catch {
      return false;
    }
  });

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme with document.documentElement and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("spatium_theme", isDark ? "dark" : "light");
    } catch {
      // Ignore
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Close menu on route navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Urgent Care", path: "/" },
    { name: "Primary Care", path: "/dawn-primary-care-service" },
    { name: "Body Sculpting", path: "/body-sculpting" },
    { name: "Aesthetics", path: "/aesthetics" },
    { name: "Weight Loss Program", path: "/weight-loss-program-spatium" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-3.5 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-xs"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center gap-3 lg:gap-6">
          {/* Brand Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src="/assets/spatium-logo-Bqb6jNew.png"
              alt="Spatium Urgent Care"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors text-sm font-medium whitespace-nowrap relative py-1 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons & Header Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Small QR Code Icon Button on Desktop Header */}
            {onOpenSendToPhone && (
              <button
                type="button"
                onClick={onOpenSendToPhone}
                title="Send to Phone (QR Code)"
                aria-label="Send to Phone (QR Code)"
                className="hidden xl:flex items-center justify-center w-9 h-9 text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 rounded-lg transition-colors cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
              </button>
            )}

            {/* Light Mode / Air Mode Theme Toggle - visible on BOTH Desktop & Mobile Header */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Air / Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Air / Dark Mode"}
              className="flex items-center justify-center w-9 h-9 text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 rounded-lg transition-colors cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Desktop Call & Book buttons */}
            <div className="hidden xl:flex items-center gap-2">
              <Button
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary/10 bg-white font-semibold px-4 rounded-md text-xs sm:text-sm"
              >
                <a href="tel:678-932-2121">Call 678-932-2121</a>
              </Button>
              <Button
                asChild
                className="text-white font-semibold px-4 rounded-md hover:opacity-90 text-xs sm:text-sm shadow-xs"
                style={{ background: "#007045" }}
              >
                <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Sheet) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[380px] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <img
                  src="/assets/spatium-logo-Bqb6jNew.png"
                  alt="Spatium Urgent Care"
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Clean Navigation Links */}
              <nav className="flex flex-col gap-3.5 mt-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`transition-colors text-base py-2 px-3 rounded-lg ${
                        isActive
                          ? "bg-emerald-50 text-primary font-bold"
                          : "text-foreground hover:text-primary hover:bg-slate-50 font-normal"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="flex flex-col gap-2.5 mt-6">
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-primary text-primary hover:bg-primary/10 bg-white font-semibold w-full py-2.5 text-sm"
                  >
                    <a href="tel:678-932-2121" className="flex items-center justify-center gap-1.5">
                      <Phone className="w-4 h-4" />
                      <span>Call 678-932-2121</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="text-white font-semibold w-full py-2.5 text-sm"
                    style={{ background: "#007045" }}
                  >
                    <a
                      href="https://app.clientforge-ai.com/spatium-book"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </a>
                  </Button>
                </div>
              </nav>
            </div>

            <div className="pt-5 border-t border-border mt-6 text-xs text-muted-foreground text-center">
              <p className="font-semibold text-foreground mb-0.5">Spatium Urgent Care</p>
              <p>3595 Canton Rd, Suite 316, Marietta, GA</p>
              <p className="mt-0.5 font-medium text-emerald-800">Mon–Fri: 10am–7pm | Sat–Sun: Closed</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
