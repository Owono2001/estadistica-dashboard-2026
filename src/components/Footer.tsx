"use client";

import React from 'react';
import { Mail, Terminal, ShieldCheck } from 'lucide-react';
import InteractiveGlobe from '@/components/InteractiveGlobe';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/50 backdrop-blur-md relative z-50 mt-12">
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          
          {/* Columna 1: Brand & Misión */}
          <div>
            <h3 className="text-xl font-cyber font-bold text-slate-100 mb-4 tracking-wider">
              <span className="text-blue-500">P</span>F
            </h3>
            <p className="text-sm text-slate-400 font-tech leading-relaxed mb-4">
              Bilingual Computer Engineer (M.Eng) specializing in IT/OT Integration, industrial automation, and data-driven B2B solutions. 
              Registered Graduate Engineer (BEM).
            </p>
          </div>

          {/* Columna 2: Centro de Mando (Globo Interactivo) */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-sm font-cyber font-bold text-slate-200 mb-2 tracking-wider uppercase text-center">
              Global Operations
            </h4>
            <div className="w-full flex justify-center">
              <InteractiveGlobe />
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-400 font-tech hover:text-blue-400 transition-colors cursor-pointer">
              <Mail size={16} className="text-blue-500" />
              <a href="mailto:owonoondomangue@.com">Contact for B2B Inquiries</a>
            </div>
          </div>

          {/* Columna 3: Estado del Sistema */}
          <div className="md:justify-self-end w-full md:w-auto">
             <h4 className="text-sm font-cyber font-bold text-slate-200 mb-4 tracking-wider uppercase">
               System Telemetry
             </h4>
             <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-4 font-mono text-xs text-slate-400 shadow-inner w-full md:min-w-[250px]">
                <div className="flex justify-between items-center mb-3">
                  <span>NETWORK SECURITY</span>
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <ShieldCheck size={14} />
                    <span>SECURE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                   <span>SERVER STATUS</span>
                   <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      ONLINE
                   </span>
                </div>
             </div>
          </div>

        </div>

        {/* Línea inferior: Copyright y Versión */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-tech">
            &copy; {currentYear} Pedro Fabian Owono Ondo Mangue. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <Terminal size={14} />
            <span>v2.0.26-enterprise_build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;