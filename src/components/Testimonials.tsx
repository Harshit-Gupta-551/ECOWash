import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Eco Resort Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'This washing machine has transformed our resort operations. Our guests love the eco-friendly approach and the unique experience it provides. It\'s become a talking point and a major attraction!',
  },
  {
    name: 'Michael Chen',
    role: 'Adventure Guide',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'Perfect for our camping expeditions. Not only is it lightweight and efficient, but it also teaches our guests about sustainable living. The build quality is exceptional, and it handles all types of outdoor wear.',
  },
  {
    name: 'Emma Williams',
    role: 'Environmental Consultant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    content: 'A brilliant solution for reducing carbon footprint in the hospitality industry. The data shows significant water and energy savings. This is exactly the kind of innovation we need for sustainable tourism.',
  },
  {
    name: 'David Rodriguez',
    role: 'Sustainable Hotel Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    content: 'We\'ve installed these in all our eco-lodges. The guests are amazed by how effective and fun they are to use. It\'s helped us achieve our sustainability goals while providing a unique experience.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Join hundreds of satisfied customers worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}