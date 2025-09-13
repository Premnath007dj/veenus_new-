import React, { useEffect, useMemo, useRef } from 'react';
// Note: useSpring and animated are imported but not used. You can remove them if not needed.
import { useSpring, animated } from "@react-spring/web"; 

// --- MOCK COMPONENTS TO RESOLVE ERRORS ---
// The original import paths were incorrect. These mock components stand in
// for your actual Button and Icon components to allow the HeroSection to render.

const Button = ({ children, onClick, className, ...props }) => (
  <button 
    onClick={onClick} 
    className={`bg-green-500 hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center font-semibold ${className}`} 
    {...props}
  >
    {children}
  </button>
);

const Icon = ({ name, size = 24, className = '' }) => {
  // A simple SVG for the "Rocket" icon used in the button.
  if (name === 'Rocket') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.15 1.8-2.04 3-2.5a.53.53 0 0 1 .62.62c-.46 1.2-1.35 2.36-2.5 3 .81.65 2.27.66 3.11.05 1.26-1.5 5-2 5-2s-.5-3.74-2-5c-.84-.71-2.3-.7-3.11.05-1.15-.64-2.04-1.8-2.5-3a.53.53 0 0 0-.62-.62c-1.2.46-2.36 1.35-3 2.5-.65-.81-.66-2.27-.05-3.11Z"/>
      </svg>
    );
  }
  // Fallback for any other icon name
  return <span className={className}>[{name}]</span>;
};
// --- END MOCK COMPONENTS ---


const HeroSection = ({ onContactClick }) => {
  const headline = "Your Partner in Precision Motor Engineering.";
  // useMemo is a great optimization here.
  const words = useMemo(() => headline.split(' '), []);
  const canvasRef = useRef(null);

  // This canvas animation effect is well-implemented with proper cleanup.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const numParticles = Math.min(90, Math.floor((width * height) / 18000));
    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 1.5,
    }));

    const maxDist = 120;
    const bg = '#0f154f';
    const lineColor = 'rgba(165, 214, 167, 0.25)'; // light-green with alpha
    const dotColor = 'rgba(255,255,255,0.5)';

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(d2) / maxDist;
            ctx.globalAlpha = Math.max(0.05, alpha * 0.6);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = dotColor;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup function to prevent memory leaks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-dark-blue overflow-hidden pt-20"
    >
      {/* Animated low-poly particles canvas */}
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-blue/40 to-dark-blue" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-2 h-2 bg-primary-green rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-light-green rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
        
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Half (Text Content) */}
          <div className="lg:text-left text-center p-8">
            <div className="max-w-xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight text-white">
                {words.map((w, i) => (
                  <React.Fragment key={`${w}-${i}`}>
                    <span
                      className="inline-block animate-fade-in"
                      style={{ animationDelay: `${i * 0.15}s` }} // Adjusted delay for a quicker effect
                    >
                      {w}
                    </span>
                    {/* Render space as a text node *between* spans */}
                    {i < words.length - 1 ? ' ' : ''}
                  </React.Fragment>
                ))}
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 animate-fade-in" style={{ animationDelay: `${words.length * 0.15}s` }}>
                We work as an extension of your R&D team, providing custom BLDC motor design and PMSM motor simulation consulting to achieve unparalleled efficiency and performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: `${(words.length + 1) * 0.15}s` }}>
                <Button
                  variant="default"
                  size="lg"
                  onClick={onContactClick}
                  className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/20"
                >
                  <Icon name="Rocket" size={24} className="mr-3" />
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>

          {/* Right Half (Image Content) */}
          <div className="flex items-center justify-center p-8">
            <img
              src="/assets/images/motorstock1.png"
              alt="Advanced Electric Motor"
              className="max-w-full h-auto w-full md:w-10/12 object-contain animate-image-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
        aria-label="Scroll down"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;

