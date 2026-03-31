import { motion } from "motion/react";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechSolutions Agency",
    period: "Enero 2023 – Presente",
    type: "Tiempo completo",
    description:
      "Desarrollo y mantenimiento de aplicaciones web escalables para clientes internacionales. Liderazgo técnico en proyectos usando React, Node.js y PostgreSQL.",
    achievements: [
      "Reducción del tiempo de carga en un 40% mediante optimización de queries y lazy loading",
      "Implementación de arquitectura microservicios con Docker y CI/CD en AWS",
      "Desarrollo de un sistema de autenticación OAuth2 con roles y permisos",
      "Mentoría a 2 desarrolladores junior del equipo",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    color: "#8b5cf6",
  },
  {
    role: "Frontend Developer",
    company: "Startup Digital",
    period: "Junio 2022 – Diciembre 2022",
    type: "Freelance / Remoto",
    description:
      "Desarrollo de interfaces de usuario modernas y responsivas para plataformas SaaS. Trabajo cercano con el equipo de diseño para implementar UIs pixel-perfect.",
    achievements: [
      "Migración de aplicación legacy de jQuery a React con TypeScript",
      "Implementación de sistema de notificaciones en tiempo real con WebSockets",
      "Mejora del score de Lighthouse de 55 a 92 puntos",
      "Integración con múltiples APIs de terceros (Stripe, SendGrid, Twilio)",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "WebSockets"],
    color: "#06b6d4",
  },
  {
    role: "Junior Web Developer",
    company: "FreelanceDev",
    period: "Enero 2021 – Mayo 2022",
    type: "Freelance",
    description:
      "Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas. Gestión completa de proyectos desde la conceptualización hasta el despliegue.",
    achievements: [
      "Desarrollo de más de 10 sitios web para clientes de distintos sectores",
      "Implementación de tiendas e-commerce con pasarelas de pago",
      "Configuración de servidores VPS con Nginx y SSL",
      "Creación de APIs REST con Node.js y Express",
    ],
    tech: ["JavaScript", "React", "Node.js", "MySQL", "Nginx"],
    color: "#a855f7",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "#0d1428" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Trayectoria
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Experiencia Laboral
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "rgba(139, 92, 246, 0.2)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-12 h-12 rounded-xl items-center justify-center hidden sm:flex"
                  style={{
                    background: `${exp.color}20`,
                    border: `2px solid ${exp.color}40`,
                  }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-50"
                  style={{
                    background: "rgba(8, 13, 26, 0.8)",
                    borderColor: `${exp.color}20`,
                    borderLeftWidth: "3px",
                    borderLeftColor: exp.color,
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#f1f5f9",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ color: exp.color, fontSize: "0.9rem" }}>
                          {exp.company}
                        </span>
                        <ExternalLink size={13} style={{ color: "#475569" }} />
                      </div>
                    </div>
                    <div className="text-right">
                      <div style={{ color: "#64748b", fontSize: "0.8rem" }}>
                        {exp.period}
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          fontSize: "0.72rem",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="mb-4" style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                        style={{ color: "#94a3b8", fontSize: "0.83rem" }}
                      >
                        <span style={{ color: exp.color, marginTop: "4px", flexShrink: 0 }}>▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          background: `${exp.color}10`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
