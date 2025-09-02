import React from 'react';
import Header from '../components/ui/Header';

const TechZone = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <section className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Tech Zone</h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl">Short intro about your research and articles.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-card border border-border rounded-2xl shadow-elevation">
            <h2 className="text-xl font-semibold">Research Papers</h2>
            <ul className="mt-4 space-y-3 list-disc list-inside text-muted-foreground">
              <li>Paper title placeholder (link)</li>
              <li>Paper title placeholder (link)</li>
              <li>Paper title placeholder (link)</li>
            </ul>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl shadow-elevation">
            <h2 className="text-xl font-semibold">Advanced Articles</h2>
            <ul className="mt-4 space-y-3 list-disc list-inside text-muted-foreground">
              <li>Article title placeholder</li>
              <li>Article title placeholder</li>
              <li>Article title placeholder</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechZone;


