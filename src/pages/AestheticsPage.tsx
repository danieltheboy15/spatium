import React, { useEffect, useState } from "react";
import { User, ShieldCheck, Heart, Check, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";

export const AestheticsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Aesthetics & Skincare Services | Spatium Urgent Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experience professional aesthetics and skincare services at Spatium Sculpt Studio. From facials to chemical peels and advanced skin treatments."
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

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    {
      title: "Facials and Skin Services",
      image: "/assets/Advanced%20Skin%20Correction-Cho9v0Yw.png",
      description: "Customized treatments to cleanse, exfoliate, and restore your skin's natural radiance.",
      services: [
        {
          name: "Signature Glow Facial",
          desc: "Customized facial to cleanse, exfoliate and restore radiance for healthy, glowing skin.",
        },
        {
          name: "Dermaplaning Facial",
          desc: "Exfoliates dead skin and peach fuzz for a smooth glowing complexion.",
        },
        {
          name: "Radio Frequency Facial",
          desc: "For optimal result book 6 sections 1 week apart.",
        },
      ],
    },
    {
      title: "Advanced Skin Treatment",
      image: "/assets/microneedling-treatment-BjT3_eXI.png",
      description: "Cutting-edge treatments for deeper skin correction and rejuvenation.",
      services: [
        {
          name: "Microneedling (Collagen Induction Therapy)",
          desc: "Boosts collagen and elastin production to improve acne scars, fine lines, wrinkles, texture, and hyperpigmentation.",
        },
        {
          name: "Microneedling Package (3 Sessions)",
          desc: "A corrective treatment series designed to progressively improve skin tone, texture, and firmness. Ideal for acne scarring and uneven skin tone.",
        },
        {
          name: "Microneedling Package (6 Sessions)",
          desc: "An advanced transformation series for deeper skin correction, collagen rebuilding, and long-term results. Recommended for moderate to severe skin concerns.",
        },
        {
          name: "Micro Hydrodermabrasion",
          desc: "Exfoliation and serum infusion to smooth skin texture, refine pores, and restore hydration.",
        },
        {
          name: "Micro needling + PRP",
          desc: "Advanced regenerative treatment that combines collagen induction therapy with your body's own growth factors to visibly improve skin texture, tone and firmness. Comes with post care kit.",
        },
        {
          name: "Scalp Micro needling + PRP",
          desc: "Stimulates follicles, boosts circulation, and support natural hair growth.",
        },
      ],
    },
    {
      title: "Chemical Peels",
      image: "/assets/Chemical%20Peels-010Ug2Hr.png",
      description: "Professional-grade peels to address specific skin concerns and reveal fresher skin.",
      services: [
        {
          name: "Corrective Chemical Peel",
          desc: "Targets acne, pigmentation, and aging.",
        },
        {
          name: "Advanced Chemical Peel",
          desc: "Intensive peel for deeper skin correction.",
        },
        {
          name: "Chemical Peel Package (3 Sessions)",
          desc: "Series of three peels for optimal results.",
        },
      ],
    },
    {
      title: "Skin Tag & DPN service",
      image: "/assets/Skin%20Tag%20_%20DPN%20Services-CiahM322.png",
      description: "Safe and effective removal of skin irregularities.",
      services: [
        {
          name: "Skin Tag Removal (1-3 Tags)",
          desc: "Removal of unwanted skin tags.",
        },
        {
          name: "Skin Tag Removal (Full Face + Neck)",
          desc: "Removal of unwanted skin tags.",
        },
        {
          name: "DPN Removal",
          desc: "Effective removal of dark skin growths.",
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "Is there downtime after a chemical peel?",
      answer:
        "It depends on the type of peel. Express peels have little to no downtime, while Advanced peels may cause some redness and peeling for 3-7 days as your skin rejuvenates.",
    },
    {
      question: "How many microneedling sessions will I need?",
      answer:
        "While some results are visible after one session, we typically recommend a series of 3-6 treatments spaced 4-6 weeks apart for optimal correction of acne scars, texture, and fine lines.",
    },
    {
      question: "Is microneedling painful?",
      answer:
        "We use a high-quality topical numbing cream before the procedure to ensure your comfort. Most patients describe the sensation as a light vibration or sandpaper-like feeling.",
    },
    {
      question: "What is DPN and can it be safely removed?",
      answer:
        "DPN (Dermatosis Papulosa Nigra) are small, dark bumps that commonly appear on the face and neck. Our specialized treatment safely removes these irregularities with minimal risk of scarring.",
    },
    {
      question: "How should I prepare for my first facial?",
      answer:
        "Please arrive with a clean face and bring a list of your current skincare products. We recommend avoiding intense sun exposure or active ingredients like retinol for 3 days prior.",
    },
  ];

  return (
    <div className="font-sans text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden pt-20 pb-0">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-2xl z-10 lg:pb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
                Unlock Your Skin's <span className="text-primary">Natural Radiance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Experience premium skincare treatments tailored to your unique needs in a relaxing and professional environment.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Expert<br />Estheticians
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Professional<br />Grade Care
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Personalized<br />Treatments
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  <a
                    href="https://spatiumurgentcareandwellness.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2121">
                    Call 678-932-2121
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="grid grid-cols-5 gap-4 h-[500px] md:h-[600px]">
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="flex-1 rounded-2xl overflow-hidden bg-muted relative shadow-lg">
                    <img
                      src="/assets/austetic%20img%201-7xmuiirC.jpg"
                      alt="Aesthetics treatment - smiling woman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden bg-muted relative shadow-lg">
                    <img
                      src="/assets/aestetic%20image%203-D12JuGlI.png"
                      alt="Aesthetics treatment - detailed view"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-3 relative rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="https://storage.googleapis.com/msgsndr/T6mQ3SDItIhA4nf15ws0/media/699367af3b3cc9e8b6f46b56.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg font-medium text-sm border border-primary/10 shadow-lg">
                    ✨ Glowing Skin Starts Here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SKINCARE SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
              Comprehensive <span className="text-primary">Skincare Solutions</span>
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg leading-relaxed">
              Our service menu is designed to address everything from routine maintenance to advanced skin concerns. We combine clinical expertise with a luxurious experience to help you achieve your skin goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group p-0 rounded-2xl bg-[#EEF5F1] border border-[rgb(0,128,74,0.1)] hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                {cat.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {cat.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="w-full font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                  >
                    <a
                      href="https://spatiumurgentcareandwellness.glossgenius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AESTHETICS MENU */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Aesthetics <span className="text-primary">Menu</span>
            </h2>
            <p className="text-muted-foreground mt-4">3595 Canton Rd, Marietta, GA</p>
            <p className="mt-4 text-base font-semibold text-primary bg-primary/10 inline-block px-6 py-3 rounded-full">
              A $50 booking fee is required to secure your appointment. This fee will be deducted from your total service cost.
            </p>
          </div>

          <div className="grid gap-12 max-w-5xl mx-auto">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-primary whitespace-nowrap">
                    {cat.title.toUpperCase()}
                  </h3>
                  <div className="h-px bg-primary/20 w-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {cat.services.map((srv, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-none shadow-sm hover:shadow-md transition-shadow bg-card rounded-lg border"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="font-bold text-lg text-foreground leading-tight">
                            {srv.name}
                          </h4>
                          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                            60 Mins
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white/50 p-6 rounded-xl border border-dashed border-primary/30 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Microneedling packages must be used within 6-12 months. Treatment plans are customized based on individual skin analysis.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURE VIDEO & ADVANCED SKIN CORRECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg">
                <video
                  src="https://storage.googleapis.com/msgsndr/T6mQ3SDItIhA4nf15ws0/media/69937638ceaa0503d8977c58.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
                Advanced <span className="text-primary">Skin Correction</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our advanced treatments like Microneedling and Chemical Peels are designed to deliver transformative results. Whether you're looking to reduce acne scars, even skin tone, or turn back the clock on aging, our team has the expertise to help.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Collagen Induction Therapy",
                  "Deep Pigmentation Correction",
                  "Texture & Pore Refinement",
                  "Safe Skin Tag Removal",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
                  style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
                >
                  <a
                    href="https://spatiumurgentcareandwellness.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href="tel:678-932-2121">
                    Call 678-932-2121
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT REVIEWS WIDGET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Patients <span className="block text-primary">Are Saying</span>
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

      {/* 6. AESTHETICS FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Aesthetics <span className="text-primary">FAQ</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg">
              Common questions about our treatments and what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg shadow-elegant border-2 hover:border-primary/20 transition-colors px-1"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-lg font-semibold text-left hover:text-primary transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed text-base border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-primary/5 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your <span className="text-primary">Skincare Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to achieve the skin you've always wanted? Schedule your consultation today and let our experts guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white shadow-primary"
              style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
            >
              <a
                href="https://spatiumurgentcareandwellness.glossgenius.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a href="tel:678-932-2121">
                Call 678-932-2121
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
