// src/components/dashboard/SaludSection.tsx
"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { saludStats, vihPorGenero2024 } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import AnimatedNumber from "@/components/dashboard/AnimatedNumber";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

export default function SaludSection() {
  const { t } = useLanguage();

  const data = vihPorGenero2024.map((d) => ({
    ...d,
    grupo: t(`salud.group.${d.grupoKey}` as TranslationKey),
  }));

  return (
    <section id="salud" className="border-b border-slate-800/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("salud.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("salud.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("salud.desc")}</p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {saludStats.map((s, i) => (
            <ScrollReveal key={s.labelKey} delay={0.06 * i} className="chart-card">
              <b className="block font-serif text-2xl text-slate-50">
                <AnimatedNumber value={s.value} />
              </b>
              <span className="mt-1 block text-xs text-slate-400">
                {t(s.labelKey as TranslationKey)}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mt-9 chart-card">
          <h3 className="text-sm font-semibold text-slate-200">
            {t("salud.chart.title")}
          </h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <CartesianGrid stroke="#22314c" horizontal={false} />
                <XAxis type="number" stroke="#93a1bd" fontSize={12} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="grupo"
                  stroke="#93a1bd"
                  fontSize={12}
                  tickLine={false}
                  width={110}
                />
                <Tooltip
                  content={<ChartTooltip unit=" casos" />}
                  cursor={{ fill: "rgba(224, 179, 74, 0.06)" }}
                />
                <Bar dataKey="casos" name={t("salud.chart.title")} fill="#e0b34a" radius={[0, 4, 4, 0]} isAnimationActive />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            {t("common.source")}: {t("salud.chart.source")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-6 border-l-[3px] border-amber-400 bg-[#0f1729] p-5 text-sm">
          <b className="text-amber-400">{t("salud.callout.strong")}</b>{" "}
          {t("salud.callout.text")}
        </ScrollReveal>
      </div>
    </section>
  );
}
