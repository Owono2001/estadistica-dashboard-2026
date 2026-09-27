// src/components/dashboard/Header.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";

const LINK_KEYS: { href: string; labelKey: TranslationKey }[] = [
  { href: "#empleo", labelKey: "nav.empleo" },
  { href: "#economia", labelKey: "nav.economia" },
  { href: "#energia", labelKey: "nav.energia" },
  { href: "#salud", labelKey: "nav.salud" },
  { href: "#educacion", labelKey: "nav.educacion" },
  { href: "#demografia", labelKey: "nav.demografia" },
  { href: "#cemac", labelKey: "nav.cemac" },
  { href: "#fuentes", labelKey: "nav.fuentes" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = LINK_KEYS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Sombra al hacer scroll + barra de progreso de lectura
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de tamaño a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-800/70 bg-[#070c16]/90 shadow-lg shadow-black/30"
          : "border-slate-800/40 bg-[#070c16]/70"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-serif text-[1.05rem] font-bold tracking-tight text-slate-100 transition-opacity hover:opacity-80"
        >
          {t("brand.main")} <span className="text-brand-gold">{t("brand.suffix")}</span>
        </a>

        <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
          {LINK_KEYS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-slate-100 ${
                active === link.href ? "nav-link-active text-slate-100" : ""
              }`}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#empleo"
            className="hidden items-center gap-1.5 rounded-md bg-brand-gold px-3.5 py-1.5 text-xs font-semibold text-[#1a1305] transition-all hover:brightness-110 active:scale-95 lg:inline-flex"
          >
            {t("header.cta")}
            <ArrowRight size={13} />
          </a>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-md border border-slate-700/70 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
          >
            <Languages size={14} />
            {t("lang.toggle")}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t("header.menu.close") : t("header.menu.open")}
            aria-expanded={menuOpen}
            className="flex items-center justify-center rounded-md border border-slate-700/70 p-1.5 text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100 md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Barra de progreso de lectura */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-800/60 bg-[#070c16]/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINK_KEYS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm transition-colors ${
                    active === link.href
                      ? "bg-brand-panel-light text-slate-100"
                      : "text-slate-400 hover:bg-brand-panel-light hover:text-slate-100"
                  }`}
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <a
                href="#empleo"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-md bg-brand-gold px-3.5 py-2.5 text-sm font-semibold text-[#1a1305]"
              >
                {t("header.cta")}
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
