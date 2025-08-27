import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AppImage from '../AppImage';
import Icon from '../AppIcon';
import Button from './Button';
import VeenusLogo from '../../assets/images/Veenus_nova_logo.jpg';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  const location = useLocation();

  // Check if we're on the electric motor design services landing page
  const isOnLandingPage = location?.pathname === '/electric-motor-design-services-landing-page';

  const navigationItems = [
    { 
      name: 'Services', 
      href: isOnLandingPage ? '#services' : '/electric-motor-design-services-landing-page#services', 
      icon: 'Zap',
      isHash: true
    },
    { 
      name: 'About', 
      href: isOnLandingPage ? '#about' : '/electric-motor-design-services-landing-page#about', 
      icon: 'Info',
      isHash: true
    },
    { 
      name: 'Contact', 
      href: isOnLandingPage ? '#contact' : '/electric-motor-design-services-landing-page#contact', 
      icon: 'Mail',
      isHash: true
    }
  ];

  const isActiveRoute = (href, isHash) => {
    if (isHash && isOnLandingPage) {
      return location?.pathname === '/electric-motor-design-services-landing-page';
    }
    return location?.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNavigation = () => {
    setIsNavigationExpanded(!isNavigationExpanded);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el?.getBoundingClientRect()?.top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigationClose = () => {
    setIsNavigationExpanded(false);
  };

  return (
    <>
     {/* Desktop Header */}
<div className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-start justify-between px-6 pt-6">
  {/* Logo on the left */}
  <Link
    to="/electric-motor-design-services-landing-page"
    className="flex items-center space-x-4 px-5 py-3 bg-[#fff3db] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-300"
  >
    {/* Logo */}
    <div className="w-20 h-20 flex items-center justify-center">
      <AppImage
        // src="/assets/images/Veenus_nova_logo.jpg"
        src={VeenusLogo}
        alt="Veenus Nova"
        className="w-19 h-19 object-contain"
      />
    </div>

    {/* Brand Text */}
    
  </Link>

  {/* Navigation toggle on the right */}
  <div className="relative">
    <button
      onClick={toggleNavigation}
      className="flex items-center justify-center w-12 h-12 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-elevation hover:shadow-elevation-hover transition-all duration-300 hover:scale-105 group"
    >
      <Icon
        name={isNavigationExpanded ? "X" : "Menu"}
        size={20}
        className="text-primary group-hover:scale-110 transition-transform duration-200"
      />
    </button>

    {/* Expanded Navigation */}
    <div
      className={`absolute top-14 right-0 transition-all duration-500 ease-out ${
        isNavigationExpanded
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 min-w-[200px]">
        <nav className="space-y-2">
          {navigationItems?.map((item, index) => {
            const isActive = isActiveRoute(item?.href, item?.isHash);
            const NavigationLink = item?.isHash ? HashLink : Link;
            const linkProps = item?.isHash
              ? { to: item?.href, scroll: scrollWithOffset }
              : { to: item?.href };

            return (
              <NavigationLink
                key={item?.name}
                {...linkProps}
                onClick={handleNavigationClose}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden ${
                  isActive
                    ? "text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                    isActive ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20"
                  }`}
                >
                  <Icon
                    name={item?.icon}
                    size={16}
                    className={`transition-all duration-200 ${
                      isActive ? "text-white" : "text-primary group-hover:scale-110"
                    }`}
                  />
                </div>
                <span className="font-medium">{item?.name}</span>

                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                )}

                {isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </NavigationLink>
            );
          })}
        </nav>
      </div>
    </div>
  </div>
</div>


      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-elevation lg:hidden">
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <Link to="/electric-motor-design-services-landing-page" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              {/* Logo with sandal background */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#fff3db] rounded-xl shadow-md border border-gray-300">
                    <AppImage 
                      // src="/assets/images/Veenus_nova_logo.jpg" 
                      src={VeenusLogo}
                      alt="Veenus Nova" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary tracking-tight  text-green-600">Veenus Nova </span>
                  <span className="text-sm font-medium text-accent -mt-1 ">Innovation Centre</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="relative hover:bg-primary/10"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="transition-transform duration-200 ease-out text-primary"
                />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
              <nav className="px-6 py-4 space-y-2">
                {navigationItems?.map((item, index) => {
                  const isActive = isActiveRoute(item?.href, item?.isHash);
                  
                  const NavigationLink = item?.isHash ? HashLink : Link;
                  const linkProps = item?.isHash 
                    ? { to: item?.href, scroll: scrollWithOffset }
                    : { to: item?.href };

                  return (
                    <NavigationLink
                      key={item?.name}
                      {...linkProps}
                      onClick={handleMobileMenuClose}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ease-out ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 ${
                        isActive 
                          ? 'bg-white/20' :'bg-primary/10'
                      }`}>
                        <Icon 
                          name={item?.icon} 
                          size={18} 
                          className={isActive ? 'text-white' : 'text-primary'}
                        />
                      </div>
                      <span>{item?.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </NavigationLink>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;