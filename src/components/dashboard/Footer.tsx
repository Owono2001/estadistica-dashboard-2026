// src/components/dashboard/Footer.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/dashboard/ScrollReveal";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="fuentes" className="border-t border-slate-800/60 bg-[#05090f] px-6 py-14">
      <ScrollReveal className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("footer.about.title")}</h4>
          <p className="text-sm leading-relaxed text-slate-400">
            {t("footer.about.desc")}
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("footer.sources.title")}</h4>
          <ul className="space-y-1.5 text-sm text-slate-400">
            <li>{t("footer.sources.item1")}</li>
            <li>{t("footer.sources.item2")}</li>
            <li>{t("footer.sources.item3")}</li>
            <li>{t("footer.sources.item4")}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("footer.sections.title")}</h4>
          <ul className="space-y-1.5 text-sm text-slate-400">
            <li><a href="#empleo" className="transition-colors hover:text-brand-gold">{t("footer.sections.item1")}</a></li>
            <li><a href="#economia" className="transition-colors hover:text-brand-gold">{t("footer.sections.item2")}</a></li>
            <li><a href="#salud" className="transition-colors hover:text-brand-gold">{t("footer.sections.item3")}</a></li>
            <li><a href="#educacion" className="transition-colors hover:text-brand-gold">{t("footer.sections.item4")}</a></li>
          </ul>
        </div>
      </ScrollReveal>
    </footer>
  );
}
