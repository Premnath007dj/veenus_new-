import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Product Benchmarking', href: '/services#benchmarking' },
        { label: 'Electromagnetic Simulation', href: '/services#simulation' },
        { label: 'Product Design & Development', href: '/services#design' },
        { label: 'Technical Documentation', href: '/services#documentation' },
        { label: 'Web & App Development', href: '/services#software' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Tech Zone', href: '/tech-zone' },
        { label: 'Research Papers', href: '/tech-zone#papers' },
        { label: 'Case Studies', href: '/tech-zone#cases' },
        { label: 'Blog', href: '/tech-zone#blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/contact#help' },
        { label: 'Documentation', href: '/tech-zone#docs' },
        { label: 'Training', href: '/contact#training' },
        { label: 'Maintenance', href: '/contact#maintenance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: 'Youtube', href: '#', color: 'hover:text-red-600' },
    { name: 'GitHub', icon: 'Github', href: '#', color: 'hover:text-gray-700' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-400/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 bg-accent-500/10 rounded-full animate-float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Veenus Nova</h3>
                <p className="text-primary-200">Innovation Centre</p>
              </div>
            </div>
            
            <p className="text-primary-200 mb-6 max-w-md leading-relaxed">
              Leading the future of electric motor design and software development. 
              We combine engineering excellence with cutting-edge technology to deliver 
              innovative solutions that power tomorrow's innovations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="Mail" size={18} className="text-accent-400" />
                <span>info@veenusnova.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="Phone" size={18} className="text-accent-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="MapPin" size={18} className="text-accent-400" />
                <span>Innovation District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Icon name="ChevronRight" size={16} className="text-accent-400 mr-2" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-200 hover:text-accent-400 transition-colors duration-200 text-sm group flex items-center"
                    >
                      <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-800/50 to-accent-800/50 rounded-2xl p-8 mb-12 border border-primary-700/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-primary-200 mb-6">Get the latest insights on motor design and software innovation</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-primary-600 bg-primary-800/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700/30 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-primary-300 text-sm">
              © {currentYear} Veenus Nova Innovation Centre. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-primary-300 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-primary-800/50`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-primary-300">
              <Link to="/privacy" className="hover:text-accent-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600"></div>
    </footer>
  );
};

export default Footer;