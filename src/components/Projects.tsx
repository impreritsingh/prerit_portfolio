import React from 'react';
import { ArrowRight } from 'lucide-react';

const projectItems = [
  {
    title: "Retail Chatbot with 42% Conversion Lift",
    description: "Implemented an AI shopping assistant for a mid-size retailer that understands customer intent and provides personalized product recommendations.",
    results: [
      "42% increase in conversion rate",
      "28% reduction in support tickets",
      "3.2x ROI within first quarter"
    ],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    align: "right" // image on right, text on left
  },
  {
    title: "Predictive Analytics Dashboard for SaaS",
    description: "Developed a custom AI analytics solution that predicts customer churn risk and identifies upsell opportunities for a B2B SaaS company.",
    results: [
      "18% reduction in customer churn",
      "31% increase in expansion revenue",
      "Data processing time reduced by 76%"
    ],
    imageUrl: "https://images.pexels.com/photos/7947203/pexels-photo-7947203.jpeg",
    align: "left" // image on left, text on right
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world AI implementations with measurable business impact
          </p>
        </div>
        
        <div className="space-y-20 md:space-y-32">
          {projectItems.map((project, index) => (
            <div key={index} className={`flex flex-col ${project.align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
              <div className="md:w-1/2">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-medium text-charcoal mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-electric-blue mr-2">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact" className="inline-flex items-center text-electric-blue font-medium hover:underline">
                  Learn more about this solution
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;