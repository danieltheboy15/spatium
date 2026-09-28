import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  UserPlus,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// Exact images mapped from bundle.js
const hS = "/assets/Dawn-Primary-Care-banner5-BpXj3NaB.png";
const pS = "/assets/Dawn-Primary-Care-about-CY7d_EhV.png";
const gS = "/assets/doctor-you-can-trust-XDduRXYf.png";
const xS = "/assets/Personalized-Care-On-Your-Time-3-DN0Ak-IR.png";
const vS = "/assets/8-pxSq__KO.jpg";
const yS = "/assets/Insurance-CnRVehKx.jpg";
const wS = "/assets/service-physicals-DrhpKCP8.jpg";
const bS = "/assets/Vaccinations-Screenings-88dXRlaW.png";
const NS = "/assets/Chronic-Condition-Management-CjGtzIxs.jpg";
const jS = "/assets/hp-hero-copy-CGNrEaI0.jpg";
const CS = "/assets/Mental-Health-Services-2-DZ4eg2W-.jpg";
const SS = "/assets/Acute-Illness-Care-BsoZoAiD.png";
const ES = "/assets/mole-removal-CBhY2S4b.jpg";
const kS = "/assets/Nutrition-Counseling-Weight-Management-DChL_OWb.png";

// A2: Insurance list verbatim from bundle.js
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

// Z2: FAQ list verbatim from bundle.js
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

// Comprehensive care items verbatim from bundle.js PS
const comprehensiveCareItems = [
  {
    title: "Comprehensive Physical Exams",
    desc: "Thorough assessments to keep your health on track and prevent future issues.",
    img: wS,
  },
  {
    title: "Vaccinations & Screenings",
    desc: "Stay protected with vaccinations and cancer screenings tailored to your needs.",
    img: bS,
  },
  {
    title: "Chronic Condition Management",
    desc: "Expert support for diabetes, high blood pressure, asthma, and other chronic conditions.",
    img: NS,
  },
  {
    title: "Women's & Men's Health",
    desc: "Specialized care like Pap smears, prostate exams, and other gender-specific services.",
    img: jS,
  },
  {
    title: "Mental Health Services",
    desc: "Counseling and medication management to support your emotional well-being.",
    img: CS,
  },
  {
    title: "Acute Illness Care",
    desc: "Quick relief from colds, flu, and other acute illnesses to help you feel your best.",
    img: SS,
  },
  {
    title: "Minor Procedures",
    desc: "Including joint injections, skin tag removal, ear irrigation and incision and drainage with care.",
    img: ES,
  },
  {
    title: "Nutrition Counseling & Weight Management",
    desc: "Personalized guidance to help you achieve your health and fitness goals.",
    img: kS,
  },
];

export const DawnPrimaryCarePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Load reputation review script as in bundle.js Wa
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
    <div className="font-sans text-foreground">
      {/* SECTION 1: HERO */}
      <section className="relative bg-white overflow-hidden pt-20 pb-0">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-2xl z-10 lg:pb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
                Your Health, Our Priority at{" "}
                <span className="text-primary">Dawn Primary Care</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Your trusted choice for reliable primary care in Marietta.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Same-Day
                    <br />
                    Appointments
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Walk-Ins
                    <br />
                    Welcome
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    We've Got
                    <br />
                    You Covered
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2138">Call 678-932-2138</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src={hS}
                  alt="Dawn Primary Care Team"
                  className="w-full h-full object-cover object-center lg:rounded-bl-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WELCOME TO DAWN PRIMARY CARE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
              Welcome to <span className="text-primary">Dawn Primary Care</span>
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg leading-relaxed">
              We're dedicated to helping individuals and families in Marietta lead healthier,
              happier lives. Our team provides personalized, comprehensive care with a
              compassionate touch, ensuring your well-being is always a priority.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: "#e6edef",
                borderWidth: "1px",
                borderColor: "rgb(0 73 130 / 32%)",
                borderStyle: "solid",
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={vS}
                  alt="Save Time"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground">Save Time</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With our efficient scheduling and same-day appointments, we're here to
                  minimize wait times and maximize your time.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: "#EEF5F1",
                borderWidth: "1px",
                borderColor: "rgb(0 128 74 / 32%)",
                borderStyle: "solid",
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={yS}
                  alt="Insurance Made Easy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Insurance Made Easy
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe healthcare should be accessible to all. That's why we work with
                  a variety of insurance providers to keep costs manageable.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: "#F6ECEB",
                borderWidth: "1px",
                borderColor: "rgb(132 35 0 / 32%)",
                borderStyle: "solid",
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={gS}
                  alt="Expert Care You Can Trust"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Expert Care You Can Trust
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our experienced physicians deliver the quality care you deserve, from
                  routine checkups to managing complex conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a href="tel:678-932-2138">Call 678-932-2138</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{
                background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
              }}
            >
              <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPREHENSIVE CARE FOR THE ENTIRE FAMILY */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            Comprehensive Care for the{" "}
            <span className="text-primary">Entire Family</span>
          </h2>
          <p className="text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
            At Dawn Primary Care, we believe healthcare should be accessible to all. That's why
            we offer affordable options and work closely with your insurance provider.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comprehensiveCareItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-sm border border-border flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 flex-shrink-0 bg-muted">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary-dark">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a href="tel:678-932-2138">Call 678-932-2138</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{
                background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
              }}
            >
              <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: DAWN PRIMARY CARE: WHERE YOUR HEALTH COMES FIRST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
                Dawn Primary Care: Where Your{" "}
                <span className="text-primary">Health Comes First</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dawn Primary Care is your trusted primary care clinic located in Marietta, GA
                30066. From routine wellness visits to managing chronic conditions or addressing
                urgent health concerns, our dedicated team is here to support you.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our staff includes experienced primary care physicians, nurse practitioners, and
                medical assistants, led by a skilled directing physician. We are committed to
                delivering personalized care with a focus on your well-being, ensuring you
                receive the attention and expertise you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2138">Call 678-932-2138</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden h-full max-h-[600px]">
                <img
                  src={pS}
                  alt="Dawn Primary Care Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INSURANCE PLANS (zx from bundle.js with showSubtitle: false) */}
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

      {/* SECTION 6: WHAT OUR PATIENTS ARE SAYING (Wa from bundle.js) */}
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

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (ov from bundle.js with showSubtitle: false) */}
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

      {/* SECTION 8: PERSONALIZED CARE, ON YOUR TIME */}
      <section className="bg-primary/5 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10 py-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Personalized Care,{" "}
                <span className="text-primary">On Your Time</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl">
                Your health is our priority—schedule an appointment today and take the first
                step toward feeling your best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2138">Call 678-932-2138</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{
                    background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
                  }}
                >
                  <a href="https://app.clientforge-ai.com/spatium-book" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                </Button>
              </div>
            </div>

            <div className="flex-1 relative h-64 md:h-[400px] w-full flex items-end justify-center md:justify-end">
              <img
                src={xS}
                alt="Doctor Smile"
                className="h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
