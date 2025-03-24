
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20">
      <div className="max-container">
        <div 
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h1 className="hero-text mb-8">
            Premier wedding <br className="hidden sm:block" /> 
            photography studio <br className="hidden sm:block" />
            based in London
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-12">
            We capture your special moments with artistic flair and attention to detail, 
            creating timeless memories that will last a lifetime.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#work" 
              className="px-8 py-4 bg-black text-white rounded-full transition-all hover:bg-black/90"
            >
              Our Services
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-gray-200 rounded-full transition-all hover:border-gray-400"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
