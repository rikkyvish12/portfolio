import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split("");

  return (
    <p ref={ref} className={className}>
      {words.map((char, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Character key={i} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Character = ({ children, progress, range }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
