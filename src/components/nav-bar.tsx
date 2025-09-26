"use client";

import React, { useEffect, useRef, useState } from "react";

export const NavBar = () => {
  const informations = [
    "Início",
    "Sobre",
    "Avaliações",
    "Projetos",
    "Serviços",
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  const handleClick = (label: string) => {
    const id = slugify(label);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleItemClick = (label: string) => {
    handleClick(label);
    setOpen(false);
  };

  return (
    <nav className="px-2 pb-6  z-50 pt-6 md:pt-12 bg-background items-center flex fixed right-0 md:px-52  justify-between w-full">
      <h1 className="text-lg  md:text-2xl">
        ELEVANTE <span className="text-brand">Software</span>
      </h1>

      <section className="hidden md:flex items-center gap-x-6">
        {informations.map((info, index) => (
          <button
            key={index}
            onClick={() => handleClick(info)}
            className="relative group cursor-pointer font-medium text-lg text-left focus:outline-none"
            aria-label={info}
          >
            <span className="relative z-10">{info}</span>
            <span
              className="absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-brand transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-focus:scale-x-100"
              aria-hidden="true"
            />
          </button>
        ))}
      </section>

      <div className="relative md:hidden">
        <button
          ref={buttonRef}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
        >
          <svg
            className={`w-6 h-6 text-current ${open ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6 text-current ${open ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          ref={menuRef}
          role="menu"
          aria-hidden={!open}
          className={`absolute right-0 mt-2 w-48 bg-background rounded-lg shadow-lg py-2 ${
            open ? "block" : "hidden"
          }`}
        >
          {informations.map((info, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(info)}
              role="menuitem"
              className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
            >
              {info}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
