export const NavBar = () => {
  const informations = [
    "Início",
    "Sobre",
    "Avaliações",
    "Projetos",
    "Serviços",
  ];

  return (
    <nav className="pb-6 pt-12 items-center flex fixed right-0 px-52  justify-between w-full">
      <h1 className="text-2xl">
        ELEVANTE <span className="text-brand">Software</span>
      </h1>
      <section className="flex items-center gap-x-6">
        {informations.map((info, index) => (
          <button
            key={index}
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
    </nav>
  );
};
