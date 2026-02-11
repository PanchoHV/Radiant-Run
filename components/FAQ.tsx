import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-serif text-textMain mb-2 text-center">FAQ</h2>
        <p className="text-textMuted text-center mb-12">Common questions.</p>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-xl overflow-hidden transition-colors ${openIndex === idx ? 'bg-white/[0.03] border-gold/30' : 'bg-transparent'}`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-medium ${openIndex === idx ? 'text-gold' : 'text-textMain'}`}>
                  {item.question}
                </span>
                {openIndex === idx ? <ChevronUp size={18} className="text-gold" /> : <ChevronDown size={18} className="text-textMuted" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-5 pb-5 text-textMuted text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;