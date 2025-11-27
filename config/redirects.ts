import type { NitroRouteRules } from 'nitropack';

type RedirectRule = {
  redirect: { to: string; statusCode: 301 | 302 | 307 | 308 };
};

export const redirects: Record<string, RedirectRule> = {
  // Redirect all /es/ URLs to German equivalents (Spanish locale not yet configured)
  '/es': { redirect: { to: '/', statusCode: 301 } },
  '/es/': { redirect: { to: '/', statusCode: 301 } },
  '/es/preise': { redirect: { to: '/preise', statusCode: 301 } },
  '/es/ueber-uns': { redirect: { to: '/ueber-uns', statusCode: 301 } },
  '/es/kontakt': { redirect: { to: '/kontakt', statusCode: 301 } },
  '/es/hilfe': { redirect: { to: '/hilfe', statusCode: 301 } },
  '/es/fragen': { redirect: { to: '/fragen', statusCode: 301 } },
  '/es/business-suite': { redirect: { to: '/business-suite', statusCode: 301 } },
  '/es/eu-ki-gesetz': { redirect: { to: '/eu-ki-gesetz', statusCode: 301 } },
  '/es/ki-im-mittelstand': { redirect: { to: '/ki-im-mittelstand', statusCode: 301 } },
  '/es/ki-transkription-wie-es-funktioniert': {
    redirect: { to: '/ki-transkription-wie-es-funktioniert', statusCode: 301 },
  },
  '/es/datensicherheit-ki-spracherkennung': {
    redirect: { to: '/datensicherheit-ki-spracherkennung', statusCode: 301 },
  },
  '/es/unternehmen-ki-sicherheit': {
    redirect: { to: '/unternehmen-ki-sicherheit', statusCode: 301 },
  },
  '/es/behoerden-ki-sicherheit': {
    redirect: { to: '/behoerden-ki-sicherheit', statusCode: 301 },
  },
  '/es/regulierte-branchen-ki-sicherheit': {
    redirect: { to: '/regulierte-branchen-ki-sicherheit', statusCode: 301 },
  },
  '/es/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren': {
    redirect: {
      to: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
      statusCode: 301,
    },
  },
  '/es/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren': {
    redirect: {
      to: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
      statusCode: 301,
    },
  },
  '/es/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen': {
    redirect: {
      to: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
      statusCode: 301,
    },
  },
  '/es/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten': {
    redirect: {
      to: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
      statusCode: 301,
    },
  },
  '/es/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln': {
    redirect: {
      to: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
      statusCode: 301,
    },
  },
  '/es/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren': {
    redirect: {
      to: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
      statusCode: 301,
    },
  },
  '/es/auth/register': { redirect: { to: '/auth/register', statusCode: 301 } },
  '/es/auth/reset-password': {
    redirect: { to: '/auth/reset-password', statusCode: 301 },
  },

  // Redirect incorrect /nl/ URLs with German slugs to correct Dutch slugs
  '/nl/behoerden-ki-sicherheit': {
    redirect: { to: '/nl/overheidssector-ai-beveiliging', statusCode: 301 },
  },
  '/nl/unternehmen-ki-sicherheit': {
    redirect: { to: '/nl/bedrijven-ai-beveiliging', statusCode: 301 },
  },

  // Redirect auth pages to homepage
  '/auth/register': { redirect: { to: '/', statusCode: 301 } },
  '/en/auth/register': { redirect: { to: '/en/', statusCode: 301 } },
  '/nl/auth/register': { redirect: { to: '/nl/', statusCode: 301 } },

  // More incorrect /nl/ URLs with German slugs
  '/nl/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln': {
    redirect: {
      to: '/nl/journalisten-en-redacteuren-interviews-persconferenties-onderzoeksopnames-transcriberen',
      statusCode: 301,
    },
  },

  // English question slugs incorrectly under German /fragen/ → redirect to /en/questions/
  '/fragen/whatsapp-voice-dictation-not-working': {
    redirect: { to: '/en/questions/whatsapp-voice-dictation-not-working', statusCode: 301 },
  },
  '/fragen/microsoft-dictation-not-working': {
    redirect: { to: '/en/questions/microsoft-dictation-not-working', statusCode: 301 },
  },
  '/fragen/mac-voice-dictation': {
    redirect: { to: '/en/questions/mac-voice-dictation', statusCode: 301 },
  },
  '/fragen/google-docs-voice-typing': {
    redirect: { to: '/en/questions/google-docs-voice-typing', statusCode: 301 },
  },
  '/fragen/keyboard-shortcut-for-dictation': {
    redirect: { to: '/en/questions/keyboard-shortcut-for-dictation', statusCode: 301 },
  },
  '/fragen/excel-voice-input': {
    redirect: { to: '/en/questions/excel-voice-input', statusCode: 301 },
  },
  '/fragen/chatgpt-audio-to-text': {
    redirect: { to: '/en/questions/chatgpt-audio-to-text', statusCode: 301 },
  },
  '/fragen/samsung-text-to-speech': {
    redirect: { to: '/en/questions/samsung-text-to-speech', statusCode: 301 },
  },
  '/fragen/what-is-voice-dictation': {
    redirect: { to: '/en/questions/what-is-voice-dictation', statusCode: 301 },
  },
  '/fragen/pc-voice-dictation-speech-to-text': {
    redirect: { to: '/en/questions/pc-voice-dictation-speech-to-text', statusCode: 301 },
  },

  // German question slugs incorrectly under English /en/questions/ → redirect to /fragen/
  '/en/questions/whatsapp-sprachdiktat-streikt-schnelle-losungen-und-die-professionelle-alternative': {
    redirect: {
      to: '/fragen/whatsapp-sprachdiktat-streikt-schnelle-losungen-und-die-professionelle-alternative',
      statusCode: 301,
    },
  },

  // Legacy/old routes that need redirects
  '/pricing': { redirect: { to: '/preise', statusCode: 301 } },
  '/questions': { redirect: { to: '/fragen', statusCode: 301 } },
  '/en/how-it-works': {
    redirect: { to: '/en/ai-transcription-how-it-works', statusCode: 301 },
  },
  '/en/public-sector': {
    redirect: { to: '/en/public-sector-ai-security', statusCode: 301 },
  },
  '/regulierte-branchen': {
    redirect: { to: '/regulierte-branchen-ki-sicherheit', statusCode: 301 },
  },
  '/ki-spracherkennung-funktionsweise': {
    redirect: { to: '/ki-spracherkennung', statusCode: 301 },
  },
  '/sample-page': { redirect: { to: '/', statusCode: 301 } },

  // Internal /general/ paths exposed - redirect to public URLs
  '/general/datasafety': {
    redirect: { to: '/datensicherheit-ki-spracherkennung', statusCode: 301 },
  },
  '/general/about': { redirect: { to: '/ueber-uns', statusCode: 301 } },
  '/general/kontakt': { redirect: { to: '/kontakt', statusCode: 301 } },
  '/general/help': { redirect: { to: '/hilfe', statusCode: 301 } },
  '/general/coaches': {
    redirect: {
      to: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
      statusCode: 301,
    },
  },
  '/general/contentcreators': {
    redirect: {
      to: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
      statusCode: 301,
    },
  },
  '/general/lawyers': {
    redirect: {
      to: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
      statusCode: 301,
    },
  },
  '/general/sales': {
    redirect: {
      to: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
      statusCode: 301,
    },
  },
  '/general/media': {
    redirect: {
      to: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
      statusCode: 301,
    },
  },
  '/general/students': {
    redirect: {
      to: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
      statusCode: 301,
    },
  },
  '/general/behoerden': {
    redirect: { to: '/behoerden-ki-sicherheit', statusCode: 301 },
  },
  '/general/unternehmen': {
    redirect: { to: '/unternehmen-ki-sicherheit', statusCode: 301 },
  },
  '/general/regulierte-branchen': {
    redirect: { to: '/regulierte-branchen-ki-sicherheit', statusCode: 301 },
  },
  '/general/business-suite': {
    redirect: { to: '/business-suite', statusCode: 301 },
  },
  '/general/eu-ki-gesetz': {
    redirect: { to: '/eu-ki-gesetz', statusCode: 301 },
  },
  '/general/ki-im-mittelstand': {
    redirect: { to: '/ki-im-mittelstand', statusCode: 301 },
  },
  '/general/ki-spracherkennung': {
    redirect: { to: '/ki-spracherkennung', statusCode: 301 },
  },
};
