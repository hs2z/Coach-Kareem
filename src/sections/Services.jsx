import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { trainingPackages } from '../data/packages';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-dark">
      <div className="container-custom">
        <SectionTitle 
          title="Training Packages" 
          subtitle="Choose the perfect plan for your fitness journey"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trainingPackages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 font-display">
                  {pkg.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="primary" 
                fullWidth 
                className="mt-auto"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

