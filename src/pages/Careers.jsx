import React from 'react';
import Header from '../components/ui/Header';

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
        <section className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Careers</h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl">Short blurb about culture and values. Replace with final copy.</p>
        </section>
        <section className="space-y-4">
          <div className="p-6 bg-card border border-border rounded-2xl shadow-elevation">
            <h2 className="text-xl font-semibold text-foreground">Open Roles</h2>
            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-2">
              <li>Role placeholder — brief description</li>
              <li>Role placeholder — brief description</li>
              <li>Role placeholder — brief description</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;


