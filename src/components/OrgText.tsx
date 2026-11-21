import { Fragment } from "react";
import { orgLogos } from "../data/portfolio";

const names = Object.keys(orgLogos);
const pattern = names.length ? new RegExp(`(${names.join("|")})`, "g") : null;

type Props = { text: string; logoClassName?: string };

// Affiche un texte en ajoutant le logo devant chaque nom d'organisation connu (ex. AfriDigital).
export default function OrgText({ text, logoClassName = "h-[1.1em] w-auto" }: Props) {
  if (!pattern) return <>{text}</>;
  return (
    <>
      {text.split(pattern).map((part, i) =>
        orgLogos[part] ? (
          <span key={i} className="inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
            <img src={orgLogos[part]} alt="" className={`inline-block ${logoClassName}`} />
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
