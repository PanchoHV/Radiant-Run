import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How it works', href: '#how' },
    { name: 'Standards', href: '#standards' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 border-white/5 backdrop-blur-md py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center group">
          {/* Logo container increased size from h-12 to h-14 (2 points bigger) and width adjusted */}
          <div className="relative h-14 w-56 overflow-hidden transition-transform duration-300 group-hover:scale-105">
             <img 
               src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Vigía%20Logos%20(5).webp" 
               alt="Radiant Run" 
               className="w-full h-full object-contain object-left"
             />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-textMuted hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-sm font-medium text-textMain hover:text-white transition-colors"
            >
              Email
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-gold to-sand text-background font-bold text-sm hover:shadow-[0_0_20px_rgba(214,180,106,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textMain"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-secondary border-b border-white/5 p-6 animate-fade-in-down shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-textMuted hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a 
              href="#contact"
              onClick={handleNavClick}
              className="w-full text-center py-3 rounded-lg bg-gold/10 text-gold font-bold border border-gold/20"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;