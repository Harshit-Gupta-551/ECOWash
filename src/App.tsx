import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="how-it-works"><HowItWorks /></section>
        <section id="about"><About /></section>
        <section id="gallery"><Gallery /></section>
        <section id="pricing"><Pricing /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;