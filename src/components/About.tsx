import React from 'react';
import { Award, Lightbulb, Code, Rocket, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">About Prerit</h2>
            <p className="text-lg text-gray-700 mb-6">
              Digital marketer turned AI strategist, I help mid-market companies unlock practical AI ROI without the complexity and uncertainty that often comes with new technology adoption.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From running performance campaigns for charity and ed-tech brands to delivering AI automation pilots across India & GCC, my journey has been focused on one thing: driving measurable results through innovative digital solutions.
            </p>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Lightbulb size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2021</h3>
                  <p className="text-gray-600">Entered digital marketing; specialized in performance campaigns</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Code size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2023</h3>
                  <p className="text-gray-600">Pivoted to AI; built first chatbots & virtual try-on demos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Rocket size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2024</h3>
                  <p className="text-gray-600">Co-founded Nexivers Media; delivered AI pilots across India & GCC</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <TrendingUp size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2025</h3>
                  <p className="text-gray-600">Scaling AI services portfolio; targeting $1M ARR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;