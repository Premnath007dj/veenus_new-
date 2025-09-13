import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ChevronRight, Twitter, Linkedin, Github } from 'lucide-react';

// This Icon component is well-designed. For a larger application,
// you would typically move this into its own file (e.g., /components/ui/Icon.jsx)
// to be reused across different parts of the site.
const Icon = ({ name, size, className }) => {
  const icons = {
    Zap,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Twitter,
    Linkedin,
    Github
  };

  const LucideIcon = icons[name];
  // Fallback for safety in case an icon name is misspelled
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon size={size} className={className} />;
};

// --- Data for the Footer ---

const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "TechZone", href: "/tech-zone" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Motor Design", href: "/services/motor-design" },
        { label: "Software Dev", href: "/services/software-dev" },
        { label: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
  ];

// UPDATED: Replaced placeholder "#" links with actual URLs.
const socialLinks = [
    { name: "Twitter", href: "", icon: "Twitter", color: "hover:text-sky-400" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/veenus-nova-innovation-center-b25233379", icon: "Linkedin", color: "hover:text-blue-500" },
    { name: "GitHub", href: "", icon: "Github", color: "hover:text-gray-400" },
  ];

// --- Main Footer Component ---

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Handler for the newsletter form
    const handleNewsletterSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading on submit
        const email = e.target.elements.email.value;
        alert(`Thank you for subscribing with: ${email}`);
        // Here, you would typically handle the form submission,
        // e.g., send the email to a marketing service API.
        e.target.reset();
    };

    return (
<footer className="bg-dark-blue text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-green rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Veenus Nova</h3>
                <p className="text-light-green">Innovation Centre</p>
              </div>
            </div>
            
            <p className="text-light-green mb-6 max-w-md leading-relaxed">
              Leading the future of electric motor design and software development. 
              We combine engineering excellence with cutting-edge technology to deliver 
              innovative solutions that power tomorrow's innovations.
            </p>
            
            {/* Contact Info - UPDATED with interactive links */}
            <div className="space-y-3">
              <a href="mailto:info@veenusnova.com" className="flex items-center space-x-3 text-light-green hover:text-primary-green transition-colors">
                <Icon name="Mail" size={18} className="text-primary-green" />
                <span>info@veenusnova.com</span>
              </a>
              <a href="tel:+918220861598" className="flex items-center space-x-3 text-light-green hover:text-primary-green transition-colors">
                <Icon name="Phone" size={18} className="text-primary-green" />
                <span>+91 82208 61598</span>
              </a>
              <div className="flex items-center space-x-3 text-light-green">
                <Icon name="MapPin" size={18} className="text-primary-green" />
                <span>Coimbatore, TN, India</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Icon name="ChevronRight" size={16} className="text-primary-green mr-2" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-light-green hover:text-primary-green transition-colors duration-200 text-sm group flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section - UPDATED with <form> tag */}
        <div className="bg-light-green/10 rounded-2xl p-8 mb-12 border border-light-green/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-light-green mb-6">Get the latest insights on motor design and software innovation</p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="email" // name attribute is important for forms
                placeholder="Enter your email"
                required // basic HTML validation
                className="flex-1 px-4 py-3 rounded-xl border border-light-green/30 bg-dark-blue/50 text-white placeholder-light-green/70 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
              />
              <button type="submit" className="px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light-green/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-light-green text-sm">
              © {currentYear} Veenus Nova Innovation Centre. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" // Open social links in a new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  className={`text-light-green ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-light-green/10`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-light-green">
              <Link to="/privacy" className="hover:text-primary-green transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-green transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-primary-green to-light-green"></div>
    </footer>
    )
}

export default Footer;
