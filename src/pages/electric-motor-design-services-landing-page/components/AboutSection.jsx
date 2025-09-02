import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Our Story', icon: 'BookOpen' },
    { id: 'expertise', label: 'Core Expertise', icon: 'Zap' },
    { id: 'values', label: 'Value Proposition', icon: 'Target' },
    { id: 'team', label: 'Our Team', icon: 'Users' }
  ];

  const coreExpertise = [
    {
      category: "Motor Technologies",
      items: ["PMSM Motors", "BLDC Motors", "SynRM Motors", "PMDC Motors"],
      icon: "Settings",
      color: "from-primary-500 to-primary-700"
    },
    {
      category: "Engineering Services",
      items: ["Electric Motor Simulation", "Electrical Design", "Prototype Development", "Validation Testing"],
      icon: "Cpu",
      color: "from-accent-500 to-accent-700"
    },
    {
      category: "Applications",
      items: ["Automotive", "Domestic", "Industrial", "Aerospace"],
      icon: "Car",
      color: "from-primary-600 to-primary-800"
    }
  ];

  const valuePropositions = [
    {
      title: "Simulation-Real World Alignment",
      description: "Strong alignment between simulation results and real-world performance, ensuring reliable predictions.",
      icon: "Target",
      color: "from-primary-500 to-primary-700"
    },
    {
      title: "Application-Specific Solutions",
      description: "Tailored solutions designed for your specific application requirements and performance targets.",
      icon: "Settings",
      color: "from-accent-500 to-accent-700"
    },
    {
      title: "6+ Years Experience",
      description: "Over 6 years of hands-on experience in electric motor design and engineering excellence.",
      icon: "Clock",
      color: "from-primary-600 to-primary-800"
    },
    {
      title: "End-to-End Support",
      description: "Complete support from concept to prototype delivery and validation testing.",
      icon: "CheckCircle",
      color: "from-accent-600 to-accent-800"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Lead Motor Design Engineer",
      expertise: "PMSM & BLDC Motors, Electromagnetic Simulation",
      experience: "8+ years",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Senior Electrical Engineer",
      expertise: "Motor Control Systems, Prototype Development",
      experience: "6+ years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arun Patel",
      role: "Simulation Specialist",
      expertise: "FEA Analysis, Thermal Management, Validation",
      experience: "7+ years",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Meera Iyer",
      role: "Software Development Lead",
      expertise: "Web & Mobile Apps, Data Visualization",
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary-50 via-background to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Icon name="Lightbulb" size={20} className="text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">About Veenus Nova</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Building the Future of
            <br /><span className="gradient-text">Electric Innovation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Veenus Nova Innovation Centre is a leading engineering and software company 
            specializing in electric motor design, simulation, and development solutions.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center space-x-2 bg-primary-100/50 rounded-2xl p-1 max-w-2xl mx-auto shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white shadow-lg text-primary-600 border border-primary-200 scale-105'
                    : 'text-muted-foreground hover:text-primary-600 hover:scale-105'
                }`}
              >
                <Icon name={tab.icon} size={20} />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 lg:p-12 shadow-xl min-h-[600px] hover:shadow-2xl transition-all duration-300">
          {/* Company Story */}
          {activeTab === 'story' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Journey</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From humble beginnings to becoming a trusted partner in electric motor innovation
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-foreground">How It All Started</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Veenus Nova Innovation Centre was founded in 2018 with a vision to bridge the gap 
                    between theoretical motor design and practical implementation. Our founders recognized 
                    the need for engineering solutions that could deliver real-world results.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What began as a small team of passionate engineers has grown into a comprehensive 
                    innovation center, serving clients across automotive, industrial, and domestic sectors.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200 shadow-lg">
                    <h5 className="font-bold text-foreground mb-3">Our Vision</h5>
                    <p className="text-muted-foreground">
                      "To accelerate the adoption of electric motor technology through innovative design, 
                      precise simulation, and reliable engineering solutions that exceed performance expectations."
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Icon name="TrendingUp" size={64} className="text-primary-600 mx-auto mb-4" />
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-primary-600">6+</div>
                        <div className="text-muted-foreground">Years of Innovation</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-600">50+</div>
                        <div className="text-muted-foreground">Projects Delivered</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-700">98%</div>
                        <div className="text-muted-foreground">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Core Expertise */}
          {activeTab === 'expertise' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Core Expertise</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Over 6 years of specialized experience in electric motor simulation, electrical design, 
                  prototype development, and validation testing
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {coreExpertise.map((category, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={category.icon} size={32} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200 shadow-lg">
                <h4 className="text-xl font-bold text-foreground mb-4 text-center">Why Choose Our Expertise?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-accent-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-foreground">Proven Track Record</h5>
                      <p className="text-muted-foreground text-sm">Successfully delivered projects across multiple industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-accent-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-foreground">Advanced Tools</h5>
                      <p className="text-muted-foreground text-sm">State-of-the-art simulation and design software</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Value Proposition */}
          {activeTab === 'values' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Value Proposition</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  What sets us apart and makes us the preferred choice for electric motor innovation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {valuePropositions.map((proposition, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${proposition.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={proposition.icon} size={32} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{proposition.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{proposition.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-3xl p-8 text-center shadow-2xl">
                <h4 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h4>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Join the growing list of satisfied clients who have transformed their motor designs 
                  with our innovative solutions and proven expertise.
                </p>
                <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          )}

          {/* Team Section */}
          {activeTab === 'team' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Experienced professionals dedicated to delivering exceptional results and driving innovation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-200 shadow-lg group-hover:border-primary-300 transition-all duration-300">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                    <p className="text-primary-600 font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-xs mb-2">{member.expertise}</p>
                    <p className="text-accent-600 font-medium text-sm">{member.experience}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200 text-center shadow-lg">
                <h4 className="text-xl font-bold text-foreground mb-4">Join Our Team</h4>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented engineers and developers who share our passion for innovation
                </p>
                <button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  View Open Positions
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;