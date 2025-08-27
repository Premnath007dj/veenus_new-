import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const [counters, setCounters] = useState({
    projects: 0,
    engineers: 0,
    experience: 0,
    countries: 0
  });

  const achievements = [
    {
      id: 'projects',
      icon: "Trophy",
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across automotive, industrial, and aerospace sectors",
      color: "text-primary"
    },
    {
      id: 'engineers',
      icon: "Users",
      number: 50,
      suffix: "+",
      label: "Expert Engineers",
      description: "Multidisciplinary team of motor design specialists and simulation experts",
      color: "text-accent"
    },
    {
      id: 'experience',
      icon: "Clock",
      number: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in electric motor design and optimization services",
      color: "text-success"
    },
    {
      id: 'countries',
      icon: "Globe",
      number: 25,
      suffix: "+",
      label: "Countries Served",
      description: "Global reach with clients spanning multiple continents and industries",
      color: "text-warning"
    }
  ];

  const expertise = [
    { name: "Permanent Magnet Synchronous Motors (PMSM)", level: 95, color: "bg-primary" },
    { name: "Brushless DC Motors (BLDC)", level: 92, color: "bg-accent" },
    { name: "Synchronous Reluctance Motors (SynRM)", level: 88, color: "bg-success" },
    { name: "Permanent Magnet DC Motors (PMDC)", level: 90, color: "bg-warning" },
    { name: "Induction Motors & Linear Motors", level: 85, color: "bg-purple-500" },
    { name: "High-Speed & High-Temperature Motors", level: 87, color: "bg-pink-500" }
  ];

  const technologies = [
    { name: "ANSYS Maxwell", icon: "Cpu", description: "Electromagnetic Simulation" },
    { name: "COMSOL Multiphysics", icon: "Layers", description: "Multi-Physics Analysis" },
    { name: "SolidWorks", icon: "Box", description: "3D Design & Modeling" },
    { name: "MATLAB/Simulink", icon: "BarChart3", description: "Control Systems" },
    { name: "Altair Flux", icon: "Zap", description: "Electromagnetic Design" },
    { name: "AVL CRUISE", icon: "Car", description: "Vehicle Simulation" }
  ];

  const tabs = [
    { id: 'expertise', label: 'Motor Expertise', icon: 'Zap' },
    { id: 'technology', label: 'Technologies', icon: 'Cpu' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' }
  ];

  // Counter animation effect
  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    achievements?.forEach((achievement) => {
      let currentCount = 0;
      const increment = achievement?.number / steps;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= achievement?.number) {
          setCounters(prev => ({ ...prev, [achievement?.id]: achievement?.number }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [achievement?.id]: Math.floor(currentCount) }));
        }
      }, interval);
    });
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Lightbulb" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">About ElectroMotor Pro</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Pioneering the Future of
            <br /><span className="text-gradient">Electric Motor Technology</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Leading the industry with innovative design, advanced simulation, and precision engineering 
            excellence that powers the next generation of electric mobility and automation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Engineering Excellence Since 2009
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ElectroMotor Pro stands at the forefront of electric motor design and optimization, 
                delivering cutting-edge solutions that power electric vehicles, industrial automation, 
                and renewable energy systems worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our multidisciplinary team combines deep theoretical knowledge with practical 
                engineering experience, utilizing state-of-the-art simulation tools and advanced 
                manufacturing techniques.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="space-y-6">
              <div className="flex space-x-1 bg-muted/50 rounded-2xl p-1">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeTab === tab?.id
                        ? 'bg-white shadow-elevation text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={20} />
                    <span className="font-semibold">{tab?.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[300px]">
                {activeTab === 'expertise' && (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-foreground mb-6">Motor Technology Expertise</h4>
                    {expertise?.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground">{skill?.name}</span>
                          <span className="text-sm text-muted-foreground">{skill?.level}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${skill?.color} transition-all duration-1000`}
                            style={{ width: `${skill?.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'technology' && (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-foreground mb-6">Advanced Technologies & Tools</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {technologies?.map((tech, index) => (
                        <div key={index} className="bg-muted/30 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300">
                          <div className="flex items-center space-x-3 mb-2">
                            <Icon name={tech?.icon} size={24} className="text-primary" />
                            <span className="font-semibold text-foreground">{tech?.name}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{tech?.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-foreground mb-6">Key Achievements & Milestones</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {achievements?.slice(0, 4)?.map((achievement) => (
                        <div key={achievement?.id} className="text-center">
                          <div className={`w-12 h-12 ${achievement?.color?.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <Icon name={achievement?.icon} size={24} className={achievement?.color} />
                          </div>
                          <div className="text-2xl font-bold text-foreground">
                            {counters?.[achievement?.id]}{achievement?.suffix}
                          </div>
                          <div className="text-sm font-semibold text-foreground">{achievement?.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-elevation-hover">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop&crop=center"
                alt="Advanced electric motor engineering workspace with simulation tools"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Statistics Cards */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-glass">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-glass">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">15%</div>
                  <div className="text-sm text-muted-foreground">Avg Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <Icon name="Target" size={64} className="mx-auto mb-8 opacity-90" />
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h3>
            
            <p className="text-xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-8">
              To accelerate the global transition to sustainable transportation and clean energy 
              by delivering world-class electric motor solutions that combine exceptional performance, 
              reliability, and efficiency with innovative design and manufacturing excellence.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Sustainability', 'Innovation', 'Excellence', 'Partnership']?.map((value, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;