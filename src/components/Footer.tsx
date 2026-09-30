import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

// Cobb Chamber logo from bundle.js
const cobbChamberLogo = "data:image/png;base64,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";

export const Footer: React.FC = () => {
  useEffect(() => {
    const e = document.createElement("script");
    e.src = "https://www.rapidscansecure.com/siteseal/siteseal.js?code=64,B611298C08C2616CA49D78A4E997AFB068EAFF76";
    e.type = "text/javascript";
    e.async = true;
    document.body.appendChild(e);
    return () => {
      if (document.body.contains(e)) {
        document.body.removeChild(e);
      }
    };
  }, []);

  return (
    <>
      <footer className="bg-background text-foreground py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img
                src="/assets/spatium-logo-Bqb6jNew.png"
                alt="Spatium Urgent Care"
                className="h-12 w-auto mb-6 object-contain"
              />
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

            <div>
              <h3 className="text-lg font-bold mb-4">Hours of Operation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Monday – Friday: 10:00 AM - 7:00 PM
                <br />
                Saturday and Sunday: Closed
              </p>
              <img
                src={cobbChamberLogo}
                alt="Cobb Chamber of Commerce - Proud Member"
                className="h-24 w-auto object-contain mb-4"
              />
              <div id="annotated-siteseal" />
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#1a1a1a] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-75 mb-4">
            Disclaimer: The information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-sm opacity-50">
            © 2026 Spatium Urgent Care. All rights reserved.
          </p>
          
        </div>
      </div>
    </>
  );
};
