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
    ],
    customRoutes: 'config',
    pages: {
      index: {
        de: '/',
        en: '/',
      },
      pricing: {
        de: '/preise',
        en: '/pricing',
      },
      'how-it-works': {
        de: '/ki-transkription-wie-es-funktioniert',
        en: '/ai-transcription-how-it-works',
      },
      imprint: {
        de: '/impressum',
        en: '/imprint',
      },
      privacy: {
        de: '/datenschutz',
        en: '/privacy',
      },
      terms: {
        de: '/nutzungsbedingungen',
        en: '/terms',
      },
      'general/coaches': {
        de: '/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren',
        en: '/consultants-and-coaches-efficiently-document-customer-meetings-sessions',
      },
      'general/contentcreators': {
        de: '/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren',
        en: '/content-creators-efficiently-transcribe-show-notes-subtitles-blog-articles-content',
      },
      'general/lawyers': {
        de: '/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen',
        en: '/lawyers-and-attorneys-efficiently-record-client-meetings-dsgvo-compliant',
      },
      'general/sales': {
        de: '/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten',
        en: '/business-leaders-meetings-ideas-and-notes-efficiently-document',
      },
      'general/media': {
        de: '/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln',
        en: '/journalists-and-editors-efficiently-transcribe-interviews-press-conferences-research-recordings',
      },
      'general/students': {
        de: '/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren',
        en: '/students-and-academics-efficiently-transcribe-lectures-seminars-theses-and-research',
      },
      'general/eu-ki-gesetz': {
        de: '/eu-ki-gesetz',
        en: '/eu-ai-law',
      },
      'general/ki-im-mittelstand': {
        de: '/ki-im-mittelstand',
        en: '/ai-in-small-and-medium-sized-enterprises',
      },
      'general/behoerden': {
        de: '/behoerden-ki-sicherheit',
        en: '/public-sector-ai-security',
      },
      'general/regulierte-branchen': {
        de: '/regulierte-branchen-ki-sicherheit',
        en: '/regulated-industries-ai-security',
      },
      'general/unternehmen': {
        de: '/unternehmen-ki-sicherheit',
        en: '/companies-ai-security',
      },
      'general/business-suite': {
        de: '/business-suite',
        en: '/business-suite',
      },
      'general/help': {
        de: '/hilfe',
        en: '/help',
      },
      'general/about': {
        de: '/ueber-uns',
        en: '/about-us',
      },
      'general/kontakt': {
        de: '/kontakt',
        en: '/contact',
      },
      'general/datasafety': {
        de: '/datensicherheit-ki-spracherkennung',
        en: '/privacy-and-data-safety-ai-speech-recognition',
      },
      'general/ki-spracherkennung': {
        de: '/ki-spracherkennung',
        en: '/ai-speech-recognition',
      },
      questions: {
        de: '/fragen',
        en: '/questions',
      },
      'questions-slug': {
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
      ignore: [
        '/auth/login',
        '/auth/register',
        '/en/auth/login',
        '/en/auth/register',
      ],
    },
    routeRules: {
      '/how-it-works': { redirect: '/ki-transkription-wie-es-funktioniert' },
      '/en/__sitemap__/en-US.xml': { redirect: '/__sitemap__/en-US.xml' },
      '/cruncher/static/**': {
        proxy: 'https://eu-assets.i.posthog.com/static/**',
      },
      '/cruncher/**': { proxy: 'https://eu.i.posthog.com/**' },
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'Content-Security-Policy': "frame-ancestors 'self';",
        },
      },
    },
    storage:
      process.env.IS_DEV === 'active'
        ? {
            cache: {
              driver: 'fs',
              base: '.data/cache-wp',
            },
          }
        : {
            cache: {
              driver: 'redis',
              base: 'diktatai-wp',
              url: process.env.NUXT_REDIS_URL,
              ttl: 60 * 60 * 24 * 30,
            },
          },
    devStorage: {
      cache: {
        driver: 'fs',
        base: '.data/cache-wp',
      },
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.NUXT_POSTHOG_KEY,
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
