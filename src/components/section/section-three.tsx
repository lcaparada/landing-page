"use client";

import React from "react";
import { motion } from "framer-motion";

type Review = {
  id: number;
  name: string;
  text: string;
  rating: number;
};

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Ana Souza",
    text: "Equipe muito profissional — resultado além do esperado. Recomendaria sem dúvida.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Lima",
    text: "Comunicação clara e entrega pontual. Atendimento excelente.",
    rating: 5,
  },
  {
    id: 3,
    name: "Beatriz Gomes",
    text: "A experiência foi ótima, o time ajudou a otimizar nossos processos.",
    rating: 4,
  },
  {
    id: 4,
    name: "Eduardo Nascimento",
    text: "Profissionalismo e atenção aos detalhes. Voltaria a contratar.",
    rating: 5,
  },
  {
    id: 5,
    name: "Mariana Rocha",
    text: "Entrega criativa e eficiente. Superou expectativas no design.",
    rating: 5,
  },
  {
    id: 6,
    name: "Rafael Pereira",
    text: "Ótimo custo-benefício e suporte rápido. Recomendo.",
    rating: 4,
  },
];

type SectionThreeProps = {
  id?: string;
};

export const SectionThree: React.FC<SectionThreeProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="flex flex-col items-center justify-center gap-x-8 md:h-dvh"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-base md:text-3xl text-brand font-semibold mb-6 text-center">
        O que nossos clientes dizem?
      </h2>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <article
              key={r.id}
              className="bg-background border rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-medium">{r.name}</div>
                <div className="text-yellow-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
