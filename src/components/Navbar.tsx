import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GyeNyame from "./GyeNyame";

const links = [
  { id: "about", label: "Profil" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Indique la section en cours de lecture dans le menu
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-neutral-200 bg-white/85 backdrop-blur-md" : "border-b border-transparent bg-white"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight" aria-label="Accueil">
          <GyeNyame className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[-8deg]" />
          Vincent André
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {l.label}
              </a>
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-neutral-100"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !px-5 !py-2 lg:inline-flex">
          Me contacter
        </a>

        <button
          className="btn-icon lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-neutral-200 bg-white px-6 py-3 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 ${active === l.id ? "font-semibold text-neutral-950" : "text-neutral-500"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
