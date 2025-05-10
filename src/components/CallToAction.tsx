import React from 'react';

const CallToAction = () => {
  return (
    <section id="contact" className="bg-electric-blue py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">
          Let's discuss how my AI solutions can drive growth for your company.
        </p>
        
        <a 
          href="https://calendly.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-electric-blue text-lg px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
        >
          Book a 30-min AI Strategy Call
        </a>
        
        <p className="mt-6 text-sm opacity-75">
          No pressure, no commitments — just a focused conversation about your needs.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;