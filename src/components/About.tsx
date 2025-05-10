import React from 'react';
import { Award, Lightbulb, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">About Prerit</h2>
            <p className="text-lg text-gray-700 mb-6">
              As an AI curator and marketer, I bridge the gap between cutting-edge AI technologies and real-world business applications. With over a decade of experience in digital transformation, I help companies identify, implement, and scale AI solutions that deliver tangible results.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My mission is to demystify AI and make it accessible for mid-market companies, enabling them to compete with enterprises that have larger AI budgets and teams.
            </p>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Lightbulb size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2018</h3>
                  <p className="text-gray-600">Founded AI Strategy Consultancy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Code size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2020</h3>
                  <p className="text-gray-600">Deployed first enterprise-scale AI solution</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <Award size={24} className="text-electric-blue" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-charcoal">2023</h3>
                  <p className="text-gray-600">Recognized as Top 50 AI Implementer</p>
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