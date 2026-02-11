import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 bg-[#060a14]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-textMuted text-sm">
          © {currentYear} <span className="text-textMain font-medium">Radiant Run</span>.
        </div>
        <a href="#top" className="flex items-center gap-2 text-textMuted hover:text-gold transition-colors text-sm">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;