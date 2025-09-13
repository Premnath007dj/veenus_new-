import React, { useEffect, useRef } from 'react';
import Icon from '../AppIcon';

const Roadmap = ({ steps }) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });

    itemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full py-12">
      {/* Central progress line with gradient flow */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-primary-green via-light-green to-primary-green opacity-40" />
      <div className="absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-primary-green via-light-green to-primary-green animate-progress opacity-70" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      {steps.map((step, index) => (
        <div 
          key={index} 
          ref={el => itemsRef.current[index] = el}
          className={`relative mb-12 flex flex-col items-center w-full roadmap-item group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="hidden md:block w-1/2"></div>
          {/* Step dot */}
          <div className={`absolute w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center border-4 border-light-beige shadow-soft transition-transform duration-300 group-hover:scale-110
            left-1/2 -translate-x-1/2
            `}>
            <Icon name={step.icon} size={16} />
          </div>
          <div className={`w-full md:w-1/2 px-4 md:px-8 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-left`}>
            <div className="relative bg-white p-6 rounded-xl border border-light-green shadow-soft roadmap-card transition-transform duration-300 group-hover:-translate-y-1">
              {/* connector arm */}
              <div className={`hidden md:block absolute top-10 ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'} h-[2px] w-12 bg-gradient-to-r from-primary-green to-light-green group-hover:w-16 transition-all duration-300`} />
              <h3 className="text-lg font-bold text-dark-blue mb-2">{step.title}</h3>
              <p className="text-sm text-gray">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;