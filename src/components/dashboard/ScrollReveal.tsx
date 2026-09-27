// src/components/dashboard/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Envuelve cualquier bloque para que aparezca con una animación suave
 * (fade + desplazamiento) la primera vez que entra en el viewport,
 * dando esa sensación de panel "vivo" al hacer scroll.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  y = 22,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
