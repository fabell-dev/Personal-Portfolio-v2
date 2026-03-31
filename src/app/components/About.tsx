import { motion } from "motion/react";
import { MapPin, Calendar, Coffee, Heart } from "lucide-react";
import profilePicture from "@/public/images/ProfilePicture.webp";
import profileMini from "@/public/images/ProfilePictureMini.png";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos completados" },
  { value: "10+", label: "Tecnologías dominadas" },
  { value: "100%", label: "Compromiso" },
];

const highlights = [
  { icon: MapPin, text: "Disponible remotamente" },
  { icon: Calendar, text: "Desde 2022 en el sector tech" },
  { icon: Coffee, text: "Amante del código limpio" },
  { icon: Heart, text: "Apasionado por el open source" },
];

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0d1428" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Sobre mí
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Quién soy
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0 w-fit mb-10">
              <div
                className="w-52 h-52 rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.2))",
                  border: "2px solid rgba(139,92,246,0.3)",
                }}
              >
                <img
                  src={profilePicture}
                  alt="Foto de perfil de Fabian M. Bello Ojea"
                  className="w-full h-full object-cover object-[center_0%]"
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #06b6d4) rounded-full",
                }}
              >
                <img
                  src={profileMini}
                  alt="Foto de perfil mini de Fabian M. Bello Ojea"
                  className="w-full h-full object-cover object-[center_0%] rounded-full"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 border"
                  style={{
                    background: "rgba(139, 92, 246, 0.05)",
                    borderColor: "rgba(139, 92, 246, 0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="mb-5"
              style={{
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#e2e8f0",
              }}
            >
              Desarrollador Full Stack con pasión por la tecnología
            </h3>
            <div
              className="space-y-4 mb-8"
              style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}
            >
              <p>
                Soy{" "}
                <strong style={{ color: "#e2e8f0" }}>
                  Fabian M. Bello Ojea
                </strong>
                , un desarrollador Full Stack con más de 3 años de experiencia
                construyendo aplicaciones web modernas y escalables. Me
                especializo en tecnologías JavaScript/TypeScript tanto en el
                frontend como en el backend.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, mantenible y bien
                documentado. Disfruto transformar ideas complejas en soluciones
                elegantes y eficientes, siempre con la experiencia del usuario
                en mente.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas
                tecnologías, contribuir a proyectos open source y mantenerme
                actualizado con las últimas tendencias del desarrollo web.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3"
                  style={{ color: "#94a3b8" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139, 92, 246, 0.15)" }}
                  >
                    <Icon size={15} style={{ color: "#8b5cf6" }} />
                  </div>
                  <span style={{ fontSize: "0.88rem" }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
