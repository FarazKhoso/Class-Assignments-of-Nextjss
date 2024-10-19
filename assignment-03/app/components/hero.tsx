import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Shape Your Future with Next.js
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Step into the realm of modern web development with Next.js. 
      <br /> 
      Master this powerful framework to build scalable, SEO-friendly, 
      <br /> 
      and lightning-fast applications that stand out.
      <br /> 
      Don’t miss this perfect opportunity to elevate your IT skills!
        </p>
        <a 
      href="#courses" 
      className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white"
    >
      Start Learning
    </a>
      </div>
    </section>
  );
};

export default HeroSection;
