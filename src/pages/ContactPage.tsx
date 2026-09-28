import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "../components/ui/button";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Spatium Urgent Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact Spatium Urgent Care in Marietta, GA. Visit us at 3595 Canton Rd, Suite 316, call 678-932-2121 or 678-932-2138, or book an appointment online."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background pt-20 font-sans">
      {/* 1. Header Banner */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Visit us, call us, or book an appointment online.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Location & Directions Card */}
              <div className="bg-white shadow-elegant rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Location & Directions
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">3595 Canton Rd, Suite 316</p>
                      <p className="text-muted-foreground">Marietta, GA 30066</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <div className="flex flex-col gap-2">
                        <a
                          href="tel:678-932-2121"
                          className="text-primary hover:underline text-lg font-semibold"
                        >
                          (678) 932-2121
                        </a>
                        <a
                          href="tel:678-932-2138"
                          className="text-primary hover:underline text-lg font-semibold"
                        >
                          (678) 932-2138 - Dawn Primary Care
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:Hello@SpatiumUrgentCare.com"
                        className="text-primary hover:underline"
                      >
                        Hello@SpatiumUrgentCare.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours of Operation</h3>
                      <p className="text-muted-foreground">
                        Monday – Friday: 10:00 AM - 7:00 PM
                      </p>
                      <p className="text-muted-foreground">Saturday and Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="flex-1 text-white font-semibold"
                    style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                  >
                    <a
                      href="https://app.clientforge-ai.com/spatium-book"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Appointment
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=3595+Canton+Rd+Suite+316+Marietta+GA+30066"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Walk-Ins Welcome Card */}
              <div className="bg-primary text-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4">Walk-Ins Welcome!</h3>
                <p className="opacity-90 mb-4">
                  No appointment necessary. We accept most major insurance plans and offer affordable self-pay options.
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:678-932-2121" className="font-semibold hover:underline">
                      Call (678) 932-2121
                    </a>
                    <a href="tel:678-932-2138" className="font-semibold hover:underline">
                      Call (678) 932-2138 - Dawn Primary Care
                    </a>
                  </div>
                </div>
              </div>

              {/* Follow Us Card */}
              <div className="bg-white shadow-elegant rounded-2xl border border-border p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-foreground">Follow Us</h3>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61553189734008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Follow us on Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/spatiumurgentcare?igsh=eWQzaGRqcnE1YWFs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Follow us on Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps & Directions */}
            <div className="space-y-6">
              <div className="bg-white shadow-elegant rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5!2d-84.505!3d34.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51644783457a3%3A0x6377e8a9461f365!2s3595%20Canton%20Rd%20%23316%2C%20Marietta%2C%20GA%2030066!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spatium Urgent Care Location"
                  className="w-full"
                />
              </div>

              <div className="bg-[#F4F4F6] rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Directions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Located on Canton Road, Marietta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Suite 316
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
