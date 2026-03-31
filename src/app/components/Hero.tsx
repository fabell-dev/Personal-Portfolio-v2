import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import cvFileUrl from "@/public/CV FullStack Developer Fabian M. Bello Ojea.pdf?url";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080d1a" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#8b5cf6" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: "#06b6d4" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "#8b5cf6" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              color: "#a78bfa",
              fontSize: "0.8rem",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponible para proyectos
          </div>

          {/* Name */}
          <h1
            className="mb-2"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#f1f5f9",
            }}
          >
            Fabian{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              M. Bello
            </span>{" "}
            Ojea
          </h1>

          {/* Typing role */}
          <div
            className="mb-6"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "#94a3b8",
              minHeight: "2.5rem",
            }}
          >
            <span style={{ color: "#06b6d4" }}>{displayed}</span>
            <span className="animate-pulse" style={{ color: "#8b5cf6" }}>
              |
            </span>
          </div>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto mb-10"
            style={{
              color: "#64748b",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.8,
            }}
          >
            Desarrollador Full Stack apasionado por crear aplicaciones web
            modernas, escalables y de alto rendimiento. Especializado en React,
            Node.js y arquitecturas cloud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-7 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                fontSize: "0.95rem",
              }}
            >
              Ver Proyectos
            </button>
            <a
              href={cvFileUrl}
              download="CV FullStack Developer Fabian M. Bello Ojea.pdf"
              className="px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105 border"
              style={{
                color: "#e2e8f0",
                borderColor: "rgba(139, 92, 246, 0.4)",
                background: "rgba(139, 92, 246, 0.05)",
                fontSize: "0.95rem",
              }}
            >
              <span className="flex items-center gap-2">
                <Download size={16} />
                Descargar CV
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {[
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/fabell-dev/",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/fabian-marcos-bello-ojea-9a80473b1/",
              },
              {
                icon: Mail,
                label: "Email",
                href: "mailto:ojeafabian66@gmail.com",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border"
                style={{
                  color: "#94a3b8",
                  borderColor: "rgba(139, 92, 246, 0.2)",
                  background: "rgba(139, 92, 246, 0.05)",
                }}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "#475569" }}
      >
        <span style={{ fontSize: "0.7rem" }}>Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
