
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "sonner";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24">
      <div className="max-container">
        <div
          ref={contactRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="section-title mb-16">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">Let's create something great together</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a project in mind or just want to say hello? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hello@taj.studio" className="text-gray-600 link-underline"></a>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600"></p>
                </div>
                <div>
                  <h4 className="font-medium">Mobile</h4>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
