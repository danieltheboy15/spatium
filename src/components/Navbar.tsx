import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center gap-8">
          <Link to="/">
            <img
              src="/assets/spatium-logo-Bqb6jNew.png"
              alt="Spatium Urgent Care"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-normal text-base whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="xl:hidden p-2 rounded-lg text-foreground hover:bg-slate-100 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>

          {/* Desktop Call & Book buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary/10 bg-white font-semibold px-6 rounded-md"
            >
              <a href="tel:678-932-2121">Call 678-932-2121</a>
            </Button>
            <Button
              asChild
              className="text-white font-semibold px-6 rounded-md hover:opacity-90"
              style={{ background: "#007045" }}
            >
              <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </Button>
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
          <div className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[400px] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-50">
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

              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-foreground hover:text-primary transition-colors font-normal text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-primary text-primary hover:bg-primary/10 bg-white font-semibold w-full"
                  >
                    <a href="tel:678-932-2121">Call 678-932-2121</a>
                  </Button>
                  <Button
                    asChild
                    className="text-white font-semibold w-full"
                    style={{ background: "#007045" }}
                  >
                    <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                  </Button>
                </div>
              </nav>
            </div>

            <div className="pt-8 border-t border-border mt-8 text-xs text-muted-foreground text-center">
              <p className="font-semibold text-foreground mb-1">Spatium Urgent Care</p>
              <p>3595 Canton Rd, Suite 316, Marietta, GA</p>
              <p className="mt-1">Mon–Fri: 10am–7pm | Sat–Sun: Closed</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
