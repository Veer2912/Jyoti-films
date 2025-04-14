import React, { useState, useEffect, useRef } from 'react';
import { Calendar, FolderHeart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

type CounterItemProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration: number;
  suffix?: string;
  hasAnimated: boolean;
};

const CounterItem = ({ icon, value, label, duration, suffix = '', hasAnimated }: CounterItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let start = 0;
    const increment = value / duration * 10;
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration, hasAnimated]);

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <div className="rounded-full bg-primary/10 p-4 mb-4">
          {icon}
        </div>
        <div className="text-4xl font-bold mb-2">
          {count}{suffix}
        </div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const counterData = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      value: 32,
      label: "Years of Experience",
      duration: 2500,
      suffix: '+'
    },
    {
      icon: <FolderHeart className="h-8 w-8 text-primary" />,
      value: 50000,
      label: "Projects Completed",
      duration: 2500,
      suffix: '+'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: 400,
      label: "Satisfied Clients",
      duration: 2500,
      suffix: '+'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/30"
      id="counter-section"
    >
      <div className="max-container">
        <h2 className="section-title text-center mb-16">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counterData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              value={item.value}
              label={item.label}
              duration={item.duration}
              suffix={item.suffix}
              hasAnimated={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;