import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

const EXPERIENCES = [
  {
    role: "Senior Full Stack Developer",
    company: "Premium Tech Solutions",
    period: "2023 - Present",
    description: "Leading the development of enterprise-level HRMS systems and real-time communication platforms using React and Node.js."
  },
  {
    role: "Full Stack Developer",
    company: "Innovation Hub",
    period: "2021 - 2023",
    description: "Built scalable e-commerce solutions and automated banking portals with Laravel and MySQL."
  },
  {
    role: "Software Engineer",
    company: "Digital Dynamics",
    period: "2019 - 2021",
    description: "Developed modern web interfaces and integrated complex RESTful APIs for client projects."
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full bg-black py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn delay={0.2} className="mb-20 text-center">
          <h2 className="font-syncopate text-silver mb-4 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Professional Journey
          </h2>
        </FadeIn>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="mb-16 last:mb-0">
              <FadeIn delay={i * 0.2} x={20} className="relative pl-12">
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-blue-500 bg-black shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                
                <div className="glass p-8 rounded-3xl transition-all duration-500 hover:glow-blue">
                  <div className="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-500 text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-1 rounded-full border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
