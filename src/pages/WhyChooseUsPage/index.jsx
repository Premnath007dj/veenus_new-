import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const WhyChooseUsPage = () => {

  const advantages = [
    {
      icon: "Crosshair",
      title: "Expertise in Precision Engineering",
      description: "Our expert team uses advanced electromagnetic simulations and FEMM analysis to ensure every design is optimized for performance and reliability.",
      features: ["Advanced FEMM Analysis", "Rigorous NVH & Thermal Analysis", "Comprehensive Validation Testing"],
      stat: { value: "99.8%", label: "Simulation Accuracy" },
      color: "from-primary-green to-light-green"
    },
    {
      icon: "Zap",
      title: "Agile & Collaborative Process",
      description: "Our agile process is designed for seamless collaboration, allowing for rapid iterations and ensuring we meet your timelines and performance targets.",
      features: ["Seamless Collaboration", "Rapid Prototyping", "Adaptable to Your Needs", "Transparent Communication"],
      stat: { value: "4-6", label: "Weeks to Prototype" },
      color: "from-light-green to-primary-green"
    },
    {
      icon: "Users",
      title: "Your Collaborative R&D Partner",
      description: "We work as an extension of your R&D team, providing the expertise you need to tackle complex challenges, from automotive actuator motor design to medical device motor prototyping.",
      features: [ "Deep Industry Knowledge", "Partnership Approach", "Focus on Your Success"],
      stat: { value: "100+", label: "Successful Projects" },
      color: "from-primary-green to-light-green"
    }
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52-.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 w-12 h-12 opacity-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-light-green animate-spin-slower">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52-.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Floating motor coil */}
        <div className="absolute top-1/2 right-1/4 w-8 h-8 opacity-5">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary-green animate-pulse">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
      </div>  
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-dark-blue via-dark-blue to-primary-green overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-light-green/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-light-green/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Floating gear elements */}
            <div className="absolute top-16 right-16 w-20 h-20 opacity-10">
              <svg viewBox="0 0 24 24" className="w-full h-full text-white animate-spin-slow">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52-.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="absolute bottom-20 left-20 w-16 h-16 opacity-8">
              <svg viewBox="0 0 24 24" className="w-full h-full text-light-green animate-spin-slower">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52-.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Circuit-like lines */}
            <div className="absolute top-1/3 left-10 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-1/3 right-10 w-20 h-px bg-gradient-to-r from-transparent via-light-green/40 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center text-white">
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Why Choose <span className="text-light-green">Veenus Nova</span>
              </h1>
              <div className={`mx-auto h-1 w-32 bg-gradient-to-r from-light-green to-white rounded-full mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
              <p className={`text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                We are more than a vendor; we are your collaborative partner in innovation. We work as an extension of your R&D team to deliver expert electric motor design services.
              </p>
              {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Button as={Link} to="/contact" variant="secondary" className="bg-white text-dark-blue hover:bg-light-green hover:text-white border-white">
                  <Icon name="Mail" className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button as={Link} to="/services" variant="secondary" className="bg-transparent text-white border-white hover:bg-white hover:text-dark-blue">
                  <Icon name="Settings" className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-light-beige relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A237E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="group relative bg-white border border-light-green rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary-green/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={advantage.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 group-hover:text-primary-green transition-colors duration-300">{advantage.title}</h3>
                    <p className="text-gray-600 mb-6">{advantage.description}</p>
                    
                    <div className="border-t border-light-green pt-6">
                      <h4 className="font-semibold text-dark-blue mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        {advantage.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-primary-green rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-light-green text-center bg-gray-50 rounded-lg p-4">
                        <p className="text-4xl font-bold text-primary-green">{advantage.stat.value}</p>
                        <p className="text-sm font-semibold text-dark-blue mt-1">{advantage.stat.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhyChooseUsPage;