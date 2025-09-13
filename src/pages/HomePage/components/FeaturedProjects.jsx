import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import useEmblaCarousel from 'embla-carousel-react';

const FeaturedProjects = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const handle = (e) => {
      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const delta = (e.clientX - center) / rect.width;
        el.style.transform = `translateY(${Math.max(-6, Math.min(6, -delta * 10))}px)`;
      });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const projects = [
    {
      image: '/assets/images/pmdc.png',
      title: 'Automotive Actuator Motor Design',
      category: 'Automotive',
      link: '#'
    },
    {
      image: '/assets/images/pmsm.png',
      title: 'High-Efficiency E-Rickshaw Propulsion System',
      category: 'E-Mobility',
      link: '#'
    },
    {
      image: '/assets/images/synrm.png',
      title: 'Custom Drone Motor Engineering',
      category: 'Aerospace',
      link: '#'
    },
    {
      image: '/assets/images/bldc.png',
      title: 'Defence-Grade Motor for Actuator',
      category: 'Defence',
      link: '#'
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Section background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          background: 'linear-gradient(90deg, rgba(26,35,126,0.12) 1px, transparent 1px), linear-gradient(rgba(26,35,126,0.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-light-beige" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-3">Featured Projects</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-4" />
          <p className="muted text-lg max-w-3xl mx-auto">We have a proven track record of success across a range of demanding applications.</p>
        </div>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-8">
            {projects.map((project, index) => (
              <div key={index} className="embla__slide flex-[0_0_88%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_31%]">
                <div className="card overflow-hidden group relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <Link to={project.link}>
                    <div className="relative overflow-hidden">
                      <img 
                        ref={el => parallaxRefs.current[index] = el}
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-transform duration-300 will-change-transform" 
                      />
                      {/* soft overlay on hover */}
                      <div className="absolute inset-0 bg-dark-blue/0 group-hover:bg-dark-blue/10 transition-colors duration-300" />
                      {/* corner accent */}
                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary-green to-light-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-primary-green font-semibold mb-1">{project.category}</p>
                      <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-primary-green transition-colors">{project.title}</h3>
                      <p className="text-primary-green font-semibold flex items-center">View Project <Icon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /></p>
                    </div>
                  </Link>
                  {/* subtle morph ring */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary-green/10 to-light-green/10 blur-xl group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;