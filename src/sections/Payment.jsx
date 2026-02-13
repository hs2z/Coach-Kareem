import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { coachInfo } from '../data/content';

const Payment = () => {
  return (
    <section id="payment" className="section-padding bg-dark">
      <div className="container-custom">
        <SectionTitle 
          title="Payment Options" 
          subtitle="Choose your preferred payment method"
        />
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Payment Methods</h3>
                
                <div className="space-y-4">
                  {/* Instagram Contact */}
                  <div className="bg-dark-lighter p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-white font-semibold">Instagram Contact</span>
                    </div>
                    <p className="text-gray-300">{coachInfo.instagram}</p>
                  </div>
                  
                  {/* InstaPay */}
                  <div className="bg-dark-lighter p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        <path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                      </svg>
                      <span className="text-white font-semibold">InstaPay Number</span>
                    </div>
                    <p className="text-gray-300">{coachInfo.instaPay}</p>
                  </div>
                  
                  {/* Cash Payment */}
                  <div className="bg-dark-lighter p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-white font-semibold">Cash Payment</span>
                    </div>
                    <p className="text-gray-300">Available upon request. Contact for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Payment;

