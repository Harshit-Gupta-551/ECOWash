import React from 'react';
import { Leaf, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            We're revolutionizing eco-tourism with sustainable washing solutions that respect our planet
            while providing essential services to remote locations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Eco-Friendly Design</h3>
            <p className="text-gray-600">Zero carbon footprint with sustainable materials and human-powered operation.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
            <p className="text-gray-600">Supporting sustainable tourism and remote communities worldwide.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
            <p className="text-gray-600">Empowering local communities with sustainable washing solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}