import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con React, Node.js y PostgreSQL. Incluye sistema de pagos, gestión de inventario y panel de administración.",
      image: "/bek.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://gimnasio-bekdoosan.vercel.app/",
      githubUrl: "https://gimnasio-bekdoosan.vercel.app/"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades colaborativas, notificaciones en tiempo real y sincronización multiplataforma.",
      image: "/Cris.png",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://viajaconchristian.com/",
      githubUrl: "https://viajaconchristian.com/"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Sitio web portfolio responsive con modo oscuro/claro, animaciones suaves y optimizado para SEO y rendimiento.",
      image: "/seg.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://rodriguezherrero.vercel.app/",
      githubUrl: "https://rodriguezherrero.vercel.app/"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, mostrando diferentes tecnologías y enfoques de desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
