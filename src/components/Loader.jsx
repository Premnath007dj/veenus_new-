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
      bg-gradient-to-b from-primary-100 via-primary-200 to-primary-300 z-50 overflow-hidden 
      transition-opacity duration-1000 ease-out
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Orbiting spheres */}
      <div className="relative w-32 h-32 mb-10">
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary-700 rounded-full shadow-md shadow-primary-900" />
        </div>

        {/* Green orbit */}
        <div className="absolute inset-0 animate-spin-slow">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 
                    rounded-full bg-accent-400 shadow-lg shadow-accent-700" />
  </div>

  {/* Brown orbit */}
  <div className="absolute inset-0 animate-spin-slower">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 
                    rounded-full bg-primary-700 shadow-lg shadow-primary-900" />
  </div>

  {/* Extra accent orbit */}
  <div className="absolute inset-0 animate-spin-slowest">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 
                    rounded-full bg-accent-300 shadow-lg shadow-accent-700" />
  </div>
      </div>

      {/* Branding */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 animate-fade-in">
        Veenus Nova
      </h1>
      <p className="mt-2 text-primary-900 text-lg sm:text-2xl tracking-widest animate-fade-in">
        Innovation Centre
      </p>
    </div>
  );
};

export default Loader;
