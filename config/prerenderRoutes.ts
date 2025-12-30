// Explicit whitelist of all routes to prerender
// This prevents crawling from discovering malformed URLs

const locales = ['de', 'en', 'nl', 'es', 'fr', 'sv'] as const;
type Locale = typeof locales[number];

// Pages available in all locales
const allLocalePages: Record<string, Record<Locale, string>> = {
  index: { de: '/', en: '/', nl: '/', es: '/', fr: '/', sv: '/' },
  pricing: { de: '/preise', en: '/pricing', nl: '/prijzen', es: '/precios', fr: '/tarifs', sv: '/priser' },
  'how-it-works': {
    de: '/ki-transkription-wie-es-funktioniert',
    en: '/ai-transcription-how-it-works',
    nl: '/ai-transcriptie-hoe-het-werkt',
    es: '/transcripcion-ia-como-funciona',
    fr: '/transcription-ia-comment-ca-marche',
    sv: '/ai-transkription-hur-det-fungerar',
  },
  imprint: { de: '/impressum', en: '/imprint', nl: '/colofon', es: '/aviso-legal', fr: '/mentions-legales', sv: '/impressum' },
  privacy: { de: '/datenschutz', en: '/privacy', nl: '/gegevensbescherming', es: '/privacidad', fr: '/confidentialite', sv: '/integritetspolicy' },
  terms: { de: '/nutzungsbedingungen', en: '/terms', nl: '/voorwaarden', es: '/terminos', fr: '/conditions', sv: '/villkor' },
  coaches: {
    de: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
    en: '/consultants-and-coaches-efficiently-document-customer-meetings-sessions',
    nl: '/adviseurs-en-coaches-klantgesprekken-sessies-efficient-documenteren',
    es: '/consultores-y-coaches-documentar-reuniones-sesiones-eficientemente',
    fr: '/consultants-et-coaches-documenter-reunions-clients-sessions',
    sv: '/konsulter-och-coacher-dokumentera-kundmoeten-sessioner',
  },
  contentcreators: {
    de: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
    en: '/content-creators-efficiently-transcribe-show-notes-subtitles-blog-articles-content',
    nl: '/content-creators-show-notes-ondertitels-blogartikelen-efficient-transcriberen',
    es: '/creadores-contenido-transcribir-notas-subtitulos-articulos-blog',
    fr: '/createurs-contenu-transcrire-notes-sous-titres-articles-blog',
    sv: '/innehallsskapare-transkribera-shownotes-undertexter-bloggartiklar',
  },
  lawyers: {
    de: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
    en: '/lawyers-and-attorneys-efficiently-record-client-meetings-dsgvo-compliant',
    nl: '/juristen-en-advocaten-clientgesprekken-gdpr-conform-vastleggen',
    es: '/abogados-grabar-reuniones-clientes-cumplimiento-rgpd',
    fr: '/avocats-enregistrer-reunions-clients-conformite-rgpd',
    sv: '/advokater-spela-in-kundmoeten-gdpr-kompatibel',
  },
  sales: {
    de: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
    en: '/business-leaders-meetings-ideas-and-notes-efficiently-document',
    nl: '/zakenmensen-en-leidinggevenden-meetings-ideeen-notities-efficient-vastleggen',
    es: '/lideres-empresariales-documentar-reuniones-ideas-notas-eficientemente',
    fr: '/dirigeants-documenter-reunions-idees-notes-efficacement',
    sv: '/foretagsledare-dokumentera-moten-ideer-anteckningar',
  },
  media: {
    de: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
    en: '/journalists-and-editors-efficiently-transcribe-interviews-press-conferences-research-recordings',
    nl: '/journalisten-en-redacteuren-interviews-persconferenties-onderzoeksopnames-transcriberen',
    es: '/periodistas-editores-transcribir-entrevistas-conferencias-prensa',
    fr: '/journalistes-redacteurs-transcrire-interviews-conferences-presse',
    sv: '/journalister-redaktorer-transkribera-intervjuer-presskonferenser',
  },
  students: {
    de: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
    en: '/students-and-academics-efficiently-transcribe-lectures-seminars-theses-and-research',
    nl: '/studenten-en-academici-colleges-seminars-afstudeerprojecten-onderzoek-transcriberen',
    es: '/estudiantes-academicos-transcribir-clases-seminarios-tesis-investigacion',
    fr: '/etudiants-universitaires-transcrire-cours-seminaires-theses-recherche',
    sv: '/studenter-akademiker-transkribera-forelasningar-seminarier-avhandlingar',
  },
  'eu-ki-gesetz': { de: '/eu-ki-gesetz', en: '/eu-ai-law', nl: '/eu-ai-wet', es: '/ley-ia-ue', fr: '/loi-ia-ue', sv: '/eu-ai-lag' },
  'ki-im-mittelstand': {
    de: '/ki-im-mittelstand',
    en: '/ai-in-small-and-medium-sized-enterprises',
    nl: '/ai-in-het-mkb',
    es: '/ia-en-pymes',
    fr: '/ia-dans-les-pme',
    sv: '/ai-i-smf',
  },
  behoerden: {
    de: '/behoerden-ki-sicherheit',
    en: '/public-sector-ai-security',
    nl: '/overheidssector-ai-beveiliging',
    es: '/sector-publico-seguridad-ia',
    fr: '/secteur-public-securite-ia',
    sv: '/offentlig-sektor-ai-sakerhet',
  },
  'regulierte-branchen': {
    de: '/regulierte-branchen-ki-sicherheit',
    en: '/regulated-industries-ai-security',
    nl: '/gereguleerde-branches-ai-beveiliging',
    es: '/industrias-reguladas-seguridad-ia',
    fr: '/industries-reglementees-securite-ia',
    sv: '/reglerade-branscher-ai-sakerhet',
  },
  unternehmen: {
    de: '/unternehmen-ki-sicherheit',
    en: '/companies-ai-security',
    nl: '/bedrijven-ai-beveiliging',
    es: '/empresas-seguridad-ia',
    fr: '/entreprises-securite-ia',
    sv: '/foretag-ai-sakerhet',
  },
  'business-suite': { de: '/business-suite', en: '/business-suite', nl: '/business-suite', es: '/business-suite', fr: '/business-suite', sv: '/business-suite' },
  help: { de: '/hilfe', en: '/help', nl: '/hulp', es: '/ayuda', fr: '/aide', sv: '/hjalp' },
  about: { de: '/ueber-uns', en: '/about-us', nl: '/over-ons', es: '/sobre-nosotros', fr: '/a-propos', sv: '/om-oss' },
  kontakt: { de: '/kontakt', en: '/contact', nl: '/contact', es: '/contacto', fr: '/contact', sv: '/kontakt' },
  datasafety: {
    de: '/datensicherheit-ki-spracherkennung',
    en: '/privacy-and-data-safety-ai-speech-recognition',
    nl: '/gegevensbescherming-ai-spraakherkenning',
    es: '/seguridad-datos-reconocimiento-voz-ia',
    fr: '/securite-donnees-reconnaissance-vocale-ia',
    sv: '/datasakerhet-ai-rostigenkanning',
  },
  'ki-spracherkennung': {
    de: '/ki-spracherkennung',
    en: '/ai-speech-recognition',
    nl: '/ai-spraakherkenning',
    es: '/reconocimiento-voz-ia',
    fr: '/reconnaissance-vocale-ia',
    sv: '/ai-rostigenkanning',
  },
};

