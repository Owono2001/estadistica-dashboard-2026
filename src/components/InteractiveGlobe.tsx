"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let currentGlobe: any;

    // Retraso intencional para evitar el fallo del StrictMode de React 18
    const timeoutId = setTimeout(() => {
      if (canvasRef.current) {
        currentGlobe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: 600,
          height: 600,
          phi: 0,
          theta: 0.15,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.1, 0.1, 0.15],
          markerColor: [0, 0.95, 1], // Cyan
          glowColor: [0.05, 0.05, 0.1],
          markers: [
            { location: [3.75, 8.78], size: 0.1 } // Malabo
          ],
          onRender: (state: Record<string, any>) => {
            state.phi = phi;
            phi += 0.005; // Velocidad de rotación
          },
        } as any);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (currentGlobe) currentGlobe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[280px] aspect-square mx-auto flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        style={{ width: "100%", height: "100%", cursor: "grab" }} 
      />
      <div className="absolute bottom-0 text-center font-mono text-[10px] text-blue-400 tracking-widest bg-slate-900/80 px-2 py-1 rounded border border-blue-500/30 shadow-lg backdrop-blur-sm z-10 pointer-events-none">
        LAT: 3.75° N | LNG: 8.78° E
      </div>
    </div>
  );
}