import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUsSection = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const advantages = [
    {
      icon: "Crosshair", 
      title: "Precision Engineering",
      description: "Meticulous attention to detail with rigorous testing and validation processes ensuring optimal performance and unmatched reliability.",
      features: ["±0.1% efficiency accuracy", "Six Sigma quality", "Comprehensive testing"],
      stat: { value: "99.8%", label: "Accuracy Rate" },
      color: "bg-red-600",
      bgPattern: "bg-accent/5"
    },
    {
      icon: "Zap",
      title: "Performance Excellence",
      description: "Maximizing motor efficiency, power density, and operational performance through advanced optimization algorithms and methodologies.",
      features: ["Multi-objective optimization", "Real-time performance tuning", "Predictive analytics", "Edge AI integration"],
      stat: { value: "25%", label: "Performance Boost" },
      color: "from-success to-success/80",
      bgPattern: "bg-success/5"
    },
    {
      icon: "Users",
      title: "Expert Team", 
      description: "World-class engineers with decades of combined experience in electromagnetic design, thermal management, and motor development.",
      features: [ "Industry veterans", "Continuous innovation", "Global perspective"],
      color: "from-warning to-warning/80",
      bgPattern: "bg-warning/5"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setActiveAdvantage((prev) => (prev + 1) % advantages?.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLoading, advantages?.length]);

  if (isLoading) {
    return (
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-pulse-bg">
            <div className="inline-flex items-center space-x-2 bg-gray-200/80 rounded-full px-6 py-3 mb-6 h-10 w-1/3 mx-auto"></div>
            <div className="h-16 bg-gray-300/80 rounded-md w-2/3 mx-auto mb-8"></div>
            <div className="h-8 bg-gray-300/80 rounded-md w-1/2 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-success/5 to-warning/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Trophy" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Why Choose ElectroMotor Pro</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            The <span className="text-gradient">Competitive Edge</span>
            <br />You've Been Looking For
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover what sets us apart in the electric motor engineering landscape and why 
            global leaders trust us with their most critical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            {advantages?.map((advantage, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-500 ${
                  activeAdvantage === index 
                    ? 'transform translate-x-4' 
                    : 'hover:translate-x-2'
                }`}
                onClick={() => setActiveAdvantage(index)}
              >
                <div className={`relative bg-white/80 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-500 ${
                  activeAdvantage === index 
                    ? 'border-primary shadow-elevation-hover' 
                    : 'border-border/30 hover:border-primary/30 shadow-elevation'
                }`}>
                  
                  {activeAdvantage === index && (
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeAdvantage === index 
                        ? `bg-gradient-to-br ${advantage?.color}` 
                        : `${advantage?.bgPattern}`
                    }`}>
                      <Icon 
                        name={advantage?.icon} 
                        size={28} 
                        className={activeAdvantage === index ? "text-white" : "text-accent-600"} 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeAdvantage === index ? "text-primary" : "text-foreground"
                      }`}>
                        {advantage?.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-border/30 rounded-3xl p-8 shadow-glass">
                <div className={`w-20 h-20 bg-gradient-to-br ${advantages?.[activeAdvantage]?.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={advantages?.[activeAdvantage]?.icon} size={36} className="text-white" />
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {advantages?.[activeAdvantage]?.title}
                </h4>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {advantages?.[activeAdvantage]?.description}
                </p>

                <div className="space-y-3 mb-8">
                  {advantages?.[activeAdvantage]?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} className="text-success" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {advantages?.[activeAdvantage]?.stat && (
                  <div className={`${advantages?.[activeAdvantage]?.bgPattern} rounded-2xl p-6 text-center`}>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {advantages?.[activeAdvantage]?.stat?.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-semibold">
                      {advantages?.[activeAdvantage]?.stat?.label}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
            
            <div className="relative z-10">
              <Icon name="Sparkles" size={64} className="mx-auto mb-8 opacity-90" />
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Experience the ElectroMotor Pro Advantage
              </h3>
              
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join the ranks of industry leaders who have transformed their products 
                with our innovative motor engineering solutions.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 magnetic-hover flex items-center space-x-2 shadow-elevation">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule Consultation</span>
                </button>
                
                <div className="flex items-center space-x-8">
                  {[
                    { icon: "Phone", text: "Free Call" },
                    { icon: "FileText", text: "Detailed Analysis" },
                    { icon: "Clock", text: "Quick Response" }
                  ]?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                      <Icon name={benefit?.icon} size={18} />
                      <span className="text-sm">{benefit?.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;