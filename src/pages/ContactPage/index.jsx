import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import { GOOGLE_SHEETS_CONFIG } from '../../config/googleSheets';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const scriptURL = GOOGLE_SHEETS_CONFIG.WEB_APP_URL;
      await fetch(scriptURL, { method: 'POST', body: JSON.stringify(formData), headers: { "Content-Type": "application/json" }, mode: "no-cors" });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="relative z-10 py-24">
          {/* Themed background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#2979FF 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-light-beige via-transparent to-white" />
          </div>
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
            <img src="/veenus_new-/assets/images/m2.png" alt="Background Overlay" className="w-full h-full object-cover animate-image-float" />
          </div>

          <div className="max-w-2xl mx-auto px-6 text-center relative">
            <div className="bg-white border border-light-green rounded-xl p-12 shadow-soft">
              <Icon name="CheckCircle" size={48} className="text-primary-green mx-auto mb-6" />
              <h2 className="heading-2 mb-4">Message Sent!</h2>
              <p className="muted text-lg mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
              <Button variant="default" onClick={() => setIsSubmitted(false)} className="shadow-soft hover:scale-105">Send Another Message</Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="relative py-24 bg-gradient-to-br from-[#212121] via-[#212121] to-[#00C853] overflow-hidden">
        {/* Animated motor/engineering background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-5">
            <img src="public/assets/images/m2.png" alt="Background Overlay" className="w-full h-full object-cover animate-image-float" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-green rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
          
          {/* Rotating gear elements */}
          <div className="absolute top-16 right-16 w-16 h-16 opacity-10">
            <svg viewBox="0 0 24 24" className="w-full h-full text-primary-green animate-spin-slow">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-12 h-12 opacity-8">
            <svg viewBox="0 0 24 24" className="w-full h-full text-light-green animate-spin-slower">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center text-white">
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Get in <span className="text-light-green">Touch</span>
              </h1>
              <div className={`mx-auto h-1 w-32 bg-gradient-to-r from-light-green to-white rounded-full mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
              <p className={`text-xl lg:text-2xl text-[#F5F5F5] max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                We'd love to hear from you! Reach out to us for inquiries, collaborations, or just to say hello.
              </p>
            </div>
          </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group">
              {/* Form container with enhanced styling */}
              <div className="bg-white border border-light-green rounded-xl p-8 shadow-soft relative overflow-hidden">
                {/* Top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-light-green to-primary-green opacity-60" />
                
                {/* Subtle corner glow */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary-green/5 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-light-green/5 rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-light-green rounded-lg flex items-center justify-center mr-4 shadow-soft">
                      <Icon name="Mail" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-blue">Send us a Message</h3>
                      <p className="text-[#212121]/80 text-sm">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name and Email Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-2 transition-colors duration-200">
                          Full Name
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg shadow-soft transition-all duration-300 ${errors.name ? 'border-red-400 bg-red-50' : 'border-light-green'}`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.name && <p className="text-sm text-red-500 mt-2 flex items-center"><Icon name="AlertCircle" className="w-4 h-4 mr-1" />{errors.name}</p>}
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-2 transition-colors duration-200">
                          Email Address
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg shadow-soft transition-all duration-300 ${errors.email ? 'border-red-400 bg-red-50' : 'border-light-green'}`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        {errors.email && <p className="text-sm text-red-500 mt-2 flex items-center"><Icon name="AlertCircle" className="w-4 h-4 mr-1" />{errors.email}</p>}
                      </div>
                    </div>
                    
                    {/* Subject Field */}
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-semibold text-dark-blue mb-2 transition-colors duration-200">
                        Subject
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="subject" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleInputChange} 
                          className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg shadow-soft transition-all duration-300 ${errors.subject ? 'border-red-400 bg-red-50' : 'border-light-green'}`}
                          placeholder="What's this about?"
                        />
                      </div>
                      {errors.subject && <p className="text-sm text-red-500 mt-2 flex items-center"><Icon name="AlertCircle" className="w-4 h-4 mr-1" />{errors.subject}</p>}
                    </div>
                    
                    {/* Message Field */}
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2 transition-colors duration-200">
                        Message
                      </label>
                      <div className="relative">
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="6" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg shadow-soft transition-all duration-300 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-light-green'}`}
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>
                      {errors.message && <p className="text-sm text-red-500 mt-2 flex items-center"><Icon name="AlertCircle" className="w-4 h-4 mr-1" />{errors.message}</p>}
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        variant="default" 
                        type="submit" 
                        className="w-full py-4 text-lg font-semibold shadow-soft hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden group" 
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Icon name="Send" className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-light-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </div>
                  </form>
                </div>
                </div>
            </div>
            <div className="space-y-8">
              {/* Contact Information Card -- UPDATED */}
              <div className="bg-white border border-light-green rounded-xl p-8 shadow-soft relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-light-green to-primary-green opacity-60" />
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary-green/5 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-light-green rounded-lg flex items-center justify-center mr-3 shadow-soft">
                      <Icon name="Phone" className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue">Contact Information</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors duration-200">
                        <Icon name="Mail" className="w-4 h-4 text-primary-green" />
                      </div>
                      <div>
                        <p className="text-sm text-[#212121]/80">Email</p>
                        <a href="mailto:Veenusnova369@gmail.com" className="font-semibold text-dark-blue hover:underline">
                          Veenusnova369@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors duration-200">
                        <Icon name="Phone" className="w-4 h-4 text-primary-green" />
                      </div>
                      <div>
                        <p className="text-sm text-[#212121]/80">Phone</p>
                        <a href="https://wa.me/918220861598" target="_blank" rel="noopener noreferrer" className="font-semibold text-dark-blue hover:underline flex items-center">
                          +918220861598
                          <Icon name="ExternalLink" className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                    <div className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors duration-200">
                        <Icon name="Linkedin" className="w-4 h-4 text-primary-green" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/veenus-nova-innovation-center-b25233379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="font-semibold text-dark-blue hover:underline">Veenus Nova Innovation Center</a>
                      </div>
                    </div>
                    <div className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors duration-200">
                        <Icon name="MapPin" className="w-4 h-4 text-primary-green" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-semibold text-dark-blue">Coimbatore, TN, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Card */}
              <div className="bg-white border border-light-green rounded-xl p-8 shadow-soft relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-light-green to-primary-green opacity-60" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-light-green/5 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-light-green rounded-lg flex items-center justify-center mr-3 shadow-soft">
                      <Icon name="MapPin" className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue">Find Us On Map</h3>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border-2 border-light-green shadow-soft">
                    <iframe 
                      title="map" 
                      src="https://www.openstreetmap.org/export/embed.html?bbox=76.9529,11.0189,76.9629,11.0289&layer=mapnik" 
                      className="w-full h-56 border-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <Icon name="MapPin" className="w-4 h-4 inline mr-1 text-primary-green" />
                      Located in the heart of Coimbatore's industrial district
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;