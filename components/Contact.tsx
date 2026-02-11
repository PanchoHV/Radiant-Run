import React from 'react';
import { Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-textMain mb-4">Request a quote</h2>
          <p className="text-textMuted max-w-2xl text-lg">
            Tell us what you need, when you need it, and any preferences. <br className="hidden md:block"/>
            We’ll respond quickly with next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Form Container */}
          <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-gold" size={20} />
              <h4 className="text-textMain font-medium">Send Details</h4>
            </div>

            <ContactForm idPrefix="section" />
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h4 className="text-xl font-serif text-textMain mb-4">Direct Contact</h4>
              <ul className="space-y-4 text-textMuted">
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider mb-1 text-gold/80">Email</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-textMain hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider mb-1 text-gold/80">WhatsApp</span>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="text-lg text-textMain hover:text-gold transition-colors">{CONTACT_INFO.whatsappDisplay}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider mb-1 text-gold/80">Based In</span>
                  <span className="text-lg text-textMain">{CONTACT_INFO.location}</span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-white/5" />

            <div>
              <h4 className="text-lg font-medium text-textMain mb-2">Availability</h4>
              <p className="text-textMuted">
                24/7 support available • By quote
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold/10 to-transparent border border-gold/10 rounded-2xl">
              <h5 className="font-serif text-gold mb-2">Radiant Run</h5>
              <p className="text-sm text-textMuted leading-relaxed">
                Concierge & VIP Logistics
              </p>
              <p className="text-xs text-textMuted/60 mt-4 italic">
                Note: Event tickets are coordinated based on availability and client preferences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;