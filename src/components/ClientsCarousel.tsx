
import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Sample client logos
const clientLogos = [
  {
    id: 1,
    name: "Manohar Vilas Hotel",
    logoUrl: "Kawatra-manohar-villas-Logo-Blank.webp",
  },
  {
    id: 2,
    name: "Daikin",
    logoUrl: "logo_daikin png.png",
  },
  {
    id: 3,
    name: "Mikuni",
    logoUrl: "mikuni-logo.png",
  },
  {
    id: 4,
    name: "NIDEC",
    logoUrl: "NIDEC-logo.webp",
  }
];

const ClientsCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-white" 
      id="clients-section"
    >
      <div className="max-container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-center mb-10">Our Trusted Partners</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We're proud to collaborate with these amazing organizations to deliver exceptional photography services.
          </p>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {clientLogos.map((client) => (
                <CarouselItem key={client.id} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center justify-center p-6 h-32">
                      <img 
                        src={client.logoUrl}
                        alt={`${client.name} logo`}
                        className="max-h-16 max-w-full object-contain filter  transition-all duration-300"
                      />
                    </CardContent>
                  </Card>
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
    </section>
  );
};

export default ClientsCarousel;
