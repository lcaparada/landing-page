"use client";

import { motion } from "framer-motion";
import { Wallpaper, Server, Cloud, Layers } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: <Wallpaper strokeWidth={1} size={20} />,
    title: "Front-end",
    description:
      "Aplicamos as tecnologias mais inovadoras disponíveis no mercado para potencializar nossos desenvolvimentos.",
    items: ["React JS", "React Native", "Cypress"],
  },
  {
    icon: <Server strokeWidth={1} size={20} />,
    title: "Back-end",
    description:
      "Desenvolvemos soluções robustas e escaláveis para sustentar sua aplicação.",
    items: ["Nest JS", "Express", "Jest", "Supabase"],
  },
  {
    icon: <Cloud strokeWidth={1} size={20} />,
    title: "Cloud",
    description:
      "Utilizamos provedores confiáveis para garantir segurança e disponibilidade.",
    items: ["AWS", "GCP"],
  },
  {
    icon: <Layers strokeWidth={1} size={20} />,
    title: "UI Design",
    description:
      "Utilizamos as tecnologias mais inovadoras do mercado para oferecer soluções de design de excelência.",
    items: ["Figma", "Sketch", "Photoshop"],
  },
];

const ServiceCategory = ({ icon, title, description, items }: Service) => (
  <div className="flex flex-col gap-y-4">
    <header className="flex flex-col gap-y-2">
      <div className="flex items-center text-brand gap-x-2">
        {icon}
        <p className="font-medium">{title}</p>
      </div>
      <span className="text-sm text-muted-foreground">{description}</span>
    </header>
    <ul className="flex flex-col gap-y-2">
      {items.map((item, index) => (
        <li key={index} className="font-medium">
          - {item}
        </li>
      ))}
    </ul>
  </div>
);

export const SectionFive = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="flex flex-col items-center justify-center gap-y-12 md:h-dvh"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-lg md:text-3xl text-brand font-semibold">
        Nossos principais serviços
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <ServiceCategory key={index} {...service} />
        ))}
      </section>
    </motion.section>
  );
};
