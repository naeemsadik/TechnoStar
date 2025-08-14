import React from 'react';
import { Code, Cloud, Smartphone, Brain, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored applications built with cutting-edge technologies to solve your unique business challenges.',
      features: ['Full-stack development', 'API integrations', 'Database design', 'Performance optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions that grow with your business and ensure maximum uptime.',
      features: ['AWS/Azure/GCP', 'Microservices', 'DevOps automation', 'Cost optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store optimization']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide valuable insights from your data.',
      features: ['Predictive analytics', 'Computer vision', 'NLP solutions', 'Model deployment']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain compliance.',
      features: ['Security audits', 'Penetration testing', 'GDPR compliance', '24/7 monitoring']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic technology consulting to modernize your business processes and stay competitive.',
      features: ['Process automation', 'Legacy modernization', 'Digital strategy', 'Change management']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 scale-in"
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-600 p-3 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;