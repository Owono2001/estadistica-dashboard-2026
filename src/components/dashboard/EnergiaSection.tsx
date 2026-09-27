// src/components/dashboard/EnergiaSection.tsx
"use client";

import { useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { generacionEnergia2025 } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

const COLORS: Record<string, string> = {
  norenovable: "#5f6d89",
  renovable: "#3fa66a",
};

export default function EnergiaSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = generacionEnergia2025.map((d) => ({
    ...d,
    fuente: t(`energia.source.${d.fuenteKey}` as TranslationKey),
  }));

  return (
    <section id="energia" className="border-b border-slate-800/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("energia.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("energia.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("energia.desc")}</p>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal delay={0.1} className="chart-card">
            <h3 className="text-sm font-semibold text-slate-200">
              {t("energia.chart.title")}
            </h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="kw"
                    nameKey="fuente"
                    innerRadius="60%"
                    outerRadius="85%"
                    paddingAngle={3}
                    isAnimationActive
                    animationDuration={1000}
                    onMouseEnter={(_, i) => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {data.map((d, i) => (
                      <Cell
                        key={d.fuenteKey}
                        fill={COLORS[d.fuenteKey]}
                        opacity={activeIndex === null || activeIndex === i ? 1 : 0.45}
                        stroke="#0b1424"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip unit=" KW" />} />
                  <Legend
                    verticalAlign="bottom"
                    wrapperStyle={{ fontSize: 12, color: "#93a1bd" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {t("common.source")}: {t("energia.chart.source")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="border-l-2 border-emerald-500 pl-4">
              <b className="block text-slate-100">{t("energia.insight1.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("energia.insight1.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("energia.insight2.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("energia.insight2.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("energia.insight3.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("energia.insight3.desc")}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
