import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; className?: string };

// Apparition douce au scroll : guide la lecture, une seule fois par élément.
export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
