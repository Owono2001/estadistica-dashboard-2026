// src/components/dashboard/EducacionSection.tsx
"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { egresadosExtranjeroPorRama } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

const COLORS: Record<string, string> = {
  sociales: "#e0576b",
  ingenieria: "#e0b34a",
  informatica: "#e0b34a",
  otras: "#5f6d89",
};

export default function EducacionSection() {
  const { t } = useLanguage();

  const data = egresadosExtranjeroPorRama.map((d) => ({
    ...d,
    rama: t(`educacion.branch.${d.ramaKey}` as TranslationKey),
  }));

  return (
    <section id="educacion" className="border-b border-slate-800/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("educacion.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("educacion.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("educacion.desc")}</p>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal delay={0.1} className="chart-card">
            <h3 className="text-sm font-semibold text-slate-200">
              {t("educacion.chart.title")}
            </h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                  <CartesianGrid stroke="#22314c" horizontal={false} />
                  <XAxis type="number" stroke="#93a1bd" fontSize={12} tickLine={false} />
                  <YAxis
                    type="category"
                    dataKey="rama"
                    stroke="#93a1bd"
                    fontSize={12}
                    tickLine={false}
                    width={150}
                  />
                  <Tooltip
                    content={<ChartTooltip unit=" egresados" />}
                    cursor={{ fill: "rgba(224, 179, 74, 0.06)" }}
                  />
                  <Bar dataKey="total" name={t("educacion.chart.title")} radius={[0, 4, 4, 0]} isAnimationActive>
                    {data.map((d) => (
                      <Cell key={d.ramaKey} fill={COLORS[d.ramaKey]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {t("common.source")}: {t("educacion.chart.source")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("educacion.insight1.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("educacion.insight1.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("educacion.insight2.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("educacion.insight2.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("educacion.insight3.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("educacion.insight3.desc")}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
