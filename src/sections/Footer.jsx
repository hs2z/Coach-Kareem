import React from 'react';
import { coachInfo } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-dark py-8 border-t border-gray-800">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {coachInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Transform Your Body, Transform Your Life
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

