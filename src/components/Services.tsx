import React from 'react';
import { MessageSquare, Eye, TrendingUp, BarChart3, Lightbulb } from 'lucide-react';

const serviceItems = [
  {
    icon: <MessageSquare className="text-electric-blue" size={28} />,
    title: "AI-Powered Convo Bots",
    description: "Intelligent chatbots that understand context and deliver personalized customer experiences that convert and retain."
  },
  {
    icon: <Eye className="text-electric-blue" size={28} />,
    title: "Virtual Try-On / Visual AI",
    description: "Immersive AR/visual AI solutions that help customers visualize products, reducing returns and boosting conversion."
  },
  {
    icon: <TrendingUp className="text-electric-blue" size={28} />,
    title: "AI Marketing Automation",
    description: "Smart marketing systems that optimize campaigns, personalize content, and maximize ROI across channels."
  },
  {
    icon: <BarChart3 className="text-electric-blue" size={28} />,
    title: "Data Insights & Dashboards",
    description: "Custom analytics that transform your raw data into actionable insights with intuitive visualization."
  },
  {
    icon: <Lightbulb className="text-electric-blue" size={28} />,
    title: "Bespoke AI Strategy Workshops",
    description: "Hands-on workshops to identify opportunities, prioritize use cases, and create your AI implementation roadmap."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What I Can Build for You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic AI implementation services that deliver measurable business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;