import React from 'react';

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary-green"></div>
      {items.map((item, index) => (
        <div key={index} className={`relative mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
          <div className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
            <div className={`bg-white border border-light-green rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              {/* Top accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary-green to-light-green' : 'from-light-green to-primary-green'} opacity-60`} />
              
              {/* Subtle corner glow */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-green/5 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-light-green/5 rounded-full blur-xl" />

              <div className="relative z-10">
                <p className="text-primary-green font-semibold text-lg mb-2">{item.year}</p>
                <h3 className="text-2xl font-bold text-dark-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-green rounded-full border-4 border-white animate-pulse-slow"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
