
import React, { useEffect, useRef } from 'react';
import { Image, Camera, GalleryHorizontal, GalleryVertical } from 'lucide-react';

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
              <h3 className="text-xl font-medium mb-6">Our Philosophy</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that every wedding tells a unique story, and our mission is to capture those special 
                moments that you'll cherish forever. With an eye for detail and passion for storytelling, 
                we create timeless photographs that reflect the beauty and emotion of your special day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines candid photojournalism with elegant portraiture, ensuring we document 
                both the grand moments and the intimate details that make your wedding uniquely yours.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-200 flex items-center gap-3">
                  <Camera className="w-5 h-5 text-gray-700" />
                  <div>
                    <h4 className="font-medium">Wedding Photography</h4>
                    <p className="text-gray-600">Comprehensive coverage of your entire wedding day</p>
                  </div>
                </li>
                <li className="pb-4 border-b border-gray-200 flex items-center gap-3">
                  <Image className="w-5 h-5 text-gray-700" />
                  <div>
                    <h4 className="font-medium">Pre-Wedding Shoots</h4>
                    <p className="text-gray-600">Romantic engagement and pre-wedding sessions</p>
                  </div>
                </li>
                <li className="pb-4 border-b border-gray-200 flex items-center gap-3">
                  <GalleryHorizontal className="w-5 h-5 text-gray-700" />
                  <div>
                    <h4 className="font-medium">Premium Photo Albums</h4>
                    <p className="text-gray-600">Handcrafted albums to preserve your memories</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <GalleryVertical className="w-5 h-5 text-gray-700" />
                  <div>
                    <h4 className="font-medium">Digital Collections</h4>
                    <p className="text-gray-600">High-resolution digital images with printing rights</p>
                  </div>
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
