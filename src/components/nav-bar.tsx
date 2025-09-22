export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">Elevante Software</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-600">
          Sobre
        </a>
        <a href="#projects" className="hover:text-blue-600">
          Projetos
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contato
        </a>
      </div>
    </nav>
  );
}
