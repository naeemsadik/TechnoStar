import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'FinTech Revolution',
      category: 'Financial Technology',
      description: 'AI-powered investment platform with real-time analytics and automated portfolio management.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      results: '+300% user engagement, $50M+ transactions processed'
    },
    {
      title: 'HealthCare Connect',
      category: 'Healthcare Technology',
      description: 'Comprehensive telemedicine platform connecting patients with healthcare providers globally.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Firebase', 'WebRTC', 'HIPAA Compliant'],
      results: '1M+ patients served, 99.9% uptime achieved'
    },
    {
      title: 'Smart City IoT',
      category: 'Internet of Things',
      description: 'Integrated IoT ecosystem for urban management, traffic optimization, and environmental monitoring.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IoT', 'AWS', 'Machine Learning', 'React'],
      results: '40% traffic improvement, 25% energy savings'
    },
    {
      title: 'E-Commerce Evolution',
      category: 'Retail Technology',
      description: 'Next-generation e-commerce platform with AR try-on features and personalized recommendations.',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'AR/VR', 'Microservices', 'Redis'],
      results: '250% conversion increase, 95% user satisfaction'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Discover how we've helped industry leaders transform their businesses through innovative technology solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] scale-in"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="text-primary-400 text-sm font-medium mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">KEY RESULTS</div>
                    <div className="text-sm text-gray-300">{project.results}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;