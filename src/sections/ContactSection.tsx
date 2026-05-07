import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

export const ContactSection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div>
            <FadeIn delay={0.2} x={-30}>
              <h2 className="font-syncopate text-silver mb-8 text-4xl font-bold uppercase tracking-tight md:text-5xl">
                Let&apos;s Build <br /> Something <br /> <span className="text-white">Extraordinary</span>
              </h2>
            </FadeIn>

            <div className="space-y-8 mt-12">
              <FadeIn delay={0.3} x={-30} className="flex items-center gap-6 group">
                <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:glow-blue">
                  <FiMail className="text-xl text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Me</p>
                  <p className="text-white font-medium">contact@ramakant.dev</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} x={-30} className="flex items-center gap-6 group">
                <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:glow-blue">
                  <FiPhone className="text-xl text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Call Me</p>
                  <p className="text-white font-medium">+91 98765 43210</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5} y={20} className="flex gap-4 mt-16">
              {[FiLinkedin, FiGithub, FiTwitter, FiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 hover:glow-blue hover:-translate-y-1">
                  <Icon className="text-xl text-gray-400 hover:text-white" />
                </a>
              ))}
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.4} className="glass p-10 rounded-[3rem]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <input 
                    {...register("name")}
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Subject</label>
                <input 
                  {...register("subject")}
                  type="text" 
                  placeholder="How can I help?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-5 rounded-2xl transition-all hover:bg-blue-500 hover:text-white active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      <footer className="mt-32 border-t border-white/5 py-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600">
          &copy; {new Date().getFullYear()} Ramakant Vishwakarma &bull; Handcrafted with Excellence
        </p>
      </footer>
    </section>
  );
};
