import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: ' 2,000',
    features: [
      'Manual washing mechanism',
      'Water-efficient design',
      '1-year warranty',
      'Basic maintenance kit',
      'Installation guide',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: ' 5,000',
    features: [
      'Enhanced washing mechanism',
      'Ultra water-efficient design',
      '2-year warranty',
      'Premium maintenance kit',
      'Professional installation',
      'Training session',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: ' 10,000',
    features: [
      'Industrial washing mechanism',
      'Maximum water efficiency',
      '3-year warranty',
      'Deluxe maintenance kit',
      'Professional installation',
      'Multiple training sessions',
      '24/7 support',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">Rs{plan.price}</span>
                  <span className="text-gray-600">/unit</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition-colors ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}