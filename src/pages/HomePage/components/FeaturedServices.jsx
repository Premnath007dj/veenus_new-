import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FeaturedServices = () => {
  const services = [
    {
      icon: 'Settings',
      title: 'Custom Electric Motor Design',
      description: 'Our core offering. We provide complete electric motor design services, from concept to a fully validated prototype.',
      link: '/services',
    },
    {
      icon: 'Cpu',
      title: 'PMSM Motor Simulation Consulting',
      description: 'Using FEMM analysis, we simulate magnetic flux, back EMF, and thermal behavior to optimize your PMSM or synchronous reluctance motor design.',
      link: '/services',
    },
    {
      icon: 'Code',
      title: 'Web, App & Software Solutions',
      description: 'We create custom websites, mobile apps, and embedded software to complement your hardware, providing a complete product experience.',
      link: '/services',
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Themed background: subtle pattern + soft gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(#2979FF 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-soft-cool-gray via-transparent to-soft-cool-gray" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-deep-charcoal text-3xl font-bold mb-4">Featured Services</h2>
          <div className="mx-auto h-0.5 w-16 bg-energetic-green rounded-full mb-6" />
          <p className="text-deep-charcoal text-lg max-w-2xl mx-auto">Our core electric motor design services are tailored to meet your specific needs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative card p-8 h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:rotate-[0.25deg] animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-energetic-green via-electric-blue to-energetic-green opacity-60 group-hover:opacity-100 transition-opacity" />
                {/* subtle corner glow */}
                <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-electric-blue/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-energetic-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-energetic-green/10 mb-6 group-hover:bg-energetic-green/15 transition-colors duration-300 ring-1 ring-primary-green/10">
                  <Icon name={service.icon} size={28} className="text-energetic-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-deep-charcoal mb-4 group-hover:text-energetic-green transition-colors">{service.title}</h3>
                <p className="muted mb-6 leading-relaxed">{service.description}</p>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-energetic-green font-medium hover:text-electric-blue transition-colors duration-300"
                >
                  Learn More 
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* gradient outline on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent group-hover:border-energetic-green/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;