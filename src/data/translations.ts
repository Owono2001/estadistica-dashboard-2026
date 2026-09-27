export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Navigation
    'nav.analytics': 'BI Analytics',
    'nav.profile': 'Engineer Profile',
    'nav.contact': 'Command Center',
    
    // BI Insights
    'insight.macro.title': 'Macroeconomic Squeeze',
    'insight.macro.desc': 'A projected GDP contraction of -5.8% (2025) forces industrial sectors into operational containment, limiting net-new expansions.',
    'insight.talent.title': 'The Class of 2025 Structural Bottleneck',
    'insight.talent.desc': 'High unemployment is driven by an academic mismatch. Of 218 foreign degree homologations, 56% were in administrative/social fields, heavily saturating a shrinking market. Conversely, severe deficits in IT (14 grads) and Engineering (32 grads) highlight a critical talent gap for industrial IT/OT integration.',
    'insight.hiring.title': 'Informal Hiring Vectors',
    'insight.hiring.desc': 'With 45% of placements reliant on personal networks and only 3.6% via formal channels, meritocratic talent acquisition remains severely fragmented.',
  },
  es: {
    // Navigation
    'nav.analytics': 'Panel BI',
    'nav.profile': 'Perfil Técnico',
    'nav.contact': 'Centro de Mando',
    
    // BI Insights
    'insight.macro.title': 'Contracción Macroeconómica',
    'insight.macro.desc': 'La contracción proyectada del PIB del -5.8% (2025) fuerza a los sectores industriales a la contención operativa, limitando la expansión neta.',
    'insight.talent.title': 'El Cuello de Botella de la Generación 2025',
    'insight.talent.desc': 'El alto desempleo obedece a un desajuste académico. De 218 homologaciones extranjeras, el 56% fueron en áreas administrativas, saturando un mercado contraído. En contraste, el déficit crítico en Informática (14) e Ingeniería (32) evidencia una enorme brecha de talento para la integración IT/OT.',
    'insight.hiring.title': 'Vectores de Contratación Informal',
    'insight.hiring.desc': 'Con un 45% de inserción dependiente de redes personales y solo un 3.6% vía canales formales, la adquisición meritocrática de talento sigue fragmentada.',
  }
};