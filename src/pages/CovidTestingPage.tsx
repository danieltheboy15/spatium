import React, { useEffect, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";

export const CovidTestingPage: React.FC = () => {
  useEffect(() => {
    document.title = "COVID-19 Testing | Spatium Urgent Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "In-house COVID-19 testing at Spatium Urgent Care. Rapid Covid, strep throat, RSV, flu tests, pregnancy tests, X-ray, and EKG available."
      );
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you test for coronavirus?",
      answer: (
        <div className="space-y-4">
          <p>Spatium Urgent Care offers two types of COVID-19 testing:</p>
          <p className="font-semibold text-foreground">COVID-19 Virus Testing</p>
          <p>
            We offer both PCR and Rapid (antigen) COVID-19 virus testing services at Spatium Urgent Care. The diagnostic test for an active COVID-19 infection involves an anterior nasal swab, which is a method of collecting a sample of nasal secretions from the back of your nose.
          </p>
          <p>
            For a PCR test, when your test is complete your sample will be sent to a certified lab, where it will be analyzed for COVID-19. We will provide your result as soon as it is available. If your result is positive, we will contact you by phone to discuss it; if your result is negative, we will send you an email notification.
          </p>
        </div>
      ),
    },
    {
      question: "How long will it take to receive test results?",
      answer: (
        <div className="space-y-4">
          <p>
            COVID-19 PCR virus test results may take up to 7 business days to be returned to us from the lab. Rapid (antigen) test results are returned same-day. Due to the surge of COVID-19 cases at this time, test results may take longer than expected. We appreciate your patience and understanding, as the delays in test result turnaround time are directly impacted by the high volume of testing for both local and national labs. Please know we are working through alternatives to get results as quickly as possible for our patients during these challenging times. We are committed to providing our patients with their COVID-19 test results as quickly as possible.
          </p>
          <p>
            Spatium Urgent Care also offers COVID-19 antibody testing, which can detect certain proteins (IgM and IgG antibodies) that are produced by the body's immune system in response to a COVID-19 exposure. A positive test result may indicate a past or current COVID-19 infection, regardless of whether the infection produced noticeable symptoms.
          </p>
          <p>
            COVID-19 antibody testing involves a blood draw, which can be performed during an in-person visit to any of our urgent care center locations. No prior authorization or appointment is required.
          </p>
        </div>
      ),
    },
    {
      question: "What does a positive COVID-19 antibody test result mean?",
      answer:
        "The presence of COVID-19 antibodies could suggest immunity to the novel coronavirus. However, researchers have not yet determined whether a person who has recovered from COVID-19 is fully protected against future infections.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 font-sans">
      {/* 1. In-House Testing Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                In-House Testing
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Spatium Urgent Care stands ready to assist our local community. If you have flu-like symptoms, such as fever, body aches, a persistent cough, a sore throat, and/or shortness of breath, we can test you for the most common respiratory illnesses.
              </p>
              <p className="text-foreground font-semibold mb-4">Tests performed in house:</p>
              <ul className="space-y-3 text-muted-foreground mb-10">
                <li className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 shrink-0" size={20} />
                  <span>Rapid Covid, strep throat, RSV, and flu tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 shrink-0" size={20} />
                  <span>Pregnancy tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 shrink-0" size={20} />
                  <span>X-ray</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 shrink-0" size={20} />
                  <span>EKG</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 h-auto rounded-lg font-semibold text-white hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #007045 0%, #26a069 100%)" }}
              >
                <a href="https://www.clockwisemd.com/visit/15645">
                  Book Appointment
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/assets/covid-testing-Dl25epgp.webp"
                  alt="COVID-19 testing at Spatium Urgent Care"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Frequently Asked Questions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-background rounded-lg px-6 border border-border">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-5 text-left text-base font-semibold text-foreground flex items-center justify-between gap-4 cursor-pointer hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="text-muted-foreground leading-relaxed pb-6 text-sm border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
