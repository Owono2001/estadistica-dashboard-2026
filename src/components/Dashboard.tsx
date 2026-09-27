"use client";

import React from 'react';
import { TrendingUp, Zap, AlertTriangle, GraduationCap, HeartPulse, Briefcase, Droplet, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { macroData, energyData, hydrocarbonProjections, educationUnemploymentData, jobSearchData, hseTrafficData, hseHealthData } from '@/data/dashboardData';

const Dashboard: React.FC = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-slate-200 font-tech font-bold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color || entry.fill }} className="text-sm font-mono">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 relative z-10">
      
      <div className="mb-10 border-b border-slate-800 pb-6">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-3 tracking-tight">
          <span className="text-slate-100">National</span> <span className="text-blue-500">Telemetry</span>
        </h2>
        <p className="text-slate-400 font-tech text-lg">BI Analytics: Equatorial Guinea 2026 Statistical Yearbook & 2025-2027 Projections</p>
      </div>

      {/* TIER 1: MACROECONOMÍA E INDUSTRIA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Macroeconomic Convergence</h3>
            </div>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={macroData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="gdp" name="GDP Growth (%)" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="inflation" name="Inflation (%)" stroke="#ef4444" strokeWidth={3} />
                <Line type="monotone" dataKey="cemacTarget" name="CEMAC Target (3%)" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300">
            <strong className="text-blue-400">Interpretación:</strong> La inflación muestra una corrección agresiva hacia el objetivo CEMAC (3.0%) para 2026. El PIB proyecta salir de la recesión estructural (-7.4% en 2023) apuntando a un +1.2% en 2027.
          </div>
        </div>

        <div className="glass-panel border-slate-700 p-6 shadow-lg flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="text-emerald-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Energy & Hydrocarbon Shift</h3>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="h-[200px]">
              <h4 className="text-center text-xs text-slate-400 mb-2">Power Gen (KW)</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={energyData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" stroke="none">
                    {energyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${(value as number).toLocaleString()} KW`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="h-[200px]">
              <h4 className="text-center text-xs text-slate-400 mb-2">Oil/Gas Projections (25-27)</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hydrocarbonProjections}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 10}} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="growth" name="Growth %" radius={[4, 4, 0, 0]}>
                    {hydrocarbonProjections.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300">
            <strong className="text-emerald-400">Impacto IT/OT:</strong> El desplome del condensado (-33.5%) y otros gases (-29.0%) por la maduración de Alba y Alen fuerza a la industria a depender del Crudo (+5.5%). Esto exige integración OT urgente para maximizar la eficiencia en los pozos restantes.
          </div>
        </div>

      </div>

      {/* TIER 2: MERCADO LABORAL Y TALENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-purple-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Unemployment vs. Education</h3>
            </div>
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={educationUnemploymentData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="level" type="category" stroke="#94a3b8" tick={{fontSize: 12}} width={100} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="desempleo" name="Unemployment Rate %" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Job Search Vectors (National)</h3>
            </div>
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={jobSearchData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="method" stroke="#94a3b8" tick={{fontSize: 10}} />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Usage %" radius={[4, 4, 0, 0]} barSize={30}>
                  {jobSearchData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="lg:col-span-2 p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300">
          <strong className="text-purple-400">Dinámica del Capital Humano:</strong> El mercado castiga severamente la educación básica (32.9% de paro), mientras que los perfiles universitarios aseguran empleabilidad casi plena (4.4% de paro). Sin embargo, el 45% del reclutamiento depende de redes informales (contactos), evidenciando ineficiencias en la intermediación laboral formal (MTFE solo gestiona el 3.6%).
        </div>
      </div>

      {/* TIER 3: HSE Y SALUD PÚBLICA (El núcleo de riesgo) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <HeartPulse className="text-rose-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Workforce Health Vulnerabilities</h3>
            </div>
          </div>
          <div className="space-y-4">
            {hseHealthData.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-800/80 rounded border border-slate-700/50">
                <div>
                  <div className="text-slate-200 font-bold">{item.disease}</div>
                  <div className={`text-xs ${item.disease.includes('VIH') ? 'text-rose-400' : 'text-amber-400'}`}>{item.severity}</div>
                </div>
                <div className="text-2xl font-cyber text-slate-100">{item.cases.toLocaleString()}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-slate-400 font-tech">
            * Con más de 72,257 personas conviviendo con VIH (2024) y una prevalencia de paludismo del 16.8% en zonas rurales, los protocolos médicos preventivos (HSE) son críticos para la continuidad operativa.
          </div>
        </div>

        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-orange-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Traffic Incident Reports (2025)</h3>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hseTrafficData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="region" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="accidentes" name="Total Accidents" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="heridos" name="Injuries" fill="#fb923c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fallecidos" name="Fatalities" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-slate-400 font-tech">
            * 478 accidentes concentrados exclusivamente en Bioko Norte demuestran la alta densidad vehicular en la capital, requiriendo logísticas de transporte corporativo rigurosas.
          </div>
        </div>

      </div>

      {/* TIER 4: EXECUTIVE INTELLIGENCE REPORT (Interpretación Estratégica) */}
      <div className="mt-12 bg-slate-900/50 border border-slate-700/80 rounded-xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decoración Cyber */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl"></div>

        <div className="mb-8 border-b border-slate-700 pb-4 relative z-10">
          <h2 className="text-2xl font-cyber font-bold text-slate-100 uppercase tracking-wider">
            Strategic Intelligence: <span className="text-blue-500">Socio-Economic & HSE Diagnostics</span>
          </h2>
          <p className="text-sm font-tech text-slate-400 mt-2">
            Análisis profundo de la fuerza laboral y riesgos estructurales operativos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 font-tech text-slate-300">
          
          {/* Columna 1: La Crisis de la Generación 2025 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Briefcase size={18} /> El Colapso de la Generación 2025
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-3">
                La clase graduada de 2025 se enfrenta a una <strong>"Tormenta Perfecta"</strong>. El PIB nacional se contrae agresivamente (-5.8% estimado en 2025), lo que fuerza a las corporaciones a congelar plantillas. Sin embargo, el desempleo no es uniforme: es un desajuste estructural severo.
              </p>
              <ul className="text-sm space-y-2 text-slate-400 border-l-2 border-blue-500/30 pl-4">
                <li><strong>Saturación Administrativa:</strong> De 218 títulos extranjeros homologados (2023), 124 pertenecen a Ciencias Sociales y Derecho. Hay una sobreoferta masiva para empresas que no están creciendo.</li>
                <li><strong>El Filtro del Nepotismo:</strong> El 45% del empleo se asegura vía contactos personales, dejando a los jóvenes sin red de influencia fuera del sistema formal (MTFE: 3.6%).</li>
                <li><strong>El Escudo STEM:</strong> El país generó únicamente 14 Informáticos y 32 Ingenieros. Los perfiles técnicos bilingües con conocimientos en automatización operan en un déficit de talento, inmunes al paro masivo.</li>
              </ul>
              <div className="mt-2 text-xs text-slate-500 italic">
                * Fuente: Anuario Estadístico 2026 (Tablas 128, 129, 254).
              </div>
            </div>
          </div>

          {/* Columna 2: Riesgo HSE (VIH y Salud Ocupacional) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-rose-400 mb-2 flex items-center gap-2">
                <Activity size={18} /> Alerta HSE: El Impacto Oculto del VIH
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-3">
                Más allá de las patologías comunes como el paludismo (37.9% de prevalencia), la salud pública en Guinea Ecuatorial representa un riesgo operativo crítico (HSE) debido a la epidemia silenciosa del VIH.
              </p>
              <ul className="text-sm space-y-2 text-slate-400 border-l-2 border-rose-500/30 pl-4">
                <li><strong>Impacto Estadístico:</strong> Con 72,257 personas conviviendo con el VIH (4,382 nuevos casos en 2024) sobre una población estimada de 1.7 millones, aproximadamente <strong>1 de cada 23 ciudadanos</strong> es portador.</li>
                <li><strong>Desproporción de Género:</strong> Las mujeres mayores de 15 años son el vector más vulnerable (2,260 casos vs 1,501 en hombres).</li>
                <li><strong>Protocolo de Mitigación Industrial:</strong> Para mantener la integridad operativa en campos *Onshore/Offshore*, las empresas extractivas deben implementar <em>Site Clinics</em> obligatorias, testeo regular confidencial, y campañas de suministro masivo de profilaxis, asumiendo el rol preventivo que el sistema público no logra cubrir.</li>
              </ul>
              <div className="mt-2 text-xs text-slate-500 italic">
                * Fuente: Anuario Estadístico 2026 (Sección Salud).
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Dashboard;