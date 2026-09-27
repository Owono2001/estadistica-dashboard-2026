// src/app/page.tsx (Este es tu portafolio personal)
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PortfolioHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-cyber font-bold mb-6 text-slate-100">Pedro Fabian Owono</h1>
      <p className="text-xl text-slate-400 mb-8 max-w-2xl">
        Ingeniero en Computación | Integración IT/OT | Consultor B2B
      </p>
      
      {/* Enlace clave hacia tu nuevo panel B2B */}
      <Link 
        href="/dashboard" 
        className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-tech font-bold transition-colors"
      >
        Ver Panel de Inteligencia de Datos (INEGE) <ArrowRight size={18} />
      </Link>
    </main>
  );
}