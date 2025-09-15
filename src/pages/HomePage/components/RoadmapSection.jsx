import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    title: '1. Discovery & Understanding',
    description: 'We start by thoroughly understanding your needs, functional requirements, and industry standards.',
    takeaway: 'Clear, detailed requirements ensure we build exactly what you need, no surprises.'
  },
  {
    title: '2. Concept Design & Benchmarking',
    description: 'Our team benchmarks competitor products and creates innovative design concepts tailored to your application.',
    takeaway: 'We focus on delivering solutions that are efficient, cost-effective, and performance-driven.'
  },
  {
    title: '3. Rapid Prototyping',
    description: 'We rapidly develop functional prototypes to validate design concepts and performance early in the process.',
    takeaway: 'This accelerates development cycles and minimizes risk of costly errors.'
  },
  {
    title: '4. Rigorous Testing & Optimization',
    description: 'Comprehensive testing ensures your motor performs reliably under real-world conditions, meeting all industry standards.',
    takeaway: 'You get robust, fully validated solutions optimized for performance and durability.'
  },
  {
    title: '5. Final Delivery & Production Support',
    description: 'We deliver fully tested prototypes along with complete documentation (SOPs, BOMs, QA/QC guides) and support your production ramp-up.',
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
            {/* Central line */}
            <div className="absolute top-0 left-1/2 w-1 h-full -translate-x-1/2 bg-gray-600 shadow-md"></div>

            {processSteps.map((step, index) => (
                <div key={index} className={`relative mb-12`}>
                    <AnimatedItem delay={index * 0.15} className="w-full flex justify-center">
                        <div className={`w-full flex items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            {/* Card */}
                            <div className="w-full md:w-5/12 px-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-energetic-green hover:scale-105">
                                    <h3 className="text-lg font-bold text-deep-charcoal mb-3">{step.title}</h3>
                                    <p className="text-gray-700 text-sm mb-3">{step.description}</p>
                                    <p className="text-gray-800 text-sm font-medium bg-energetic-green/10 p-2 rounded">➔ {step.takeaway}</p>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="w-2/12 hidden md:block"></div>

                            {/* Step Marker */}
                            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energetic-green to-electric-blue border-4 border-white flex items-center justify-center font-bold text-xl text-white shadow-md transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg">
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

// --- Mobile Timeline Component (Enhanced) ---
const MobileTimeline = () => (
    <div className="space-y-6">
        {processSteps.map((step, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-energetic-green">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-energetic-green to-electric-blue flex items-center justify-center font-bold text-sm text-white shadow-sm mr-3">
                            {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-deep-charcoal">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{step.description}</p>
                    <p className="text-gray-800 text-sm font-medium bg-energetic-green/10 p-2 rounded">➔ {step.takeaway}</p>
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
          <h2 className="text-3xl font-bold text-deep-charcoal mb-3">🚀 How We Turn Ideas into Reality</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven, structured process to transform your vision into a reliable, high-performance electric motor solution — designed for efficiency, precision, and innovation.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-energetic-green to-electric-blue rounded-full" />
        </div>

        {/* Responsive Timeline */}
        <div className="hidden lg:block">
            <DesktopTimeline />
        </div>
        <div className="lg:hidden">
            <MobileTimeline />
        </div>

        <AnimatedItem delay={0.5} className="w-full">
            <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-deep-charcoal mb-4 text-center">✅ Why Work With Us?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {whyWorkWithUs.map((item, index) => (
                        <AnimatedItem key={index} delay={index * 0.1 + 0.7}>
                            <li className="flex items-center justify-center md:justify-start p-4 bg-soft-cool-gray rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                <span className="text-energetic-green font-bold text-3xl mr-3 leading-none">✔️</span>
                                <span className="text-gray-700 text-lg flex-1">{item}</span>
                            </li>
                        </AnimatedItem>
                    ))}
                </ul>
            </div>
        </AnimatedItem>

        {/* <div className="text-center mt-16">
          <Link 
            to="/about" 
            className="inline-block bg-energetic-green text-white font-bold py-3 px-8 rounded-full hover:bg-electric-blue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-button-float">
            Learn How We Work in Detail →
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default RoadmapSection;
