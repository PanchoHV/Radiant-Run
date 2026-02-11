import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// 1. ELIMINADO: La interface ContactFormProps (solo existe en TS)

// 2. CAMBIO: Se elimina ": React.FC<ContactFormProps>"
const ContactForm = ({ idPrefix = 'form', compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 3. CAMBIO: Se elimina ": React.FormEvent" del parámetro e
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Radiant Run — Quote request (${formData.name})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Request:\n${formData.message}\n\n` +
      `— Sent from the Radiant Run website`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-6"}>
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Name</label>
        <input 
          type="text" 
          id={`${idPrefix}-name`} 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Your Name"
          className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-textMain placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Email</label>
        <input 
          type="email" 
          id={`${idPrefix}-email`} 
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="you@company.com"
          className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-textMain placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Request</label>
        <textarea 
          id={`${idPrefix}-message`} 
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Example: Heat tickets for 4, March 12 + MIA transfers..."
          className={`w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-textMain placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none ${compact ? 'h-24' : 'h-32'}`}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button 
          type="submit"
          className="flex-1 bg-gold text-background font-bold py-3.5 rounded-xl hover:bg-sand transition-colors flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(214,180,106,0.3)]"
        >
          Email Request <Send size={16} />
        </button>
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 border border-white/10 text-textMain font-medium py-3.5 rounded-xl hover:bg-white/5 transition-colors text-center flex items-center justify-center"
        >
          WhatsApp
        </a>
      </div>
      <p className="text-xs text-center text-textMuted/50 mt-4">
        This form opens your email client. No data is stored on this server.
      </p>
    </form>
  );
};

export default ContactForm;