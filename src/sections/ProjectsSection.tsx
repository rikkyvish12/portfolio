import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    title: "HRMS System",
    description: "Enterprise-grade Human Resource Management System with automated payroll and attendance tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Doctor Appointment System",
    description: "A seamless platform for patients and doctors to manage appointments and medical records in real-time.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    tags: ["Angular", "Laravel", "MySQL"],
  },
  {
    title: "Real-Time Translation Video Call App",
    description: "Next-gen communication app with live speech-to-text translation and low-latency video streaming.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    tags: ["WebRTC", "Socket.io", "React", "Node.js"],
  },
  {
    title: "Laravel OTP Login System",
    description: "A secure authentication module featuring dual-factor OTP verification for enterprise applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Laravel", "Redis", "PHP"],
  },
  {
    title: "MERN Stack Applications",
    description: "A collection of high-performance full-stack applications built for scalability and modern user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn delay={0.2} className="mb-20">
          <h2 className="font-syncopate text-silver text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-6" />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1} y={40} className="group relative">
              <div className="glass overflow-hidden rounded-[2rem] transition-all duration-500 hover:glow-blue">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
                      <FiGithub className="text-lg" /> GitHub
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
                      <FiExternalLink className="text-lg" /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
