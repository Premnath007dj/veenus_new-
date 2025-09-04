import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onContactClick }) => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const motorTypes = [
    { name: 'PMSM', fullName: 'Permanent Magnet Synchronous Motors', color: 'text-primary-600', image: '/veenus/assets/images/pmsm.png' },
    { name: 'BLDC', fullName: 'Brushless DC Motors', color: 'text-accent-500', image: '/veenus/assets/images/bldc.png' },
    { name: 'SynRM', fullName: 'Synchronous Reluctance Motors', color: 'text-primary-700', image: '/veenus/assets/images/synrm.png' },
    { name: 'PMDC', fullName: 'Permanent Magnet DC Motors', color: 'text-accent-600', image: '/veenus/assets/images/pmdc.png' }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: 'Rocket' },
    { value: '6+', label: 'Years Experience', icon: 'Clock' },
    { value: '98%', label: 'Success Rate', icon: 'Target' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % motorTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-accent-50 overflow-hidden pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-accent-50/20 opacity-40"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 border-2 border-primary-300 rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-accent-200 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-accent-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Motor Circuit Graphics */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-600">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="10" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-snug sm:leading-tight">
            <span className="block gradient-text">Veenus Nova</span>
            <span className="block text-accent-600">Innovation Centre</span>
          </h1>
          
          {/* Dynamic Motor Type Display */}
          <div className="mb-8">
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Specializing in cutting-edge design and optimization for
            </p>
            <div className="h-48 flex flex-col sm:flex-row items-center justify-center">
              <img src={motorTypes[currentTypeIndex].image} alt={motorTypes[currentTypeIndex].name} className="h-24 w-24 sm:h-32 sm:w-32 object-contain mb-4 sm:mb-0 sm:mr-8" />
              <div>
                <div className={`text-3xl lg:text-4xl font-bold transition-all duration-500 ${motorTypes[currentTypeIndex].color}`}>
                  {motorTypes[currentTypeIndex].name}
                </div>
                <p className="text-lg text-muted-foreground">
                  {motorTypes[currentTypeIndex].fullName}
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="default" 
              size="lg" 
              onClick={onContactClick}
              className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl magnetic-hover bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-xl hover:shadow-2xl text-white border-0"
            >
              <Icon name="Rocket" size={24} className="mr-3" />
              Start Your Project
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border-2 border-primary-200 hover:border-primary-400 magnetic-hover bg-white/80 backdrop-blur-sm hover:bg-primary-50 transition-all duration-300"
            >
              <Icon name="Play" size={24} className="mr-3" />
              Learn More
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-8 sm:space-y-0 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 magnetic-hover"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators
          <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-8 shadow-lg">
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              Trusted by Global Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { icon: "Award", text: "ISO 9001 Certified", color: "text-accent-600" },
                { icon: "Shield", text: "IATF 16949 Compliant", color: "text-primary-600" },
                { icon: "Zap", text: "IEC 60034 Standards", color: "text-accent-500" },
                { icon: "Globe", text: "25+ Countries Served", color: "text-primary-500" }
              ].map((trust, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={trust.icon} size={20} className={trust.color} />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-primary-600 transition-colors duration-300">
                    {trust.text}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
