import Header from "@/components/dashboard/Header";
import Hero from "@/components/dashboard/Hero";
import EmpleoSection from "@/components/dashboard/EmpleoSection";
import EconomiaSection from "@/components/dashboard/EconomiaSection";
import EnergiaSection from "@/components/dashboard/EnergiaSection";
import SaludSection from "@/components/dashboard/SaludSection";
import EducacionSection from "@/components/dashboard/EducacionSection";
import DemografiaSection from "@/components/dashboard/DemografiaSection";
import CemacSection from "@/components/dashboard/CemacSection";
import Footer from "@/components/dashboard/Footer";
import BackToTop from "@/components/dashboard/BackToTop";

export default function Home() {
  return (
    <main className="bg-enterprise-grid relative min-h-screen text-slate-100">
      <Header />
      <Hero />
      <EmpleoSection />
      <EconomiaSection />
      <EnergiaSection />
      <SaludSection />
      <EducacionSection />
      <DemografiaSection />
      <CemacSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
