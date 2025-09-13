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
      className={`fixed inset-0 flex flex-col items-center justify-center w-screen h-screen 
      z-50 overflow-hidden 
      transition-opacity duration-1000 ease-out animated-background
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Orbiting spheres */}
      <div className="relative w-40 h-40 mb-10">
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-green-700 rounded-full shadow-lg shadow-green-900" />
        </div>

        {/* Blue orbit */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 
                          rounded-full bg-blue-500 shadow-xl shadow-blue-700" />
        </div>

        {/* Red orbit */}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 
                          rounded-full bg-red-500 shadow-lg shadow-red-700" />
        </div>

        {/* Accent 400 orbit */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 
                          rounded-full bg-blue-400 shadow-xl shadow-blue-700" />
        </div>

        {/* Light Beige orbit */}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 
                          rounded-full bg-light-beige shadow-lg shadow-gray-500" />
        </div>

        {/* Accent 300 orbit */}
        <div className="absolute inset-0 animate-spin-slowest">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 
                          rounded-full bg-red-300 shadow-xl shadow-red-700" />
        </div>
      </div>

      {/* Branding */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 animate-fade-in 
                     tracking-wide text-shadow-custom">
        Veenus Nova
      </h1>
      <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-xl sm:text-3xl tracking-wider animate-fade-in 
                    text-shadow-custom">
        Innovation Centre
      </p>
    </div>
  );
};

export default Loader;