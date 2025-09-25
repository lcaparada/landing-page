import { Button, VSCode } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex items-center gap-x-8 h-dvh">
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
      </section>
    </main>
  );
}
