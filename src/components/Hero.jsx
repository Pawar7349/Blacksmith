import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white font-times">
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" // Ensuring the video is in the correct layer
        autoPlay 
        loop 
        muted 
        src="/videos/hero-video.mp4"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay */}
      <div className="container mx-auto text-center p-8 relative z-20">
        <h1 className="text-5xl font-bold mb-4">Blacksmith Engineering</h1>
        <p className="text-xl mb-8">
          Experts in Industrial Fabrication and General Engineering Work
        </p>
        <a
          href="#about"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
