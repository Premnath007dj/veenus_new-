import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Check if we're on the landing page
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      if (isLandingPage) {
        const sections = ['hero', 'services', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  const navigationItems = [
    { label: 'Home', href: '/', isHashLink: false, icon: '🏠' },
    { label: 'Services', href: '#services', isHashLink: true, icon: '⚡' },
    { label: 'About', href: '#about', isHashLink: true, icon: '👥' },
    { label: 'Tech Zone', href: '/tech-zone', isHashLink: false, icon: '🔬' },
    { label: 'Contact', href: '#contact', isHashLink: true, icon: '📞' },
    { label: 'Careers', href: '/careers', isHashLink: false, icon: '💼' }
  ];

  const handleHashClick = (href) => {
    // Close mobile menu when clicking hash links
    setIsMobileMenuOpen(false);
    
    // Update active section immediately when clicking
    const sectionName = href.substring(1);
    setActiveSection(sectionName);
    
    // If we're not on the landing page, navigate to landing page with hash
    if (!isLandingPage) {
      window.location.href = '/' + href;
      return;
    }
    
    // Scroll to the section with offset for header
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Height of the fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (href) => {
    // For hash links, only active on landing page and when section is active
    if (href.startsWith('#')) {
      const sectionName = href.substring(1); // Remove the # to get section name
      return isLandingPage && activeSection === sectionName;
    }
    // For page links, check if current path matches exactly
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              <img 
                src="/assets/images/Veenus_nova_logo.jpg" 
                alt="Veenus Nova Innovation Centre Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">Veenus Nova</h1>
              <p className="text-xs text-muted-foreground group-hover:text-primary-600 transition-colors duration-300">Innovation Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigationItems.map((item) => {
              // Hide Services and Contact on non-landing pages since they are hash links
              if (!isLandingPage && item.isHashLink) {
                return null;
              }
              
              const active = isActive(item.href);
              return (
                <div key={item.label} className="relative group">
                  {item.isHashLink ? (
                    <button
                      onClick={() => handleHashClick(item.href)}
                      className={`flex items-center space-x-1.5 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                        active 
                          ? 'text-primary-700 bg-primary-50/80 border-b-2 border-primary-600 shadow-sm' 
                          : 'text-foreground hover:text-primary-600 hover:bg-primary-50/60 hover:border-b-2 hover:border-primary-300'
                      }`}
                    >
                      <span className={`text-sm transition-all duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold text-sm">{item.label}</span>
                      
                      {/* Active indicator - bottom border */}
                      {active && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"></div>
                      )}
                      
                      {/* Hover effect */}
                      {!active && (
                        <div className="absolute inset-0 bg-primary-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      )}
                      
                      {/* Pulse effect for active state */}
                      {active && (
                        <div className="absolute inset-0 bg-primary-100/30 rounded-xl animate-pulse"></div>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1.5 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                        active 
                          ? 'text-primary-700 bg-primary-50/80 border-b-2 border-primary-600 shadow-sm' 
                          : 'text-foreground hover:text-primary-600 hover:bg-primary-50/60 hover:border-b-2 hover:border-primary-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`text-sm transition-all duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold text-sm">{item.label}</span>
                      
                      {/* Active indicator - bottom border */}
                      {active && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"></div>
                      )}
                      
                      {/* Hover effect */}
                      {!active && (
                        <div className="absolute inset-0 bg-primary-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      )}
                      
                      {/* Pulse effect for active state */}
                      {active && (
                        <div className="absolute inset-0 bg-primary-100/30 rounded-xl animate-pulse"></div>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-3 border-t border-primary-100/50">
            {navigationItems.map((item) => {
              // Hide Services and Contact on non-landing pages since they are hash links
              if (!isLandingPage && item.isHashLink) {
                return null;
              }
              
              const active = isActive(item.href);
              return (
                <div key={item.label}>
                  {item.isHashLink ? (
                    <button
                      onClick={() => handleHashClick(item.href)}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden w-full text-left ${
                        active 
                          ? 'text-primary-700 bg-primary-50/80 border-l-4 border-primary-600 shadow-sm' 
                          : 'text-foreground hover:text-primary-600 hover:bg-primary-50/60 hover:border-l-4 hover:border-primary-300'
                      }`}
                    >
                      <span className={`text-lg transition-all duration-300 ${active ? 'scale-110' : ''}`}>
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold">{item.label}</span>
                      
                      {/* Active indicator - left border */}
                      {active && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-accent-600 rounded-r-full"></div>
                      )}
                      
                      {/* Hover effect */}
                      {!active && (
                        <div className="absolute inset-0 bg-primary-50/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      )}
                      
                      {/* Pulse effect for active state */}
                      {active && (
                        <div className="absolute inset-0 bg-primary-100/30 rounded-xl animate-pulse"></div>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden w-full text-left ${
                        active 
                          ? 'text-primary-700 bg-primary-50/80 border-l-4 border-primary-600 shadow-sm' 
                          : 'text-foreground hover:text-primary-600 hover:bg-primary-50/60 hover:border-l-4 hover:border-primary-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`text-lg transition-all duration-300 ${active ? 'scale-110' : ''}`}>
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold">{item.label}</span>
                      
                      {/* Active indicator - left border */}
                      {active && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-accent-600 rounded-r-full"></div>
                      )}
                      
                      {/* Hover effect */}
                      {!active && (
                        <div className="absolute inset-0 bg-primary-50/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      )}
                      
                      {/* Pulse effect for active state */}
                      {active && (
                        <div className="absolute inset-0 bg-primary-100/30 rounded-xl animate-pulse"></div>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
