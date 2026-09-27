import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import ServiceWorkerRegistry from "@/components/ServiceWorkerRegistry";
import UpdateNotification from "@/components/UpdateNotification";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Fabian Owono - Macroeconomic & BI Dashboard",
  description: "Interactive Business Intelligence Dashboard analyzing Equatorial Guinea's 2026 Statistical Yearbook and 2025-2027 Macroeconomic Perspectives. Engineered by Pedro Fabian Owono.",
  keywords: ["Pedro Fabian Owono", "Equatorial Guinea", "Macroeconomic Intelligence", "BI Dashboard", "Data Visualization", "IT/OT Integration"],
  authors: [{ name: "Pedro Fabian Owono Ondo Mangue" }],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        suppressHydrationWarning={true}
        className="bg-enterprise-grid text-slate-200 selection:bg-blue-600/30 selection:text-white antialiased min-h-screen flex flex-col"
      >
        <LanguageProvider>
          {children}
          <UpdateNotification />
          <ServiceWorkerRegistry />
        </LanguageProvider>
      </body>
    </html>
  );
}