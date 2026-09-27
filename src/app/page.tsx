import React from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard'; // O Contact, según como lo hayas nombrado
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* 1. Navegación Corporativa */}
      <Header />

      {/* 2. El núcleo analítico */}
      <div className="flex-1 w-full mt-24 pb-20">
        <Dashboard />
      </div>

      {/* 3. Cierre y Credenciales */}
      <Footer />
    </main>
  );
}