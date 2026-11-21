import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/portfolio";
import OrgText from "./OrgText";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_16px_40px_-20px_rgb(0_0_0/0.35)]">
      {project.image && (
        <div className="-mx-2 -mt-2 mb-6 aspect-video overflow-hidden rounded-xl bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold tracking-tight">
          <OrgText text={project.title} logoClassName="h-7 w-auto rounded-md" />
        </h3>
        <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
          <OrgText text={project.context} logoClassName="h-4 w-auto" />
        </span>
      </div>

      <p className="mt-3 flex-1 leading-relaxed text-neutral-600">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-neutral-500">
        {project.tags.map((t, i) => (
          <li key={t}>
            {i > 0 && <span className="mr-3 text-neutral-300">/</span>}
            {t}
          </li>
        ))}
      </ul>

      {(project.demo || project.repo) && (
        <div className="mt-6 flex gap-2 border-t border-neutral-100 pt-5">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2">
              Voir le site <ArrowUpRight size={16} />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2">
              <Github size={16} /> Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
