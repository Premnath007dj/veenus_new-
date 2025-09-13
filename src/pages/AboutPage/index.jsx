import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import HeroSection from '../../components/ui/HeroSection';

import Timeline from '../../components/ui/Timeline';

const AboutPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas animation logic will go here
    // For now, it's a placeholder
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Placeholder animation: draw a simple rotating square
    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.fillStyle = 'rgba(26, 35, 126, 0.5)'; // dark-blue/40
      ctx.fillRect(-50, -50, 100, 100);
      ctx.restore();
      angle += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();



  const coreExpertise = [
    { category: "Motor Technologies", items: ["High-Torque PMSM Motors", "Custom BLDC Motor Design", "Efficient Synchronous Reluctance (SynRM) Motors", "Reliable PMDC Motors"], icon: "Settings", color: "from-primary-green to-light-green" },
    { category: "Engineering Services", items: ["Advanced Electromagnetic & FEMM Analysis", "Back EMF & Thermal Analysis", "Rapid Prototype Electric Motor Development", "Comprehensive NVH & Validation Testing"], icon: "Cpu", color: "from-light-green to-primary-green" },
    { category: "Applications", items: ["Automotive & E-mobility Solutions", "High-Efficiency Domestic Appliances", "Industrial Automation Systems", "Defence & Aerospace Actuators"], icon: "Car", color: "from-primary-green to-light-green" }
  ];

  const valuePropositions = [
    { title: "Simulation-to-Reality Fidelity", description: "Our electromagnetic simulations and FEMM analysis deliver predictions you can trust, minimizing costly iterations and accelerating your development cycle.", icon: "Target", gradient: "from-primary-green to-light-green" },
    { title: "Boutique Expertise, Tailored for You", description: "We provide custom BLDC motor design and PMSM motor simulation consulting to meet your exact specifications, whether for a medical device or agricultural machinery.", icon: "Settings", gradient: "from-light-green to-primary-green" },
    { title: "Proven Engineering Excellence", description: "With over 6 years of focused experience, our team has a proven track record of solving complex motor design challenges across industries.", icon: "Clock", gradient: "from-primary-green to-light-green" },
    { title: "Your Collaborative R&D Partner", description: "We partner with you from concept to validation, acting as a seamless extension of your R&D team to ensure project success.", icon: "CheckCircle", gradient: "from-light-green to-primary-green" }
  ];

  const teamMembers = [
    { name: "Dr. Rajesh Kumar", role: "Lead Motor Design Engineer", expertise: "PMSM & BLDC Motors, Electromagnetic Simulation", experience: "8+ years", photo: "/assets/images/no_image.png", accent: "primary-green" },
    { name: "Priya Sharma", role: "Senior Electrical Engineer", expertise: "Motor Control Systems, Prototype Development", experience: "6+ years", photo: "/assets/images/no_image.png", accent: "light-green" },
    { name: "Arun Patel", role: "Simulation Specialist", expertise: "FEA Analysis, Thermal Management, Validation", experience: "7+ years", photo: "/assets/images/no_image.png", accent: "primary-green" },
    { name: "Meera Iyer", role: "Software Development Lead", expertise: "Web & Mobile Apps, Data Visualization", experience: "5+ years", photo: "/assets/images/no_image.png", accent: "light-green" }
  ];

  const story = [
    { year: '2018', title: 'The Genesis', description: 'Founded to bridge the gap between theoretical design and real-world application, we established a culture of agile, collaborative engineering from day one.'},
    { year: '2019', title: 'First Major Project', description: 'In partnership with a leading automotive client, we delivered a high-performance BLDC motor for an automotive actuator, achieving 97% efficiency and demonstrating our rapid prototyping capabilities.'},
    { year: '2021', title: 'Expansion of Services', description: 'Evolved our offerings to include end-to-end product development, from initial concept and FEMM analysis to software integration, becoming a comprehensive solution partner.'},
    { year: '2023', title: 'New Innovation Lab', description: 'Launched our state-of-the-art innovation lab to provide advanced validation, including NVH analysis and thermal analysis, ensuring every motor meets rigorous performance standards.'},
  ];

  return (
    <>
      <Header />
      <HeroSection
        title={<>About <span className="text-light-green">Veenus Nova</span></>}
        description="We partner with you to pioneer the future of electric motor technology, delivering precision engineering and cutting-edge solutions."
        buttons={[
          { text: "Meet Our Team", icon: "Users", props: { variant: "secondary", className: "bg-white text-dark-blue hover:bg-light-green hover:text-white border-white" } },
          { text: "Our Story", icon: "BookOpen", props: { variant: "secondary", className: "bg-transparent text-white border-white hover:bg-white hover:text-dark-blue" } },
        ]}
      />

        {/* Our Story Section */}
        <section className="py-24 bg-light-beige relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A237E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Our Story</h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-4" />
              <p className="muted text-lg max-w-3xl mx-auto">Our journey is one of agile innovation and collaborative partnerships, turning ambitious visions into market-ready realities.</p>
            </div>
            <Timeline items={story} />
          </div>
        </section>

        {/* Core Expertise Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#4CAF50 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-light-beige/30 via-transparent to-light-beige/30" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Core Expertise</h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-4" />
              <p className="muted text-lg max-w-3xl mx-auto">Our technical proficiency in specialized motor technologies and engineering services establishes our credibility as your expert design partner.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreExpertise.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-light-green rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Top accent gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60`} />
                    
                    {/* Subtle corner glow */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary-green/5 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-light-green/5 rounded-full blur-xl" />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={item.icon} size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark-blue mb-4 group-hover:text-primary-green transition-colors duration-300">{item.category}</h3>
                      <ul className="space-y-3">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex} className="flex items-center text-gray-600 group-hover:text-dark-blue transition-colors duration-200">
                            <div className="w-2 h-2 bg-primary-green rounded-full mr-3 group-hover:bg-light-green transition-colors duration-200" />
                            {subItem}
                          </li>
                        ))}
                  </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-light-beige relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A237E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Value Proposition</h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-4" />
              <p className="muted text-lg max-w-3xl mx-auto">We operate as an agile and collaborative extension of your team, delivering these key advantages.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {valuePropositions.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-light-green rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Top accent gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-60`} />
                    
                    {/* Subtle corner glow */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary-green/5 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-light-green/5 rounded-full blur-xl" />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={item.icon} size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-dark-blue mb-4 group-hover:text-primary-green transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 group-hover:text-dark-blue transition-colors duration-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        {/* <section className="py-24 bg-white relative overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#4CAF50 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-light-beige/30 via-transparent to-light-beige/30" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Our Team</h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-4" />
              <p className="muted text-lg max-w-3xl mx-auto">The brilliant minds behind our innovative solutions.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-light-green rounded-xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${member.accent} to-light-green opacity-60`} />
                    
                    
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary-green/5 rounded-full blur-xl" />
                    
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary-green to-light-green p-1 shadow-soft">
                          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <Icon name="User" size={32} className="text-gray-400" />
                          </div>
                        </div>
                        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-${member.accent} text-white text-xs font-semibold rounded-full shadow-soft`}>
                          {member.experience}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-dark-blue mb-2 group-hover:text-primary-green transition-colors duration-300">{member.name}</h3>
                      <p className="text-primary-green font-semibold text-sm mb-3">{member.role}</p>
                      <p className="text-sm text-gray-600 group-hover:text-dark-blue transition-colors duration-200">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-br from-dark-blue to-primary-green relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-light-green/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Circuit-like lines */}
            <div className="absolute top-1/3 left-10 w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-1/3 right-10 w-16 h-px bg-gradient-to-r from-transparent via-light-green/40 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Engineer Your Next Breakthrough?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's partner on your next project. Whether it's custom drone motor engineering or a high-efficiency water pump design, we're ready to collaborate and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-dark-blue hover:bg-light-green hover:text-white border-white">
                <Icon name="Mail" className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
              <Button variant="secondary" className="bg-transparent text-white border-white hover:bg-white hover:text-dark-blue" onClick={() => navigate('/contact')}>
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      
      <Footer />
    </>
  );
};

export default AboutPage;
