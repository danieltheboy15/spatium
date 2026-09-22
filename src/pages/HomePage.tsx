import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  Clock,
  Heart,
  Shield,
  Pill,
  Zap,
  Users,
  Award,
  Sparkles,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// S2 from bundle.js: Exact verbatim services list
const S2 = [
  "Ear, Nose and Throat Infections",
  "Eye infections",
  "Sinus infections",
  "Allergies",
  "Asthma",
  "Bronchitis",
  "Cough",
  "Breathing treatment",
  "Chest pain",
  "Allergic reactions",
  "Gastrointestinal disorders",
  "Urinary tract infections",
  "Fungal infections",
  "Insect bites",
  "Skin infections and Rashes",
  "Sprains",
  "Flu",
  "Burns",
  "Lacerations and wounds",
  "STD testing and treatment",
  "Migraine",
  "Headaches",
  "Motor collision injuries",
  "Workers compensation",
  "Sports Physicals",
  "Employment Physicals",
  "DOT physicals",
  "Electrocardiogram",
];

// C2 from bundle.js
const C2 = [
  {
    image: "/assets/service-physicals-DrhpKCP8.jpg",
    title: "Physicals",
    description: "Sports, employment, and DOT physicals",
  },
  {
    image: "/assets/service-injuries-6OnVvhXU.png",
    title: "Injuries",
    description: "Treatment for sprains, strains, and fractures",
  },
  {
    image: "/assets/service-illnesses-BolqKu_n.png",
    title: "Illnesses",
    description: "Cold, flu, infections, and more",
  },
];

// y2 from bundle.js: Exclusive Health & Wellness Programs
const y2 = [
  {
    icon: Pill,
    title: "GLP-1 Weight Loss",
    description:
      "Revolutionary FDA-approved weight loss injections that help you achieve sustainable results. Our medical team provides personalized treatment plans tailored to your goals.",
    features: ["Medical supervision", "Personalized dosing", "Ongoing support"],
    highlighted: false,
  },
  {
    icon: Zap,
    title: "EMSCULPT NEO Sessions",
    description:
      "The only FDA-cleared treatment that simultaneously burns fat and builds muscle. Transform your body in just 30 minutes per session.",
    features: ["Burns fat", "Builds muscle", "Non-invasive"],
    highlighted: false,
  },
  {
    icon: Shield,
    title: "$99/Monthly Unlimited Care Membership",
    description:
      "Get unlimited access to our urgent care and primary care services with our affordable membership program. Perfect for individuals and families.",
    features: ["Unlimited visits", "Priority scheduling", "Discounted services"],
    highlighted: true,
  },
];

// k2 from bundle.js: In-house testing
const k2 = [
  {
    title: "COVID-19 Testing",
    description: "Rapid and accurate results for your peace of mind.",
  },
  {
    title: "Flu Testing",
    description: "Detect and treat flu symptoms early for a faster recovery.",
  },
  {
    title: "Strep Throat Testing",
    description: "Identify strep infections and get the right treatment without delay.",
  },
  {
    title: "Urine Tests",
    description: "Convenient testing for a variety of conditions, right here in our clinic.",
  },
];

// T2 from bundle.js: About features
const T2 = [
  {
    icon: Users,
    title: "All Ages Welcome",
    description: "Adult and pediatric patients",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Treatment customized to your needs",
  },
  {
    icon: Clock,
    title: "Minimal Wait",
    description: "Quick and efficient service",
  },
  {
    icon: Award,
    title: "Quality Care",
    description: "Professional medical team",
  },
];

// A2 from bundle.js: Insurance providers
const A2 = [
  { name: "Aetna", url: "/insurance/aetna.webp" },
  { name: "Oscar", url: "/insurance/oscar.webp" },
  { name: "Blue Cross Blue Shield", url: "/insurance/bcbs.webp" },
  { name: "UMR", url: "/insurance/umr.webp" },
  { name: "Cigna", url: "/insurance/cigna.webp" },
  { name: "CareSource", url: "/insurance/caresource.png" },
  { name: "Amerigroup", url: "/insurance/amerigroup.png" },
  { name: "Wellcare", url: "/insurance/wellcare.png" },
  { name: "Humana", url: "/insurance/insurance-7.webp" },
  { name: "Medicaid", url: "/insurance/medicaid.png" },
  { name: "Medicare", url: "/insurance/insurance-8.webp" },
  { name: "Peach State", url: "/insurance/peach-state.png" },
  { name: "Ambetter", url: "/insurance/ambetter.png" },
  { name: "Tricare", url: "/insurance/medicare.webp" },
  { name: "United Healthcare", url: "/insurance/uhc.webp" },
];

