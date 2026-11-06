/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEngineer } from './components/AboutEngineer';
import { ServicesSection } from './components/ServicesSection';
import { BlueprintViewer } from './components/BlueprintViewer';
import { ElevationViewer } from './components/ElevationViewer';
import { InteriorsSection } from './components/InteriorsSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FreeBlueprintModal } from './components/FreeBlueprintModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<string>('');
  const [estimatorSpecs, setEstimatorSpecs] = useState<{
    area: number;
    packageType: string;
    totalEst: number;
  } | null>(null);

  const handleOpenConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setSelectedServiceForEnquiry(serviceTitle);
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForEnquiry = (projectName: string) => {
    setSelectedServiceForEnquiry(`Project Enquiry: ${projectName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillEnquiryFromEstimator = (specs: {
    area: number;
    packageType: string;
    totalEst: number;
  }) => {
    setEstimatorSpecs(specs);
    setSelectedServiceForEnquiry(`Construction Enquiry (${specs.packageType})`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-neutral-900 flex flex-col selection:bg-[#C5A869]/30 selection:text-neutral-950">
      {/* Top Navbar */}
      <Navbar onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Hero Section */}
      <Hero onOpenConsultationModal={handleOpenConsultationModal} />

      {/* About Chief Engineer Section */}
      <AboutEngineer onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Services Section (All 11 Services) */}
      <ServicesSection
        onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        onOpenConsultationModal={handleOpenConsultationModal}
      />

      {/* 2D Blueprints & CAD Technical Drafting Showcase */}
      <BlueprintViewer onOpenConsultationModal={handleOpenConsultationModal} />

      {/* 3D Modern Elevations & Visualizations (with Day/Night toggle) */}
      <ElevationViewer onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Interior Design & Complete Turnkey Execution */}
      <InteriorsSection
        onOpenConsultationModal={handleOpenConsultationModal}
        onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
      />

      {/* Featured Projects Gallery */}
      <ProjectsGallery onSelectProjectForEnquiry={handleSelectProjectForEnquiry} />

      {/* Interactive Construction Cost Estimator */}
      <CostEstimator onPreFillEnquiry={handlePreFillEnquiryFromEstimator} />

      {/* Why Choose SMB BUILDERS */}
      <WhyChooseUs onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Contact Us & Working Enquiry Form */}
      <ContactSection
        preFilledService={selectedServiceForEnquiry}
        preFilledSpecs={estimatorSpecs}
      />

      {/* Footer */}
      <Footer onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Floating Quick Action CTA Buttons (WhatsApp, Direct Call, Blueprint) */}
      <FloatingActions onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Dedicated Free Blueprint Request Modal */}
      <FreeBlueprintModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}
