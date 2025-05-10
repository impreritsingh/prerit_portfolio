import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
              Bring AI to Life.
              <br />
              <span className="text-electric-blue">Scale Faster.</span>
              <br />
              Stress-Free.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I help mid-market companies implement AI solutions that deliver measurable results without the complexity.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-electric-blue text-white text-lg px-8 py-3 rounded-md font-medium hover:bg-blue-500 transition-transform duration-300 hover:scale-105"
            >
              Book a call with me
            </a>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Prerit Singh" 
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-blue-50 rounded-full opacity-60 -z-10"></div>
            <div className="absolute top-10 right-10 md:top-0 md:right-20 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute bottom-10 left-10 md:bottom-0 md:left-20 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;