export function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
      <p className="mb-6 text-gray-600">
        Fale conosco pelo formulário ou WhatsApp
      </p>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Sua mensagem"
          className="w-full border p-3 rounded-lg h-32"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Enviar
        </button>
      </form>

      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        className="inline-block mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
      >
        WhatsApp
      </a>
    </section>
  );
}
