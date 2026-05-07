import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const ROW1 = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
const ROW2 = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="bg-dark py-24 pb-10 sm:py-32 md:py-40">
      <div className="flex flex-col gap-3 overflow-hidden">
        {/* Row 1 */}
        <motion.div 
          style={{ x: x1, willChange: 'transform' }} 
          className="flex gap-3 whitespace-nowrap"
        >
          {ROW1.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="Project" 
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          style={{ x: x2, willChange: 'transform' }} 
          className="flex gap-3 whitespace-nowrap"
        >
          {ROW2.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="Project" 
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
