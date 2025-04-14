
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '@/components/whatsappbutton';
import CounterSection from '@/components/countersection';
import ClientsCarousel from '@/components/ClientsCarousel';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CounterSection/>
        <About />
        <ClientsCarousel/>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton/>
    </div>
  );
};

export default Index;
