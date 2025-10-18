import { Menu, X, Cat } from "lucide-react";
import { useState } from "react";
import ThemeController from "./ThemeController";

const navItems = [
  { name: "about", href: "#about" },
  { name: "skill", href: "#skill" },
  { name: "services", href: "#services" },
  { name: "portfolio", href: "#portfolio" },
  { name: "contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-10 py-3">
      <div className="container flex items-center justify-between">
        <div className="flex gap-5 ">
          <a href="#hero">
            <Cat className="w-10 h-10 stroke-neutral-content" />
          </a>

          <p className="text-2xl text-neutral-content font-bold flex items-center cursor-default">
            fabell-dev
          </p>
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex flex-2 justify-end space-x-8 text-neutral-content text-xl mr-5 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
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
                className=" hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="order-2 justify-center w-20">
        <ThemeController/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
