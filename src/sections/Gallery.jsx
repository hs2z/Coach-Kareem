import React from 'react';
import SectionTitle from '../components/SectionTitle';
import transformation1 from '../assets/img/1.jpg';
import transformation2 from '../assets/img/2.jpg';
import transformation3 from '../assets/img/3.jpg';
import transformation4 from '../assets/img/4.jpg';
import transformation5 from '../assets/img/5.jpg';
import transformation6 from '../assets/img/6.jpg';

const Gallery = () => {
  // Transformation images array
  const transformationImages = [
    { id: 1, src: transformation1, alt: 'Transformation 1' },
    { id: 2, src: transformation2, alt: 'Transformation 2' },
    { id: 3, src: transformation3, alt: 'Transformation 3' },
    { id: 4, src: transformation4, alt: 'Transformation 4' },
    { id: 5, src: transformation5, alt: 'Transformation 5' },
    { id: 6, src: transformation6, alt: 'Transformation 6' },
  ];
  
  return (
    <section id="gallery" className="section-padding bg-dark-light">
      <div className="container-custom">
        <SectionTitle 
          title="Transformations" 
          subtitle="Real results from real clients"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {transformationImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

