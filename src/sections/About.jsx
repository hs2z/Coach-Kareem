import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { coachInfo } from '../data/content';
import coachImage2 from '../assets/img/C.KM2.jpg';

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
          
                 <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden">
                            <img 
                              src={coachImage2} 
                              alt="Coach Kareem Maged" 
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
              </div>
            </div>
         
    </section>
  );
};

export default About;


