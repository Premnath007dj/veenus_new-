import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const navigationItems = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Services', href: '/services', icon: '🛠️' },
  { label: 'Why Choose Us', href: '/why-choose-us', icon: '✨' },
  { label: 'Careers', href: '/careers', icon: '💼' },
  { label: 'Tech Zone', href: '/tech-zone', icon: '🧪' },
  { label: 'About', href: '/about', icon: 'ℹ️' },
  { label: 'Contact', href: '/contact', icon: '✉️' },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMaxHeight(isMobileMenuOpen && menuRef.current ? `${menuRef.current.scrollHeight}px` : '0px');
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = useMemo(
    () => (href) => (href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)),
    [location.pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#212121]/90 to-[#212121]/80 shadow-lg border-b border-[#2979FF]/30'
          : 'bg-[#212121]/80'
      } backdrop-blur-xl ring-1 ring-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Logo (Updated with cleaner style) */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/veenus_new-/assets/images/Veenus_nova_logo.jpg"
            alt="Veenus Nova Innovation Centre Logo"
            className="w-10 h-10 rounded-lg object-cover shadow-md"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#00C853] to-[#2979FF] bg-clip-text text-transparent tracking-wide">
              Veenus Nova
            </h1>
            <p className="text-gray-300 text-xs">Innovation Centre</p>
          </div>
        </Link>

        {/* Desktop Navigation + Actions */}
        <div className="hidden lg:flex items-center space-x-10">
          <nav className="flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative text-[#F5F5F5] px-4 py-2 font-medium rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-soft ${
                  isActive(item.href) ? 'underline text-[#2979FF]' : ''
                }`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#2979FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Get a Quote Button */}
          <Link to="/contact">
            <Button variant="default" size="sm" className="bg-[#00C853] text-white shadow-soft hover:scale-105 animate-pulse-slow">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-3 rounded-full bg-[#2979FF]/30 hover:bg-[#2979FF]/50 transition-all duration-300 shadow-md"
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ maxHeight, transition: 'max-height 0.5s ease-in-out' }}
        className="lg:hidden overflow-hidden bg-gradient-to-b from-[#212121]/95 to-[#212121]/80 animate-gradient-shift"
      >
        <nav className="flex flex-col space-y-2 p-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[#F5F5F5] py-2 font-medium rounded hover:bg-[#2979FF]/30 transition transform hover:scale-105 ${
                isActive(item.href) ? 'underline text-[#2979FF]' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Get a Quote CTA */}
          <Link to="/contact" className="mt-4 w-full">
            <Button variant="default" size="sm" className="w-full bg-[#00C853] text-white shadow-soft hover:scale-105 animate-pulse-slow">
              Get a Quote
            </Button>
          </Link>
        </nav>
      </div>

      {/* Animated Gradient Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00C853] via-white/40 to-[#FF6D00] opacity-70 animate-gradient-shift" />
    </header>
  );
}

export default Header;