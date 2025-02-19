import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'Eco-friendly Living',
  },
  {
    url: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80',
    title: 'Clean & Green',
  },
  {
    url: 'https://images.unsplash.com/photo-1610557892470-55d587b5c9d1?auto=format&fit=crop&q=80',
    title: 'Sustainable Solutions',
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    title: 'Eco Tourism',
  },
  {
    url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80',
    title: 'Nature First',
  },
  {
    url: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&q=80',
    title: 'Adventure Awaits',
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80',
    title: 'Explore Sustainably',
  },
  {
    url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80',
    title: 'Clean Nature',
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact Gallery</h2>
          <p className="text-xl text-gray-600">Discover how our eco-friendly solution is making a difference around the world</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-green-400 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-green-400 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 text-white text-xl font-semibold">
              {images[selectedImage].title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}