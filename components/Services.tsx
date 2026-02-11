import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-textMain mb-4">Services</h2>
          <p className="text-textMuted max-w-2xl text-lg">
            Select services à la carte or request ongoing support. <br/>
            Pricing is always <span className="text-sand font-medium">by quote</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-secondary border border-white/5 p-8 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors">
                <service.icon className="text-gold" size={24} />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider mb-3">
                {service.title}
              </div>
              
              <h3 className="text-xl font-medium text-textMain mb-3 group-hover:text-white transition-colors">
                {service.subtitle}
              </h3>
              
              <p className="text-textMuted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;