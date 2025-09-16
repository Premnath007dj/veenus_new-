import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    icon: '🔍',
    title: 'Discovery & Understanding',
    description: 'We start by thoroughly understanding your needs, functional requirements, and industry standards.',
    takeaway: 'Clear, detailed requirements ensure we build exactly what you need, no surprises.'
  },
  {
    icon: '🎨',
    title: 'Concept Design & Benchmarking',
    description: 'Our team benchmarks competitor products and creates innovative design concepts tailored to your application.',
    takeaway: 'We focus on delivering solutions that are efficient, cost-effective, and performance-driven.'
  },
  {
    icon: '📦',
    title: 'Rapid Prototyping',
    description: 'We rapidly develop functional prototypes to validate design concepts and performance early in the process.',
    takeaway: 'This accelerates development cycles and minimizes risk of costly errors.'
  },
  {
    icon: '🔬',
    title: 'Rigorous Testing & Optimization',
    description: 'Comprehensive testing ensures your motor performs reliably under real-world conditions, meeting all industry standards.',
    takeaway: 'You get robust, fully validated solutions optimized for performance and durability.'
  },
  {
    icon: '🚀',
    title: 'Final Delivery & Production Support',
    description: 'We deliver fully tested prototypes along with complete documentation and support your production ramp-up.',
    takeaway: 'Seamless handover with ongoing support helps you go to market faster with confidence.'
  },
];

const whyWorkWithUs = [
  'Proven end-to-end expertise in electric motor simulation, design, prototyping, and testing',
  'Transparent development process with clear responsibilities'
];

const AnimatedItem = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('in-view');
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-out ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

// --- Desktop Timeline Component ---
const DesktopTimeline = () => {
    return (
        <div className="relative w-full py-12">
            {/* Central line - Now animated! */}
            <AnimatedItem className="absolute top-0 left-1/2 w-1 h-full -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-b from-energetic-green/50 to-electric-blue/50 timeline-line-animated"></div>
            </AnimatedItem>

            {processSteps.map((step, index) => (
                <div key={index} className={`relative mb-12`}>
                    <AnimatedItem delay={index * 0.15} className="w-full flex justify-center">
                        <div className={`w-full flex items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            {/* Card - Now with glassmorphism! */}
                            <div className="w-full md:w-5/12 px-4">
                                <div className="card p-6 rounded-xl shadow-lg border border-border transition-all duration-300 group-hover:border-energetic-green/80 group-hover:shadow-2xl group-hover:scale-105">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl mt-1 text-shadow-custom">{step.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2 text-shadow-custom">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                                            <p className="text-muted-foreground text-sm font-semibold bg-energetic-green/20 p-2 rounded-md border border-energetic-green/30">
                                                ➔ {step.takeaway}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-2/12 hidden md:block"></div>

                            {/* Step Marker */}
                            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energetic-green to-electric-blue border-4 border-[#333] flex items-center justify-center font-bold text-xl text-white shadow-md transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg pulse-on-hover">
                                    {index + 1}
                                </div>
                            </div>
                        </div>
                    </AnimatedItem>
                </div>
            ))}
        </div>
    );
};

// --- Mobile Timeline Component ---
const MobileTimeline = () => (
    <div className="space-y-6">
        {processSteps.map((step, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
                <div className="card p-6 rounded-xl shadow-lg border border-border transition-all duration-300 hover:shadow-2xl hover:border-energetic-green/80">
                     <div className="flex items-start gap-4">
                        <div className="text-3xl mt-1 text-shadow-custom">{step.icon}</div>
                        <div>
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-energetic-green to-electric-blue flex items-center justify-center font-bold text-sm text-white shadow-sm mr-3">
                                  {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-foreground text-shadow-custom">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                            <p className="text-muted-foreground text-sm font-semibold bg-energetic-green/20 p-2 rounded-md border border-energetic-green/30">
                              ➔ {step.takeaway}
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedItem>
        ))}
    </div>
);


const RoadmapSection = () => {
    return (
      <section className="section py-20 relative overflow-hidden glowing-orbs-background">
        <div className="screen-grid-background"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <AnimatedItem>
              <h2 className="text-4xl font-bold text-foreground mb-3 text-shadow-custom">🚀 How We Turn Ideas into Reality</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a proven, structured process to transform your vision into a reliable, high-performance electric motor solution.
              </p>
              <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-energetic-green to-electric-blue rounded-full" />
            </AnimatedItem>
          </div>

          <div className="hidden lg:block">
            <DesktopTimeline />
          </div>
          <div className="lg:hidden">
            <MobileTimeline />
          </div>

          <AnimatedItem delay={0.5} className="w-full">
            <div className="mt-16 max-w-4xl mx-auto card p-8 rounded-xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center text-shadow-custom">✅ Why Work With Us?</h3>
              <ul className="space-y-4">
                  {whyWorkWithUs.map((item, index) => (
                      <li key={index} className="flex items-center p-4 bg-card rounded-lg shadow-sm hover:bg-white/20 transition-all duration-200">
                          <span className="text-primary-green font-bold text-2xl mr-4">✔️</span>
                          <span className="text-muted-foreground text-base flex-1">{item}</span>
                      </li>
                  ))}
              </ul>
            </div>
          </AnimatedItem>
        </div>
      </section>
    );
};

export default RoadmapSection;