const MobileNav = () => (
  <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100] bg-secondary/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-2xl">
    <div className="flex justify-around items-center">
      <a href="#services" className="text-textMuted hover:text-gold flex flex-col items-center gap-1">
        <Star size={20} /> <span className="text-[10px] uppercase font-bold">VIP</span>
      </a>
      <a href="https://wa.me/13057979664" className="bg-gold p-3 rounded-full -mt-12 shadow-lg shadow-gold/20">
        <MessageSquare size={24} className="text-background" />
      </a>
      <a href="#contact" className="text-textMuted hover:text-gold flex flex-col items-center gap-1">
        <Mail size={20} /> <span className="text-[10px] uppercase font-bold">Quote</span>
      </a>
    </div>
  </div>
);