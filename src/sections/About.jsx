import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { coachInfo } from '../data/content';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
          subtitle="Dedicated to helping you achieve your fitness goals"
        />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {coachInfo.bio}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Achievements & Certifications</h3>
              <ul className="space-y-3">
                {coachInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="image-placeholder min-h-[400px] md:min-h-[500px]">
            <div className="text-center p-8">
              <div className="text-gray-500 text-sm md:text-base">
                <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-medium">About Image</p>
                <p className="text-xs mt-2">Replace with your photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

