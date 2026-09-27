// src/components/dashboard/AnimatedNumber.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface ParsedValue {
  numeric: number;
  decimals: number;
  suffix: string;
}

// Los datos del dashboard siempre usan formato español: coma decimal, punto de millar
// (p. ej. "1,73M", "13,7%", "44.578"). Esta función separa la parte numérica del
// sufijo (%, M, etc.) para poder animar el conteo y luego reconstruir el mismo formato.
function parseValue(raw: string): ParsedValue {
  const match = raw.match(/^([0-9.,]+)(.*)$/);
  if (!match) return { numeric: 0, decimals: 0, suffix: raw };

  const [, core, suffix] = match;

  if (core.includes(",")) {
    const [intPart, decPart = ""] = core.split(",");
    const cleanInt = intPart.replace(/\./g, "");
    const numeric = parseFloat(`${cleanInt}.${decPart || "0"}`);
    return { numeric, decimals: decPart.length, suffix };
  }

  const numeric = parseInt(core.replace(/\./g, ""), 10);
  return { numeric: Number.isNaN(numeric) ? 0 : numeric, decimals: 0, suffix };
}

function formatNumber(value: number, decimals: number): string {
  if (decimals > 0) {
    return value.toFixed(decimals).replace(".", ",");
  }
  return Math.round(value).toLocaleString("es-ES");
}

export default function AnimatedNumber({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState<string>(() => {
    const { decimals, suffix } = parseValue(value);
    return `${formatNumber(0, decimals)}${suffix}`;
  });
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { numeric, decimals, suffix } = parseValue(value);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setDisplay(`${formatNumber(numeric * eased, decimals)}${suffix}`);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
