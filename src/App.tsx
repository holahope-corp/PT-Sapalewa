import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WorkflowSection } from './components/WorkflowSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [calculatorServiceId, setCalculatorServiceId] = useState<string>('web-design');

  const handleSelectServiceForCalculator = (serviceId: string) => {
    setCalculatorServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f172a] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-900">
      {/* Top 3-zone Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero with dominant photography and real client trust strip */}
        <Hero />

        {/* Company Profile, Vision, Parent Corp & Values */}
        <AboutSection />

        {/* 4 Core Actual Services from Source */}
        <ServicesSection onSelectServiceForCalculator={handleSelectServiceForCalculator} />

        {/* Verified Client Portfolios & Case Studies */}
        <PortfolioSection />

        {/* Interactive Quote & WhatsApp Generator Tool */}
        <ProjectEstimator key={calculatorServiceId} initialServiceId={calculatorServiceId} />

        {/* 4-Step Process & Competitive Strengths */}
        <WorkflowSection />

        {/* Educational Articles & Insights */}
        <ArticlesSection />

        {/* Verified Contact Channels & Functional Form */}
        <ContactSection />
      </main>

      {/* Corporate Footer with domain & legal details */}
      <Footer />

      {/* Discreet floating WhatsApp action */}
      <FloatingWhatsApp />
    </div>
  );
}
