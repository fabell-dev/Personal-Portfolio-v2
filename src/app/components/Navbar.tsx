import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8, 13, 26, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139, 92, 246, 0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              }}
            >
              <Code2 size={16} className="text-white" />
            </div>
            <span
              className="hidden sm:block"
              style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}
            >
              fabell<span style={{ color: "#8b5cf6" }}>-dev</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 rounded-md text-sm transition-all duration-200"
                  style={{
                    color: isActive ? "#8b5cf6" : "#94a3b8",
                    background: isActive
                      ? "rgba(139, 92, 246, 0.1)"
                      : "transparent",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-3 px-4 py-2 rounded-lg text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              }}
            >
              Contáctame
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#94a3b8" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(8, 13, 26, 0.98)",
            borderColor: "rgba(139, 92, 246, 0.15)",
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm transition-colors"
                style={{ color: "#94a3b8" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-2 px-4 py-3 rounded-lg text-sm text-white text-center"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              }}
            >
              Contáctame
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
