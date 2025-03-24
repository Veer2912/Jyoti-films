
import React, { useEffect, useRef } from 'react';
import { Camera, Image, Video, Film, Drone } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  icon: React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Wedding Photography",
    category: "Photography",
    description: "Capture every magical moment of your special day with our professional wedding photography services.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    icon: <Camera className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Pre Wedding Shoots",
    category: "Photography",
    description: "Beautiful pre-wedding photoshoots at stunning locations to celebrate your journey together.",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    icon: <Image className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Wedding Shoots",
    category: "Photography",
    description: "Comprehensive wedding day coverage, from preparation to reception, capturing all those special moments.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    icon: <Video className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Plasma Screens",
    category: "Equipment",
    description: "High-definition plasma screens to showcase your photos and videos during your wedding celebration.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    link: "#",
    icon: <Film className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Drone Shooting",
    category: "Aerial Photography",
    description: "Breathtaking aerial shots and videos of your venue and ceremony for a unique perspective.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    icon: <Drone className="w-5 h-5" />
  }
];

const ProjectItem = ({ project }: { project: Project }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
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
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${project.id * 100}ms` }}
    >
      <a href={project.link} className="block group">
        <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium px-4 py-2 bg-black/60 rounded-full flex items-center gap-2">
              {project.icon}
              View Details
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          {project.icon}
          <h3 className="text-xl font-medium">{project.title}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-2">{project.category}</p>
        <p className="text-gray-600">{project.description}</p>
      </a>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-container">
        <div 
          ref={titleRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            We offer a comprehensive range of wedding photography and videography services 
            to ensure your special day is captured perfectly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
