import { Award, GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  const diplomas = education.filter((e) => e.kind === "diplome");
  const certifs = education.filter((e) => e.kind === "certif");

  const Column = ({ title, Icon, items }: { title: string; Icon: typeof Award; items: typeof education }) => (
    <div>
      <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">
        <Icon size={18} /> {title}
      </h3>
      <ol className="space-y-6 border-l border-neutral-200 pl-6">
        {items.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <li className="relative">
              <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-neutral-800" />
              <p className="font-semibold">{e.title}</p>
              <p className="text-neutral-600">{e.school}</p>
              <p className="mt-1 text-sm font-medium text-neutral-400">{e.date}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );

  return (
    <Section id="education" index="05" title="Formation & certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <Column title="Diplômes" Icon={GraduationCap} items={diplomas} />
        <Column title="Certifications" Icon={Award} items={certifs} />
      </div>
    </Section>
  );
}
