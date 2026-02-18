import { Menu, X, Cat } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import ThemeController from "./ThemeController";

const navItems = [
  { name: "about me", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "portfolio", href: "#portfolio" },
  { name: "services", href: "#services" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observar las secciones
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <nav className="fixed w-full z-10 py-3 backdrop-filter md:backdrop-blur-lg bg-info-content md:bg-transparent border-neutral-content/50 border-b rounded-b-2xl shadow-white">
      <div className="mx-10 flex items-center justify-between">
        <div className="flex gap-5 ">
          <a href="#hero">
            <Cat className="hover:scale-115 transition-scale duration-150 w-10 h-10 stroke-neutral-content" />
          </a>

          <p className="text-2xl text-neutral-content font-bold flex items-center cursor-default">
            fabell-dev
          </p>
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex flex-2 justify-end space-x-8 text-neutral-content text-xl mr-5 ">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              className={`hover:text-primary transition-colors duration-300 relative pb-1 ${
                activeSection === item.href.slice(1) ? "text-primary" : ""
              }`}
              animate={{
                color:
                  activeSection === item.href.slice(1)
                    ? "text-neutral-content"
                    : "text-primary",
              }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
              <AnimatePresence mode="wait">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSection === item.href.slice(1) ? 1 : 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </motion.a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden order-3 p-2 z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="stroke-neutral-content" />
          ) : (
            <Menu size={24} className="stroke-neutral-content" />
          )}{" "}
        </button>

        <div
          className={`fixed inset-0 bg-info-content/95 backdroup-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl text-neutral-content">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={`hover:text-primary transition-colors duration-300 relative pb-1 ${
                  activeSection === item.href.slice(1) ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {/* <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSection === item.href.slice(1) ? 1 : 0,
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                /> */}
              </a>
            ))}
          </div>
        </div>
        <div className="order-2 justify-center w-20">
          <ThemeController />
        </div>
      </div>
    </nav>
  );
}
