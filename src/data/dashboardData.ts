// src/data/dashboardData.ts

export const macroData = [
  { year: '2023', gdp: -7.4, inflation: 3.5, cemacTarget: 3.0 },
  { year: '2024', gdp: 0.4, inflation: 4.1, cemacTarget: 3.0 },
  { year: '2025', gdp: -1.6, inflation: 2.8, cemacTarget: 3.0 },
  { year: '2026', gdp: 0.2, inflation: 2.6, cemacTarget: 3.0 },
  { year: '2027', gdp: 1.2, inflation: 2.6, cemacTarget: 3.0 },
];

export const energyData = [
  { name: 'Renovable', value: 555160, color: '#10b981' },
  { name: 'Térmica (No Renovable)', value: 679174, color: '#f59e0b' },
];

export const hydrocarbonProjections = [
  { name: 'Crudo', growth: 5.5, color: '#3b82f6' },
  { name: 'Otros Gases', growth: -29.0, color: '#94a3b8' },
  { name: 'Condensado', growth: -33.5, color: '#ef4444' },
];

export const educationUnemploymentData = [
  { level: 'Secundaria Básica', desempleo: 32.9 },
  { level: 'Bachillerato', desempleo: 19.7 },
  { level: 'Formación Técnica', desempleo: 18.2 },
  { level: 'Universitarios', desempleo: 4.4 },
];

export const jobSearchData = [
  { method: 'Contactos/Parientes', value: 45.0, color: '#8b5cf6' },
  { method: 'Patrones Directos', value: 19.8, color: '#6366f1' },
  { method: 'Anuncios (TV/Redes)', value: 9.9, color: '#ec4899' },
  { method: 'Oficina MTFE', value: 3.6, color: '#14b8a6' },
];

export const hseHealthData = [
  { disease: 'Paludismo Simple', cases: 44578, severity: 'Alta Prevalencia' },
  { disease: 'Salmonelosis', cases: 43623, severity: 'Alta Prevalencia' },
  { disease: 'Paludismo Complicado', cases: 10739, severity: 'Riesgo Crítico' },
  { disease: 'Nuevos Casos VIH (2024)', cases: 4382, severity: 'Riesgo Sistémico' },
];

export const hseTrafficData = [
  { region: 'Bioko Norte', accidentes: 478, fallecidos: 17, heridos: 130 },
  { region: 'Litoral', accidentes: 260, fallecidos: 6, heridos: 29 },
  { region: 'Bioko Sur', accidentes: 5, fallecidos: 0, heridos: 0 },
];