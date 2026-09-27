"use client";

import React from 'react';
import { TrendingUp, Zap, AlertTriangle, GraduationCap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { macroData, energyData, educationUnemploymentData, hseTrafficData } from '@/data/dashboardData';

const Dashboard: React.FC = () => {
  // Componente de Tooltip Personalizado para Gráficos
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-slate-200 font-tech font-bold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-mono">
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
      
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-2">
          <span className="text-slate-100">Macroeconomic</span> <span className="text-blue-500">Intelligence</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mb-4"></div>
        <p className="text-slate-400 font-tech">Equatorial Guinea 2026 Statistical Yearbook Analysis</p>
      </div>

      {/* FILA 2: GRÁFICOS PRINCIPALES (PIB Y ENERGÍA) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Gráfico 1: Evolución Macroeconómica (Ocupa 2 columnas) */}
        <div className="glass-panel border-slate-700 p-6 lg:col-span-2 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Real GDP Growth & Inflation Dynamics</h3>
              <p className="text-xs text-slate-400 font-tech">Forward-looking projections (2025-2027) vs CEMAC Target</p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={macroData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" tick={{fontFamily: 'Rajdhani'}} />
                <YAxis stroke="#94a3b8" tick={{fontFamily: 'Rajdhani'}} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontFamily: 'Rajdhani', fontSize: '14px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="gdp" name="GDP Growth (%)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="inflation" name="Inflation (%)" stroke="#ef4444" strokeWidth={3} />
                <Line type="monotone" dataKey="cemacTarget" name="CEMAC Target (3%)" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-slate-300 font-tech">
            <strong className="text-blue-400">Analysis:</strong> Inflation is projected to converge to the CEMAC 3.0% target by 2026, while GDP shows a recovery trajectory (+1.2% by 2027) following structural contractions.
          </div>
        </div>

        {/* Gráfico 2: Generación Eléctrica */}
        <div className="glass-panel border-slate-700 p-6 shadow-lg flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-amber-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Power Generation</h3>
              <p className="text-xs text-slate-400 font-tech">2025 Distribution (KW)</p>
            </div>
          </div>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={energyData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none">
                  {energyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${(value as number).toLocaleString()} KW`} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontFamily: 'Rajdhani' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center text-xs text-slate-400 font-tech border-t border-slate-800 pt-3">
            Total Generation: <strong className="text-slate-200">1,234,334 KW</strong><br/>
            Renewables show a strong upward trend.
          </div>
        </div>

      </div>

      {/* FILA 3: HSE Y CAPITAL HUMANO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Gráfico 3: Capital Humano (Desempleo vs Educación) */}
        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-purple-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">Talent Market Dynamics</h3>
              <p className="text-xs text-slate-400 font-tech">Unemployment Rate by Education Level (%)</p>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={educationUnemploymentData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tick={{fontFamily: 'Rajdhani'}} />
                <YAxis dataKey="level" type="category" stroke="#94a3b8" tick={{fontFamily: 'Rajdhani', fontSize: 12}} width={100} />
                <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }} />
                <Bar dataKey="desempleo" name="Unemployment Rate" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 4: HSE (Siniestralidad Vial) */}
        <div className="glass-panel border-slate-700 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-rose-500" size={24} />
            <div>
              <h3 className="text-xl font-cyber font-bold text-slate-100">HSE: Traffic Incident Reports</h3>
              <p className="text-xs text-slate-400 font-tech">2025 Regional Breakdown</p>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hseTrafficData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="region" stroke="#94a3b8" tick={{fontFamily: 'Rajdhani'}} />
                <YAxis stroke="#94a3b8" tick={{fontFamily: 'Rajdhani'}} />
                <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }} />
                <Legend wrapperStyle={{ fontFamily: 'Rajdhani', fontSize: '13px' }} />
                <Bar dataKey="accidentes" name="Total Accidents" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="heridos" name="Injuries" fill="#fb923c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fallecidos" name="Fatalities" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Dashboard;