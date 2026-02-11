import React from 'react';
import { STANDARDS } from '../constants';

const Standards: React.FC = () => {
  return (
    <section id="standards" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 sticky top-24">
            <h2 className="text-3xl font-serif text-textMain mb-6">Our standards</h2>
            <p className="text-textMuted mb-8 text-lg">
              Radiant Run operates with a corporate mindset: reliability, confidentiality, and detail.
            </p>
            <div className="w-16 h-1 bg-gold rounded-full" />
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {STANDARDS.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="text-gold" size={20} />
                  <h4 className="text-textMain font-medium">{item.title}</h4>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Standards;