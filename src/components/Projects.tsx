import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolio";
import OrgText from "./OrgText";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  const filters = useMemo(() => ["Tous", ...new Set(projects.map((p) => p.context))], []);
  const [filter, setFilter] = useState("Tous");
  const visible = filter === "Tous" ? projects : projects.filter((p) => p.context === filter);

  return (
    <Section id="projects" index="04" title="Projets">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
            }`}
          >
            <OrgText text={f} logoClassName="h-4 w-auto" />
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
