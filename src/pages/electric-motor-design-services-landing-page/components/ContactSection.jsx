import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const contactMethods = [
    {
      icon: "Phone",
      title: "Direct Call",
      value: "+1 (555) 123-4567",
      description: "Speak directly with our experts",
      action: "Call Now",
      color: "from-primary to-primary/80",
      available: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: "Mail",
      title: "Email Support",
      value: "info@electromotorpro.com",
      description: "Get detailed written responses",
      action: "Send Email",
      color: "from-accent to-accent/80",
      available: "24/7 - Response within 4 hours"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      value: "Start Conversation",
      description: "Instant technical assistance",
      action: "Chat Now",
      color: "from-success to-success/80",
      available: "Mon-Fri, 9AM-8PM EST"
    },
    {
      icon: "Video",
      title: "Video Call",
      value: "Schedule Meeting",
      description: "Face-to-face project discussion",
      action: "Book Now",
      color: "from-warning to-warning/80",
      available: "By appointment only"
    }
  ];

  const projectTypes = [
    { value: "motor-design", label: "Motor Design & Development", icon: "Settings" },
    { value: "optimization", label: "Performance Optimization", icon: "TrendingUp" },
    { value: "analysis", label: "Electromagnetic Analysis", icon: "BarChart3" },
    { value: "thermal", label: "Thermal Management", icon: "Thermometer" },
    { value: "testing", label: "Testing & Validation", icon: "CheckCircle" },
    { value: "manufacturing", label: "Manufacturing Support", icon: "Wrench" },
    { value: "consultation", label: "Technical Consultation", icon: "Users" },
    { value: "other", label: "Other Requirements", icon: "HelpCircle" }
  ];

  const budgetRanges = [
    "Under $50K", "$50K - $100K", "$100K - $250K", "$250K - $500K", "$500K+"
  ];

  const timelines = [
    "ASAP (Rush)", "1-3 months", "3-6 months", "6-12 months", "12+ months"
  ];

  const formSteps = [
    { title: "Basic Info", icon: "User" },
    { title: "Project Details", icon: "Briefcase" },
    { title: "Requirements", icon: "Settings" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateCurrentStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData?.name?.trim()) newErrors.name = 'Name is required';
      if (!formData?.email?.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData?.company?.trim()) newErrors.company = 'Company is required';
    }

    if (currentStep === 2) {
      if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
    }

    if (currentStep === 3) {
      if (!formData?.message?.trim()) {
        newErrors.message = 'Please describe your project requirements';
      } else if (formData?.message?.trim()?.length < 20) {
        newErrors.message = 'Please provide more details (minimum 20 characters)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '', email: '', company: '', phone: '', projectType: '',
        budget: '', timeline: '', message: ''
      });
      setCurrentStep(1);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-16 shadow-glass">
            <div className="w-24 h-24 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="CheckCircle" size={48} className="text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">Thank You!</h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your project inquiry has been received. Our expert team will analyze your requirements 
              and respond within 24-48 hours with a detailed consultation proposal.
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-foreground mb-4">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span>Requirements Review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span>Expert Consultation Call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span>Detailed Proposal</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="magnetic-hover"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Send Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="MessageCircle" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Let's Discuss Your Project</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Ready to <span className="text-gradient">Transform</span>
            <br />Your Motor Design?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Connect with our expert engineering team for a comprehensive consultation. 
            We'll analyze your requirements and provide tailored solutions for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to connect with our team
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods?.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-glass hover:shadow-elevation-hover transition-all duration-300 magnetic-hover cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${method?.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={method?.icon} size={24} className="text-white" />
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-2">{method?.title}</h4>
                  <p className="text-primary font-semibold mb-2">{method?.value}</p>
                  <p className="text-muted-foreground text-sm mb-3">{method?.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{method?.available}</p>
                  
                  <button className="text-primary hover:text-accent transition-colors duration-300 font-semibold flex items-center space-x-2">
                    <span>{method?.action}</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h4 className="font-bold text-foreground mb-6">Why Our Clients Choose Us</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "< 24h", label: "Response Time" },
                  { value: "98%", label: "Client Satisfaction" },
                  ,
                  { value: "+6", label: "Years Experience" }
                ]?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Multi-step Form */}
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glass">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              {formSteps?.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
                    index + 1 <= currentStep 
                      ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1 <= currentStep ? (
                      <Icon name="Check" size={18} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step?.title}
                  </span>
                  {index < formSteps?.length - 1 && (
                    <div className={`ml-4 w-8 h-0.5 ${
                      index + 1 < currentStep ? 'bg-primary' : 'bg-border'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Basic Information</h3>
                    <p className="text-muted-foreground mb-6">Tell us about yourself and your company</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData?.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      error={errors?.name}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      error={errors?.email}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData?.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      error={errors?.company}
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData?.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Project Details</h3>
                    <p className="text-muted-foreground mb-6">Help us understand your project requirements</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Project Type <span className="text-error">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes?.map((type) => (
                        <label
                          key={type?.value}
                          className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-300 ${
                            formData?.projectType === type?.value
                              ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type?.value}
                            checked={formData?.projectType === type?.value}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          <Icon name={type?.icon} size={20} className={`mr-3 ${
                            formData?.projectType === type?.value ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span className={`text-sm font-medium ${
                            formData?.projectType === type?.value ? 'text-primary' : 'text-foreground'
                          }`}>
                            {type?.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors?.projectType && (
                      <p className="mt-2 text-sm text-error">{errors?.projectType}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData?.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges?.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData?.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select timeline</option>
                        {timelines?.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Project Requirements</h3>
                    <p className="text-muted-foreground mb-6">Provide details about your specific needs</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description <span className="text-error">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData?.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Please describe your project requirements, technical specifications, performance targets, timeline constraints, and any specific challenges you're facing..."
                      className={`w-full px-3 py-2 border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                        errors?.message ? 'border-error' : 'border-border'
                      }`}
                    />
                    {errors?.message && (
                      <p className="mt-1 text-sm text-error">{errors?.message}</p>
                    )}
                    <p className="mt-2 text-xs text-muted-foreground">
                      Minimum 20 characters ({formData?.message?.length}/20)
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="magnetic-hover"
                    >
                      <Icon name="ArrowLeft" size={20} className="mr-2" />
                      Previous
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="magnetic-hover"
                    >
                      Next Step
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      className="magnetic-hover"
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;