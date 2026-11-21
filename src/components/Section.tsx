import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-neutral-200 py-24 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-12 flex items-baseline gap-4">
          <span className="font-display text-sm font-medium text-neutral-400">{index}</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
