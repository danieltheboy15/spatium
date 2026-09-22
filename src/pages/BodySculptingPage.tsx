import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

export const BodySculptingPage: React.FC = () => {
  useEffect(() => {
    document.title = "EMSCULPT NEO Body Sculpting | Spatium Wellness - Non-Surgical Fat Reduction";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Transform your body with EMSCULPT NEO at Spatium Wellness. FDA-cleared treatment that burns fat and builds muscle in 30 minutes. No surgery, no downtime. Book consultation today."
      );
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scienceCards = [
    {
      title: "RF Heating",
      description: "Warms muscles and prepares fat cells for elimination",
      icon: "🔥",
    },
    {
      title: "HIFEM+ Technology",
      description: "Triggers supramaximal muscle contractions – equivalent to 20,000 crunches or squats in one session",
      icon: "⚡",
    },
    {
      title: "Fat Cell Destruction",
      description: "Fat cells are permanently destroyed through apoptosis",
      icon: "🎯",
    },
    {
      title: "Muscle Remodeling",
      description: "Muscle fibers undergo intense remodeling and growth",
      icon: "💪",
    },
  ];

  const statCards = [
    {
      percentage: "30%",
      title: "Fat Reduction",
      description: "Permanently eliminate stubborn fat cells through targeted radiofrequency heating and metabolic stress.",
    },
    {
      percentage: "25%",
      title: "Muscle Growth",
      description: "Build lean muscle mass through supramaximal contractions that exceed what's possible with voluntary exercise.",
    },
    {
      percentage: "19%",
      title: "Reduction in Abdominal Separation",
      description: "Ideal for addressing diastasis recti and core weakness, particularly beneficial for postpartum recovery.",
    },
    {
      percentage: "5.9cm",
      title: "Average Waist Reduction",
      description: "See measurable changes in your body contours and clothing fit.",
    },
  ];

  const functionalBenefits = [
    {
      title: "Core Strength & Stability",
      items: [
        "Strengthen deep abdominal muscles",
        "Improve posture and reduce back pain",
        "Enhance athletic performance",
        "Support spinal stability",
      ],
      icon: "🏋️",
      color: "primary",
    },
    {
      title: "Metabolic Health",
      items: [
        "Increase muscle mass for improved metabolism",
        "Enhanced insulin sensitivity",
        "Better glucose utilization",
        "Long-term metabolic improvements",
      ],
      icon: "⚡",
      color: "primary",
    },
    {
      title: "Postpartum Recovery",
      items: [
        "Address diastasis recti safely and effectively",
        "Rebuild core strength after pregnancy",
        "Restore confidence in your body",
        "Non-surgical solution for separated abdominal muscles",
      ],
      icon: "🤱",
      color: "primary",
    },
    {
      title: "Active Aging",
      items: [
        "Combat age-related muscle loss (sarcopenia)",
        "Maintain functional strength and mobility",
        "Improve bone density through muscle stimulation",
        "Enhance quality of life",
      ],
      icon: "🏃‍♀️",
      color: "primary",
    },
  ];

  const treatmentAreas = [
    {
      title: "Abdomen",
      description:
        "Transform your midsection with targeted fat reduction and core strengthening. Perfect for eliminating stubborn belly fat while building a stronger, more defined core.",
      icon: "🏋️",
    },
    {
      title: "Buttocks",
      description:
        "Lift, tone, and sculpt your glutes for a more youthful, attractive silhouette. Build muscle mass for enhanced curves and improved lower body strength.",
      icon: "🍑",
    },
    {
      title: "Arms",
      description:
        'Eliminate "bat wings" and build lean muscle definition in your biceps and triceps for toned, confident arms.',
      icon: "💪",
    },
    {
      title: "Thighs",
      description:
        "Target inner and outer thighs to reduce fat pockets while building lean muscle for stronger, more sculpted legs.",
      icon: "🦵",
    },
    {
      title: "Calves",
      description:
        "Build definition and strength in your lower legs for improved athletic performance and aesthetic appeal.",
      icon: "🏃",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Our expert practitioners assess your goals, medical history, and create a personalized treatment plan tailored to your unique needs.",
    },
    {
      step: "02",
      title: "Treatment Sessions",
      description:
        "30-minute sessions in a comfortable, relaxing environment. Lie back and let the technology do the work with no pain, downtime, or anesthesia required.",
    },
    {
      step: "03",
      title: "Recommended Protocol",
      description:
        "Series of 4 treatments spaced 5-10 days apart with maintenance sessions every 3-6 months. Results continue improving for 2-4 weeks after final treatment.",
    },
    {
      step: "04",
      title: "Recovery & Results",
      description:
        "Return to normal activities immediately with some mild muscle soreness. Initial results visible after 2-4 treatments, optimal results achieved 2-4 weeks post-treatment.",
    },
  ];

  const faqs = [
    {
      question: "Is EMSCULPT NEO safe?",
      answer:
        "Yes, EMSCULPT NEO is FDA-cleared and has undergone extensive clinical testing. The treatment has been proven safe and effective in multiple peer-reviewed studies.",
    },
    {
      question: "Who is a good candidate?",
      answer:
        "Ideal candidates are within 30 pounds of their target weight and seeking muscle building and fat reduction. Perfect for fitness enthusiasts, busy professionals, and anyone looking to enhance their physique.",
    },
    {
      question: "Does it hurt?",
      answer:
        "Most clients find the treatment comfortable, describing it as intense muscle contractions. There's no pain, needles, or anesthesia required.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Initial improvements may be visible after 2-4 treatments, with optimal results appearing 2-4 weeks after your final session. Results continue to improve for several weeks post-treatment.",
    },
    {
      question: "How long do results last?",
      answer:
        "With proper diet and exercise, results can last 6-12 months or longer. Maintenance treatments help preserve and enhance your results.",
    },
  ];

  return (
    <main className="min-h-screen font-sans">
      {/* 1. HERO SECTION (rS) */}
      <section className="relative min-h-screen bg-gradient-wellness overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-image-COybVhCy.jpg"
            alt="Professional wellness treatment environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Transform
                <span className="block">Your Body</span>
                <span className="block text-primary">Without Surgery</span>
              </h1>
              <div className="text-xl md:text-2xl mb-8">
                <p className="mb-2 text-primary font-semibold">EMSCULPT NEO at Spatium Wellness</p>
                <p className="text-lg text-muted-foreground">The Future of Body Sculpting Has Arrived</p>
              </div>
              <p className="text-lg md:text-xl mb-10 leading-relaxed text-muted-foreground">
                Experience the revolutionary EMSCULPT NEO – the only FDA-cleared treatment that simultaneously burns fat and builds muscle in just 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  <a href="https://www.clockwisemd.com/visit/15645">
                    Book Your Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2121">
                    Call (678) 932-2121
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/new-emsculpt-collage-BqFfRWRp.jpg"
                  alt="EMSCULPT NEO treatment results showing fitness transformation, body measurements, and professional treatment device"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -left-3 bg-destructive text-white px-4 py-2 rounded-full font-bold text-xs z-10 border-2 border-white shadow-md">
                FDA Cleared
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-foreground px-4 py-2 rounded-lg font-medium text-sm border border-primary/10 shadow-lg">
                ✨ 25% Muscle Growth*
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS EMSCULPT NEO? (oS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is
              <span className="block text-primary">EMSCULPT NEO?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EMSCULPT NEO represents the pinnacle of non-invasive body contouring technology. This groundbreaking device combines High-Intensity Focused Electromagnetic (HIFEM+) energy with synchronized Radiofrequency (RF) to deliver unprecedented results that surpass what any single treatment can achieve.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              The Science Behind the <span className="text-primary">Transformation</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scienceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="text-center shadow-elegant hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-white rounded-2xl p-8 border border-border"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICALLY PROVEN RESULTS (sS) */}
      <section className="py-20 bg-gradient-wellness">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Clinically Proven Results
              <span className="block text-primary">You Can Trust</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Backed by over 30 peer-reviewed studies and 7 clinical trials specifically on EMSCULPT NEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statCards.map((stat, idx) => (
              <div
                key={idx}
                className="text-center shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl p-8 border border-border"
              >
                <div className="text-5xl md:text-6xl font-bold text-destructive mb-4">
                  {stat.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{stat.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FUNCTIONAL WELLNESS BENEFITS (iS) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Beyond Aesthetics:
              <span className="block text-primary">Functional Wellness Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EMSCULPT NEO isn't just about looking better – it's about feeling stronger and more confident in your body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {functionalBenefits.map((item, idx) => (
              <div
                key={idx}
                className="shadow-elegant hover:shadow-primary transition-all duration-300 group bg-white rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed text-sm">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TREATMENT AREAS WE TARGET (aS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Treatment Areas
              <span className="block text-primary">We Target</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              EMSCULPT NEO can transform multiple areas of your body, targeting stubborn fat while building lean muscle mass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatmentAreas.map((area, idx) => (
              <div
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-white rounded-2xl p-8 text-center"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT TO EXPECT: YOUR EMSCULPT NEO JOURNEY (cS) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What to Expect:
              <span className="block text-primary">Your EMSCULPT NEO Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="shadow-elegant hover:shadow-primary transition-all duration-300 bg-white rounded-2xl p-6 flex items-start space-x-4 border border-border"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src="/assets/process-image-CN0u5Ts3.png"
                alt="Fitness transformation results showing couple celebrating progress, body measurements, and EMSCULPT treatment device"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (uS) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about EMSCULPT NEO treatment
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-elegant border-2 hover:border-primary/20 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-lg font-semibold text-left text-foreground hover:text-primary transition-colors flex justify-between items-center gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. READY TO TRANSFORM YOUR BODY? CTA (dS) */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xs shadow-elegant rounded-3xl border border-border p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform
              <span className="block text-primary">Your Body?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of body contouring at Spatium Wellness. Our EMSCULPT NEO treatments offer the perfect combination of fat reduction, muscle building, and functional wellness benefits – all without surgery, downtime, or discomfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
              >
                <a href="https://www.clockwisemd.com/visit/15645">
                  Book Your Consultation Today
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <a href="tel:678-932-2121">
                  Call (678) 932-2121
                </a>
              </Button>
            </div>
            <p className="text-lg font-semibold text-foreground mb-4">
              Discover how EMSCULPT NEO can help you achieve the strong, sculpted body you've always wanted
            </p>
            <p className="text-muted-foreground text-sm">
              Contact Spatium Wellness to schedule your personalized EMSCULPT NEO consultation and take the first step toward your body transformation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
