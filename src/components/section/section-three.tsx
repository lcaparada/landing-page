"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [singleWidth, setSingleWidth] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);

  const SPEED = 50;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const firstGroup = el.querySelector(
        '[data-group="first"]'
      ) as HTMLElement | null;
      if (firstGroup) {
        setSingleWidth(firstGroup.offsetWidth);
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const duration = singleWidth ? singleWidth / SPEED : 10;

  return (
    <motion.section
      id={id}
      className="flex items-center justify-center  gap-x-8 h-dvh"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 items-center flex flex-col">
        <h2 className="text-3xl text-brand font-semibold mb-6">
          O que nossos clientes dizem?
        </h2>

        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex items-stretch"
            animate={
              inView && singleWidth ? { x: [0, -singleWidth] } : { x: 0 }
            }
            transition={{ repeat: Infinity, ease: "linear", duration }}
            style={{ willChange: "transform" }}
          >
            <div data-group="first" className="flex gap-6">
              {REVIEWS.map((r) => (
                <article
                  key={r.id}
                  className="w-fit bg-background border rounded-xl shadow-md p-6 flex-shrink-0"
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
