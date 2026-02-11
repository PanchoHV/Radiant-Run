import React from 'react';
import { ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    { num: "01", title: "Share your request", desc: "Timeline, preferences, and constraints." },
    { num: "02", title: "Receive a tailored quote", desc: "Transparent scope and pricing." },
    { num: "03", title: "We coordinate end-to-end", desc: "Execution handles with discretion and urgency." }
  ];

  return (
    <section id="how" className="py-24 bg-gradient-to-b from-background to-secondary/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-textMain mb-4">How it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-black/20">
                <span className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-gold to-sand font-bold">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-textMain mb-3">{step.title}</h3>
              <p className="text-textMuted text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;