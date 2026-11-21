import { learning, profile, skills } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Compétences">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} className="bg-white p-8">
            <Reveal>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 text-sm font-medium text-neutral-800"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}

        {/* En cours d'apprentissage : style distinct (pointillés) pour ne pas confondre avec les acquis */}
        <div className="bg-neutral-50 p-8 sm:col-span-2">
          <Reveal>
            <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-700" />
              </span>
              En cours d'apprentissage
            </h3>
            <p className="mb-5 text-sm text-neutral-500">Je me forme activement pour devenir compétent sur :</p>
            <ul className="flex flex-wrap gap-2">
              {learning.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-dashed border-neutral-400 px-3.5 py-1.5 text-sm font-medium text-neutral-600"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-neutral-600">
        <span className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Langues</span>
        {profile.languages.map((l) => (
          <span key={l.name}>
            <span className="font-medium text-neutral-950">{l.name}</span> — {l.level}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
