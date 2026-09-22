import React, { useEffect } from "react";

export const FinancingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Financing Options | Spatium Wellness - Flexible Payment Plans";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore flexible financing options at Spatium Wellness. We offer accessible payment plans through Cherry for our urgent care, primary care, and wellness services in Marietta."
      );
    }

    const script = document.createElement("script");
    script.innerHTML = `
      (function (w, d, s, o, f) {
        w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments); };
        var js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.id = o; js.src = f; js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "_hw", 'https://files.withcherry.com/widgets/widget.js');
      
      if (window._hw) {
        window._hw(
          "init",
          {
            debug: false,
            variables: {
              slug: 'spatium-urgent-care',
              name: "Spatium Urgent Care",
            },
            styles: {
              primaryColor: '#10804a',
              secondaryColor: '#10804a10',
              fontFamily: 'Open Sans',
            },
          },
          ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
        );
      }
    `;
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById("all");
      if (container) {
        container.innerHTML = "";
      }
      try {
        document.body.removeChild(script);
      } catch (err) {
        // ignore if already removed
      }
    };
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div id="all" className="min-h-[500px]" />
      </div>
    </main>
  );
};
