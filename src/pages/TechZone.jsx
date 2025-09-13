import React, { useRef, useEffect } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Icon from '../components/AppIcon';

const TechZone = () => {
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

  const researchPapers = [
    {
      title: "A Novel Approach to Back EMF Analysis in High-Speed PMSM Motors",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-15",
      description: "This paper presents a new methodology for analyzing back electromotive force (EMF) in high-speed permanent magnet synchronous motors (PMSM), leading to more accurate performance predictions.",
      link: "#"
    },
    {
      title: "Optimizing Thermal Management in Custom BLDC Motor Designs for Aerospace Applications",
      author: "Priya Sharma",
      date: "2023-08-22",
      description: "A study on advanced thermal management techniques for custom brushless DC (BLDC) motors used in critical aerospace applications, improving reliability and lifespan.",
      link: "#"
    },
    {
      title: "FEMM Analysis for Core Loss Prediction in Synchronous Reluctance Motors",
      author: "Arun Patel",
      date: "2023-05-30",
      description: "Utilizing Finite Element Method Magnetics (FEMM) for accurate core loss prediction in synchronous reluctance motors, enabling more efficient designs.",
      link: "#"
    },
    {
      title: "Advanced Control Strategies for Sensorless BLDC Motors",
      author: "Dr. Rajesh Kumar",
      date: "2023-02-11",
      description: "Exploring advanced control algorithms for sensorless BLDC motors, reducing cost and complexity without compromising performance.",
      link: "#"
    }
  ];

  const advancedArticles = [
    {
      title: "The Importance of NVH Analysis in Automotive Actuator Motor Design",
      author: "Arun Patel",
      date: "2023-11-01",
      description: "An in-depth look at how Noise, Vibration, and Harshness (NVH) analysis is critical for developing high-quality automotive actuator motors.",
      link: "#"
    },
    {
      title: "A Practical Guide to Medical Device Motor Prototyping",
      author: "Priya Sharma",
      date: "2023-09-18",
      description: "This article provides a step-by-step guide to the prototyping process for electric motors used in medical devices, from concept to validation.",
      link: "#"
    },
    {
      title: "Challenges and Solutions in High-Efficiency Water Pump Motor Design",
      author: "Dr. Rajesh Kumar",
      date: "2023-07-05",
      description: "Addressing the common challenges in designing high-efficiency motors for water pumps and presenting innovative solutions.",
      link: "#"
    },
    {
      title: "How Custom Drone Motor Engineering is Changing the UAV Industry",
      author: "Priya Sharma",
      date: "2023-04-12",
      description: "A look at the impact of custom motor design on the performance and capabilities of modern unmanned aerial vehicles (UAVs).",
      link: "#"
    }
  ];

  return (
    <>
      <Header />
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-blue/40 to-dark-blue" />
      {/* Animated motor/engineering background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
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
        
        {/* Floating motor coil */}
        <div className="absolute top-1/2 right-1/4 w-8 h-8 opacity-5">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary-green animate-pulse">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
      </div>  
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-dark-blue via-dark-blue to-primary-green overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-2 h-2 bg-light-green/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">Tech Zone</h1>
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-light-green to-white rounded-full mb-8" />
              <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto">
                We believe in advancing the field of electric motor design. Here, we share our research, insights, and technical articles.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-light-beige">
          <div className="max-w-7xl mx-auto px-6">
            {/* Research Papers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-dark-blue mb-8">Research Papers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {researchPapers.map((paper, index) => (
                  <div key={index} className="group bg-white border border-light-green rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name="FileText" className="text-primary-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-primary-green transition-colors">{paper.title}</h3>
                        <div className="text-sm text-gray-500 mb-3">
                          <span>{paper.author}</span> | <span>{paper.date}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{paper.description}</p>
                        <a href={paper.link} className="font-semibold text-primary-green hover:underline">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Articles */}
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-8">Advanced Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {advancedArticles.map((article, index) => (
                  <div key={index} className="group bg-white border border-light-green rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name="BookOpen" className="text-primary-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-primary-green transition-colors">{article.title}</h3>
                        <div className="text-sm text-gray-500 mb-3">
                          <span>{article.author}</span> | <span>{article.date}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{article.description}</p>
                        <a href={article.link} className="font-semibold text-primary-green hover:underline">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TechZone;