import React from 'react';
import { Battery, Droplets, Leaf, Mountain } from 'lucide-react';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    title: 'Zero Electricity',
    description: 'Our innovative pedal-powered mechanism eliminates the need for electricity, making it perfect for remote locations and reducing your carbon footprint.',
  },
  {
    image: 'https://api.deepai.org/job-view-file/392c00fb-5bb8-487b-ab64-2312782bc4a6/outputs/output.jpg',
    title: 'Water Efficient',
    description: 'Advanced water recycling system uses 90% less water than traditional washing machines, helping preserve our precious water resources.',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80',
    title: 'Perfect for Eco-Tourism',
    description: 'Designed specifically for eco-resorts, camping sites, and remote locations. Easy to transport and maintain in any environment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80',
    title: 'Eco-Friendly',
    description: 'Built with sustainable materials and zero-waste manufacturing processes. Each unit saves over 1,000 kg of CO2 emissions annually.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Solution?</h2>
          <p className="text-xl text-gray-600">Discover the benefits of our innovative eco-friendly washing machine</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <p className="text-gray-600">Liters of Water Saved</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Eco-Resorts Equipped</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <p className="text-gray-600">CO2 Emissions Reduced (kg)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}