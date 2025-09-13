import React from 'react';

const partners = [
  { name: 'Bosch', src: '/assets/partners/bosch.svg' },
  { name: 'Siemens', src: '/assets/partners/siemens.svg' },
  { name: 'ABB', src: '/assets/partners/abb.svg' },
  { name: 'Honeywell', src: '/assets/partners/honeywell.svg' },
  { name: 'Schneider', src: '/assets/partners/schneider.svg' },
];

function PartnersStrip() {
  return (
    <section className="bg-light-beige py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-center text-dark-blue/80 text-sm uppercase tracking-widest mb-6">Trusted by industry leaders</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <img
                src={p.src}
                alt={`${p.name} logo`}
                className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersStrip;



