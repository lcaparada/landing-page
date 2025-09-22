import {
  About,
  Footer,
  Navbar,
  Contact,
  Projects,
  ElevanteInformations,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ElevanteInformations />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
