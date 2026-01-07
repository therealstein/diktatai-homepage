import { redirects } from "./config/redirects";
import { prerenderRoutes } from "./config/prerenderRoutes";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-03",
  devtools: { enabled: false },
  app: {
    buildAssetsDir: "/_nuxt-landing/",
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        // Preload LCP image with high priority (hero background)
        {
          rel: "preload",
          href: "/herobg.webp",
          as: "image",
          type: "image/webp",
          fetchpriority: "high",
        },
        // DNS prefetch for external resources (faster than preconnect, less overhead)
        {
          rel: "dns-prefetch",
          href: "https://ph.diktat.ai",
        },
        {
          rel: "dns-prefetch",
          href: "https://www.google.com",
        },
        // Preconnect to analytics (use crossorigin for CORS resources)
        {
          rel: "preconnect",
          href: "https://ph.diktat.ai",
          crossorigin: "anonymous",
        },
        // Preconnect to Google Tag Manager
        {
          rel: "preconnect",
          href: "https://www.googletagmanager.com",
          crossorigin: "anonymous",
        },
        // Preload critical fonts used above-the-fold
        {
          rel: "preload",
          href: "/fonts/Inter-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter-SemiBold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/PlusJakartaSans-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
      // Inline critical font CSS to eliminate render-blocking request
      style: [
        {
          innerHTML: `
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              src: url('/fonts/Inter-Regular.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 500;
              src: url('/fonts/Inter-Medium.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              src: url('/fonts/Inter-Bold.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Plus Jakarta Sans';
              font-style: normal;
              font-weight: 500;
              src: url('/fonts/PlusJakartaSans-Medium.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Plus Jakarta Sans';
              font-style: normal;
              font-weight: 600;
              src: url('/fonts/PlusJakartaSans-SemiBold.woff2') format('woff2');
              font-display: swap;
            }
            @font-face {
              font-family: 'Plus Jakarta Sans';
              font-style: normal;
              font-weight: 700;
              src: url('/fonts/PlusJakartaSans-Bold.woff2') format('woff2');
              font-display: swap;
            }
          `,
        },
      ],
      meta: [{ name: "theme-color", content: "#ffffff" }],
    },
  },
  // Note: strict mode removed for Nuxt 4 compatibility with i18n locale index routes
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "de",
    baseUrl: "https://diktat.ai",
    locales: [
      {
        code: "de",
        file: "de.json",
        name: "Deutsch",
        language: "de-DE",
      },
      {
        code: "en",
        file: "en.json",
        name: "English",
        language: "en-US",
      },
      {
        code: "nl",
        file: "nl.json",
        name: "Nederlands",
        language: "nl-NL",
      },
      {
        code: "es",
        file: "es.json",
        name: "Español",
        language: "es-ES",
      },
      {
        code: "fr",
        file: "fr.json",
        name: "Français",
        language: "fr-FR",
      },
      {
        code: "sv",
        file: "sv.json",
        name: "Svenska",
        language: "sv-SE",
      },
    ],
    customRoutes: "config",
    pages: {
      index: {
        de: "/",
        en: "/",
        nl: "/",
        es: "/",
        fr: "/",
        sv: "/",
      },
      pricing: {
        de: "/preise",
        en: "/pricing",
        nl: "/prijzen",
        es: "/precios",
        fr: "/tarifs",
        sv: "/priser",
      },
      "how-it-works": {
        de: "/ki-transkription-wie-es-funktioniert",
        en: "/ai-transcription-how-it-works",
        nl: "/ai-transcriptie-hoe-het-werkt",
        es: "/transcripcion-ia-como-funciona",
        fr: "/transcription-ia-comment-ca-marche",
        sv: "/ai-transkription-hur-det-fungerar",
      },
      imprint: {
        de: "/impressum",
        en: "/imprint",
        nl: "/colofon",
        es: "/aviso-legal",
        fr: "/mentions-legales",
        sv: "/impressum",
      },
      privacy: {
        de: "/datenschutz",
        en: "/privacy",
        nl: "/gegevensbescherming",
        es: "/privacidad",
        fr: "/confidentialite",
        sv: "/integritetspolicy",
      },
      terms: {
        de: "/nutzungsbedingungen",
        en: "/terms",
        nl: "/voorwaarden",
        es: "/terminos",
        fr: "/conditions",
        sv: "/villkor",
      },
      "general/coaches": {
        de: "/berater-und-coaches-kundengespraeche-sitzungen-effizient-dokumentieren",
        en: "/consultants-and-coaches-efficiently-document-customer-meetings-sessions",
        nl: "/adviseurs-en-coaches-klantgesprekken-sessies-efficient-documenteren",
        es: "/consultores-y-coaches-documentar-reuniones-sesiones-eficientemente",
        fr: "/consultants-et-coaches-documenter-reunions-clients-sessions",
        sv: "/konsulter-och-coacher-dokumentera-kundmoeten-sessioner",
      },
      "general/contentcreators": {
        de: "/content-ersteller-show-notes-untertitel-blogartikel-inhalte-transkribieren",
        en: "/content-creators-efficiently-transcribe-show-notes-subtitles-blog-articles-content",
        nl: "/content-creators-show-notes-ondertitels-blogartikelen-efficient-transcriberen",
        es: "/creadores-contenido-transcribir-notas-subtitulos-articulos-blog",
        fr: "/createurs-contenu-transcrire-notes-sous-titres-articles-blog",
        sv: "/innehallsskapare-transkribera-shownotes-undertexter-bloggartiklar",
      },
      "general/lawyers": {
        de: "/juristen-und-anwaelte-diktate-mandantengespraeche-dsgvo-konform-aufzeichnen",
        en: "/lawyers-and-attorneys-efficiently-record-client-meetings-dsgvo-compliant",
        nl: "/juristen-en-advocaten-clientgesprekken-gdpr-conform-vastleggen",
        es: "/abogados-grabar-reuniones-clientes-cumplimiento-rgpd",
        fr: "/avocats-enregistrer-reunions-clients-conformite-rgpd",
        sv: "/advokater-spela-in-kundmoeten-gdpr-kompatibel",
      },
      "general/sales": {
        de: "/geschaeftsleute-und-fuehrungskraefte-meetings-ideen-und-notizen-effizient-festhalten",
        en: "/business-leaders-meetings-ideas-and-notes-efficiently-document",
        nl: "/zakenmensen-en-leidinggevenden-meetings-ideeen-notities-efficient-vastleggen",
        es: "/lideres-empresariales-documentar-reuniones-ideas-notas-eficientemente",
        fr: "/dirigeants-documenter-reunions-idees-notes-efficacement",
        sv: "/foretagsledare-dokumentera-moten-ideer-anteckningar",
      },
      "general/media": {
        de: "/journalisten-und-redakteure-interviews-pressekonferenzen-recherche-aufnahmen-umwandeln",
        en: "/journalists-and-editors-efficiently-transcribe-interviews-press-conferences-research-recordings",
        nl: "/journalisten-en-redacteuren-interviews-persconferenties-onderzoeksopnames-transcriberen",
        es: "/periodistas-editores-transcribir-entrevistas-conferencias-prensa",
        fr: "/journalistes-redacteurs-transcrire-interviews-conferences-presse",
        sv: "/journalister-redaktorer-transkribera-intervjuer-presskonferenser",
      },
      "general/students": {
        de: "/studierende-und-akademiker-vorlesungen-seminare-abschlussarbeiten-und-forschung-transkribieren",
        en: "/students-and-academics-efficiently-transcribe-lectures-seminars-theses-and-research",
        nl: "/studenten-en-academici-colleges-seminars-afstudeerprojecten-onderzoek-transcriberen",
        es: "/estudiantes-academicos-transcribir-clases-seminarios-tesis-investigacion",
        fr: "/etudiants-universitaires-transcrire-cours-seminaires-theses-recherche",
        sv: "/studenter-akademiker-transkribera-forelasningar-seminarier-avhandlingar",
      },
      "general/eu-ki-gesetz": {
        de: "/eu-ki-gesetz",
        en: "/eu-ai-law",
        nl: "/eu-ai-wet",
        es: "/ley-ia-ue",
        fr: "/loi-ia-ue",
        sv: "/eu-ai-lag",
      },
      "general/ki-im-mittelstand": {
        de: "/ki-im-mittelstand",
        en: "/ai-in-small-and-medium-sized-enterprises",
        nl: "/ai-in-het-mkb",
        es: "/ia-en-pymes",
        fr: "/ia-dans-les-pme",
        sv: "/ai-i-smf",
      },
      "general/behoerden": {
        de: "/behoerden-ki-sicherheit",
        en: "/public-sector-ai-security",
        nl: "/overheidssector-ai-beveiliging",
        es: "/sector-publico-seguridad-ia",
        fr: "/secteur-public-securite-ia",
        sv: "/offentlig-sektor-ai-sakerhet",
      },
      "general/regulierte-branchen": {
        de: "/regulierte-branchen-ki-sicherheit",
        en: "/regulated-industries-ai-security",
        nl: "/gereguleerde-branches-ai-beveiliging",
        es: "/industrias-reguladas-seguridad-ia",
        fr: "/industries-reglementees-securite-ia",
        sv: "/reglerade-branscher-ai-sakerhet",
      },
      "general/unternehmen": {
        de: "/unternehmen-ki-sicherheit",
        en: "/companies-ai-security",
        nl: "/bedrijven-ai-beveiliging",
        es: "/empresas-seguridad-ia",
        fr: "/entreprises-securite-ia",
        sv: "/foretag-ai-sakerhet",
      },
      "general/business-suite": {
        de: "/business-suite",
        en: "/business-suite",
        nl: "/business-suite",
        es: "/business-suite",
        fr: "/business-suite",
        sv: "/business-suite",
      },
      "general/help": {
        de: "/hilfe",
        en: "/help",
        nl: "/hulp",
        es: "/ayuda",
        fr: "/aide",
        sv: "/hjalp",
      },
      "general/about": {
        de: "/ueber-uns",
        en: "/about-us",
        nl: "/over-ons",
        es: "/sobre-nosotros",
        fr: "/a-propos",
        sv: "/om-oss",
      },
      "general/kontakt": {
        de: "/kontakt",
        en: "/contact",
        nl: "/contact",
        es: "/contacto",
        fr: "/contact",
        sv: "/kontakt",
      },
      "general/datasafety": {
        de: "/datensicherheit-ki-spracherkennung",
        en: "/privacy-and-data-safety-ai-speech-recognition",
        nl: "/gegevensbescherming-ai-spraakherkenning",
        es: "/seguridad-datos-reconocimiento-voz-ia",
        fr: "/securite-donnees-reconnaissance-vocale-ia",
        sv: "/datasakerhet-ai-rostigenkanning",
      },
      "general/ki-spracherkennung": {
        de: "/ki-spracherkennung",
        en: "/ai-speech-recognition",
        nl: "/ai-spraakherkenning",
        es: "/reconocimiento-voz-ia",
        fr: "/reconnaissance-vocale-ia",
        sv: "/ai-rostigenkanning",
      },
      questions: {
        de: "/fragen",
        en: "/questions",
        // Questions content only exists for de and en locales
        // Setting to false prevents hreflang links and sitemap entries for unsupported locales
        nl: false,
        es: false,
        fr: false,
        sv: false,
      },
      "questions/[slug]": {
        de: "/fragen/[slug]",
        en: "/questions/[slug]",
        // Questions content only exists for de and en locales
        nl: false,
        es: false,
        fr: false,
        sv: false,
      },
      // Blog content only exists in German
      blog: {
        de: "/blog",
        en: false,
        nl: false,
        es: false,
        fr: false,
        sv: false,
      },
      "blog/[...slug]": {
        de: "/blog/[...slug]",
        en: false,
        nl: false,
        es: false,
        fr: false,
        sv: false,
      },
    },

    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],
  sitemap: {
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
      { label: "Priority", select: "sitemap:priority", width: "25%" },
    ],
    exclude: ["/imprint", "/privacy", "/terms"],
  },
  nitro: {
    prerender: {
      // Disable crawling - only prerender explicitly listed routes
      crawlLinks: false,
      // Use explicit whitelist from config
      routes: prerenderRoutes,
      failOnError: false,
    },
    routeRules: {
      "/how-it-works": { redirect: "/ki-transkription-wie-es-funktioniert" },
      "/en/__sitemap__/en-US.xml": { redirect: { to: "/__sitemap__/en-US.xml", statusCode: 301 } },
      "/nl/__sitemap__/nl-NL.xml": { redirect: { to: "/__sitemap__/nl-NL.xml", statusCode: 301 } },
      "/sitemap.xml": { redirect: { to: "/sitemap_index.xml", statusCode: 301 } },

      // Imported redirects for legacy URLs and incorrect locale slugs
      ...redirects,

      "/cruncher/static/**": {
        proxy: "https://eu-assets.i.posthog.com/static/**",
      },
      "/cruncher/**": { proxy: "https://eu.i.posthog.com/**" },
      "/fragen": { prerender: true },
      "/fragen/**": { prerender: true },
      "/en/questions": { prerender: true },
      "/en/questions/**": { prerender: true },
      // Long cache for immutable static assets
      "/fonts/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/_nuxt-landing/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/images/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/*.webp": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/**": {
        headers: {
          "X-Frame-Options": "SAMEORIGIN",
          "Content-Security-Policy": "frame-ancestors 'self';",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_rEnn5wxbM2FCvmYNEuRu2w8Onbs5WII8VfKylyZcSBs",
      posthogHost: "https://ph.diktat.ai",
      isDev: process.env.IS_DEV === "active" || false,
    },
    isDev: process.env.IS_DEV === "active" || false,
  },
  colorMode: {
    preference: "light", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
    fallback: "light",
    storageKey: "theme-mode",
  },
  // @ts-ignore - Ignore content module configuration
  content: {
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  vite: {
    esbuild: {
      // Mark specific console methods as pure (removable) in production
      // This removes console.log, console.debug, console.info, console.warn
      // while keeping console.error for error reporting
      // Only remove logs when in production AND IS_DEV is not active
      pure:
        process.env.NODE_ENV === "production" && process.env.IS_DEV !== "active"
          ? ["console.log", "console.debug", "console.info", "console.warn"]
          : [],
      // Also drop debugger statements in production (unless IS_DEV is active)
      drop:
        process.env.NODE_ENV === "production" && process.env.IS_DEV !== "active"
          ? ["debugger"]
          : [],
    },
    build: {
      // Split vendor chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Split large dependencies into separate chunks
            'vue-vendor': ['vue', 'vue-router'],
            'i18n': ['vue-i18n'],
          },
        },
      },
    },
  },
  // Experimental features for better performance
  experimental: {
    // Inline styles for faster initial render
    inlineStyles: true,
    // Tree-shake client-only components in server bundle
    treeshakeClientOnly: true,
    // Payload extraction for prerendered pages
    payloadExtraction: true,
  },
  // Optimize module loading
  features: {
    // Inline styles from components for critical CSS
    inlineStyles: true,
  },
});
