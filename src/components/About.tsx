
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-container">
        <div
          ref={aboutRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="section-title mb-16">About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-6">Our Approach</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in the power of simplicity and clarity in design. Our approach focuses on creating digital experiences 
                that feel intuitive and effortless, while maintaining a strong aesthetic presence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every project begins with deep research and understanding of your brand, audience, and objectives. 
                We then craft solutions that align with your vision and elevate your digital presence.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium">UI/UX Design</h4>
                  <p className="text-gray-600">Intuitive interfaces and engaging user experiences</p>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium">Web Development</h4>
                  <p className="text-gray-600">Responsive, accessible, and performant websites</p>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium">Brand Identity</h4>
                  <p className="text-gray-600">Cohesive visual systems that communicate your values</p>
                </li>
                <li>
                  <h4 className="font-medium">Digital Strategy</h4>
                  <p className="text-gray-600">Strategic direction for your digital transformation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
