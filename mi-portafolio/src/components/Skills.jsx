const techs = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git / GitHub",
  "Vite",
  "JavaScript",
  "Firebase",
  "React",
  "SQL",
  "Python",
  "Kivy / KivyMD"
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold 
                       transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
