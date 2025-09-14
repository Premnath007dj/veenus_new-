import React, { useState, useEffect } from "react";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFadeOut(true), 4000);
    const hideTimeout = setTimeout(() => setHidden(true), 5000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`relative fixed inset-0 flex flex-col items-center justify-center w-screen h-screen
        z-50 overflow-hidden
        transition-opacity duration-1000 ease-out
        ${fadeOut ? "opacity-0" : "opacity-100"}
        bg-gradient-to-br from-gray-900 via-green-700 to-green-500
        animate-gradient-shift`}
    >

      {/* Animated motor/engineering background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-5">
          <img src="public/assets/images/m2.png" alt="Background Overlay" className="w-full h-full object-cover animate-image-float" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />

        {/* Rotating gear elements */}
        <div className="absolute top-16 right-16 w-16 h-16 opacity-10">
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-400 animate-spin-slow">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-12 h-12 opacity-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-300 animate-spin-slower">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Orbiting spheres */}
      <div className="relative w-40 h-40 mb-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-green-700 rounded-full shadow-lg shadow-green-900" />
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-green-500 shadow-xl shadow-green-700" />
        </div>

        <div className="absolute inset-0 animate-spin-slower">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-green-300 shadow-lg shadow-green-500" />
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-green-400 shadow-xl shadow-green-700" />
        </div>

        <div className="absolute inset-0 animate-spin-slower">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-500 shadow-lg shadow-gray-700" />
        </div>

        <div className="absolute inset-0 animate-spin-slowest">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-200 shadow-xl shadow-green-400" />
        </div>
      </div>

      {/* Branding */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  via-green-500 to-blue-700 animate-fade-in tracking-wide text-shadow-custom">
        Veenus Nova
      </h1>
      <p className="mt-4 text-lg text-gray-200 animate-fade-in delay-200">
        Engineering the future...
      </p>
    </div>
  );
};

export default Loader;