// Z2 from bundle.js: Frequently Asked Questions
const Z2 = [
  {
    question: "What is primary care?",
    answer:
      "Primary care focuses on preventive care, diagnosis, and treatment of common illnesses and conditions, along with managing chronic health issues.",
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes! Walk-ins are always welcome at Dawn Primary Care.",
  },
  {
    question: "Which insurance plans do you accept?",
    answer:
      "We work with a wide range of insurance providers. Contact us to verify your coverage.",
  },
  {
    question: "Can I schedule same-day appointments?",
    answer:
      "Absolutely. We offer same-day appointments to meet your immediate healthcare needs.",
  },
  {
    question: "What ages do you provide care for?",
    answer: "We provide care for individuals of all ages, from children to seniors.",
  },
];

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Spatium Urgent Care | Fast, Quality Healthcare in Marietta, GA";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Spatium Urgent Care provides high quality, affordable, and convenient care for adult and pediatric patients. Walk-ins welcome. Call 678-932-2121."
      );
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Reputation widget script loader (Wa from bundle.js)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector(
        'script[src="https://reputationhub.site/reputation/assets/review-widget.js"]'
      );
      if (existing) existing.remove();
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION (h2 from bundle.js) */}
      <section className="relative min-h-screen bg-gradient-wellness overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-image-COybVhCy.jpg"
            alt="Professional healthcare environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground animate-fade-in-up">
                Spatium
                <span className="block text-primary animate-fade-in-up-delay-1">
                  Urgent Care
                </span>
              </h1>
              <div className="text-xl md:text-2xl mb-8 animate-fade-in-up-delay-2">
                <p className="mb-2 text-primary font-semibold">
                  Outstanding Patient Experience.
                </p>
                <p className="text-lg text-muted-foreground">
                  Quality Healthcare When You Need It Most
                </p>
              </div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-muted-foreground animate-fade-in-up-delay-3">
                High quality, affordable, and convenient care for adult and pediatric patients.
                Walk-ins welcome. No appointment necessary.
              </p>
              <p className="text-sm md:text-base mb-10 font-semibold text-primary animate-fade-in-up-delay-3 flex items-center gap-2 justify-center lg:justify-start">
                <span>🎖️</span> Proudly serving Veterans and military personnel since 2021
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delay-3">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2121">Call 678-932-2121</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://www.clockwisemd.com/visit/15645">Book Appointment</a>
                </Button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="relative">
              <div className="grid grid-cols-5 gap-4 h-[500px]">
                {/* 3-col Video Column */}
                <div className="col-span-3 relative rounded-2xl overflow-hidden">
                  <video
                    src="https://storage.googleapis.com/msgsndr/T6mQ3SDItIhA4nf15ws0/media/69844d821dfc0256ed7651b6.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold text-xs z-10 border-2 border-white">
                    Walk-Ins Welcome
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg font-medium text-sm border border-primary/10">
                    ✨ Same-Day Appointments
                  </div>
                </div>

                {/* 2-col Images Column */}
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="flex-1 rounded-2xl overflow-hidden">
                    <img
                      src="/assets/hero-doctor-BbjxEaL5.jpg"
                      alt="Friendly healthcare professional at Spatium Urgent Care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden">
                    <img
                      src="/assets/hero-heart-care-BqIcwsPM.jpg"
                      alt="Healthcare professional holding heart - compassionate care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AESTHETICS BANNER (eS from bundle.js) */}
      <section className="py-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-y-2 border-primary">
        <div className="container mx-auto px-6 text-center">
          <p
            className="font-bold text-foreground flex flex-wrap items-center justify-center gap-2"
            style={{ fontSize: "1.475rem" }}
          >
            <span className="text-2xl">✨</span>
            <span>Book Your Aesthetic Services</span>
            <span className="hidden md:inline mx-2">|</span>
            <a
              href="https://spatiumurgentcareandwellness.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 underline underline-offset-4 transition-all hover:scale-105"
            >
              Click Here <ExternalLink className="w-5 h-5" />
            </a>
          </p>
        </div>
      </section>

      {/* 3. EXCLUSIVE HEALTH & WELLNESS PROGRAMS (w2 from bundle.js) */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Exclusive Health
              <span className="block text-primary">& Wellness Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Discover our specialized services designed to help you look and feel your best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {y2.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className={`shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative ${
                    item.highlighted
                      ? "bg-gradient-to-br from-primary to-primary/80 ring-4 ring-primary/30 scale-105 z-10"
                      : "bg-white"
                  }`}
                >
                  {item.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-bold">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <CardContent className={`p-8 ${item.highlighted ? "pt-12" : ""}`}>
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                        item.highlighted ? "bg-white/20" : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          item.highlighted ? "text-white" : "text-primary"
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-bold mb-3 ${
                        item.highlighted ? "text-white text-3xl" : "text-foreground text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mb-6 ${
                        item.highlighted ? "text-white/90" : "text-muted-foreground"
                      }`}
                    >
                      {item.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-center gap-2 text-sm ${
                            item.highlighted ? "text-white" : "text-foreground"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.highlighted ? "bg-white" : "bg-primary"
                            }`}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full font-semibold text-white shadow-primary hover:opacity-95 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                      }}
                    >
                      <a href="https://www.clockwisemd.com/visit/15645">Click Here to Book</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR URGENT CARE SERVICES (E2 from bundle.js) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Urgent Care
              <span className="block text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Render treatment to a varied population with acute illnesses that are not life
              threatening but can't wait to the next day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {C2.map((item, idx) => (
              <Card
                key={idx}
                className="bg-white shadow-elegant hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-100 rounded-2xl flex flex-col group"
              >
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
                <CardContent className="p-8 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Complete Services List - Verbatim S2 array */}
          <Card className="bg-[#F4F4F6] shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Complete Services List
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {S2.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold"
            >
              <a href="tel:678-932-2121">Call 678-932-2121</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
              }}
            >
              <a href="https://www.clockwisemd.com/visit/15645">Book Appointment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FAST, ACCURATE IN-HOUSE TESTING (P2 from bundle.js) */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Fast, Accurate
              <span className="block text-primary">In-House Testing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide reliable, on-site testing to help you get answers and start treatment
              quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <img
                src="/assets/covid-testing-Dl25epgp.webp"
                alt="COVID-19 testing swab and sample tube"
                className="rounded-2xl shadow-elegant w-full max-w-md object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {k2.map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-white shadow-elegant hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              With our in-house testing services, there's no need to wait — get the care you need
              when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold"
              >
                <a href="tel:678-932-2121">Call 678-932-2121</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 h-auto rounded-lg font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                }}
              >
                <a href="https://www.clockwisemd.com/visit/15645">Book Appointment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT SPATIUM URGENT CARE (R2 from bundle.js) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About
                <span className="block text-primary">Spatium Urgent Care</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Spatium Urgent Care provides high quality, affordable, and convenient care for
                adult and pediatric patients in need of immediate treatment of acute illnesses or
                injury.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each patient receives education on the available treatment options and each
                treatment is customized to meet the individual needs of the patient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold"
                >
                  <a href="tel:678-932-2121">Call 678-932-2121</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://www.clockwisemd.com/visit/15645">Book Appointment</a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {T2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={idx}
                    className="bg-white shadow-elegant hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WE ACCEPT MOST INSURANCE PLANS (zx from bundle.js) */}
      <section className="py-20 bg-[#F4F4F6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              We Accept Most
              <span className="block text-primary">Insurance Plans</span>
            </h2>
          </div>

          <Card className="bg-primary shadow-elegant max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                {A2.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-3 w-full flex items-center justify-center h-16"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className="max-h-10 max-w-full object-contain filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-8">
            We also offer cash pay options. Please call for additional information.
          </p>
        </div>
      </section>

      {/* 8. WHAT OUR PATIENTS ARE SAYING (Wa from bundle.js) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Patients
              <span className="block text-primary">Are Saying</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/T6mQ3SDItIhA4nf15ws0"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%", minHeight: "600px" }}
              title="Patient Reviews"
            />
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (ov from bundle.js) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Everything You Need
              <span className="block text-primary">To Know</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {Z2.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg shadow-elegant border-2 hover:border-primary/20 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-lg font-semibold text-foreground flex justify-between items-center text-left hover:text-primary transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. READY TO GET THE CARE YOU NEED? (J2 from bundle.js) */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur shadow-elegant">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Get
                <span className="text-primary"> The Care You Need?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Visit Spatium Urgent Care for quality healthcare with minimal wait times.
                Walk-ins are always welcome!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold"
                >
                  <a href="tel:678-932-2121">Call 678-932-2121</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold text-white shadow-primary"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://www.clockwisemd.com/visit/15645">Book Appointment</a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61553189734008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Facebook className="w-5 h-5" />
                  Follow us on Facebook
                </a>
                <a
                  href="https://www.instagram.com/spatiumurgentcare?igsh=eWQzaGRqcnE1YWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
