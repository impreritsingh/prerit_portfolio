import React from 'react';
import { Linkedin, Mail, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Brain size={24} className="text-electric-blue" />
              <span className="font-bold text-xl text-white">Prerit Singh</span>
            </div>
            <p className="text-sm max-w-xs text-center md:text-left">
              Making AI accessible and impactful for mid-market companies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a href="mailto:contact@preritsingh.com" className="text-gray-300 hover:text-electric-blue transition-colors duration-300">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} Prerit Singh. All rights reserved.</p>
              <p className="mt-1">AI implementation consulting for growth-focused businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;