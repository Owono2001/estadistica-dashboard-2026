// src/components/dashboard/EconomiaSection.tsx
"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { pibRealHistoricoProyectado } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

export default function EconomiaSection() {
  const { t } = useLanguage();

  return (
    <section id="economia" className="border-b border-slate-800/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("economia.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("economia.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("economia.desc")}</p>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal delay={0.1} className="chart-card">
            <h3 className="text-sm font-semibold text-slate-200">
              {t("economia.chart.title")}
            </h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pibRealHistoricoProyectado}>
                  <CartesianGrid stroke="#22314c" vertical={false} />
                  <XAxis dataKey="anio" stroke="#93a1bd" fontSize={12} tickLine={false} />
                  <YAxis stroke="#93a1bd" fontSize={12} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    content={<ChartTooltip unit="%" />}
                    cursor={{ stroke: "#e0b34a", strokeWidth: 1, strokeDasharray: "4 4" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pib"
                    name={t("economia.chart.title")}
                    stroke="#4d8fd6"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: "#4d8fd6", strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: "#e0b34a", strokeWidth: 2, stroke: "#0b1424" }}
                    isAnimationActive
                    animationDuration={1200}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {t("common.source")}: {t("economia.chart.source")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("economia.insight1.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("economia.insight1.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("economia.insight2.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("economia.insight2.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("economia.insight3.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("economia.insight3.desc")}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
