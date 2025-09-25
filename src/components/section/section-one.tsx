"use client";

import { Button } from "../button";
import { VSCode } from "../vs-code";
import { motion } from "framer-motion";

type SectionOneProps = {
  id?: string;
};

export const SectionOne = ({ id }: SectionOneProps) => {
  return (
    <motion.section
      id={id}
      className="flex items-center justify-center  gap-x-8 h-dvh"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-8">
        <h1 className="text-2xl text-start font-medium">
          Soluções tecnológicas que transformam sua empresa e{" "}
          <span className="text-brand">potencializam seus resultados.</span>
        </h1>
        <p className="text-sm font-regular text-start">
          Aplicando as tecnologias mais avançadas do mercado, desenvolvemos
          soluções personalizadas para atender às suas necessidades e
          impulsionar o seu sucesso.
        </p>
        <Button size={"lg"}>Fale conosco</Button>
      </div>
      <VSCode />
    </motion.section>
  );
};
