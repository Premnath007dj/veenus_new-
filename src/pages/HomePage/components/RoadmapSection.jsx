import React from 'react';
import Roadmap from '../../../components/ui/Roadmap';

const RoadmapSection = () => {
  const workflow = [
    { icon: 'Clipboard', title: 'Consultation', description: 'We start by understanding your technical and business requirements, acting as an extension of your team.' },
    { icon: 'DraftingCompass', title: 'Design & Simulation', description: 'Leveraging advanced electromagnetic simulations and FEMM analysis, we design and optimize your motor.' },
    { icon: 'Component', title: 'Prototyping', description: 'We engage in rapid prototype electric motor development, turning validated designs into functional hardware.' },
    { icon: 'TestTube2', title: 'Validation', description: 'Rigorous testing, including back EMF, thermal, and NVH analysis, ensures performance and reliability.' },
    { icon: 'PackageCheck', title: 'Production & Delivery', description: 'Seamless handover for production, with ongoing support to ensure success.' },
  ];

  return (
    <section className="section bg-soft-cool-gray relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
        background: 'linear-gradient(90deg, rgba(0, 200, 83, 0.12) 1px, transparent 1px), linear-gradient(rgba(0, 200, 83, 0.12) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-deep-charcoal text-3xl font-bold mb-3">Our Collaborative Process</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-energetic-green to-electric-blue rounded-full mb-4" />
          <p className="text-deep-charcoal text-lg max-w-3xl mx-auto">Our process is designed for seamless collaboration. We partner with you from concept to validation, ensuring the final electric motor design services we deliver meet your exact specifications.</p>
        </div>
        <Roadmap steps={workflow} />
      </div>
    </section>
  );
};

export default RoadmapSection;