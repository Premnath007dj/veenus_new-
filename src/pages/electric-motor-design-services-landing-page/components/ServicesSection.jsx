import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCategories = [
    {
      title: "Design & Development",
      description: "From concept to prototype with cutting-edge engineering",
      color: "from-primary to-primary/80",
      services: [
        {
          id: 1,
          icon: "Settings",
          title: "Motor Design & Development",
          description: "Complete motor design from concept to prototype with advanced electromagnetic simulation.",
          features: ["3D Modeling & FEA Analysis: Precision layouts tailored for manufacturability", "Prototype Development: Rapid prototyping – up to 5 sample units for validation.", "Application Focus: Automotive (seat motors, steering, E-rickshaw propulsion), domestic (fans, pumps, appliances), and industrial (lift actuators, defence, textile)"]
        },
        {
          id: 2,
          icon: "Cpu",
          title: "Control System Integration",
          description: "Advanced motor control algorithms and power electronics integration.",
          features: ["FOC Control", "Sensorless Operation", "Real-time Monitoring Benefit from customized control strategies ensuring peak efficiency and reliability.   "]
        },
        {
          id: 3,
          icon: "Target",
          title: "Custom Motor Solutions",
          description: "Tailored motor designs for unique performance requirements.",
          features: ["Bespoke Design", "Application-Specific: Solutions for automotive actuators, household appliances, industrial machinery, agricultural tools, defence-grade systems, drones, and more.", "Performance Optimized: Motors designed for high reliability, efficiency, cost-effectiveness, and alignment between simulation and real-world results."]
        }
      ]
    },
    {
      title: "Analysis & Optimization",
      description: "Advanced simulation and performance enhancement",
      color: "from-accent to-accent/80",
      services: [
        {
          id: 4,
          icon: "BarChart3",
          title: "Electromagnetic Analysis",
          description: "Comprehensive FEA analysis for magnetic field distribution and losses.",
          features: ["Maxwell Simulation", "Harmonic Analysis", "Loss Calculation","Back EMF and Speed-Torque Characteristic Validation"]
        },
        {
          id: 5,
          icon: "Zap",
          title: "Performance Optimization",
          description: "Enhance efficiency, torque density, and power output optimization.",
          features: ["Multi-Objective Optimization:", "Real-time Tuning"]
        },
        {
          id: 6,
          icon: "Layers",
          title: "Multi-Physics Simulation",
          description: "Integrated electromagnetic, thermal, and mechanical simulation.",
          features: ["Coupled Analysis", "Stress Testing", "Vibration Modeling"]
        }
      ]
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing and quality assurance",
      color: "from-success to-success/80",
      services: [
        {
          id: 7,
          icon: "Activity",
          title: "Vibration & NVH Analysis",
          description: "Advanced noise, vibration, and harshness analysis with mitigation.",
          features: ["Modal Analysis", "Acoustic Testing", "Mitigation Strategies"]
        },
        {
          id: 8,
          icon: "Shield",
          title: "Motor Testing & Validation",
          description: "Comprehensive testing protocols and environmental validation.",
          features: ["Performance Testing", "Endurance Testing", "Environmental"]
        },
        {
          id: 9,
          icon: "CheckCircle",
          title: "Quality Assurance",
          description: "Rigorous quality control and international standards compliance.",
          features: ["ISO Compliance", "Reliability Testing", "Documentation"]
        }
      ]
    },
    {
      title: "Support & Manufacturing",
      description: "Production support and technical consultation",
      color: "from-warning to-warning/80",
      services: [
        {
          id: 10,
          icon: "Wrench",
          title: "Manufacturing Support",
          description: "Production-ready design optimization and process consultation.",
          features: ["DFM Analysis", "Process Optimization", "Quality Control"]
        },
        {
          id: 11,
          icon: "Users",
          title: " Consultation",
          description: "technical consultation services.",
          features: ["Design Input Consulting","Product Benchmarking & Teardown Analysis", "Knowledge Transfer"]
        },
        {
          id: 12,
          icon: "FileText",
          title: "Technical Documentation",
          description: "Comprehensive reports, specifications, and manufacturing docs.",
          features: ["Design Documents", "Test Reports", "Manufacturing Specs"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            <span className="text-gradient">Comprehensive</span> Motor
            <br />Engineering Services
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From initial concept through production support, we deliver end-to-end electric motor 
            engineering solutions that exceed performance expectations and drive innovation forward.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">{category?.title}</h3>
                <p className="text-lg text-muted-foreground">{category?.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category?.services?.map((service) => (
                  <div 
                    key={service?.id}
                    className="group relative bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glass hover:shadow-elevation-hover transition-all duration-500 magnetic-hover"
                    onMouseEnter={() => setHoveredService(service?.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Service Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${category?.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon 
                        name={service?.icon} 
                        size={28} 
                        className="text-white drop-shadow-sm" 
                      />
                      
                      {/* Pulse effect on hover */}
                      {hoveredService === service?.id && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} rounded-2xl animate-ping opacity-20`}></div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service?.title}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service?.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {service?.features?.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                              {/* The bullet should not shrink */}
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              
                              {/* The text should grow and wrap correctly */}
                              <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                            </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <div className="pt-4">
                        <button className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 font-semibold group">
                          <span>Learn More</span>
                          <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-electric opacity-10"></div>
          
          <div className="relative z-10">
            <Icon name="Lightbulb" size={64} className="mx-auto mb-6 opacity-90" />
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Motor Design?
            </h3>
            
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their products with our 
              innovative motor engineering solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 magnetic-hover flex items-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Free Consultation</span>
              </button>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Clock" size={18} />
                  <span>24-48h Response</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="FileText" size={18} />
                  <span>Detailed Proposal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;