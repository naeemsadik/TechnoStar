import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '150+', label: 'Expert Developers' },
    { icon: Target, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: TrendingUp, value: '200%', label: 'Client Growth' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Park',
      role: 'Lead AI Engineer',
      image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              About TechnoStar
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Founded in 2014, TechnoStar has been at the forefront of technological innovation, 
            helping businesses worldwide embrace digital transformation and achieve unprecedented growth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To democratize cutting-edge technology by creating innovative solutions that are accessible, 
              scalable, and transformative for businesses of all sizes. We believe that great technology 
              should empower people, not complicate their lives.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in technology innovation, shaping the future through AI, 
              cloud computing, and sustainable digital solutions that create lasting positive 
              impact on society and the environment.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700 scale-in">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-600 p-3 rounded-xl w-fit mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white fade-in">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group scale-in">
                <div className="relative overflow-hidden rounded-2xl mb-4 mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-primary-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;