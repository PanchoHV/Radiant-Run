import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

// 1. ELIMINADO: La interface ContactModalProps (JavaScript no la usa)

// 2. CAMBIO: Se elimina ": React.FC<ContactModalProps>"
const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#0B1324] border border-gold/20 rounded-2xl shadow-2xl shadow-gold/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-secondary/30">
              <div>
                <h3 className="text-xl font-serif text-textMain">Request a Quote</h3>
                <p className="text-xs text-textMuted mt-1">Tell us your requirements</p>
              </div>
              <button 
                onClick={onClose}
                className="text-textMuted hover:text-gold transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <ContactForm idPrefix="modal" compact={true} />
            </div>

            {/* Decorative bottom bar */}
            <div className="h-1 w-full bg-gradient-to-r from-secondary via-gold/50 to-secondary" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;