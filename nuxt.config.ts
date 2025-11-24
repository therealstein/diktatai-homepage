export default defineNuxtConfig({
  compatibilityDate: '2025-03-03',
  devtools: { enabled: false },
  app: {
    buildAssetsDir: '/_nuxt-landing/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'stylesheet',
          href: '/fonts/fonts.css',
        },
      ],
      meta: [{ name: 'theme-color', content: '#ffffff' }],
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
    baseUrl: 'https://diktat.ai',
    locales: [
      {
        code: 'de',
        file: 'de.json',
        name: 'Deutsch',
        language: 'de-DE',
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'nl',
        file: 'nl.json',
        name: 'Nederlands',
        language: 'nl-NL',
      },
    ],
    customRoutes: 'config',
    pages: {
      index: {
        de: '/',
        en: '/',
        nl: '/',
      },
      pricing: {
        de: '/preise',
        en: '/pricing',
        nl: '/prijzen',
      },
      'how-it-works': {
        de: '/ki-transkription-wie-es-funktioniert',
        en: '/ai-transcription-how-it-works',
        nl: '/ai-transcriptie-hoe-het-werkt',
      },
      imprint: {
        de: '/impressum',
        en: '/imprint',
        nl: '/colofon',
      },
      privacy: {
        de: '/datenschutz',
        en: '/privacy',
        nl: '/gegevensbescherming',
      },
      terms: {
        de: '/nutzungsbedingungen',
        en: '/terms',
        nl: '/voorwaarden',
      },
      'general/coaches': {
        de: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
        en: '/consultants-and-coaches-efficiently-document-customer-meetings-sessions',
        nl: '/adviseurs-en-coaches-klantgesprekken-sessies-efficient-documenteren',
      },
      'general/contentcreators': {
        de: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
        en: '/content-creators-efficiently-transcribe-show-notes-subtitles-blog-articles-content',
        nl: '/content-creators-show-notes-ondertitels-blogartikelen-efficient-transcriberen',
      },
      'general/lawyers': {
        de: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
        en: '/lawyers-and-attorneys-efficiently-record-client-meetings-dsgvo-compliant',
        nl: '/juristen-en-advocaten-clientgesprekken-gdpr-conform-vastleggen',
      },
      'general/sales': {
        de: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
        en: '/business-leaders-meetings-ideas-and-notes-efficiently-document',
        nl: '/zakenmensen-en-leidinggevenden-meetings-ideeen-notities-efficient-vastleggen',
      },
      'general/media': {
        de: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
        en: '/journalists-and-editors-efficiently-transcribe-interviews-press-conferences-research-recordings',
        nl: '/journalisten-en-redacteuren-interviews-persconferenties-onderzoeksopnames-transcriberen',
      },
      'general/students': {
        de: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
        en: '/students-and-academics-efficiently-transcribe-lectures-seminars-theses-and-research',
        nl: '/studenten-en-academici-colleges-seminars-afstudeerprojecten-onderzoek-transcriberen',
      },
      'general/eu-ki-gesetz': {
        de: '/eu-ki-gesetz',
        en: '/eu-ai-law',
        nl: '/eu-ai-wet',
      },
      'general/ki-im-mittelstand': {
        de: '/ki-im-mittelstand',
        en: '/ai-in-small-and-medium-sized-enterprises',
        nl: '/ai-in-het-mkb',
      },
      'general/behoerden': {
        de: '/behoerden-ki-sicherheit',
        en: '/public-sector-ai-security',
        nl: '/overheidssector-ai-beveiliging',
      },
      'general/regulierte-branchen': {
        de: '/regulierte-branchen-ki-sicherheit',
        en: '/regulated-industries-ai-security',
        nl: '/gereguleerde-branches-ai-beveiliging',
      },
      'general/unternehmen': {
        de: '/unternehmen-ki-sicherheit',
        en: '/companies-ai-security',
        nl: '/bedrijven-ai-beveiliging',
      },
      'general/business-suite': {
        de: '/business-suite',
        en: '/business-suite',
        nl: '/business-suite',
      },
      'general/help': {
        de: '/hilfe',
        en: '/help',
        nl: '/hulp',
      },
      'general/about': {
        de: '/ueber-uns',
        en: '/about-us',
        nl: '/over-ons',
      },
      'general/kontakt': {
        de: '/kontakt',
        en: '/contact',
        nl: '/contact',
      },
      'general/datasafety': {
        de: '/datensicherheit-ki-spracherkennung',
        en: '/privacy-and-data-safety-ai-speech-recognition',
        nl: '/gegevensbescherming-ai-spraakherkenning',
      },
      'general/ki-spracherkennung': {
        de: '/ki-spracherkennung',
        en: '/ai-speech-recognition',
        nl: '/ai-spraakherkenning',
      },
      questions: {
        de: '/fragen',
        en: '/questions',
      },
      'questions/[slug]': {
        de: '/fragen/[slug]',
        en: '/questions/[slug]',
      },
    },

    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '25%' },
    ],
    exclude: ['/imprint', '/privacy', '/terms'],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/fragen', '/en/questions'],
      ignore: [
        '/auth/login',
        '/auth/register',
        '/en/auth/login',
        '/en/auth/register',
        '/nl/auth/login',
        '/nl/auth/register',
      ],
    },
    routeRules: {
      '/how-it-works': { redirect: '/ki-transkription-wie-es-funktioniert' },
      '/en/__sitemap__/en-US.xml': { redirect: '/__sitemap__/en-US.xml' },
      '/nl/__sitemap__/nl-NL.xml': { redirect: '/__sitemap__/nl-NL.xml' },
      '/cruncher/static/**': {
        proxy: 'https://eu-assets.i.posthog.com/static/**',
      },
      '/cruncher/**': { proxy: 'https://eu.i.posthog.com/**' },
      '/fragen': { prerender: true },
      '/fragen/**': { prerender: true },
      '/en/questions': { prerender: true },
      '/en/questions/**': { prerender: true },
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'Content-Security-Policy': "frame-ancestors 'self';",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_rEnn5wxbM2FCvmYNEuRu2w8Onbs5WII8VfKylyZcSBs',
      posthogHost: 'https://ph.diktat.ai',
      isDev: process.env.IS_DEV === 'active' || false,
    },
    isDev: process.env.IS_DEV === 'active' || false,
  },
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
    fallback: 'light',
    storageKey: 'theme-mode',
  },
  // @ts-ignore - Ignore content module configuration
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
  vite: {
    esbuild: {
      // Mark specific console methods as pure (removable) in production
      // This removes console.log, console.debug, console.info, console.warn
      // while keeping console.error for error reporting
      // Only remove logs when in production AND IS_DEV is not active
      pure:
        process.env.NODE_ENV === 'production' && process.env.IS_DEV !== 'active'
          ? ['console.log', 'console.debug', 'console.info', 'console.warn']
          : [],
      // Also drop debugger statements in production (unless IS_DEV is active)
      drop:
        process.env.NODE_ENV === 'production' && process.env.IS_DEV !== 'active'
          ? ['debugger']
          : [],
    },
  },
});
