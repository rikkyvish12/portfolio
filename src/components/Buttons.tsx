import React from 'react';

export const ContactButton = () => {
  return (
    <button 
      className="group relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-all duration-300"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </button>
  );
};

export const LiveProjectButton = () => {
  return (
    <button className="rounded-full border-2 border-primary px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-primary transition-all duration-200 hover:bg-primary/10">
      Live Project
    </button>
  );
};
