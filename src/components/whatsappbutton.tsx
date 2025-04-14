
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+919729445577'; // Replace with actual phone number
  const message = encodeURIComponent('Hello, I would like to know more about your wedding photography services!');
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
