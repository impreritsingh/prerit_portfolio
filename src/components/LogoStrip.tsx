import React from 'react';

const LogoStrip = () => {
  // In a real implementation, these would be actual client logos
  const logoPlaceholders = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E"
  ];

  return (
    <section className="py-12 md:py-16 bg-light-grey">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-gray-500 text-sm uppercase font-medium mb-8">
          Trusted by forward-thinking brands
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0">
          {logoPlaceholders.map((company, index) => (
            <div 
              key={index} 
              className="w-32 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-xl font-bold text-gray-400">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;