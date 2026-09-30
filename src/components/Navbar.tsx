import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-xs"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center gap-4 lg:gap-8">
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

          {/* Action buttons & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Shortcut */}
            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search treatments and symptoms"
                className="flex items-center gap-2 px-2.5 sm:px-3 py-2 text-xs text-slate-500 hover:text-slate-800 bg-slate-100/80 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer border border-slate-200/60"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline font-medium">Search</span>
                <kbd className="hidden md:inline text-[10px] px-1 py-0.2 bg-white rounded border border-slate-300 font-mono text-slate-500">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Desktop Call & Book buttons */}
            <div className="hidden xl:flex items-center gap-2.5">
              <Button
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary/10 bg-white font-semibold px-5 rounded-md text-sm"
              >
                <a href="tel:678-932-2121">Call 678-932-2121</a>
              </Button>
              <Button
                asChild
                className="text-white font-semibold px-5 rounded-md hover:opacity-90 text-sm shadow-xs"
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
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-slate-100 transition-colors"
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
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Search Button */}
              {onOpenSearch && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full mt-4 flex items-center justify-between px-3.5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-slate-500" />
                    <span>Search symptoms & treatments</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">⌘K</span>
                </button>
              )}

              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`transition-colors text-base py-1.5 px-2 rounded-lg ${
                        isActive
                          ? "bg-emerald-50 text-primary font-bold"
                          : "text-foreground hover:text-primary hover:bg-slate-50 font-normal"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Additional quick links for complete mobile accessibility */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-sm">
                  <Link
                    to="/covid-19-testing"
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 px-2 text-slate-600 hover:text-primary"
                  >
                    COVID-19 & Rapid Lab Testing
                  </Link>
                  <Link
                    to="/financing"
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 px-2 text-slate-600 hover:text-primary"
                  >
                    Cherry Patient Financing (0% APR)
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 px-2 text-slate-600 hover:text-primary"
                  >
                    Contact & Directions
                  </Link>
                </div>

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

            <div className="pt-6 border-t border-border mt-6 text-xs text-muted-foreground text-center">
              <p className="font-semibold text-foreground mb-1">Spatium Urgent Care</p>
              <p>3595 Canton Rd, Suite 316, Marietta, GA</p>
              <p className="mt-1 font-medium text-emerald-800">Mon–Fri: 10am–7pm | Sat–Sun: Closed</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
