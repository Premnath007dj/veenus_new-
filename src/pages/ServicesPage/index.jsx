import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';


const ServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

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

  const servicesData = [
    {
      id: 'engineering',
      title: 'Engineering Services',
      icon: 'Settings',
      services: [
        { name: 'Competitive & Performance Benchmarking', description: 'As your partner, we analyze the competitive landscape to position your product for optimal performance and cost-effectiveness.', details: 'We provide a collaborative analysis of competitor products, evaluate key performance metrics, and deliver actionable recommendations to give you a market edge.' },
        { name: 'PMSM & BLDC Motor Simulation', description: 'Our PMSM motor simulation consulting includes FEMM analysis, back EMF, and thermal analysis to validate and optimize your design.', details: 'We leverage advanced FEA for in-depth magnetic field analysis, thermal modeling, and performance prediction, ensuring your motor design is optimized from the start.' },
        { name: 'Prototype Electric Motor Development', description: 'We specialize in prototype electric motor development, offering an agile, end-to-end service from concept to a fully functional and validated prototype.', details: 'Our collaborative process covers the complete design lifecycle, including mechanical design, electromagnetic optimization, and thermal management for your custom motor.' },
        { name: 'Validation & Technical Documentation', description: 'We provide comprehensive validation testing and documentation, including NVH analysis, to ensure your motor meets all specifications.', details: 'Our partnership includes providing thorough documentation for every stage, from design specifications and manufacturing guidelines to complete validation procedures.' },
      ]
    },
    {
      id: 'software',
      title: 'Software Solutions',
      icon: 'Cpu',
      services: [
        { name: 'web and app devolopment ', description: 'We develop the software that controls and interacts with your motor system, from embedded firmware to user-facing applications.', details: 'Our team can develop custom control algorithms, embedded firmware, and user applications to ensure your motor system performs flawlessly.' },
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData.flatMap(cat => cat.services.map(s => ({...s, category: cat.title})))
    : servicesData.find(cat => cat.id === activeCategory)?.services.map(s => ({...s, category: servicesData.find(c => c.id === activeCategory).title })) || [];

  return (
    <>
    
      <Header />
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-blue/40 to-dark-blue" />
      {/* Animated motor/engineering background */}
     
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
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-.249-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19-.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="absolute bottom-20 left-20 w-16 h-16 opacity-8">
              <svg viewBox="0 0 24 24" className="w-full h-full text-light-green animate-spin-slower">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-.249-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19-.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Circuit-like lines */}
            <div className="absolute top-1/3 left-10 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-1/3 right-10 w-20 h-px bg-gradient-to-r from-transparent via-light-green/40 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center text-white">
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Our <span className="text-light-green">Services</span>
              </h1>
              <div className={`mx-auto h-1 w-32 bg-gradient-to-r from-light-green to-white rounded-full mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
              <p className={`text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Explore our comprehensive electric motor design services, from initial concept to production-ready prototypes. We are your collaborative R&D partner.
              </p>
             
            </div>
          </div>
        </section>

        <section id="services-content" className="py-24 relative overflow-hidden">
          {/* Themed section background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: 'radial-gradient(#1A237E 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-light-beige via-transparent to-white" />
          </div>
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
            <img src="/veenus_new-/assets/images/m2.png" alt="Background Overlay" className="w-full h-full object-cover animate-image-float" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-white border border-light-green rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveCategory('all')} 
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-between ${activeCategory === 'all' ? 'bg-primary-green text-white' : 'hover:bg-light-green/40 text-dark-blue'}`}
                      >
                        <span>All Services</span>
                        <span className={`h-1 w-4 rounded-full bg-primary-green transition-all ${activeCategory === 'all' ? 'w-8 bg-white' : 'group-hover:w-6'}`}></span>
                      </button>
                    </li>
                    {servicesData.map(cat => (
                      <li key={cat.id}>
                        <button 
                          onClick={() => setActiveCategory(cat.id)} 
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-between ${activeCategory === cat.id ? 'bg-primary-green text-white' : 'hover:bg-light-green/40 text-dark-blue'}`}
                        >
                          <span>{cat.title}</span>
                          <span className={`h-1 w-4 rounded-full bg-primary-green transition-all ${activeCategory === cat.id ? 'w-8 bg-white' : 'group-hover:w-6'}`}></span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredServices.map((service, index) => (
                    <div 
                      key={index} 
                      className={`group relative bg-white border border-light-green rounded-xl p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${expandedCard === index ? 'col-span-2' : ''} animate-fade-in`}
                      style={{ animationDelay: `${index * 0.12}s` }}
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    >
                      {/* top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-light-green to-primary-green opacity-60 group-hover:opacity-100 transition-opacity" />
                      {/* corner glows */}
                      <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-light-green/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-primary-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <h4 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-primary-green transition-colors">{service.name}</h4>
                      <p className="muted mb-4 leading-relaxed">{service.description}</p>
                      {expandedCard === index && (
                        <div className="mt-4 pt-4 border-t border-light-green">
                          <p className="text-dark-blue">{service.details}</p>
                          <Link to="/contact" className="text-primary-green font-semibold mt-4 inline-flex items-center">Get in touch</Link>
                        </div>
                      )}

                      {/* hover outline */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent group-hover:border-primary-green/40 transition-colors" />
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;