import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { GOOGLE_SHEETS_CONFIG } from '../../../config/googleSheets';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SHEETS_CONFIG.WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Success - show thank you message
        setIsSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', subject: '', message: ''
        });
      } else {
        // Error from Google Sheets
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You can add error handling here (show error message to user)
      alert('Sorry, there was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/90 backdrop-blur-sm border border-primary-200 rounded-3xl p-16 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Icon name="CheckCircle" size={48} className="text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">Thank You!</h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your message has been received. We'll get back to you within 24 hours 
              to discuss your project requirements.
            </p>

            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="magnetic-hover border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-50 via-background to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Icon name="MessageCircle" size={20} className="text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Let's Power Your <span className="gradient-text">Next Innovation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your motor design? Get in touch with our expert team 
            for a comprehensive consultation and project discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 border rounded-xl bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-primary-200'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-xl bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-primary-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91-00000 00000"
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 border rounded-xl bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                    errors.subject ? 'border-red-500' : 'border-primary-200'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
                  className={`w-full px-4 py-3 border rounded-xl bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none transition-all duration-200 ${
                    errors.message ? 'border-red-500' : 'border-primary-200'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  Minimum 10 characters ({formData.message.length}/10)
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 magnetic-hover shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Direct Contact Info */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                    <p className="text-lg font-semibold text-foreground">+91-00000 00000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="text-lg font-semibold text-foreground">hello@veenusnova.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office Location</p>
                    <p className="text-lg font-semibold text-foreground">Coimbatore, TN, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Find Us</h3>
              <div className="w-full h-64 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 rounded-2xl flex items-center justify-center group hover:scale-[1.02] transition-transform duration-300">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-primary-400 mx-auto mb-2 group-hover:text-primary-600 transition-colors duration-300" />
                  <p className="text-primary-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-primary-400">Google Maps integration</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <Icon name="Linkedin" size={24} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <Icon name="Twitter" size={24} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <Icon name="Github" size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;