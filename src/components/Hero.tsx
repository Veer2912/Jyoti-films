
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Wedding ceremony with bride and groom"
  },
  {
    id: 2,
    url: "/images/02.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 3,
    url: "/images/06.jpg", 
    alt: "Wedding Photograph"
  },
  {
    id: 4,
    url: "/images/07.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 5,
    url: "/images/11.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 6,
    url: "/images/12.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 7,
    url: "/images/13.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 8,
    url: "/images/15.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 9,
    url: "/images/16.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 10,
    url: "/images/DSC_5712.JPG",
    alt: "Wedding Photograph"
  },
  {
    id: 11,
    url: "/images/image-1.jpg",
    alt: "Wedding Photograph"
  },
  {
    id: 12,
    url: "/images/jy666.webp",
    alt: "Wedding Photograph"
  },
  {
    id: 13,
    url: "/images/01.jpg",
    alt: "Wedding Photograph"
  },
];

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
    <section className="min-h-screen flex flex-col pt-20 pb-20">
      <div className="max-container">
        <div 
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h1 className="hero-text mb-4">
                Premier Wedding <br className="hidden sm:block" /> 
                Photography Studio <br className="hidden sm:block" />
              </h1>
              <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-4">
                We capture your special moments with artistic flair and attention to detail, 
                creating timeless memories that will last a lifetime.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="#work" 
                  className="px-8 py-2 bg-black text-white rounded-full transition-all hover:bg-black/90"
                >
                  Our Services
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-2 border border-gray-200 rounded-full transition-all hover:border-gray-400"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            {/* Gallery Preview */}
            <div  className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center" >
                <a href='#carousel' className="text-white font-medium px-6 py-2 bg-black/60 rounded-full" >
                  View Our Gallery
                </a>
              </div>
            </div>
          </div>
          
          {/* Photo Carousel */}
          <div id='carousel' className="mt-12 mb-8">
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-center">Our Latest Photography Work</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-[4/5] items-center justify-center p-0 overflow-hidden">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
