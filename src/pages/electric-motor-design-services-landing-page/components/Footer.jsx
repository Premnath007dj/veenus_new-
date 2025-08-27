import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: 'Motor Design & Development', href: '#services', icon: 'Settings' },
        { name: 'Performance Optimization', href: '#services', icon: 'TrendingUp' },
        { name: 'Electromagnetic Analysis', href: '#services', icon: 'BarChart3' },
        { name: 'Thermal Management', href: '#services', icon: 'Thermometer' },
        { name: 'Testing & Validation', href: '#services', icon: 'CheckCircle' }
      ]
    },
    {
      title: "Company",
      links: [
        { name: 'About Us', href: '#about', icon: 'Users' },
        { name: 'Our Team', href: '#about', icon: 'User' },
        { name: 'Careers', href: '#', icon: 'Briefcase' },
        { name: 'News & Updates', href: '#', icon: 'Newspaper' },
        { name: 'Case Studies', href: '#', icon: 'FileText' }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: 'Technical Papers', href: '#', icon: 'Book' },
        { name: 'Design Guidelines', href: '#', icon: 'Clipboard' },
        { name: 'Motor Calculator', href: '#', icon: 'Calculator' },
        { name: 'FAQ', href: '#', icon: 'HelpCircle' },
        { name: 'Support Center', href: '#', icon: 'MessageCircle' }
      ]
    }
  ];

  const socialPlatforms = [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/electromotorpro', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/electromotorpro', color: 'hover:bg-blue-400' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/electromotorpro', color: 'hover:bg-red-600' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/electromotorpro', color: 'hover:bg-gray-800' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'IATF 16949:2016', description: 'Automotive Quality' },
    { name: 'IEC 60034', description: 'Motor Standards' }
  ];

  const quickContact = [
    { icon: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: 'Mail', value: 'info@electromotorpro.com', href: 'mailto:info@electromotorpro.com' },
    { icon: 'MapPin', value: '123 Innovation Drive, Tech City', href: '#' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email?.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Icon name="Zap" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-green-400">Veenus nova</span>
                <span className="text-sm font-medium text-accent -mt-1">Innovation Centre</span>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed text-lg">
              Pioneering the future of electric motor technology through innovative design, 
              advanced simulation, and precision engineering excellence.
            </p>

            {/* Quick Contact */}
            <div className="space-y-4">
              {quickContact?.map((contact, index) => (
                <a
                  key={index}
                  href={contact?.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={contact?.icon} size={18} />
                  </div>
                  <span className="text-sm">{contact?.value}</span>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialPlatforms?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 magnetic-hover ${social?.color} hover:scale-110`}
                    aria-label={`Follow us on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h3 className="text-xl font-bold mb-6">{section?.title}</h3>
              <ul className="space-y-4">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link?.href)}
                      className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <Icon 
                        name={link?.icon} 
                        size={16} 
                        className="text-accent group-hover:text-primary transition-colors duration-300" 
                      />
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {link?.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h4>
              <p className="text-white/80 text-lg">
                Get the latest insights on electric motor technology, industry trends, 
                and engineering innovations delivered to your inbox.
              </p>
            </div>
            
            <div>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl text-white font-semibold transition-all duration-300 magnetic-hover flex items-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <Icon name="ArrowRight" size={18} />
                  </button>
                </form>
              ) : (
                <div className="flex items-center space-x-3 bg-success/20 rounded-xl p-4">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                  <span className="text-success font-semibold">Successfully subscribed!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="border-t border-white/10 pt-12 mb-12">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-4">Certifications & Standards</h4>
            <p className="text-white/70">Committed to quality and compliance</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <div className="font-semibold text-white mb-2">{cert?.name}</div>
                <div className="text-sm text-white/70">{cert?.description}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Copyright */}
            {/* <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-white/70">
                © {currentYear} ElectroMotor Pro. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']?.map((policy) => (
                  <button 
                    key={policy}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                  >
                    {policy}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 group magnetic-hover self-start lg:self-auto"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name="ArrowUp" size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;