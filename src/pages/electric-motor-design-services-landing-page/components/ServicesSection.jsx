import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 'engineering',
      title: 'Engineering Services',
      icon: 'Settings',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      services: [
        {
          name: 'Product Benchmarking',
          description: 'Methodical, three-step process delivering actionable insights for product enhancement and cost–performance optimization.',
          details: 'Our structured approach includes competitive analysis, performance metrics evaluation, and actionable recommendations for improvement.'
        },
        {
          name: 'Electromagnetic Simulation',
          description: 'Analyze electric machines with magnetic flux density plots and thermal analysis to validate and optimize designs early.',
          details: 'Advanced FEA simulations including magnetic field analysis, thermal modeling, and performance prediction for electric motors.'
        },
        {
          name: 'Product Design & Development',
          description: 'End-to-end motor development from RFQ to prototype delivery, integrating electromagnetic, mechanical, and thermal considerations.',
          details: 'Complete motor design lifecycle from concept to prototype, including mechanical design, electromagnetic optimization, and thermal management.'
        },
        {
          name: 'Technical Documentation',
          description: 'Thorough documentation including a design input sheet and a product development time plan.',
          details: 'Comprehensive technical documentation including design specifications, manufacturing guidelines, and validation procedures.'
        }
      ]
    },
    {
      id: 'software',
      title: 'Software Solutions',
      icon: 'Cpu',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
      services: [
        {
          name: 'Web & App Development',
          description: 'We create custom websites and applications based on customer requirements.',
          details: 'Full-stack development services including responsive web design, mobile applications, and custom software solutions tailored to your needs.'
        }
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-primary-50/30 to-accent-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-accent-50/10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Icon name="Zap" size={20} className="text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A detailed breakdown of our offerings across Engineering Services and Software Solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <Icon name={category.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{category.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm border border-primary-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group ${
                      expandedCard === `${category.id}-${index}` 
                        ? 'ring-2 ring-primary-300 shadow-2xl scale-[1.02]' 
                        : 'hover:shadow-xl hover:border-primary-200 hover:scale-[1.01]'
                    }`}
                    onClick={() => setExpandedCard(expandedCard === `${category.id}-${index}` ? null : `${category.id}-${index}`)}
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                        </div>
                        <div className={`ml-6 transition-all duration-300 ${
                          expandedCard === `${category.id}-${index}` ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}>
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                            <Icon name="ChevronDown" size={20} className="text-primary-600" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Expanded Content */}
                      <div className={`mt-6 transition-all duration-500 ease-in-out ${
                        expandedCard === `${category.id}-${index}` 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="pt-6 border-t border-primary-200/50">
                          <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.details}</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToContact();
                            }}
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 group"
                          >
                            <span>Learn More</span>
                            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our engineering and software solutions can power your next innovation project.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;