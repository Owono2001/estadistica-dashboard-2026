// src/components/dashboard/DemografiaSection.tsx
"use client";

import { densidadPoblacional } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";

export default function DemografiaSection() {
  const { t } = useLanguage();
  const maxDensidad = Math.max(...densidadPoblacional.map((d) => d.densidad));

  return (
    <section id="demografia" className="border-b border-slate-800/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("demografia.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("demografia.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("demografia.desc")}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8 overflow-x-auto rounded-xl border border-brand-border/70 bg-brand-panel/60 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800/60 text-left text-xs text-slate-400">
                <th className="p-3 font-semibold">{t("demografia.table.ambito")}</th>
                <th className="p-3 font-semibold">{t("demografia.table.densidad")}</th>
                <th className="p-3 font-semibold">{t("demografia.table.hogar")}</th>
              </tr>
            </thead>
            <tbody>
              {densidadPoblacional.map((d) => (
                <tr
                  key={d.ambitoKey}
                  className="group border-b border-slate-800/60 transition-colors last:border-0 hover:bg-brand-panel-light/60"
                >
                  <td className="p-3 text-slate-100">
                    {t(`demografia.area.${d.ambitoKey}` as TranslationKey)}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-12 text-slate-200 ${d.densidad === maxDensidad ? "font-bold text-brand-gold" : ""}`}>
                        {d.densidad}
                      </span>
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-800/70">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-brand-gold transition-all duration-700 ease-out group-hover:brightness-110"
                          style={{ width: `${Math.max(6, (d.densidad / maxDensidad) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-slate-300">{d.hogar ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
        <p className="mt-3 text-xs text-slate-500">{t("demografia.source")}</p>
      </div>
    </section>
  );
}
