import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 bg-[#060a14]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-textMuted text-sm">
          © {currentYear} <span className="text-textMain font-medium">Radiant Run</span>. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-textMuted">
          <a href="#top" className="flex items-center gap-2 hover:text-gold transition-colors">
            Back to top <ArrowUp size={14} />
          </a>
          <span className="text-white/10">•</span>
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;