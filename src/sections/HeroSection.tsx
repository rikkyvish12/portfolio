import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import gsap from 'gsap';
import heroVideo from '../assets/just_make_simple_smile_202605080203.mp4';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-black px-6 pb-40">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="hero-text">
          <span className="mb-8 inline-block text-xs font-bold uppercase tracking-[0.5em] text-blue-400 md:text-sm">
            Full Stack Developer
          </span>
        </div>
        
        <div className="hero-text mt-8">
          <h1 className="font-syncopate mb-6 text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Ramakant <br /> 
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">Vishwakarma</span>
          </h1>
        </div>

        <div className="hero-text">
          <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
            “Building premium digital experiences <br className="hidden md:block" /> 
            with modern technologies.”
          </p>
        </div>

        <div className="hero-text mt-12 flex flex-col gap-6 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 -translate-x-full bg-gray-200 transition-transform group-hover:translate-x-0" />
          </button>
          <button className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black active:scale-95">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};


