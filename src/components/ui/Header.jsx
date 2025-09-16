import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button'; // Assuming you have this Button component

const navigationItems = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Services', href: '/services', icon: '🛠️' },
  // { label: 'Why Choose Us', href: '/why-choose-us', icon: '✨' },
  // { label: 'Careers', href: '/careers', icon: '💼' },
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
    if (isMobileMenuOpen && menuRef.current) {
      const topOffset = menuRef.current.getBoundingClientRect().top;
      const maxMenuHeight = window.innerHeight - topOffset;
      setMaxHeight(`${maxMenuHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu on route change
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
      {/* Changed from grid to a relative flex container for better alignment */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo (Stays on the left) */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/veenus_new-/assets/images/Veenus_nova_logo.jpg" // Ensure this path is correct
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

        {/* Desktop Navigation (Now absolutely centered) */}
        <nav className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-2">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative text-[#F5F5F5] px-4 py-2 font-medium rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-soft group whitespace-nowrap ${
                isActive(item.href) ? 'text-[#2979FF]' : ''
              }`}
            >
              {item.label}
              <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-[#2979FF] transition-transform origin-center duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Actions Container (Stays on the right) */}
        <div className="flex items-center">
          {/* Desktop "Make an Inquiry" Button */}
          <Link to="/contact" className="hidden lg:block">
            <Button variant="default" size="sm" className="bg-[#00C853] text-white shadow-soft hover:scale-105 animate-pulse-slow">
              Make an Inquiry
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-3 rounded-full bg-[#2979FF]/30 hover:bg-[#2979FF]/50 transition-all duration-300 shadow-md"
            >
              <div className="w-6 h-6 flex flex-col justify-between items-center">
                <span className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span className={`block h-0.5 w-6 bg-white rounded-full transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (No layout changes needed here) */}
      <div
        ref={menuRef}
        style={{ maxHeight, transition: 'max-height 0.5s ease-in-out' }}
        className="lg:hidden overflow-y-auto bg-gradient-to-b from-[#212121]/95 to-[#212121]/80"
      >
        <nav className="flex flex-col space-y-2 p-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-4 text-[#F5F5F5] p-3 font-medium rounded-lg hover:bg-[#2979FF]/30 transition-all transform hover:translate-x-2 ${
                isActive(item.href) ? 'bg-[#2979FF]/20 text-[#2979FF]' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}

          <Link to="/contact" className="mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="default" size="lg" className="w-full bg-[#00C853] text-white shadow-soft hover:scale-105 animate-pulse-slow">
              Make an Inquiry
            </Button>
          </Link>
        </nav>
      </div>

      {/* Animated Gradient Accent Bar (No changes needed here) */}
      <div className="h-[2px] bg-gradient-to-r from-[#00C853] via-white/40 to-[#FF6D00] opacity-70 animate-gradient-shift" />
    </header>
  );
}

export default Header;