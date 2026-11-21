import { profile } from "../data/portfolio";
import OrgText from "./OrgText";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="Profil">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-neutral-700">
                <OrgText text={p} />
              </p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4 lg:col-span-2">
          {profile.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <div className="flex items-baseline gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5">
                <span className="font-display text-4xl font-bold">{h.value}</span>
                <span className="text-neutral-600">{h.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
