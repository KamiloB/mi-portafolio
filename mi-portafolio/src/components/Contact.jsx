import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="mb-10">¿Quieres trabajar conmigo o preguntar algo? Contáctame:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <a
          href="https://mail.google.com/mail/?view=cm&to=kamilob1224@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold
                     transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <Mail size={20} /> Email
        </a>

        <a
          href="https://github.com/KamiloB"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-semibold
                     transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <Github size={20} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/juan-kamilo-blandon-velez-4a6452187"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold
                     transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <Linkedin size={20} /> LinkedIn
        </a>

        <a
          href="https://www.instagram.com/kamilo_blandon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold
                     transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <Instagram size={20} /> Instagram
        </a>
      </div>
    </section>
  );
}
