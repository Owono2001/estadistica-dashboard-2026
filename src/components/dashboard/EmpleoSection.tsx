// src/components/dashboard/EmpleoSection.tsx
"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { desocupacionPorEstudios } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

const COLORS: Record<string, string> = {
  esba: "#e0576b",
  bachillerato: "#e0b34a",
  tecnica: "#e0b34a",
  universitario: "#3fa66a",
};

export default function EmpleoSection() {
  const { t } = useLanguage();

  const data = desocupacionPorEstudios.map((d) => ({
    ...d,
    nivel: t(`empleo.level.${d.nivelKey}` as TranslationKey),
  }));

  return (
    <section
      id="empleo"
      className="border-b border-slate-800/60 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("empleo.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("empleo.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("empleo.desc")}</p>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal delay={0.1} className="chart-card">
            <h3 className="text-sm font-semibold text-slate-200">
              {t("empleo.chart.title")}
            </h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid stroke="#22314c" vertical={false} />
                  <XAxis
                    dataKey="nivel"
                    stroke="#93a1bd"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#93a1bd"
                    fontSize={12}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    content={<ChartTooltip unit="%" />}
                    cursor={{ fill: "rgba(224, 179, 74, 0.06)" }}
                  />
                  <Bar dataKey="tasa" name={t("empleo.chart.title")} radius={[4, 4, 0, 0]} isAnimationActive>
                    {data.map((d) => (
                      <Cell key={d.nivelKey} fill={COLORS[d.nivelKey]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {t("common.source")}: {t("empleo.chart.source")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("empleo.insight1.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("empleo.insight1.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("empleo.insight2.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("empleo.insight2.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="border-l-2 border-emerald-500 pl-4">
              <b className="block text-slate-100">{t("empleo.insight3.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("empleo.insight3.desc")}</p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.1} className="mt-8 border-l-[3px] border-red-500 bg-[#0f1729] p-5 text-sm">
          <b className="text-red-400">{t("empleo.callout.strong")}</b>{" "}
          {t("empleo.callout.text")}
        </ScrollReveal>
      </div>
    </section>
  );
}
