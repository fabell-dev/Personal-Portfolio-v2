import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Tecnológica",
    period: "2021 – 2025",
    description:
      "Formación integral en desarrollo de software, algoritmos, estructuras de datos, bases de datos y arquitectura de sistemas. Proyecto de grado enfocado en desarrollo web con microservicios.",
    icon: GraduationCap,
    color: "#8b5cf6",
  },
  {
    degree: "Certificación Full Stack JavaScript",
    institution: "The Odin Project / FreeCodeCamp",
    period: "2021",
    description:
      "Programa completo de desarrollo web con enfoque práctico en JavaScript, React, Node.js, bases de datos y despliegue de aplicaciones.",
    icon: Award,
    color: "#06b6d4",
  },
  {
    degree: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    period: "2022",
    description:
      "Certificación en servicios cloud de AWS: EC2, S3, RDS, Lambda, IAM y fundamentos de arquitectura cloud.",
    icon: Award,
    color: "#a855f7",
  },
];

const courses = [
  "React – The Complete Guide (Udemy)",
  "Node.js, Express, MongoDB & More (Udemy)",
  "TypeScript Avanzado (Platzi)",
  "Docker y Kubernetes (Udemy)",
  "GraphQL con Apollo (Frontend Masters)",
  "SQL y PostgreSQL (Coursera)",
];

export function Education() {
  return (
    <section id="education" className="py-24" style={{ background: "#0d1428" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Formación
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Educación & Certificaciones
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(8, 13, 26, 0.8)",
                  borderColor: `${edu.color}20`,
                  borderTopWidth: "2px",
                  borderTopColor: edu.color,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${edu.color}15` }}
                >
                  <Icon size={22} style={{ color: edu.color }} />
                </div>

                <div
                  className="mb-1"
                  style={{ color: edu.color, fontSize: "0.75rem" }}
                >
                  {edu.period}
                </div>

                <h3
                  className="mb-1"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#f1f5f9",
                    lineHeight: 1.4,
                  }}
                >
                  {edu.degree}
                </h3>
                <div
                  className="mb-3"
                  style={{ color: "#64748b", fontSize: "0.82rem" }}
                >
                  {edu.institution}
                </div>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.83rem",
                    lineHeight: 1.6,
                  }}
                >
                  {edu.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 border"
          style={{
            background: "rgba(8, 13, 26, 0.6)",
            borderColor: "rgba(139, 92, 246, 0.15)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(139, 92, 246, 0.15)" }}
            >
              <BookOpen size={18} style={{ color: "#8b5cf6" }} />
            </div>
            <h3
              style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1.05rem" }}
            >
              Cursos & Aprendizaje continuo
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(139, 92, 246, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.1)",
                }}
              >
                <span style={{ color: "#8b5cf6", fontSize: "0.75rem" }}>✓</span>
                <span style={{ color: "#94a3b8", fontSize: "0.82rem" }}>
                  {course}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
