"use client";

type ChartValue = number | string | Array<number | string>;

// Definimos los props exactos que necesitamos, ignorando los tipos complejos de Recharts
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
  unit?: string;
  formatValue?: (value: ChartValue) => string;
}

/**
 * Tooltip corporativo compartido por todas las gráficas de Recharts.
 * Se muestra al pasar el cursor (hover) sobre cualquier punto/barra/sector,
 * dando la sensación de datos "en vivo" al lector.
 */
export function ChartTooltip({
  active,
  label,
  payload,
  unit = "",
  formatValue,
}: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="min-w-[9rem] rounded-lg border border-brand-gold/30 bg-[#0b1424]/95 px-3.5 py-2.5 text-xs shadow-2xl shadow-black/50 backdrop-blur-md">
      {label !== undefined && (
        <p className="mb-1.5 border-b border-slate-700/60 pb-1.5 font-semibold text-slate-100">
          {label}
        </p>
      )}
      <div className="space-y-1.5">
        {payload.map((entry: any, i: number) => {
          const raw = entry.value;
          const display =
            formatValue?.(raw as ChartValue) ??
            (typeof raw === "number"
              ? `${raw.toLocaleString("es-ES")}${unit}`
              : `${raw ?? ""}${unit}`);
          return (
            <div key={`${entry.dataKey ?? entry.name ?? i}`} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-slate-400">
                {entry.color && (
                  <span
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                )}
                {entry.name}
              </span>
              <span className="font-semibold tabular-nums text-slate-50">{display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChartTooltip;