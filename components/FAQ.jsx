import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl overflow-hidden">
              <button onClick={() => toggle(idx)} className="w-full flex justify-between p-5 text-left">
                <span className={openIndex === idx ? 'text-gold' : 'text-textMain'}>{item.question}</span>
                {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openIndex === idx && (
                <p className="px-5 pb-5 text-textMuted text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;