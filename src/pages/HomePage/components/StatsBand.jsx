import React from 'react';

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Industries Served', value: '10+' },
  { label: 'Avg. Efficiency Gain', value: '28%' },
  { label: 'Client Satisfaction', value: '4.9/5' },
];

function StatsBand() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-light-green/40 bg-white shadow-soft p-6 text-center">
              <div className="text-3xl font-bold text-dark-blue">{s.value}</div>
              <div className="mt-2 text-sm text-gray">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;



