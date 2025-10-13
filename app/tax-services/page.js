import React from 'react';
import TaxHeader from '@/components/TaxHeader';
import TaxServiceHero from '@/components/TaxServiceHero';
import GSTServices from '@/components/GSTServices';
import IncomeTaxServices from '@/components/IncomeTaxServices';
import TaxFeatures from '@/components/TaxFeatures';
import TaxTestimonials from '@/components/TaxTestimonials';
import TaxConsultation from '@/components/TaxConsultation';
import Footer from '@/components/Footer';

export default function TaxServicePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <TaxHeader />
      
      {/* Hero Section */}
      <TaxServiceHero />
      
      {/* GST Services Section */}
      <GSTServices />
      
      {/* Income Tax Services Section */}
      <IncomeTaxServices />
      
      {/* Features & Benefits Section */}
      <TaxFeatures />
      
      {/* Testimonials Section */}
      <TaxTestimonials />
      
      {/* Consultation & Contact Section */}
      <TaxConsultation />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}