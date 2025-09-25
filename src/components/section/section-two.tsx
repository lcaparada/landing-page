"use client";

import { Logo } from "../icons/logo";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

type SectionTwoProps = {
  id?: string;
};

export const SectionTwo = ({ id }: SectionTwoProps) => {
  return (
    <section
      id={id}
      className="flex items-center justify-center  gap-x-8 h-dvh"
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Logo size={320} />
      </motion.div>

      <motion.div
        className="space-y-4 max-w-xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="text-3xl font-medium text-brand" variants={item}>
          Quem somos nós?
        </motion.h1>

        <motion.span className="text-base block" variants={item}>
          Somos uma software house dedicada a desenvolver soluções tecnológicas
          personalizadas, pensadas para se encaixar perfeitamente nas suas
          ideias e objetivos. Nosso compromisso é entregar qualidade, inovação e
          resultados, atuando como um parceiro estratégico que contribui para o
          crescimento do seu negócio e fortalece sua trajetória profissional.
          Cada projeto que desenvolvemos é uma oportunidade de criar algo
          impactante e memorável, que faça a diferença para você e para o seu
          mercado.
        </motion.span>
      </motion.div>
    </section>
  );
};
