
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100' : 'py-6'
      }`}
    >
      <div className="max-container flex items-center justify-between">
        <Link to="/" className="text-xl font-medium grid grid-cols-2">
          <img src="/LOGO JF03.png" alt="Jyoti Films Logo" className='w-[60px] h-[60px]' />
          <a href="/" className='text-[38px] font-playfair mt-5 ml-[-1.2em]'>Jyoti Films</a>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#work" className="link-underline">
            Services
          </a>
          <a href="#about" className="link-underline">
            About
          </a>
          
          <a href="#contact" className="link-underline">
            Contact
          </a>
        </nav>
        
        <button className="md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Navbar;
