// src/components/dashboard/CemacSection.tsx
"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { comparativaCemac } from "@/data/dashboardData";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import ScrollReveal from "@/components/dashboard/ScrollReveal";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

export default function CemacSection() {
  const { t } = useLanguage();

  const data = comparativaCemac.map((d) => ({
    ...d,
    indicador: t(`cemac.indicator.${d.indicadorKey}` as TranslationKey),
  }));

  return (
    <section id="cemac" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80">{t("cemac.eyebrow")}</p>
          <h2 className="max-w-xl font-serif text-3xl text-slate-50">
            {t("cemac.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t("cemac.desc")}</p>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal delay={0.1} className="chart-card">
            <h3 className="text-sm font-semibold text-slate-200">
              {t("cemac.chart.title")}
            </h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid stroke="#22314c" vertical={false} />
                  <XAxis dataKey="indicador" stroke="#93a1bd" fontSize={12} tickLine={false} />
                  <YAxis stroke="#93a1bd" fontSize={12} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    content={<ChartTooltip unit="%" />}
                    cursor={{ fill: "rgba(224, 179, 74, 0.06)" }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, color: "#93a1bd" }} />
                  <Bar dataKey="guineaEcuatorial" name={t("cemac.legend.ge")} fill="#e0b34a" radius={[3, 3, 0, 0]} isAnimationActive />
                  <Bar dataKey="cemac" name={t("cemac.legend.cemac")} fill="#5f6d89" radius={[3, 3, 0, 0]} isAnimationActive />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {t("common.source")}: {t("cemac.chart.source")}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="border-l-2 border-red-500 pl-4">
              <b className="block text-slate-100">{t("cemac.insight1.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("cemac.insight1.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="border-l-2 border-emerald-500 pl-4">
              <b className="block text-slate-100">{t("cemac.insight2.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("cemac.insight2.desc")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="border-l-2 border-amber-400 pl-4">
              <b className="block text-slate-100">{t("cemac.insight3.title")}</b>
              <p className="mt-1 text-sm text-slate-400">{t("cemac.insight3.desc")}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
