import { useState, type FormEvent } from "react";
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  // Ouvre la messagerie du visiteur avec le message pré-rempli.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const input =
    "w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 placeholder:text-neutral-400 outline-none transition focus:border-neutral-800 focus:bg-white";

  return (
    <Section id="contact" index="06" title="Contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-8">
          <p className="max-w-md text-lg leading-relaxed text-neutral-700">
            Un projet, une offre de stage ou d'emploi, une collaboration ? Écrivez-moi, je vous
            réponds rapidement.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 font-medium hover:underline">
                <Mail size={18} className="text-neutral-500" /> {profile.email}
              </a>
              <button onClick={copyEmail} className="btn-icon !h-8 !w-8" aria-label="Copier l'adresse email">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
              <span aria-live="polite" className="text-sm text-neutral-500">
                {copied && "Copié !"}
              </span>
            </div>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 font-medium hover:underline">
              <Phone size={18} className="text-neutral-500" /> {profile.phone}
            </a>
          </div>

          <div className="flex gap-3">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-neutral-200 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-neutral-700">Nom</span>
                <input required className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-neutral-700">Email</span>
                <input required type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-neutral-700">Message</span>
              <textarea required rows={5} className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <button type="submit" className="btn-primary">
              <Send size={16} /> Envoyer le message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
