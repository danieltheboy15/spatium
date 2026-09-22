import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBanner } from "./components/TopBanner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { BodySculptingPage } from "./pages/BodySculptingPage";
import { AestheticsPage } from "./pages/AestheticsPage";
import { DawnPrimaryCarePage } from "./pages/DawnPrimaryCarePage";
import { WeightLossPage } from "./pages/WeightLossPage";
import { FinancingPage } from "./pages/FinancingPage";
import { CovidTestingPage } from "./pages/CovidTestingPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <TopBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/body-sculpting" element={<BodySculptingPage />} />
            <Route path="/aesthetics" element={<AestheticsPage />} />
            <Route path="/dawn-primary-care-service" element={<DawnPrimaryCarePage />} />
            <Route path="/weight-loss-program-spatium" element={<WeightLossPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/covid-19-testing" element={<CovidTestingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
