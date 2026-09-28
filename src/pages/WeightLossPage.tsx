import React, { useEffect, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";

export const WeightLossPage: React.FC = () => {
  useEffect(() => {
    document.title = "Weight Loss Program | Spatium Urgent Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Advanced, medically-supervised weight loss programs including Semaglutide and Tirzepatide injections. Start your journey to a healthier you today."
      );
    }

    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://reputationhub.site/reputation/assets/review-widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const [openPlanAccordion, setOpenPlanAccordion] = useState<string | null>(null);

  const handleBook = () => {
    window.location.href = "https://app.clientforge-ai.com/spatium-book";
  };

  const handleCall = () => {
    window.location.href = "tel:6789322121";
  };

  return (
    <main className="min-h-screen pt-20 font-sans">
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          backgroundImage: "linear-gradient(145deg, #fcfcfc 63%, rgb(0 128 74 / 17%) 100%)",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 mt-10">
                Take Control of <span className="text-primary">Your Weight</span> and Your Health
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Reclaim your confidence with a{" "}
                <span className="font-semibold text-foreground">
                  medically supervised weight management program
                </span>{" "}
                designed for individuals who need more than diet and exercise to achieve their goals. With expert care and personalized solutions, we help you reach{" "}
                <span className="font-semibold text-primary">real, sustainable results</span> using advanced treatments like{" "}
                <span className="font-bold text-primary">Semaglutide</span> and{" "}
                <span className="font-bold text-primary">Tirzepatide</span>—proven to support weight loss effectively and safely.
              </p>

              <ul className="space-y-4 mb-10 inline-block text-left">
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <img
                      src="/assets/Achieve%20Healthy%20Weight-4u4dcGg1.png"
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  Achieve Healthy Weight
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <img
                      src="/assets/Personalized%20Support-CE0Lp_hJ.png"
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  Get Personalized Support
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <img
                      src="/assets/Build%20Lasting%20Results-Bu4K0prv.png"
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  Build Lasting Results
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleBook}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  Start Your Journey Today
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCall}
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Call 678-932-2121
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/weight-loss-banner-BwmXAC58.png"
                alt="Weight Loss Program"
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR WEIGHT LOSS PLANS */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              AFFORDABLE AND PROVEN WEIGHT LOSS TREATMENTS
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Weight Loss Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Semaglutide */}
            <div
              className="border shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#EEF5F1",
                borderColor: "rgb(0 128 74 / 32%)",
                borderWidth: "1px",
              }}
            >
              <div className="p-10 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Semaglutide Injections for Weight Loss
                </h3>
                <div className="inline-block bg-white text-primary-dark px-6 py-2 rounded-full mb-8 font-semibold shadow-xs border border-border/10">
                  With a First-Time Offer <span className="text-destructive font-bold">$199</span>
                </div>
                <div className="mb-8 flex justify-center">
                  <img
                    src="/assets/Semaglutide1-STO3XIi2.png"
                    alt="Semaglutide"
                    className="h-48 object-contain"
                  />
                </div>
                <div className="text-left space-y-4">
                  <div className="border-t border-border pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenPlanAccordion(
                          openPlanAccordion === "semaglutide" ? null : "semaglutide"
                        )
                      }
                      className="w-full text-muted-foreground font-bold text-sm flex items-center justify-between uppercase tracking-wide mb-4 bg-white px-5 py-[10px] rounded-[10px] cursor-pointer"
                    >
                      <span>How It Works</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openPlanAccordion === "semaglutide" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openPlanAccordion === "semaglutide" && (
                      <div className="mt-2">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                          Slows the process of gastric emptying, delaying the movement of food from the stomach to the small intestine. Helps to reduce overall feelings of hunger and appetite.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>FDA-approved for weight loss</span>
                          </li>
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Delays gastric emptying to reduce hunger</span>
                          </li>
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Supports greater fat reduction</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tirzepatide */}
            <div
              className="border shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#e6edef",
                borderColor: "rgb(0 61 127 / 32%)",
                borderWidth: "1px",
              }}
            >
              <div className="p-10 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tirzepatide Injections for Weight Loss
                </h3>
                <div className="inline-block bg-white text-primary-dark px-6 py-2 rounded-full mb-8 font-semibold shadow-xs border border-border/10">
                  With a First-Time Offer <span className="text-destructive font-bold">$299</span>
                </div>
                <div className="mb-8 flex justify-center">
                  <img
                    src="/assets/Tirzepatide1-DGrG7u5x.png"
                    alt="Tirzepatide"
                    className="h-48 object-contain"
                  />
                </div>
                <div className="text-left space-y-4">
                  <div className="border-t border-border pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenPlanAccordion(
                          openPlanAccordion === "tirzepatide" ? null : "tirzepatide"
                        )
                      }
                      className="w-full text-muted-foreground font-bold text-sm flex items-center justify-between uppercase tracking-wide mb-4 bg-white px-5 py-[10px] rounded-[10px] cursor-pointer"
                    >
                      <span>How It Works</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openPlanAccordion === "tirzepatide" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openPlanAccordion === "tirzepatide" && (
                      <div className="mt-2">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                          A dual-action medication that slows the process of gastric emptying and works on two hormones (GIP and GLP-1) to regulate appetite and blood sugar.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>FDA-approved for weight loss</span>
                          </li>
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Delays gastric emptying to reduce hunger</span>
                          </li>
                          <li className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Supports greater fat reduction</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              onClick={handleCall}
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Call 678-932-2121
            </Button>
            <Button
              onClick={handleBook}
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* 3. REVOLUTIONARY WEIGHT LOSS PROGRAM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                REVOLUTIONARY WEIGHT LOSS PROGRAM
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                Your Path to Better Health <span className="text-primary">Starts Here</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                For many, achieving and maintaining a healthy weight can be a challenging journey. Our medical weight loss program addresses these challenges by offering solutions for individuals whose needs go beyond traditional diet and exercise. Using{" "}
                <span className="font-bold text-foreground">
                  FDA-approved medications like Semaglutide and Tirzepatide
                </span>
                , combined with expert guidance, we provide a safe and effective path to lasting results.
              </p>
              <div className="flex justify-start">
                <Button
                  onClick={handleBook}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR PROGRAM? */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Our <span className="text-primary">Program?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div
              className="border shadow-xs overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#e6edef",
                borderColor: "rgb(0 73 130 / 32%)",
                borderWidth: "1px",
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="/assets/Medical%20Expertise-8gyf6dSr.jpg"
                  alt="Medical Expertise"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Medical Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center text-sm">
                  Our program is led by experienced healthcare professionals who specialize in weight management. We focus on safe,{" "}
                  <span className="font-semibold text-foreground">science-backed treatments</span>{" "}
                  like Semaglutide and Tirzepatide to help you achieve meaningful progress.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="border shadow-xs overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#EEF5F1",
                borderColor: "rgb(0 128 74 / 32%)",
                borderWidth: "1px",
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="/assets/Personalized%20Care-B2mrWlV3.webp"
                  alt="Personalized Care"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Personalized Care
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center text-sm">
                  Every individual's journey is unique. We'll create a tailored plan that meets your specific health needs, lifestyle, and goals.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="border shadow-xs overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#F6ECEB",
                borderColor: "rgb(132 35 0 / 32%)",
                borderWidth: "1px",
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="/assets/Sustainable%20Results-CJd11f69.png"
                  alt="Sustainable Results"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Sustainable Results
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center text-sm">
                  By combining medical treatments with practical guidance, we aim to provide long-term solutions for weight management and overall wellness.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
            <Button
              variant="outline"
              onClick={handleCall}
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Call 678-932-2121
            </Button>
            <Button
              onClick={handleBook}
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SIMPLE STEPS TO LASTING CHANGE / HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            SIMPLE STEPS TO LASTING CHANGE
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20">How It Works</h2>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-6 left-[15%] right-[15%] h-px border-t-2 border-dashed border-primary/20 hidden md:block z-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div
                  className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-8 shadow-lg relative z-10"
                  style={{ lineHeight: "2.90rem" }}
                >
                  01.
                </div>
                <div className="border border-primary/10 bg-[#f0f7f4] rounded-2xl p-8 h-full w-full hover:shadow-md transition-all duration-300 text-left">
                  <div className="mb-6">
                    <img
                      src="/assets/doctor-female-svgrepo-com-copy-D1wVbB3V.png"
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Initial Consultation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Meet with our medical team to evaluate your health and discuss your weight loss goals.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div
                  className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-8 shadow-lg relative z-10"
                  style={{ lineHeight: "2.90rem" }}
                >
                  02.
                </div>
                <div className="border border-primary/10 bg-[#f0f7f4] rounded-2xl p-8 h-full w-full hover:shadow-md transition-all duration-300 text-left">
                  <div className="mb-6">
                    <img
                      src="/assets/medical-result-svgrepo-com-copy-2-BljgBG0A.png"
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Tailored Treatment Plan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Based on your health profile, we will design a program that may include{" "}
                    <span className="font-semibold text-foreground">Semaglutide</span> or{" "}
                    <span className="font-semibold text-foreground">Tirzepatide</span> along with recommendations to complement your lifestyle.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div
                  className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-8 shadow-lg relative z-10"
                  style={{ lineHeight: "2.90rem" }}
                >
                  03.
                </div>
                <div className="border border-primary/10 bg-[#f0f7f4] rounded-2xl p-8 h-full w-full hover:shadow-md transition-all duration-300 text-left">
                  <div className="mb-6">
                    <img
                      src="/assets/talk-bubbles-outline-badged-svgrepo-com-copy-CkwVpHH5.png"
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Ongoing Support and Monitoring
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We're committed to your success. Our team will monitor your progress and adjust your plan as needed to ensure the best results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-20">
            <Button
              variant="outline"
              onClick={handleCall}
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Call 678-932-2121
            </Button>
            <Button
              onClick={handleBook}
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* 6. WHEN DIET AND EXERCISE AREN'T ENOUGH */}
      <section
        className="py-20"
        style={{
          backgroundImage: "linear-gradient(145deg, #fcfcfc 63%, rgb(0 128 74 / 17%) 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                When Diet and Exercise <span className="text-primary">Aren't Enough</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Some individuals struggle to achieve weight loss through traditional methods alone due to various factors such as:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Hormonal imbalances",
                  "Metabolic conditions",
                  "Genetic predispositions",
                  "Chronic health issues",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-foreground font-medium">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleBook}
                size="lg"
                className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
              >
                Get Started
              </Button>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden mb-6 shadow-md">
                <img
                  src="/assets/Untitled-design-7-DJ3QTy8x.png"
                  alt="Weight management support"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground text-center italic leading-relaxed text-sm">
                Our program is designed to help in these situations, offering{" "}
                <span className="text-foreground font-semibold">FDA-approved medical solutions</span>{" "}
                that address these challenges while promoting overall health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT REVIEWS WIDGET (Wa) */}
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
              style={{ minWidth: "100%", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* 8. READY TO START YOUR JOURNEY? */}
      <section className="bg-primary/5 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="flex-1 text-center md:text-left z-10 py-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Ready to Start <span className="text-primary">Your Journey?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl">
                Take the first step toward better health and lasting weight management. Schedule your consultation today to learn how our medically supervised weight loss program can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  variant="outline"
                  onClick={handleCall}
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Call 678-932-2121
                </Button>
                <Button
                  onClick={handleBook}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="flex-1 relative h-64 md:h-[400px] w-full flex items-end justify-center md:justify-end">
              <img
                src="/assets/Untitled-design-8-CK3lGkh_.png"
                alt="Ready to start journey"
                className="w-auto object-contain object-bottom"
                style={{ height: "120%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
