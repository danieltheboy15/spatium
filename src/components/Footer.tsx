import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.rapidscansecure.com/siteseal/siteseal.js?code=64,B611298C08C2616CA49D78A4E997AFB068EAFF76";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <footer className="bg-background text-foreground py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link to="/">
                <img
                  src="/assets/spatium-logo-Bqb6jNew.png"
                  alt="Spatium Urgent Care"
                  className="h-12 w-auto mb-6 object-contain"
                />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Providing high-quality, affordable, and convenient urgent care and primary care services to the Marietta community.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61553189734008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/spatiumurgentcare?igsh=eWQzaGRqcnE1YWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Urgent Care
                  </Link>
                </li>
                <li>
                  <Link to="/dawn-primary-care-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Primary Care
                  </Link>
                </li>
                <li>
                  <Link to="/body-sculpting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Body Sculpting
                  </Link>
                </li>
                <li>
                  <Link to="/aesthetics" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Aesthetics
                  </Link>
                </li>
                <li>
                  <Link to="/weight-loss-program-spatium" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Weight Loss Program
                  </Link>
                </li>
                <li>
                  <Link to="/financing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/covid-19-testing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    COVID-19 Testing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    3595 Canton Rd, Suite 316
                    <br />
                    Marietta, GA 30066
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:678-932-2121" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      (678) 932-2121
                    </a>
                    <a href="tel:678-932-2138" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      (678) 932-2138 - Dawn Primary Care
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:Hello@SpatiumUrgentCare.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Hello@SpatiumUrgentCare.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours of Operation */}
            <div>
              <h3 className="text-lg font-bold mb-4">Hours of Operation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Monday – Friday: 10:00 AM - 7:00 PM
                <br />
                Saturday and Sunday: Closed
              </p>
              <img
                src="/assets/cobb-chamber.png"
                alt="Cobb Chamber of Commerce - Proud Member"
                className="h-24 w-auto object-contain mb-4"
              />
              <div id="annotated-siteseal" />
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Disclaimer & Copyright */}
      <div className="bg-[#1a1a1a] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-75 mb-4">
            Disclaimer: The information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-sm opacity-50">© 2025 Spatium Urgent Care. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
