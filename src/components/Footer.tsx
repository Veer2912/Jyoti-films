
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-medium mb-4 inline-block">
            <img src="/LOGO JF03.png" alt="Jyoti Films Logo" className='h-[80px] w-[80px]' />
              Jyoti Films
            </Link>
            <p className="text-gray-600 max-w-xs">
              Independent design studio creating minimal, functional digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-600 hover:text-black transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/jyoti_films.001?igsh=MTNycnJmb2lmNnJocw==" className="text-gray-600 hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/18rMdZcjhW/" className="text-gray-600 hover:text-black transition-colors">
                  Facebook
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Jyoti Films All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
