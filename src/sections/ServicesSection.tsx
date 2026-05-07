import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection = () => {
  return (
    <section id="price" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase text-dark sm:mb-20 md:mb-28">
          Services
        </h2>

        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="border-t border-dark/15 py-8 first:border-t-0 sm:py-10 md:py-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-dark">
                  {service.num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-dark">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-dark opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
