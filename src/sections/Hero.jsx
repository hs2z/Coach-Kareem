import React from 'react';
import Button from '../components/Button';
import { coachInfo } from '../data/content';
import coachImage from '../assets/img/C.KM.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white mb-4 leading-tight">
              {coachInfo.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4">
              {coachInfo.headline}
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              {coachInfo.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" fullWidth className="sm:w-auto">
                Join Now
              </Button>
            </div>
          </div>
          
          {/* Coach Image */}
          <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden">
            <img 
              src={coachImage} 
              alt="Coach Kareem Maged" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

