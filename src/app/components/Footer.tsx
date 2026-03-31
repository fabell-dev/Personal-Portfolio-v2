import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/fabell-dev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fabian-marcos-bello-ojea-9a80473b1/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ojeafabian66@gmail", label: "Email" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "#080d1a",
        borderColor: "rgba(139, 92, 246, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                }}
              >
                <Code2 size={16} className="text-white" />
              </div>
              <span style={{ color: "#e2e8f0", fontWeight: 600 }}>
                fabell<span style={{ color: "#8b5cf6" }}>-dev</span>
              </span>
            </div>
            <p
              style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.7 }}
            >
              Desarrollador Full Stack apasionado por crear experiencias
              digitales excepcionales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-4"
              style={{
                color: "#94a3b8",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Navegación
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left transition-colors duration-200 hover:text-purple-400"
                  style={{ color: "#475569", fontSize: "0.85rem" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="mb-4"
              style={{
                color: "#94a3b8",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Redes Sociales
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:border-purple-500"
                  style={{
                    color: "#64748b",
                    borderColor: "rgba(139, 92, 246, 0.2)",
                    background: "rgba(139, 92, 246, 0.05)",
                  }}
                  title={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(139, 92, 246, 0.1)" }}
        >
          <p
            className="flex items-center gap-1.5"
            style={{ color: "#374151", fontSize: "0.8rem" }}
          >
            © 2026 Fabian M. Bello Ojea · Hecho con{" "}
            <Heart size={12} style={{ color: "#8b5cf6" }} /> y mucho café
          </p>
          <button
            onClick={() => scrollTo("#hero")}
            className="text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105"
            style={{
              color: "#8b5cf6",
              borderColor: "rgba(139, 92, 246, 0.25)",
              background: "rgba(139, 92, 246, 0.05)",
            }}
          >
            ↑ Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
