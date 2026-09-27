export type TranslationKey = keyof typeof translations.es;

export const translations = {
  es: {
    // Marca / Header
    'brand.main': 'GE',
    'brand.suffix': 'en Datos',
    'lang.toggle': 'EN',
    'header.cta': 'Explorar datos',
    'header.menu.open': 'Abrir menú',
    'header.menu.close': 'Cerrar menú',
    'hero.cta.explore': 'Explorar el panel',
    'hero.cta.sources': 'Ver fuentes',
    'hero.live': 'Datos verificados · INEGE 2026',

    // Navegación
    'nav.empleo': 'Empleo',
    'nav.economia': 'Economía',
    'nav.energia': 'Energía',
    'nav.salud': 'Salud',
    'nav.educacion': 'Talento',
    'nav.demografia': 'Demografía',
    'nav.cemac': 'CEMAC',
    'nav.fuentes': 'Fuentes',

    // Genérico
    'common.source': 'Fuente',
    'common.table': 'Tabla',

    // Hero
    'hero.title':
      'Lo que dicen los números sobre por qué a esta generación le cuesta tanto encontrar trabajo',
    'hero.desc.p1':
      'Cada año miles de jóvenes ecuatoguineanos terminan una carrera dentro o fuera del país y chocan con un mercado laboral que no tiene sitio para ellos.',
    'hero.desc.strong': 'Está en las estadísticas oficiales del INEGE.',
    'hero.desc.p2':
      'Este panel cruza los datos del Anuario 2026 y de Perspectivas Macroeconómicas 2025-2027 para medir la magnitud real, sector por sector.',
    'hero.stat.population': 'habitantes, 2025 (crecimiento del 3,4% anual)',
    'hero.stat.unemployment': 'tasa de desocupación nacional, ENH2 2023',
    'hero.stat.informality': 'de los ocupados trabajan en la informalidad',
    'hero.stat.poverty': 'de la población vive en situación de pobreza',

    // Empleo
    'empleo.eyebrow': 'Mercado laboral · ENH2 2023, INEGE',
    'empleo.title':
      'El desempleo no golpea igual a todos: hay una trampa en el nivel medio de estudios',
    'empleo.desc':
      'No son los menos formados quienes más sufren la desocupación, sino quienes se quedaron en secundaria o formación técnica sin dar el salto a la universidad.',
    'empleo.chart.title': 'Tasa de desocupación por nivel de estudios (%)',
    'empleo.chart.source': 'Anuario INEGE 2026, Tabla 129',
    'empleo.level.esba': 'ESBA',
    'empleo.level.bachillerato': 'Bachillerato',
    'empleo.level.tecnica': 'Form. Técnica',
    'empleo.level.universitario': 'Universitario',
    'empleo.insight1.title': '1 de cada 3 con secundaria básica está desocupado',
    'empleo.insight1.desc':
      'ESBA (32,9%) y Bachillerato (19,7%) concentran la desocupación.',
    'empleo.insight2.title': 'El 45% consigue trabajo por contactos, no por mérito',
    'empleo.insight2.desc': 'Solo el 3,6% pasa por la oficina de empleo del MTFE.',
    'empleo.insight3.title': 'La universidad reduce el riesgo, no lo elimina',
    'empleo.insight3.desc':
      '4,4% de desocupación entre egresados — la cifra más baja del país.',
    'empleo.callout.strong': 'La fuga de talento técnico, en una cifra:',
    'empleo.callout.text':
      'de 218 títulos universitarios homologados en 2023, solo 14 fueron en Informática y 32 en Ingeniería. (Anuario 2026, Tabla 100)',

    // Economía
    'economia.eyebrow': 'Macroeconomía · INEGE, Perspectivas 2025-2027',
    'economia.title': 'Una economía que se contrae mientras la población crece',
    'economia.desc':
      'El PIB lleva desde 2023 en una montaña rusa negativa, arrastrado por el declive estructural del petróleo, mientras la población sigue creciendo un 3,4% al año.',
    'economia.chart.title': 'Crecimiento del PIB real, % (histórico y proyectado)',
    'economia.chart.source': 'Perspectivas Macroeconómicas 2025-2027, Tabla 1C',
    'economia.insight1.title':
      '75,9% de los ingresos del Estado seguirán viniendo del petróleo en 2027',
    'economia.insight1.desc':
      'Pese a los planes de diversificación, la dependencia estructural apenas cede.',
    'economia.insight2.title': 'Inflación bajo control: 2,3% al cierre de 2025',
    'economia.insight2.desc': 'Converge hacia el objetivo del 3% de la CEMAC.',
    'economia.insight3.title':
      'El déficit por cuenta corriente se duplicará: -5,2% → -8,3% del PIB (2024→2027)',
    'economia.insight3.desc':
      'Las exportaciones caen más rápido de lo que bajan las importaciones.',

    // Energía
    'energia.eyebrow': 'Infraestructura energética · Anuario 2026',
    'energia.title':
      'La matriz energética que sostiene (o limita) a cualquier empresa que llegue al país',
    'energia.desc':
      'Guinea Ecuatorial ya genera casi la mitad de su electricidad de fuentes renovables — una cifra que sorprende a la mayoría de reclutadores e inversores del sector.',
    'energia.chart.title': 'Generación eléctrica por fuente, 2025 (KW)',
    'energia.chart.source': 'Anuario 2026, Tabla 16',
    'energia.source.renovable': 'Renovable',
    'energia.source.norenovable': 'No renovable',
    'energia.insight1.title': '45% de la generación ya es renovable',
    'energia.insight1.desc':
      '555.160 KW de un total de 1.234.334 KW en 2025, con tendencia al alza.',
    'energia.insight2.title': 'La generación térmica marca picos estacionales',
    'energia.insight2.desc':
      'Marzo (70.738 Mw) y abril (65.652 Mw) concentran los mayores picos de generación no renovable.',
    'energia.insight3.title': 'La energía no se traduce en empleo formal',
    'energia.insight3.desc':
      'Una matriz robusta no ha bajado la informalidad del 83%.',

    // Salud
    'salud.eyebrow': 'Salud pública y riesgo laboral · Anuario 2026',
    'salud.title': 'La salud también es una barrera de empleabilidad',
    'salud.desc':
      'Enfermedad es absentismo, es productividad perdida. Estas son las cargas que más pesan sobre la fuerza laboral.',
    'salud.stat.paludismo':
      'casos de paludismo simple notificados en hospitales, 2025',
    'salud.stat.vih': 'personas viven con VIH en 2024 (4.382 nuevos casos)',
    'salud.stat.trafico':
      'accidentes de tráfico en Bioko Norte, 2025 — 17 fallecidos, 130 heridos',
    'salud.chart.title': 'Nuevos casos de VIH por grupo, 2024',
    'salud.chart.source': 'Anuario 2026, Tabla 55',
    'salud.group.mujeres': 'Mujeres 15+',
    'salud.group.hombres': 'Hombres 15+',
    'salud.group.ninos': 'Niños/as 0-14',
    'salud.callout.strong': 'Una brecha de género que casi nadie menciona:',
    'salud.callout.text':
      'las mujeres mayores de 15 años registran un 50% más de nuevos casos de VIH que los hombres. Cualquier política de empleabilidad femenina que ignore esta carga de salud está incompleta.',

    // Educación
    'educacion.eyebrow': 'Educación y capital humano · Anuario 2026',
    'educacion.title':
      'Un país que sabe leer, pero no forma lo que su industria necesita',
    'educacion.desc':
      'Con 90,1% de alfabetización, el problema no es el acceso a la educación básica. Es hacia dónde va esa población cuando decide especializarse.',
    'educacion.chart.title': 'Egresados de universidades extranjeras por rama, 2023',
    'educacion.chart.source': 'Anuario 2026, Tabla 100 · Total: 218 títulos homologados',
    'educacion.branch.sociales': 'Cs. Sociales / Derecho',
    'educacion.branch.ingenieria': 'Ingeniería',
    'educacion.branch.informatica': 'Informática',
    'educacion.branch.otras': 'Otras ramas',
    'educacion.insight1.title':
      '90,1% de alfabetización — con brecha de género (95,2% h / 85,6% m)',
    'educacion.insight1.desc':
      'Y una brecha geográfica mayor: 96,6% insular frente a 87,6% continental.',
    'educacion.insight2.title': 'Formación profesional, mayoritariamente femenina',
    'educacion.insight2.desc':
      'De 5.428 matriculados (2020-21), el 59,6% son mujeres — dato desactualizado, sin cifra posterior.',
    'educacion.insight3.title':
      'Ciencias Sociales y Derecho: 57% de todos los egresados en el extranjero',
    'educacion.insight3.desc':
      'Frente a apenas 14 egresados en Informática y 32 en Ingeniería, la brecha de talento técnico se agranda.',

    // Demografía
    'demografia.eyebrow': 'Demografía · Censo, INEGE',
    'demografia.title': 'La presión demográfica no es igual en todo el país',
    'demografia.desc':
      'Bioko Norte soporta una densidad muy superior al resto del país, concentrando también la mayor presión sobre vivienda, tráfico y servicios públicos.',
    'demografia.table.ambito': 'Ámbito',
    'demografia.table.densidad': 'Densidad (hab./km²)',
    'demografia.table.hogar': 'Tamaño medio del hogar (2023)',
    'demografia.area.nacional': 'Guinea Ecuatorial',
    'demografia.area.insular': 'Región Insular',
    'demografia.area.biokonorte': 'Bioko Norte',
    'demografia.area.continental': 'Región Continental',
    'demografia.source':
      'Densidad: Censo 2015 (dato más reciente disponible) · Tamaño de hogar: ENH2 2023 · Anuario 2026, Tablas 23-24',

    // CEMAC
    'cemac.eyebrow': 'Contexto regional · BEAC, CEMAC',
    'cemac.title': 'Guinea Ecuatorial frente a sus vecinos de la CEMAC',
    'cemac.desc':
      'Así se compara el país con el promedio de la Comunidad Económica y Monetaria de África Central en 2024.',
    'cemac.chart.title': 'Crecimiento del PIB real e inflación, 2024 (%)',
    'cemac.chart.source': 'BEAC (CPM mar. 2025) · Anuario 2026',
    'cemac.legend.ge': 'Guinea Ecuatorial',
    'cemac.legend.cemac': 'Media CEMAC',
    'cemac.indicator.pib': 'PIB real (%)',
    'cemac.indicator.inflacion': 'Inflación (%)',
    'cemac.insight1.title': 'GE creció un tercio de lo que creció la región',
    'cemac.insight1.desc': '0,9% nacional frente a 2,6% de la CEMAC en 2024.',
    'cemac.insight2.title': 'Pero con menos inflación que sus vecinos',
    'cemac.insight2.desc': '3,4% nacional frente a 4,1% de la media CEMAC.',
    'cemac.insight3.title': 'Deuda regional en descenso: 46,8% del PIB en 2024',
    'cemac.insight3.desc': 'La CEMAC proyecta bajarla a 38,8% en 2027.',

    // Footer
    'footer.about.title': 'Sobre este panel',
    'footer.about.desc':
      'Construido con datos oficiales del INEGE. Cada cifra se verificó directamente contra el documento fuente. Donde una serie está desactualizada, se indica explícitamente.',
    'footer.sources.title': 'Fuentes primarias',
    'footer.sources.item1': 'Anuario Estadístico de G.E. 2026, INEGE',
    'footer.sources.item2': 'Perspectivas Macroeconómicas 2025-2027, INEGE',
    'footer.sources.item3': 'Encuesta Nacional de Hogares (ENH2), 2023',
    'footer.sources.item4': 'Programa Nacional de VIH / ONUSIDA',
    'footer.sections.title': 'Secciones',
    'footer.sections.item1': 'Mercado laboral',
    'footer.sections.item2': 'Macroeconomía',
    'footer.sections.item3': 'Salud pública',
    'footer.sections.item4': 'Educación y talento',

    // Update notification
    'update.title': 'Sistema actualizado',
    'update.whatsnew': 'Novedades en',
    'update.note1':
      '🚀 Mejora de arquitectura: migrado a Next.js App Router para un rendimiento de nivel empresarial.',
    'update.note2':
      '💼 Enfoque B2B: interfaz optimizada centrada en integración IT/OT e ingeniería HSE.',
    'update.note3':
      '⚡ Optimización del lado servidor: mejores Core Web Vitals y sin saltos de diseño.',
    'update.note4':
      '🔒 Mejoras de seguridad: migrado a variables de entorno seguras del lado servidor.',
    'update.acknowledge': 'Entendido',
  },
  en: {
    'brand.main': 'EG',
    'brand.suffix': 'in Data',
    'lang.toggle': 'ES',
    'header.cta': 'Explore the data',
    'header.menu.open': 'Open menu',
    'header.menu.close': 'Close menu',
    'hero.cta.explore': 'Explore the dashboard',
    'hero.cta.sources': 'View sources',
    'hero.live': 'Verified data · INEGE 2026',

    'nav.empleo': 'Jobs',
    'nav.economia': 'Economy',
    'nav.energia': 'Energy',
    'nav.salud': 'Health',
    'nav.educacion': 'Talent',
    'nav.demografia': 'Demographics',
    'nav.cemac': 'CEMAC',
    'nav.fuentes': 'Sources',

    'common.source': 'Source',
    'common.table': 'Table',

    'hero.title':
      'What the numbers say about why this generation struggles so hard to find work',
    'hero.desc.p1':
      'Every year thousands of young Equatoguineans finish a degree at home or abroad and run into a labor market with no room for them.',
    'hero.desc.strong': "It's right there in INEGE's official statistics.",
    'hero.desc.p2':
      'This dashboard cross-references the 2026 Statistical Yearbook and the 2025-2027 Macroeconomic Outlook to measure the real scale of it, sector by sector.',
    'hero.stat.population': 'inhabitants, 2025 (3.4% annual growth)',
    'hero.stat.unemployment': 'national unemployment rate, ENH2 2023',
    'hero.stat.informality': 'of employed people work informally',
    'hero.stat.poverty': 'of the population lives in poverty',

    'empleo.eyebrow': 'Labor market · ENH2 2023, INEGE',
    'empleo.title':
      "Unemployment doesn't hit everyone equally: there's a trap in mid-level education",
    'empleo.desc':
      "It isn't the least educated who suffer the most unemployment, it's the ones who stopped at secondary or technical school without making the jump to university.",
    'empleo.chart.title': 'Unemployment rate by education level (%)',
    'empleo.chart.source': 'INEGE 2026 Yearbook, Table 129',
    'empleo.level.esba': 'Basic Secondary',
    'empleo.level.bachillerato': 'High School',
    'empleo.level.tecnica': 'Technical Training',
    'empleo.level.universitario': 'University',
    'empleo.insight1.title': '1 in 3 with basic secondary education is unemployed',
    'empleo.insight1.desc':
      'Basic Secondary (32.9%) and High School (19.7%) account for most unemployment.',
    'empleo.insight2.title': "45% find work through contacts, not merit",
    'empleo.insight2.desc': "Only 3.6% go through the MTFE's employment office.",
    'empleo.insight3.title': 'University lowers the risk, but never eliminates it',
    'empleo.insight3.desc':
      "4.4% unemployment among graduates — the country's lowest figure.",
    'empleo.callout.strong': 'Technical talent drain, in one number:',
    'empleo.callout.text':
      'of 218 foreign degrees recognized in 2023, only 14 were in Computer Science and 32 in Engineering. (2026 Yearbook, Table 100)',

    'economia.eyebrow': 'Macroeconomy · INEGE, 2025-2027 Outlook',
    'economia.title': 'An economy contracting while the population grows',
    'economia.desc':
      "GDP has been on a negative rollercoaster since 2023, dragged down by oil's structural decline, while the population keeps growing 3.4% a year.",
    'economia.chart.title': 'Real GDP growth, % (historical and projected)',
    'economia.chart.source': '2025-2027 Macroeconomic Outlook, Table 1C',
    'economia.insight1.title':
      "75.9% of state revenue will still come from oil in 2027",
    'economia.insight1.desc':
      'Despite diversification plans, structural dependence barely budges.',
    'economia.insight2.title': 'Inflation under control: 2.3% by the end of 2025',
    'economia.insight2.desc': "Converging toward CEMAC's 3% target.",
    'economia.insight3.title':
      'Current account deficit will double: -5.2% → -8.3% of GDP (2024→2027)',
    'economia.insight3.desc':
      'Exports are falling faster than imports are shrinking.',

    'energia.eyebrow': 'Energy infrastructure · 2026 Yearbook',
    'energia.title':
      'The energy grid that props up — or limits — any company entering the country',
    'energia.desc':
      "Equatorial Guinea already generates almost half its electricity from renewables — a figure that surprises most recruiters and investors in the sector.",
    'energia.chart.title': 'Electricity generation by source, 2025 (KW)',
    'energia.chart.source': '2026 Yearbook, Table 16',
    'energia.source.renovable': 'Renewable',
    'energia.source.norenovable': 'Non-renewable',
    'energia.insight1.title': '45% of generation is already renewable',
    'energia.insight1.desc':
      '555,160 KW out of a total of 1,234,334 KW in 2025, trending upward.',
    'energia.insight2.title': 'Thermal generation has seasonal peaks',
    'energia.insight2.desc':
      'March (70,738 Mw) and April (65,652 Mw) concentrate the highest non-renewable generation peaks.',
    'energia.insight3.title': "Energy hasn't translated into formal employment",
    'energia.insight3.desc':
      "A robust grid hasn't lowered the 83% informality rate.",

    'salud.eyebrow': 'Public health and occupational risk · 2026 Yearbook',
    'salud.title': 'Health is also a barrier to employability',
    'salud.desc':
      'Illness means absenteeism, means lost productivity. These are the burdens weighing heaviest on the workforce.',
    'salud.stat.paludismo': 'malaria cases reported in hospitals, 2025',
    'salud.stat.vih': 'people living with HIV in 2024 (4,382 new cases)',
    'salud.stat.trafico':
      'traffic accidents in Bioko Norte, 2025 — 17 dead, 130 injured',
    'salud.chart.title': 'New HIV cases by group, 2024',
    'salud.chart.source': '2026 Yearbook, Table 55',
    'salud.group.mujeres': 'Women 15+',
    'salud.group.hombres': 'Men 15+',
    'salud.group.ninos': 'Children 0-14',
    'salud.callout.strong': 'A gender gap almost nobody mentions:',
    'salud.callout.text':
      "women over 15 register 50% more new HIV cases than men. Any female-employability policy that ignores this health burden is incomplete.",

    'educacion.eyebrow': 'Education and human capital · 2026 Yearbook',
    'educacion.title': "A country that can read, but doesn't train what its industry needs",
    'educacion.desc':
      "With 90.1% literacy, access to basic education isn't the problem. The issue is where that population goes when it specializes.",
    'educacion.chart.title': 'Graduates of foreign universities by field, 2023',
    'educacion.chart.source': '2026 Yearbook, Table 100 · Total: 218 recognized degrees',
    'educacion.branch.sociales': 'Social Sci. / Law',
    'educacion.branch.ingenieria': 'Engineering',
    'educacion.branch.informatica': 'Computer Science',
    'educacion.branch.otras': 'Other fields',
    'educacion.insight1.title':
      '90.1% literacy — with a gender gap (95.2% men / 85.6% women)',
    'educacion.insight1.desc':
      'And an even bigger geographic gap: 96.6% insular vs. 87.6% mainland.',
    'educacion.insight2.title': 'Vocational training, mostly female',
    'educacion.insight2.desc':
      'Of 5,428 enrolled (2020-21), 59.6% are women — outdated data, no later figure available.',
    'educacion.insight3.title':
      'Social Sciences and Law: 57% of all graduates abroad',
    'educacion.insight3.desc':
      'Against just 14 graduates in Computer Science and 32 in Engineering, the technical talent gap keeps widening.',

    'demografia.eyebrow': 'Demographics · Census, INEGE',
    'demografia.title': "Demographic pressure isn't equal across the country",
    'demografia.desc':
      'Bioko Norte carries a far higher density than the rest of the country, also concentrating the greatest pressure on housing, traffic, and public services.',
    'demografia.table.ambito': 'Area',
    'demografia.table.densidad': 'Density (people/km²)',
    'demografia.table.hogar': 'Avg. household size (2023)',
    'demografia.area.nacional': 'Equatorial Guinea',
    'demografia.area.insular': 'Insular Region',
    'demografia.area.biokonorte': 'Bioko Norte',
    'demografia.area.continental': 'Mainland Region',
    'demografia.source':
      'Density: 2015 Census (most recent available) · Household size: ENH2 2023 · 2026 Yearbook, Tables 23-24',

    'cemac.eyebrow': 'Regional context · BEAC, CEMAC',
    'cemac.title': "Equatorial Guinea against its CEMAC neighbors",
    'cemac.desc':
      'How the country compares to the average of the Central African Economic and Monetary Community in 2024.',
    'cemac.chart.title': 'Real GDP growth and inflation, 2024 (%)',
    'cemac.chart.source': 'BEAC (Mar. 2025 monetary policy committee) · 2026 Yearbook',
    'cemac.legend.ge': 'Equatorial Guinea',
    'cemac.legend.cemac': 'CEMAC average',
    'cemac.indicator.pib': 'Real GDP (%)',
    'cemac.indicator.inflacion': 'Inflation (%)',
    'cemac.insight1.title': 'EG grew a third of what the region grew',
    'cemac.insight1.desc': '0.9% nationally vs. 2.6% for CEMAC in 2024.',
    'cemac.insight2.title': 'But with lower inflation than its neighbors',
    'cemac.insight2.desc': '3.4% nationally vs. 4.1% CEMAC average.',
    'cemac.insight3.title': 'Regional debt declining: 46.8% of GDP in 2024',
    'cemac.insight3.desc': 'CEMAC projects lowering it to 38.8% by 2027.',

    'footer.about.title': 'About this dashboard',
    'footer.about.desc':
      "Built with official INEGE data. Every figure was verified directly against the source document. Where a series is outdated, it's stated explicitly.",
    'footer.sources.title': 'Primary sources',
    'footer.sources.item1': '2026 Statistical Yearbook of Equatorial Guinea, INEGE',
    'footer.sources.item2': '2025-2027 Macroeconomic Outlook, INEGE',
    'footer.sources.item3': 'National Household Survey (ENH2), 2023',
    'footer.sources.item4': 'National HIV Program / UNAIDS',
    'footer.sections.title': 'Sections',
    'footer.sections.item1': 'Labor market',
    'footer.sections.item2': 'Macroeconomy',
    'footer.sections.item3': 'Public health',
    'footer.sections.item4': 'Education and talent',

    'update.title': 'System Updated',
    'update.whatsnew': "What's new in",
    'update.note1':
      '🚀 Architecture Upgrade: Migrated to Next.js App Router for enterprise-grade performance.',
    'update.note2':
      '💼 B2B Focus: Streamlined interface focusing strictly on IT/OT integration and HSE engineering.',
    'update.note3':
      '⚡ Server-Side Optimization: Improved Core Web Vitals and eliminated layout shifts.',
    'update.note4':
      '🔒 Security Enhancements: Migrated to secure server-side environment variables.',
    'update.acknowledge': 'Acknowledge',
  },
} as const;