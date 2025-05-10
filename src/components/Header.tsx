import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-charcoal">
          <Brain size={28} className="text-electric-blue" />
          <span className="font-bold text-xl">Prerit Singh</span>
        </a>
        
        <a 
          href="#contact" 
          className="bg-electric-blue text-white px-5 py-2 rounded-md font-medium hover:bg-blue-500 transition-colors duration-300"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Header;