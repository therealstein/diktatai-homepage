import type { NitroRouteRules } from 'nitropack';

type RedirectRule = {
  redirect: { to: string; statusCode: 301 | 302 | 307 | 308 };
  prerender?: false;
};

// German question slugs - for generating redirects from wrong locale paths
const germanQuestionSlugs = [
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

// English question slugs - for generating redirects from wrong locale paths
const englishQuestionSlugs = [
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

// Generate redirects for German slugs appearing under wrong locale question paths
function generateGermanSlugRedirects(): Record<string, RedirectRule> {
  const redirects: Record<string, RedirectRule> = {};

  // Locale prefixes and their question path patterns
  const wrongLocalePaths = [
    { prefix: '/en/questions', from: 'en' },
    { prefix: '/nl/vragen', from: 'nl' },
    { prefix: '/es/preguntas', from: 'es' },
    { prefix: '/fr/questions', from: 'fr' },
    { prefix: '/sv/fragor', from: 'sv' },
  ];

  for (const slug of germanQuestionSlugs) {
    for (const { prefix } of wrongLocalePaths) {
      redirects[`${prefix}/${slug}`] = {
        redirect: { to: `/fragen/${slug}`, statusCode: 301 },
        prerender: false,
      };
    }
  }

  return redirects;
}

// Generate redirects for English slugs appearing under wrong locale question paths
function generateEnglishSlugRedirects(): Record<string, RedirectRule> {
  const redirects: Record<string, RedirectRule> = {};

  // Locale prefixes and their question path patterns (excluding /en/questions which is correct)
  const wrongLocalePaths = [
    { prefix: '/nl/vragen', from: 'nl' },
    { prefix: '/es/preguntas', from: 'es' },
    { prefix: '/fr/questions', from: 'fr' },
    { prefix: '/sv/fragor', from: 'sv' },
    { prefix: '/fragen', from: 'de' }, // English slugs under German path
  ];

  for (const slug of englishQuestionSlugs) {
    for (const { prefix } of wrongLocalePaths) {
      redirects[`${prefix}/${slug}`] = {
        redirect: { to: `/en/questions/${slug}`, statusCode: 301 },
        prerender: false,
      };
    }
  }

  return redirects;
}

export const redirects: Record<string, RedirectRule> = {
  // Unsupported locale question index routes → redirect to German /fragen
  '/nl/vragen': { redirect: { to: '/fragen', statusCode: 301 }, prerender: false },
  '/es/preguntas': { redirect: { to: '/fragen', statusCode: 301 }, prerender: false },
  '/fr/questions': { redirect: { to: '/fragen', statusCode: 301 }, prerender: false },
  '/sv/fragor': { redirect: { to: '/fragen', statusCode: 301 }, prerender: false },

  // Generated redirects for German question slugs under wrong locales
  ...generateGermanSlugRedirects(),

  // Generated redirects for English question slugs under wrong locales
  ...generateEnglishSlugRedirects(),

  // Additional question slug redirects that were previously being handled
  // Redirect incorrect /nl/ URLs with German slugs to correct Dutch slugs
  '/nl/behoerden-ki-sicherheit': {
    redirect: { to: '/nl/overheidssector-ai-beveiliging', statusCode: 301 },
    prerender: false,
  },
  '/nl/unternehmen-ki-sicherheit': {
    redirect: { to: '/nl/bedrijven-ai-beveiliging', statusCode: 301 },
    prerender: false,
  },

  // Redirect incorrect /es/ URLs with German slugs to correct Spanish slugs
  '/es/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen': {
    redirect: { to: '/es/abogados-grabar-reuniones-clientes-cumplimiento-rgpd', statusCode: 301 },
    prerender: false,
  },

  // Redirect auth pages to homepage
  '/auth/register': { redirect: { to: '/', statusCode: 301 }, prerender: false },
  '/en/auth/register': { redirect: { to: '/en/', statusCode: 301 }, prerender: false },
  '/nl/auth/register': { redirect: { to: '/nl/', statusCode: 301 }, prerender: false },

  // More incorrect /nl/ URLs with German slugs
  '/nl/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln': {
    redirect: {
      to: '/nl/journalisten-en-redacteuren-interviews-persconferenties-onderzoeksopnames-transcriberen',
      statusCode: 301,
    },
    prerender: false,
  },

  // Legacy/old routes that need redirects
  '/pricing': { redirect: { to: '/preise', statusCode: 301 }, prerender: false },
  '/questions': { redirect: { to: '/fragen', statusCode: 301 }, prerender: false },
  '/en/how-it-works': {
    redirect: { to: '/en/ai-transcription-how-it-works', statusCode: 301 },
    prerender: false,
  },
  '/en/public-sector': {
    redirect: { to: '/en/public-sector-ai-security', statusCode: 301 },
    prerender: false,
  },
  '/regulierte-branchen': {
    redirect: { to: '/regulierte-branchen-ki-sicherheit', statusCode: 301 },
    prerender: false,
  },
  '/ki-spracherkennung-funktionsweise': {
    redirect: { to: '/ki-spracherkennung', statusCode: 301 },
    prerender: false,
  },
  '/sample-page': { redirect: { to: '/', statusCode: 301 }, prerender: false },

  // Internal /general/ paths exposed - redirect to public URLs
  '/general/datasafety': {
    redirect: { to: '/datensicherheit-ki-spracherkennung', statusCode: 301 },
    prerender: false,
  },
  '/general/about': { redirect: { to: '/ueber-uns', statusCode: 301 }, prerender: false },
  '/general/kontakt': { redirect: { to: '/kontakt', statusCode: 301 }, prerender: false },
  '/general/help': { redirect: { to: '/hilfe', statusCode: 301 }, prerender: false },
  '/general/coaches': {
    redirect: {
      to: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/contentcreators': {
    redirect: {
      to: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/lawyers': {
    redirect: {
      to: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/sales': {
    redirect: {
      to: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/media': {
    redirect: {
      to: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/students': {
    redirect: {
      to: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
      statusCode: 301,
    },
    prerender: false,
  },
  '/general/behoerden': {
    redirect: { to: '/behoerden-ki-sicherheit', statusCode: 301 },
    prerender: false,
  },
  '/general/unternehmen': {
    redirect: { to: '/unternehmen-ki-sicherheit', statusCode: 301 },
    prerender: false,
  },
  '/general/regulierte-branchen': {
    redirect: { to: '/regulierte-branchen-ki-sicherheit', statusCode: 301 },
    prerender: false,
  },
  '/general/business-suite': {
    redirect: { to: '/business-suite', statusCode: 301 },
    prerender: false,
  },
  '/general/eu-ki-gesetz': {
    redirect: { to: '/eu-ki-gesetz', statusCode: 301 },
    prerender: false,
  },
  '/general/ki-im-mittelstand': {
    redirect: { to: '/ki-im-mittelstand', statusCode: 301 },
    prerender: false,
  },
  '/general/ki-spracherkennung': {
    redirect: { to: '/ki-spracherkennung', statusCode: 301 },
    prerender: false,
  },
};
