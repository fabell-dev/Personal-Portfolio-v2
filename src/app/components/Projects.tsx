import { motion } from "motion/react";
import { Github, ExternalLink, Star } from "lucide-react";
import ecomerce from "@/public/images/proyects/Ecommerce.png";
import miguelTattoo from "@/public/images/proyects/miguell-tattoo.png";
import alessaPortfolio from "@/public/images/proyects/desinger-portfolio.png";

const projects = [
  {
    title: "Strapi E-Commerce Frontend",
    description:
      "Aplicación de e-commerce completa construida con Next.js 16, React 19, TypeScript y Strapi CMS, con carrito persistente, checkout con Stripe, historial de órdenes, wishlist y sistema de reseñas.",
    image: ecomerce,
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Strapi CMS",
      "PostgreSQL",
      "Stripe",
    ],
    github: "https://github.com/fabell-dev/Strapi-E-commerce",
    demo: "https://strapi-e-commerce-vert.vercel.app",
    featured: true,
    color: "#8b5cf6",
  },
  {
    title: "Miguel Tattoo",
    description:
      "Página moderna para un estudio de tatuajes, con navegación suave, menú adaptable, galería con modal de imágenes, animaciones con Motion y llamado a la acción directo a WhatsApp para reservas.",
    image: miguelTattoo,
    tech: [
      "React 18",
      "Vite 6",
      "TypeScript",
      "Tailwind CSS v4",
      "Motion",
      "Lucide React",
    ],
    github: "https://github.com/fabell-dev/Miguel_Tattoo",
    demo: "https://miguel-tattoo.vercel.app/",
    featured: false,
    color: "#06b6d4",
  },
  {
    title: "Personal Portfolio Alessa",
    description:
      "Portafolio personal de una sola página para servicios de diseño gráfico y diseño web UX/UI, con desplazamiento suave por secciones, filtro de trabajos por categoría, animaciones con Motion y formulario de contacto de demostración.",
    image: alessaPortfolio,
    tech: [
      "React 18",
      "Vite 6",
      "TypeScript",
      "Tailwind CSS 4",
      "Motion",
      "Lucide React",
    ],
    github: "https://github.com/fabell-dev/Personal-Portfolio-Alessa",
    demo: "https://personal-portfolio-alessa.vercel.app/",
    featured: false,
    color: "#f59e0b",
  },
];

function ProjectCard({
  project,
  idx,
}: {
  project: (typeof projects)[0];
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(13, 20, 40, 0.9)",
        borderColor: "rgba(139, 92, 246, 0.15)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(8,13,26,0.9) 0%, rgba(8,13,26,0.3) 100%)`,
          }}
        />
        {project.featured && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs"
            style={{
              background: "rgba(139, 92, 246, 0.9)",
              color: "#fff",
            }}
          >
            <Star size={10} />
            Destacado
          </div>
        )}
        {/* Hover actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(8,13,26,0.9)", color: "#e2e8f0" }}
          >
            <Github size={15} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(139,92,246,0.9)", color: "#fff" }}
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-2 transition-colors duration-200"
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#f1f5f9",
          }}
        >
          {project.title}
        </h3>
        <p
          className="mb-4"
          style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7 }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-xs"
              style={{
                background: `${project.color}10`,
                color: project.color,
                border: `1px solid ${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
            style={{ color: "#94a3b8" }}
          >
            <Github size={14} />
            Código
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
            style={{ color: project.color }}
          >
            <ExternalLink size={14} />
            Demo en vivo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#080d1a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "#8b5cf6" }}
          >
            Portafolio
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Proyectos Destacados
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#64748b", fontSize: "0.9rem" }}
          >
            Una selección de los proyectos más relevantes en los que he
            trabajado.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/fabell-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border transition-all duration-200 hover:scale-105"
            style={{
              color: "#e2e8f0",
              borderColor: "rgba(139, 92, 246, 0.35)",
              background: "rgba(139, 92, 246, 0.05)",
              fontSize: "0.9rem",
            }}
          >
            <Github size={16} />
            Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
