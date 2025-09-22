import Image from "next/image";

const projects = [
  {
    title: "Plataforma de Delivery",
    img: "/project1.png",
    desc: "Sistema completo para restaurantes",
  },
  {
    title: "App de Treinos",
    img: "/project1.png",
    desc: "Aplicativo fitness com agenda inteligente",
  },
  {
    title: "Dashboard Financeiro",
    img: "/project1.png",
    desc: "Gestão de finanças em tempo real",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <Image
              width={100}
              height={100}
              src={p.img}
              alt={p.title}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
