import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { 
  SiLaravel, SiPhp, SiMysql, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiAngular, SiTailwindcss, SiJavascript, 
  SiTypescript, SiPostman 
} from 'react-icons/si';

const SKILLS = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn delay={0.2} className="mb-20 text-center">
          <h2 className="font-syncopate text-silver mb-4 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Technological Stack
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            A curated selection of modern technologies used to build high-performance applications.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05} y={20}>
              <div className="glass group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 transition-all duration-500 hover:glow-blue">
                <div className="relative text-4xl text-gray-500 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                  <skill.icon />
                  <div className="absolute inset-0 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-50" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 transition-colors group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
