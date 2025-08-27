export default function Header() {
  return (
    <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4">
        <img src="\images\foto.jpeg" alt="Kamilo Blandon" class="w-100 h-80 rounded-full border-4 border-gray-700"></img>
      <h1 className="text-5xl font-bold mb-4">Kamilo Blandon</h1>
      <p className="text-xl mb-6">Desarrollador de Software | Full Stack | Proyectos Web Modernos</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-200 transition"
      >
        Ver proyectos
      </a>
    </header>
  );
}
