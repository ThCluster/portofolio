import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import GyeNyame from "./GyeNyame";
import OrgText from "./OrgText";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Grand Gye Nyame en filigrane */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 text-neutral-950/[0.06] sm:-right-10 lg:right-0"
      >
        <GyeNyame className="h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] lg:h-[640px] lg:w-[640px]" />
      </motion.div>

      <motion.div
        className="container-page relative"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p variants={item} className="flex items-center gap-2 text-sm text-neutral-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-800" />
          </span>
          Ouvert aux opportunités
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {profile.firstName}
          <br />
          <span className="text-neutral-400">{profile.lastName}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 font-display text-xl font-medium sm:text-2xl">
          <OrgText text={profile.role} logoClassName="h-[1.15em] w-auto rounded-md" />
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          {profile.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
          <MapPin size={16} /> {profile.location}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            Voir mes projets
          </a>
          <span className="mx-1 hidden h-6 w-px bg-neutral-300 sm:block" />
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-icon">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-icon">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="btn-icon">
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.figure variants={item} className="mt-14 max-w-xl border-l-2 border-neutral-300 pl-5">
          <blockquote className="text-sm italic leading-relaxed text-neutral-500">
            « {profile.verse.text} »
            <span className="ml-2 not-italic font-medium text-neutral-700">— {profile.verse.ref}</span>
          </blockquote>
          <figcaption className="mt-2 font-display text-sm font-medium text-neutral-800">{profile.motto}</figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}
