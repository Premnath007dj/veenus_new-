import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const ElectricMotorDesignServicesLandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e?.target?.getAttribute('href');
      if (href && href?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element?.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Scroll progress tracking
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement?.scrollTop;
      const winHeightPx = document.documentElement?.scrollHeight - document.documentElement?.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };

    // Add event listeners
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    // Cleanup event listeners
    return () => {
      anchorLinks?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ElectroMotor Pro - Revolutionary Electric Motor Design & Engineering Solutions</title>
        <meta 
          name="description" 
          content="Transform your electric motor concepts into reality with our cutting-edge design, optimization, and engineering services. Specializing in PMSM, BLDC, SynRM motors for automotive, aerospace, and industrial applications." 
        />
        <meta 
          name="keywords" 
          content="electric motor design, motor optimization, PMSM, BLDC, SynRM, electromagnetic simulation, thermal analysis, motor engineering, EV motors, industrial motors" 
        />
        <meta name="author" content="ElectroMotor Pro" />
        <meta property="og:title" content="ElectroMotor Pro - Revolutionary Electric Motor Design Solutions" />
        <meta 
          property="og:description" 
          content="Leading-edge electric motor engineering with 15+ years of innovation. Transform your vision into high-performance, efficient motor solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://electromotorpro.com" />
        <link rel="canonical" href="https://electromotorpro.com/electric-motor-design-services" />
      </Helmet>

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 bg-circuit-pattern opacity-30 pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary z-50">
        <div 
          className="h-full bg-gradient-to-r from-white/30 to-white/60 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Floating Background Elements */}
        <div className="fixed top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-40 left-16 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="fixed top-1/2 right-1/4 w-16 h-16 bg-success/8 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection onContactClick={scrollToContact} />
          <ServicesSection />
          {/* <AboutSection /> */}
          <WhyChooseUsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Enhanced Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40 group">
          <button
            onClick={scrollToContact}
            className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl shadow-elevation hover:shadow-elevation-hover flex items-center justify-center transition-all duration-300 hover:scale-110 magnetic-hover"
            aria-label="Contact Us"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg 
              className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </button>
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping"></div>
        </div>

        {/* Quick Navigation Pills */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:block">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Contact', id: 'contact' }
          ]?.map((nav) => (
            <button
              key={nav?.id}
              onClick={() => {
                const element = document.getElementById(nav?.id);
                if (element) {
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-12 h-12 bg-white/80 hover:bg-white border border-border/50 rounded-full shadow-elevation hover:shadow-elevation-hover flex items-center justify-center group transition-all duration-300 magnetic-hover"
              title={nav?.label}
            >
              <div className="w-2 h-2 bg-primary/60 group-hover:bg-primary rounded-full transition-colors duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ElectricMotorDesignServicesLandingPage;