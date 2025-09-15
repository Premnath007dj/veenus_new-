import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const VisionMissionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
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
    <section ref={sectionRef} className="section py-20 relative overflow-hidden creative-vision-mission-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="vision-mission-card bg-white/5 backdrop-blur-lg p-8 rounded-lg shadow-2xl border border-white/10 flex flex-col justify-between transition-all duration-500 hover:shadow-energetic-green/30 hover:scale-[1.02]">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Vision</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                At <span className="font-bold text-energetic-green">Veenus Nova Innovation Centre</span>, we aspire to be the global leader in electric motor engineering, pioneering innovative and reliable solutions across diverse sectors.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                We envision a future powered by our efficient and robust motor technologies, driving advancements in automotive, domestic, industrial, E-rickshaws, drones, and defence-grade systems.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/about" className="inline-block bg-energetic-green text-white font-bold py-3 px-8 rounded-full hover:bg-electric-blue transition-colors duration-300 shadow-lg">
                Learn More About Our Vision
              </Link>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vision-mission-card bg-white/5 backdrop-blur-lg p-8 rounded-lg shadow-2xl border border-white/10 flex flex-col justify-between transition-all duration-500 hover:shadow-electric-blue/30 hover:scale-[1.02]">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Our mission is to provide expert, end-to-end electric motor development services, from advanced simulation and precise design to meticulous prototyping and rigorous validation testing.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                With over 6 years of hands-on experience and specialization in PMSM, BLDC, SynRM, and PMDC motor types, we deliver tailored, application-specific solutions.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                We are committed to engineering reliability, cost-effectiveness, and efficiency, ensuring a strong alignment between simulation and real-world results, and taking complete ownership from design to validation.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/services" className="inline-block bg-electric-blue text-white font-bold py-3 px-8 rounded-full hover:bg-energetic-green transition-colors duration-300 shadow-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
