// src/data/dashboardData.ts
// Datos verificados manualmente contra las fuentes primarias del INEGE.
// Fuentes: Anuario Estadístico de G.E. 2026 · Perspectivas Macroeconómicas 2025-2027 (jun. 2025)
// Los campos de texto usan claves neutras (p. ej. "esba", "bachillerato") en vez de
// texto fijo en español, para que cada componente los traduzca con t() según el idioma activo.

export interface StatCardRaw {
  value: string;
  labelKey: string;
  sourceLabel: string;
}

export const heroStats: StatCardRaw[] = [
  { value: '1,73M', labelKey: 'hero.stat.population', sourceLabel: 'Anuario 2026' },
  { value: '13,7%', labelKey: 'hero.stat.unemployment', sourceLabel: 'Tabla 123' },
  { value: '83,0%', labelKey: 'hero.stat.informality', sourceLabel: 'Tabla 123' },
  { value: '50,7%', labelKey: 'hero.stat.poverty', sourceLabel: 'Tabla 160' },
];

// ---------- EMPLEO ----------
export const desocupacionPorEstudios = [
  { nivelKey: 'esba', tasa: 32.9 },
  { nivelKey: 'bachillerato', tasa: 19.7 },
  { nivelKey: 'tecnica', tasa: 18.2 },
  { nivelKey: 'universitario', tasa: 4.4 },
];
// Fuente: Anuario 2026, Tabla 129

export const mediosBusquedaEmpleo = [
  { medio: 'Contactos personales', pct: 45.0 },
  { medio: 'Emprendedores/patrones', pct: 19.8 },
  { medio: 'Anuncios radio/TV/internet', pct: 9.9 },
  { medio: 'Oficina de empleo (MTFE)', pct: 3.6 },
];
// Fuente: Anuario 2026, Tabla 128

export const egresadosExtranjeroPorRama = [
  { ramaKey: 'sociales', total: 124 },
  { ramaKey: 'ingenieria', total: 32 },
  { ramaKey: 'informatica', total: 14 },
  { ramaKey: 'otras', total: 48 },
];
// Fuente: Anuario 2026, Tabla 100 (2023) · Total homologados: 218

// ---------- ECONOMÍA ----------
export const pibRealHistoricoProyectado = [
  { anio: '2021', pib: 0.9 },
  { anio: '2022', pib: 3.2 },
  { anio: '2023', pib: -7.4 },
  { anio: '2024', pib: 0.4 },
  { anio: '2025p', pib: -1.6 },
  { anio: '2026p', pib: 0.2 },
  { anio: '2027p', pib: 1.2 },
];
// Fuente: Perspectivas Macroeconómicas 2025-2027, Tabla 1C

export const inflacionMensual2025 = [
  { mes: 'Ene', ipc: 3.4 },
  { mes: 'Feb', ipc: 3.4 },
  { mes: 'Mar', ipc: 3.5 },
  { mes: 'Abr', ipc: 3.4 },
  { mes: 'Dic', ipc: 2.3 },
];
// Fuente: Anuario 2026, Tabla 158 (valores clave de la serie)

// ---------- ENERGÍA ----------
export const generacionEnergia2025 = [
  { fuenteKey: 'norenovable', kw: 679174 },
  { fuenteKey: 'renovable', kw: 555160 },
];
// Fuente: Anuario 2026, Tabla 16 · Total 1.234.334 KW

// ---------- SALUD / HSE ----------
export const saludStats: StatCardRaw[] = [
  { value: '44.578', labelKey: 'salud.stat.paludismo', sourceLabel: 'Tabla 59' },
  { value: '72.257', labelKey: 'salud.stat.vih', sourceLabel: 'Tabla 54' },
  { value: '478', labelKey: 'salud.stat.trafico', sourceLabel: 'Tabla 225' },
];

export const vihPorGenero2024 = [
  { grupoKey: 'mujeres', casos: 2260 },
  { grupoKey: 'hombres', casos: 1501 },
  { grupoKey: 'ninos', casos: 621 },
];
// Fuente: Anuario 2026, Tabla 55

// ---------- EDUCACIÓN ----------
export const alfabetizacionPorRegion = [
  { regionKey: 'nacional', ambos: 90.1, hombres: 95.2, mujeres: 85.6 },
  { regionKey: 'insular', ambos: 96.6, hombres: 97.1, mujeres: 96.1 },
  { regionKey: 'continental', ambos: 87.6, hombres: 94.4, mujeres: 81.6 },
];
// Fuente: Anuario 2026, Tabla 60

// ---------- DEMOGRAFÍA ----------
export const densidadPoblacional = [
  { ambitoKey: 'nacional', densidad: 44, hogar: 4.0 },
  { ambitoKey: 'insular', densidad: 167, hogar: 3.7 },
  { ambitoKey: 'biokonorte', densidad: 387, hogar: null },
  { ambitoKey: 'continental', densidad: 34, hogar: 4.1 },
];
// Fuente: Anuario 2026, Tablas 23-24 (densidad: Censo 2015)

// ---------- CEMAC ----------
export const comparativaCemac = [
  { indicadorKey: 'pib', guineaEcuatorial: 0.9, cemac: 2.6 },
  { indicadorKey: 'inflacion', guineaEcuatorial: 3.4, cemac: 4.1 },
];
// Fuente: BEAC (CPM marzo 2025) · Anuario 2026