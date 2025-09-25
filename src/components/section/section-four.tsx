"use client";

import { motion } from "framer-motion";
import { DouraVitaLogo } from "../icons/doura-vita-logo";
import { MindyLogo } from "../icons/mindy-logo";
import { CigzeroLogo } from "../icons/cigzero-logo";
import { AudioSnobbery } from "../icons/audio-snobbery-logo";
import { CoexistLogo } from "../icons/coexist-logo";

const PROJECTS = [
  {
    label: "DouraVita",
    description: "Sistema completo para cursos/video-aulas",
    logo: <DouraVitaLogo size={200} />,
  },
  {
    label: "Mindy",
    description: "Sistema completo para administração de creche",
    logo: <MindyLogo size={200} />,
  },
  {
    label: "CigZero",
    description: "Sistema Suporte prático para quem quer deixar o fumo de vez",
    logo: <CigzeroLogo size={70} />,
  },
  {
    label: "Audio Snobbery",
    description: "Plataforma de música",
    logo: <AudioSnobbery size={100} />,
  },
  {
    label: "Coexist",
    description: "App que ajuda você nas tarefas do dia a dia em casa",
    logo: <CoexistLogo size={100} />,
  },
];

export const SectionFour = () => {
  return (
    <motion.section
      className="flex items-center flex-col justify-center  gap-y-8 h-dvh"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-brand font-semibold mb-6">
        Principais projetos que desenvolvemos
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </section>
    </motion.section>
  );
};

type ProjectCardProps = {
  label: string;
  description: string;
  logo: React.ReactNode;
};

export const ProjectCard = ({ label, description, logo }: ProjectCardProps) => {
  return (
    <article className="w-full transition-transform transform hover:scale-105 cursor-pointer overflow-hidden bg-background border rounded-xl shadow-md">
      <div className="p-6 h-[150px] flex items-center justify-center">
        {logo}
      </div>
      <div className="p-6 border-t">
        <p className="text-brand font-semibold">{label}</p>
        <span className="text-base">{description}</span>
      </div>
    </article>
  );
};
