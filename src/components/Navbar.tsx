
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
        <Link to="/" className="text-xl font-medium">
          Taj Photography.
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/#work" className="link-underline">
            Services
          </Link>
          <Link to="/#about" className="link-underline">
            About
          </Link>
          <Link to="/#portfolio" className="link-underline">
            Portfolio
          </Link>
          <Link to="/#contact" className="link-underline">
            Contact
          </Link>
        </nav>
        
        <button className="md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Navbar;
