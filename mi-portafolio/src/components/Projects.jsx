import { useState } from "react";
import { Search } from "lucide-react"; // ícono de lupa

const proyectos = [
  {
    nombre: "Horus Shop (HTML, CSS, JS)",
    descripcion:
      "Tienda en línea para mi negocio, con aplicación JS robusta para gestión de productos y ventas.",
    link: "https://tiendahorus.com",
    imagen: "/images/Horus.png",
  },
  {
    nombre: "Soluciones Electrónicas Integrales (HTML, CSS, JS + E-commerce)",
    descripcion:
      "Página web y e-commerce completo para un negocio familiar, integrando registro de productos y compras.(en mejora)",
    link: "https://kamilob.github.io/SEI-WEB",
    imagen: "/images/SEI.png",
  },
  {
    nombre: "Aplicación de escritorio para registro de estudiantes (Python)",
    descripcion:
      "Sistema de control de alumnos, pagos y mensualidades para mis clases de TKD. Incluye base de datos y avisos automáticos de mensualidades caducadas.",
    link: " ",
    imagen: "/images/HorusTKD.png",
  },
  {
    nombre: "Horus Task Manager (Python, Kivy + KivyMD)",
    descripcion: "Descripción breve del proyecto 2",
    link: " ",
    imagen: "/images/HorusTM.png",
  },
  //{
  //  nombre: "Proyecto 3",
  //  descripcion: "Descripción breve del proyecto 3",
  //  link: "https://tuweb2.com",
  //  imagen: "https://via.placeholder.com/300x200",
  //},
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [closing, setClosing] = useState(false);
  const [zoomImage, setZoomImage] = useState(null); // estado para zoom fullscreen

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setSelected(null);
      setClosing(false);
    }, 300); // coincide con la duración de la animación
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {proyectos.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 relative group"
            onClick={() => setSelected(p)}
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              className="w-full h-48 object-cover"
            />

            {/* Botón lupa (solo abre la imagen fullscreen, no el modal del proyecto) */}
            <button
              className="absolute top-2 right-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              onClick={(e) => {
                e.stopPropagation(); // evita que se abra el modal de proyecto
                setZoomImage(p.imagen);
              }}
            >
              <Search className="w-5 h-5 text-white" />
            </button>

            <div className="p-4">
              <h3 className="font-bold text-lg">{p.nombre}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal info proyecto */}
      {selected && (
        <>
          {/* Fondo */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${
              closing ? "opacity-0" : "opacity-100"
            }`}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
            <div
              className={`bg-white rounded-lg p-6 max-w-lg w-full pointer-events-auto relative ${
                closing ? "animate-scaleOut" : "animate-scaleIn"
              }`}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 font-bold"
                onClick={handleClose}
              >
                X
              </button>
              <h3 className="text-2xl font-bold mb-4">{selected.nombre}</h3>
              <p className="mb-4">{selected.descripcion}</p>
              <a
                href={selected.link}
                target="_blank"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        </>
      )}

      {/* Modal fullscreen para imágenes */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={zoomImage}
              alt="Zoom"
              className="w-full h-auto rounded-lg object-contain cursor-zoom-in hover:scale-110 transition-transform duration-300"
            />
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-2 right-2 bg-red-500/80 p-2 rounded-full text-white hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
