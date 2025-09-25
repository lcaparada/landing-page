import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "@/components";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

export default function Home() {
  return (
    <main className="w-full">
      <SectionOne id={slugify("Início")} />
      <SectionTwo id={slugify("Sobre")} />
      <SectionThree id={slugify("Avaliações")} />
      <SectionFour id={slugify("Projetos")} />
      <section
        id={slugify("Serviços")}
        className="flex items-center justify-center gap-x-8 h-dvh"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl text-brand font-semibold mb-6">Serviços</h2>
          <p className="text-base">
            Oferecemos desenvolvimento web, mobile, design e consultoria para
            transformar ideias em produtos reais.
          </p>
        </div>
      </section>
    </main>
  );
}
