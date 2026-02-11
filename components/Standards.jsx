import React from 'react';
import { STANDARDS } from '../constants';

const Standards = () => {
  return (
    <section id="standards" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-serif text-textMain mb-6">Our standards</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {STANDARDS.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="text-gold" size={20} />
                  <h4 className="text-textMain font-medium">{item.title}</h4>
                </div>
                <p className="text-textMuted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;