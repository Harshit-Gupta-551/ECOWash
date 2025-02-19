import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Add Your Clothes',
    description: 'Place your clothes in the eco-friendly drum',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
  },
  {
    number: '02',
    title: 'Add Water & Soap',
    description: 'Use our special eco-friendly detergent',
    image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?auto=format&fit=crop&q=80',
  },
  {
    number: '03',
    title: 'Start Pedaling',
    description: 'Power the machine with simple pedaling motion',
    image: 'https://images.unsplash.com/photo-1475666675596-cca2035b3d79?auto=format&fit=crop&q=80',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, efficient, and eco-friendly washing in three easy steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 left-4 bg-green-600 text-white text-xl font-bold py-2 px-4 rounded-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <button className="group inline-flex items-center text-green-600 font-medium hover:text-green-700">
                Learn more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}