// Questions - only de and en
const germanQuestions = [
  'excel-tabellen-per-spracheingabe-fullen-so-hilft-diktat-ai',
  'google-docs-sprache-zu-text-so-diktieren-sie-texte-muhelos-und-sparen-zeit',
  'kann-chatgpt-audio-in-text-umwandeln-die-uberraschende-antwort-und-clevere-alternativen',
  'mac-sprachdiktat-so-diktierst-du-texte-statt-sie-zu-tippen-eine-anleitung',
  'microsoft-sprachdiktat-funktioniert-nicht-hier-sind-ihre-losungsansatze',
  'samsung-text-to-speech-so-lasst-du-dir-texte-einfach-vorlesen',
  'sprachdiktat-am-pc-so-einfach-verwandeln-sie-sprache-in-text-eine-anleitung',
  'was-ist-ein-sprachdiktat-mehr-als-nur-gesprochene-worte',
  'welche-tastenkombination-fur-diktieren-ihr-wegweiser-zur-effizienten-spracheingabe',
  'whatsapp-sprachdiktat-streikt-schnelle-losungen-und-die-professionelle-alternative',
];

const englishQuestions = [
  'chatgpt-audio-to-text',
  'excel-voice-input',
  'google-docs-voice-typing',
  'keyboard-shortcut-for-dictation',
  'mac-voice-dictation',
  'microsoft-dictation-not-working',
  'pc-voice-dictation-speech-to-text',
  'samsung-text-to-speech',
  'what-is-voice-dictation',
  'whatsapp-voice-dictation-not-working',
];

// Blog - only de
const blogPosts = [
  'willkommen',
  'erfolgsgeschichte-diktate',
];

// Helper to generate locale-prefixed routes
const withLocalePrefix = (locale: Locale, path: string): string => {
  if (locale === 'de') return path;
  return `/${locale}${path}`;
};

// Generate all routes
export const prerenderRoutes: string[] = [
  // All locale pages
  ...Object.values(allLocalePages).flatMap(routes =>
    locales.map(locale => withLocalePrefix(locale, routes[locale]))
  ),

  // Questions (de + en only)
  '/fragen',
  '/en/questions',
  ...germanQuestions.map(slug => `/fragen/${slug}`),
  ...englishQuestions.map(slug => `/en/questions/${slug}`),

  // Blog (de only)
  '/blog',
  ...blogPosts.map(slug => `/blog/${slug}`),
];
