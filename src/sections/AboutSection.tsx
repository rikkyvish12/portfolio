import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Side: Text */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.2} x={-30}>
              <h2 className="font-syncopate text-silver text-4xl font-bold uppercase tracking-tight md:text-5xl">
                The Art of <br /> Engineering
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4} x={-30}>
              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  As a Full Stack Developer, I specialize in crafting digital solutions that blend technical excellence with aesthetic precision. My approach is rooted in the philosophy that software should not only function flawlessly but also evoke a sense of quality and luxury.
                </p>
                <p>
                  With a deep understanding of both frontend and backend ecosystems, I build scalable applications that deliver exceptional user experiences from the first pixel to the final data point.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Glass Cards */}
          <div className="relative grid gap-6 sm:grid-cols-2">
            <FadeIn delay={0.3} y={40} className="glass p-8 rounded-3xl group hover:glow-blue transition-all duration-500">
              <h3 className="text-blue-500 font-syncopate text-sm font-bold uppercase tracking-widest mb-4">Precision</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Clean, maintainable code architectures designed for longevity and performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40} className="glass p-8 rounded-3xl mt-8 sm:mt-12 group hover:glow-blue transition-all duration-500">
              <h3 className="text-blue-500 font-syncopate text-sm font-bold uppercase tracking-widest mb-4">Innovation</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Leveraging cutting-edge technologies to solve complex problems elegantly.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} y={40} className="glass p-8 rounded-3xl group hover:glow-blue transition-all duration-500">
              <h3 className="text-blue-500 font-syncopate text-sm font-bold uppercase tracking-widest mb-4">Aesthetics</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Pixel-perfect interfaces inspired by premium luxury and minimal design.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} y={40} className="glass p-8 rounded-3xl mt-8 sm:mt-12 group hover:glow-blue transition-all duration-500">
              <h3 className="text-blue-500 font-syncopate text-sm font-bold uppercase tracking-widest mb-4">Scalability</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Built to handle growth with robust cloud-native and full-stack solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
