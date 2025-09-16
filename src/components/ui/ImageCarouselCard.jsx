import React, { useState, useEffect } from 'react';

const ImageCarouselCard = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-deep-charcoal to-energetic-green rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:hover:shadow-xl border border-white/30 p-6 flex flex-col items-center justify-center text-white group animate-fade-in">
      <div className="w-full h-48 relative mb-4 bg-black/20 rounded-md flex items-center justify-center">
        <img
          src={currentImage.image}
          alt={currentImage.name}
          className="w-full h-full object-contain transition-opacity duration-700 ease-in-out"
          key={currentIndex} // Key change forces re-render and transition
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-light-green to-blue-500 text-transparent bg-clip-text">{currentImage.name}</h3>
      <p className="text-center text-gray-200">{currentImage.description}</p>
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-light-green transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default ImageCarouselCard;
