import React from 'react';
import { ArrowRight, Leaf, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background with leaves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-blue-50">
          {[...Array(20)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute animate-float text-green-300 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Eco-Friendly
              <span className="block text-green-600">Human-Powered</span>
              Washing Machine
            </h1>
            <p className="text-xl text-gray-600">
              Experience the future of sustainable laundry with our innovative human-powered washing machine. Perfect for eco-tourism and off-grid adventures.
            </p>
            <div className="flex gap-4">
              <button className="group bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-700 transition-all hover:scale-105">
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-green-600 px-8 py-3 rounded-full flex items-center gap-2 border-2 border-green-600 hover:bg-green-50 transition-all">
                Watch Demo
                <Droplets className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i0.wp.com/practicalselfreliance.com/wp-content/uploads/2020/07/Pedal-Powered-Washing-Machine-2.jpg?w=600&ssl=1"
              alt="Eco-friendly washing"
              className="rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float-delayed">
              <div className="flex items-center gap-2">
                <Droplets className="text-blue-500" />
                <span className="text-sm font-medium">90% Less Water Usage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}