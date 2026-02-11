import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onRequestQuote }) => {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Video Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
        >
          {/* Asegúrate de reemplazar esta URL con la ruta de tu video real */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-clouds-floating-in-the-blue-sky-background-1165-large.mp4" type="video/mp4" />
        </video>
        {/* Capa de degradado para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 relative z-10 w-full">
        
        {/* Contenido Izquierdo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Miami Concierge & VIP Logistics
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-6 text-textMain">
            Premium corporate concierge. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-sand">
              Built for speed.
            </span>
          </h1>

          <p className="text-textMuted text-lg leading-relaxed max-w-xl mb-8">
            Radiant Run supports executives, families, and teams in Miami with end-to-end logistics:
            VIP tickets, 24/7 assistance, airport transfers, and travel planning.
            Everything is <span className="text-sand font-medium">by quote</span>, tailored to your needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onRequestQuote}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gold text-background font-bold rounded-xl hover:bg-sand transition-all shadow-[0_4px_20px_rgba(214,180,106,0.25)] hover:shadow-[0_6px_25px_rgba(214,180,106,0.35)] transform hover:-translate-y-0.5"
            >
              Request a quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/13057979664" 
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 border border-white/10 text-textMain font-medium rounded-xl hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-3">
              {['VIP Tickets: Heat/NBA', 'World Cup Miami', '24/7 Assistance', 'USA Logistics'].map((tag) => (
                <span key={tag} className="text-xs font-medium text-textMuted px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contenido Derecho - Tarjeta Informativa */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex items-center"
        >
          <div className="w-full bg-secondary/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="font-serif text-2xl text-textMain mb-2">What we do best</h3>
            <p className="text-textMuted text-sm mb-6">High-touch execution with clear communication.</p>
            
            <ul className="space-y-4">
              {[
                { label: 'Access', desc: 'Premium event ticket sourcing & coordination' },
                { label: 'Mobility', desc: 'Airport + nationwide transfers' },
                { label: 'Support', desc: '24/7 responsiveness for urgent needs' },
                { label: 'Travel', desc: 'Curated national & international itineraries' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold">
                    <Star size={10} fill="#D6B46A" />
                  </div>
                  <div>
                    <span className="text-sand font-medium block text-sm">{item.label}</span>
                    <span className="text-textMuted text-sm leading-snug">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-white/20">Miami Based • Global Ready</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;