import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const Careers = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas animation logic will go here
    // For now, it's a placeholder
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Placeholder animation: draw a simple rotating square
    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.fillStyle = 'rgba(26, 35, 126, 0.5)'; // dark-blue/40
      ctx.fillRect(-50, -50, 100, 100);
      ctx.restore();
      angle += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const openRoles = [
    {
      title: "Lead Motor Design Engineer",
      description: "We are seeking an experienced engineer to lead our motor design projects, with a focus on PMSM and BLDC motors.",
      responsibilities: [
        "Lead the design and development of custom electric motors.",
        "Perform advanced electromagnetic and thermal simulations.",
        "Collaborate with clients to define project requirements.",
        "Mentor junior engineers and contribute to our culture of innovation."
      ],
      link: "mailto:careers@veenusnova.com?subject=Application for Lead Motor Design Engineer"
    },
    {
      title: "Embedded Software Engineer",
      description: "Join our team to develop and optimize the control systems for our advanced motor prototypes and applications.",
      responsibilities: [
        "Design and implement firmware for motor control systems.",
        "Develop and test real-time control algorithms.",
        "Work closely with hardware engineers to ensure seamless integration.",
        "Contribute to the development of our proprietary software tools."
      ],
      link: "mailto:careers@veenusnova.com?subject=Application for Embedded Software Engineer"
    },
    {
      title: "Mechanical Engineer - Motor Design",
      description: "We are looking for a mechanical engineer to focus on the mechanical and thermal design aspects of our custom motor solutions.",
      responsibilities: [
        "Design and analyze mechanical components of electric motors.",
        "Perform thermal analysis and design cooling solutions.",
        "Create detailed 3D models and manufacturing drawings.",
        "Collaborate with the design team to ensure robust and reliable products."
      ],
      link: "mailto:careers@veenusnova.com?subject=Application for Mechanical Engineer"
    }
  ];

  return (
    <>
      <Header />
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-blue/40 to-dark-blue" />
      {/* Animated motor/engineering background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-green rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
        
        {/* Rotating gear elements */}
        <div className="absolute top-16 right-16 w-16 h-16 opacity-10">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary-green animate-spin-slow">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 w-12 h-12 opacity-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-light-green animate-spin-slower">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Floating motor coil */}
        <div className="absolute top-1/2 right-1/4 w-8 h-8 opacity-5">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary-green animate-pulse">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
      </div>  
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-dark-blue via-dark-blue to-primary-green overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-2 h-2 bg-light-green/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">Careers at <span className="text-light-green">Veenus Nova</span></h1>
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-light-green to-white rounded-full mb-8" />
              <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto">
                Join a team of innovators dedicated to engineering the future of electric motor technology. We foster a culture of agile collaboration and technical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="py-24 bg-light-beige">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-dark-blue mb-12 text-center">Open Roles</h2>
            <div className="space-y-8">
              {openRoles.map((role, index) => (
                <div key={index} className="bg-white border border-light-green rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  <div className="border-t border-light-green pt-6">
                    <h4 className="font-semibold text-dark-blue mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {role.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <Icon name="Check" className="w-5 h-5 text-primary-green mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button as_a="a" href={role.link} variant="default" className="shadow-soft hover:scale-105">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              If you don't see an open role that fits your profile, we are always looking for talented individuals to join our team. Please send your resume and a cover letter to:
            </p>
            <a href="mailto:careers@veenusnova.com" className="text-2xl font-bold text-primary-green hover:underline">
              careers@veenusnova.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;