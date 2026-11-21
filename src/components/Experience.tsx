import { experiences, orgLogos } from "../data/portfolio";
import OrgText from "./OrgText";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Expérience">
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <article className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-400 md:grid-cols-4">
              <div>
                {exp.period && <p className="font-display text-sm font-medium text-neutral-500">{exp.period}</p>}
                {(exp.logo ?? orgLogos[exp.company]) && (
                  <img src={exp.logo ?? orgLogos[exp.company]} alt={exp.logo ? "Logo AfriDigital" : `Logo ${exp.company}`} className={`hidden h-16 w-auto md:block ${exp.period ? "mt-4" : ""}`} />
                )}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-neutral-400">·</span>{" "}
                  <OrgText text={exp.company} logoClassName="h-6 w-auto md:hidden" />
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  <OrgText text={exp.place} />
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-neutral-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <span>
                        <OrgText text={pt} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
