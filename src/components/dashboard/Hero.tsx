// src/components/dashboard/Hero.tsx
"use client";

import { ArrowRight, BookMarked } from "lucide-react";
import { heroStats } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import AnimatedNumber from "@/components/dashboard/AnimatedNumber";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-800/60 px-6 py-20 md:py-24">
      {/* Fondo decorativo: brillos suaves animados, no interactivo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="aurora-blob -top-24 left-[8%] h-72 w-72 animate-aurora bg-blue-500/20" />
        <div className="aurora-blob top-10 right-[5%] h-80 w-80 animate-aurora bg-brand-gold/10 [animation-delay:3s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
            </span>
            {t("hero.live")}
          </span>

          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-slate-100 md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            {t("hero.desc.p1")}{" "}
            <strong className="text-slate-100">{t("hero.desc.strong")}</strong>{" "}
            {t("hero.desc.p2")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#empleo" className="btn-primary">
              {t("hero.cta.explore")}
              <ArrowRight size={16} />
            </a>
            <a href="#fuentes" className="btn-secondary">
              <BookMarked size={16} />
              {t("hero.cta.sources")}
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-800/60 bg-slate-800/60 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <ScrollReveal key={s.labelKey} delay={0.08 * i} className="stat-card">
              <b className="block font-serif text-3xl text-slate-50">
                <AnimatedNumber value={s.value} />
              </b>
              <span className="mt-1.5 block text-xs leading-snug text-slate-400">
                {t(s.labelKey as TranslationKey)}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
