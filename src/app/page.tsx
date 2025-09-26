import {
  SectionFive,
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
    <main className="w-full space-y-40 pb-6">
      <SectionOne id={slugify("Início")} />
      <SectionTwo id={slugify("Sobre")} />
      <SectionThree id={slugify("Avaliações")} />
      <SectionFour id={slugify("Projetos")} />
      <SectionFive id={slugify("Serviços")} />
    </main>
  );
}
