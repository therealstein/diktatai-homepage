# Astro Migration Guide: Diktat AI Homepage

Complete migration guide from Nuxt 3 to Astro, preserving all URLs, content, and styling.

## Table of Contents

1. [Why Astro?](#1-why-astro)
2. [Project Setup](#2-project-setup)
3. [Directory Structure](#3-directory-structure)
4. [URL Structure Mapping](#4-url-structure-mapping)
5. [Content Migration](#5-content-migration)
6. [Component Migration](#6-component-migration)
7. [Styling Migration](#7-styling-migration)
8. [i18n Implementation](#8-i18n-implementation)
9. [Analytics & Tracking](#9-analytics--tracking)
10. [SEO Migration](#10-seo-migration)
11. [Build & Deployment](#11-build--deployment)
12. [Migration Checklist](#12-migration-checklist)

---

## 1. Why Astro?

| Problem in Nuxt | Solution in Astro |
|-----------------|-------------------|
| Complex i18n routing with broken links | Explicit file-based routing per locale |
| Nuxt Content + i18n conflicts | Simple content collections with manual locale handling |
| Prerender route guessing | All routes are explicit files |
| Hydration issues causing SEO problems | Zero JS by default, islands when needed |
| Complex middleware for locale validation | No middleware needed - routes are files |

---

## 2. Project Setup

### Initialize Astro Project

```bash
# Create new Astro project alongside existing
mkdir diktatai-astro
cd diktatai-astro

# Initialize with minimal template
npm create astro@latest . -- --template minimal --typescript strict

# Install required integrations
npm install @astrojs/tailwind @astrojs/vue @astrojs/sitemap
npm install tailwindcss daisyui @tailwindcss/typography
npm install astro-i18n-aut  # Lightweight i18n helper (optional)
```

### Configure `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diktat.ai',
  output: 'static',
  trailingSlash: 'never',
  build: {
    assets: '_nuxt-landing' // Keep same asset path for cache continuity
  },
  integrations: [
    tailwind(),
    vue(), // For gradual migration of complex interactive components
    sitemap({
      filter: (page) =>
        !page.includes('/imprint') &&
        !page.includes('/privacy') &&
        !page.includes('/terms'),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          nl: 'nl-NL',
          es: 'es-ES',
          fr: 'fr-FR',
          sv: 'sv-SE'
        }
      }
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue']
          }
        }
      }
    }
  }
});
```

---

## 3. Directory Structure

```
diktatai-astro/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── fonts/                    # Copy from current /fonts/
│   ├── images/                   # Copy from current /public/
│   ├── app/bg/                   # Copy backgrounds
│   ├── favicon.ico
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── components/
│   │   ├── NavBar.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── FAQSection.astro
│   │   ├── BenefitsSection.astro
│   │   ├── PricingCard.astro
│   │   └── vue/                  # Vue islands (interactive)
│   │       ├── ConsentBanner.vue
│   │       └── MobileMenu.vue
│   ├── content/
│   │   ├── blog/                 # German blog posts
│   │   │   └── *.md
│   │   ├── questions/
│   │   │   ├── de/              # German questions
│   │   │   └── en/              # English questions
│   │   └── pages/
│   │       ├── de/              # German content pages
│   │       └── en/              # English content pages
│   ├── i18n/
│   │   ├── translations.ts       # All translations
│   │   ├── routes.ts            # Route mappings
│   │   └── utils.ts             # i18n helpers
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro                    # DE homepage
│   │   ├── preise.astro                   # DE pricing
│   │   ├── so-funktionierts.astro         # DE how-it-works
│   │   ├── impressum.astro                # DE imprint
│   │   ├── datenschutz.astro              # DE privacy
│   │   ├── agb.astro                      # DE terms
│   │   ├── blog/
│   │   │   ├── index.astro                # Blog listing
│   │   │   └── [...slug].astro            # Blog detail
│   │   ├── fragen/
│   │   │   ├── index.astro                # DE questions index
│   │   │   └── [...slug].astro            # DE question detail
│   │   ├── seite/
│   │   │   └── [...slug].astro            # DE content pages
│   │   ├── en/
│   │   │   ├── index.astro                # EN homepage
│   │   │   ├── pricing.astro              # EN pricing
│   │   │   ├── how-it-works.astro         # EN how-it-works
│   │   │   ├── imprint.astro
│   │   │   ├── privacy.astro
│   │   │   ├── terms.astro
│   │   │   ├── questions/
│   │   │   │   ├── index.astro
│   │   │   │   └── [...slug].astro
│   │   │   └── page/
│   │   │       └── [...slug].astro
│   │   ├── nl/
│   │   │   ├── index.astro
│   │   │   ├── prijzen.astro
│   │   │   └── ...
│   │   ├── es/
│   │   │   ├── index.astro
│   │   │   ├── precios.astro
│   │   │   └── ...
│   │   ├── fr/
│   │   │   ├── index.astro
│   │   │   ├── tarifs.astro
│   │   │   └── ...
│   │   └── sv/
│   │       ├── index.astro
│   │       ├── priser.astro
│   │       └── ...
│   └── styles/
│       └── global.css
└── package.json
```

---

## 4. URL Structure Mapping

### Current URLs → Astro Files

This is the critical mapping to preserve SEO. Every current URL must map to an Astro file.

#### German (Default - No Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/` | `src/pages/index.astro` |
| `/preise` | `src/pages/preise.astro` |
| `/so-funktionierts` | `src/pages/so-funktionierts.astro` |
| `/impressum` | `src/pages/impressum.astro` |
| `/datenschutz` | `src/pages/datenschutz.astro` |
| `/agb` | `src/pages/agb.astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` |
| `/fragen` | `src/pages/fragen/index.astro` |
| `/fragen/[slug]` | `src/pages/fragen/[...slug].astro` |
| `/seite/[slug]` | `src/pages/seite/[...slug].astro` |

#### English (`/en/` Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/en` | `src/pages/en/index.astro` |
| `/en/pricing` | `src/pages/en/pricing.astro` |
| `/en/how-it-works` | `src/pages/en/how-it-works.astro` |
| `/en/imprint` | `src/pages/en/imprint.astro` |
| `/en/privacy` | `src/pages/en/privacy.astro` |
| `/en/terms` | `src/pages/en/terms.astro` |
| `/en/questions` | `src/pages/en/questions/index.astro` |
| `/en/questions/[slug]` | `src/pages/en/questions/[...slug].astro` |
| `/en/page/[slug]` | `src/pages/en/page/[...slug].astro` |

#### Dutch (`/nl/` Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/nl` | `src/pages/nl/index.astro` |
| `/nl/prijzen` | `src/pages/nl/prijzen.astro` |
| `/nl/hoe-werkt-het` | `src/pages/nl/hoe-werkt-het.astro` |

#### Spanish (`/es/` Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/es` | `src/pages/es/index.astro` |
| `/es/precios` | `src/pages/es/precios.astro` |
| `/es/como-funciona` | `src/pages/es/como-funciona.astro` |

#### French (`/fr/` Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/fr` | `src/pages/fr/index.astro` |
| `/fr/tarifs` | `src/pages/fr/tarifs.astro` |
| `/fr/comment-ca-marche` | `src/pages/fr/comment-ca-marche.astro` |

#### Swedish (`/sv/` Prefix)

| Current URL | Astro File |
|-------------|------------|
| `/sv` | `src/pages/sv/index.astro` |
| `/sv/priser` | `src/pages/sv/priser.astro` |
| `/sv/hur-det-fungerar` | `src/pages/sv/hur-det-fungerar.astro` |

#### General Pages (All Locales)

These pages exist in `/pages/general/` and need locale-specific files:

| Page | DE URL | EN URL | NL URL | ES URL | FR URL | SV URL |
|------|--------|--------|--------|--------|--------|--------|
| About | `/ueber-uns` | `/en/about` | `/nl/over-ons` | `/es/sobre-nosotros` | `/fr/a-propos` | `/sv/om-oss` |
| Contact | `/kontakt` | `/en/contact` | `/nl/contact` | `/es/contacto` | `/fr/contact` | `/sv/kontakt` |
| Lawyers | `/anwaelte` | `/en/lawyers` | `/nl/advocaten` | `/es/abogados` | `/fr/avocats` | `/sv/advokater` |
| Students | `/studenten` | `/en/students` | - | - | - | - |
| ... | ... | ... | ... | ... | ... | ... |

---

## 5. Content Migration

### Content Collections Setup

Create `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
    image: z.string().optional(),
  }),
});

const questionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['de', 'en']),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['de', 'en', 'nl', 'es', 'fr', 'sv']),
    category: z.string().optional(),
    image: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  questions: questionsCollection,
  pages: pagesCollection,
};
```

### Blog Migration

Copy files directly:

```bash
# From Nuxt project
cp -r content/blog/*.md diktatai-astro/src/content/blog/
```

Current blog posts:
- `willkommen.md`
- `erfolgsgeschichte-diktate.md`

### Questions Migration

```bash
# Copy questions preserving locale structure
cp -r content/questions/de/*.md diktatai-astro/src/content/questions/de/
cp -r content/questions/en/*.md diktatai-astro/src/content/questions/en/
```

### Pages Migration

```bash
# Copy page content
cp content/page/features.de.md diktatai-astro/src/content/pages/de/features.md
cp content/page/features.en.md diktatai-astro/src/content/pages/en/features.md
cp content/page/about.de.md diktatai-astro/src/content/pages/de/about.md
cp content/page/about.en.md diktatai-astro/src/content/pages/en/about.md
```

### Dynamic Route Example

`src/pages/fragen/[...slug].astro`:

```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const questions = await getCollection('questions', ({ data }) => data.locale === 'de');
  return questions.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout title={entry.data.title} description={entry.data.description} locale="de">
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>{entry.data.title}</h1>
    <Content />
  </article>
</Layout>
```

`src/pages/en/questions/[...slug].astro`:

```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../../layouts/Layout.astro';

export async function getStaticPaths() {
  const questions = await getCollection('questions', ({ data }) => data.locale === 'en');
  return questions.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout title={entry.data.title} description={entry.data.description} locale="en">
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>{entry.data.title}</h1>
    <Content />
  </article>
</Layout>
```

---

## 6. Component Migration

### Vue → Astro Component Conversion

#### Pattern: Simple Components

**Nuxt (Vue):**
```vue
<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center">{{ $t('title') }}</h2>
      <p class="text-xl text-center mt-4">{{ $t('subtitle') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "de": { "title": "Vorteile", "subtitle": "Warum Diktat AI?" },
  "en": { "title": "Benefits", "subtitle": "Why Diktat AI?" }
}
</i18n>
```

**Astro:**
```astro
---
import { getTranslation } from '../i18n/utils';

interface Props {
  locale: string;
}

const { locale } = Astro.props;
const t = getTranslation(locale);
---

<section class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center">{t('benefits.title')}</h2>
    <p class="text-xl text-center mt-4">{t('benefits.subtitle')}</p>
  </div>
</section>
```

#### Pattern: Interactive Components (Keep as Vue Islands)

For components with client-side interactivity (mobile menu, modals, consent banner):

```astro
---
import ConsentBanner from '../components/vue/ConsentBanner.vue';
---

<ConsentBanner client:idle />
```

### Component Migration Priority

| Priority | Component | Strategy |
|----------|-----------|----------|
| 1 | Layout, NavBar, Footer | Convert to Astro |
| 2 | HeroSection, BenefitsSection | Convert to Astro |
| 3 | FAQSection | Convert to Astro (with schema) |
| 4 | PricingCard, CTASection | Convert to Astro |
| 5 | MobileMenu | Keep as Vue (client:visible) |
| 6 | ConsentBanner | Keep as Vue (client:idle) |

### Example: Layout.astro

```astro
---
import NavBar from '../components/NavBar.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  locale?: string;
  image?: string;
}

const { title, description, locale = 'de', image } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

// Build alternate URLs for hreflang
const localeRoutes = {
  de: Astro.url.pathname.replace(/^\/(en|nl|es|fr|sv)\//, '/'),
  en: `/en${Astro.url.pathname.replace(/^\/(en|nl|es|fr|sv)\//, '/')}`,
  // Add more as needed
};
---

<!DOCTYPE html>
<html lang={locale} data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | Diktat AI</title>
    <meta name="description" content={description} />

    <!-- Canonical -->
    <link rel="canonical" href={canonicalURL} />

    <!-- Hreflang -->
    <link rel="alternate" hreflang="de" href={`https://diktat.ai${localeRoutes.de}`} />
    <link rel="alternate" hreflang="en" href={`https://diktat.ai${localeRoutes.en}`} />
    <link rel="alternate" hreflang="x-default" href={`https://diktat.ai${localeRoutes.de}`} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:type" content="website" />
    {image && <meta property="og:image" content={image} />}

    <!-- Fonts Preload -->
    <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/PlusJakartaSans-Bold.woff2" as="font" type="font/woff2" crossorigin />

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Preconnect -->
    <link rel="preconnect" href="https://ph.diktat.ai" />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  </head>
  <body class="min-h-screen bg-base-100 text-base-content">
    <NavBar locale={locale} />
    <main>
      <slot />
    </main>
    <Footer locale={locale} />

    <!-- PostHog (deferred) -->
    <script>
      // PostHog initialization - same as current
    </script>
  </body>
</html>
```

### Example: FAQSection.astro (with Schema)

```astro
---
import { getTranslation } from '../i18n/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  locale: string;
  faqs: FAQ[];
}

const { locale, faqs } = Astro.props;
const t = getTranslation(locale);

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
---

<section class="py-20 bg-base-200">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-4xl font-bold text-center mb-12">{t('faq.title')}</h2>

    <div class="space-y-4">
      {faqs.map((faq, index) => (
        <details class="collapse collapse-arrow bg-base-100 rounded-lg shadow">
          <summary class="collapse-title text-xl font-medium">
            {faq.question}
          </summary>
          <div class="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

<!-- FAQ Schema -->
<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
```

---

## 7. Styling Migration

### Copy Tailwind Config

Create `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ['light'],
  },
};
```

### Global Styles

Create `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/Inter-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/Inter-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/PlusJakartaSans-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/PlusJakartaSans-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/PlusJakartaSans-Bold.woff2') format('woff2');
  }
}

@layer utilities {
  .font-display {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
}

/* Glass morphism utilities */
.glass {
  @apply backdrop-blur-sm bg-white/10 border border-white/20;
}

/* Gradient text */
.gradient-text {
  @apply bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent;
}
```

### Copy Static Assets

```bash
# Fonts
cp -r fonts/ diktatai-astro/public/fonts/

# Images and backgrounds
cp -r public/images/ diktatai-astro/public/images/
cp -r public/app/ diktatai-astro/public/app/
cp public/herobg.webp diktatai-astro/public/
cp public/diktatai-transkribieren.webp diktatai-astro/public/

# Favicons
cp public/favicon* diktatai-astro/public/
cp public/apple-touch-icon.png diktatai-astro/public/
cp public/android-chrome-*.png diktatai-astro/public/
cp public/site.webmanifest diktatai-astro/public/

# SEO files
cp public/robots.txt diktatai-astro/public/
cp public/llms.txt diktatai-astro/public/
```

---

## 8. i18n Implementation

### Translation File

Create `src/i18n/translations.ts`:

```typescript
export const translations = {
  de: {
    nav: {
      home: 'Startseite',
      pricing: 'Preise',
      howItWorks: 'So funktioniert\'s',
      blog: 'Blog',
      questions: 'Fragen',
      contact: 'Kontakt',
    },
    hero: {
      title: 'KI-gestützte Transkription',
      subtitle: 'Wandeln Sie Sprache in Text um – schnell, präzise und DSGVO-konform.',
      cta: 'Kostenlos testen',
    },
    benefits: {
      title: 'Vorteile',
      subtitle: 'Warum Diktat AI?',
    },
    faq: {
      title: 'Häufige Fragen',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
    },
    // ... more translations
  },
  en: {
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      howItWorks: 'How It Works',
      blog: 'Blog',
      questions: 'Questions',
      contact: 'Contact',
    },
    hero: {
      title: 'AI-Powered Transcription',
      subtitle: 'Convert speech to text – fast, accurate, and GDPR-compliant.',
      cta: 'Try Free',
    },
    benefits: {
      title: 'Benefits',
      subtitle: 'Why Diktat AI?',
    },
    faq: {
      title: 'FAQ',
    },
    footer: {
      imprint: 'Imprint',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    // ... more translations
  },
  nl: {
    // Dutch translations...
  },
  es: {
    // Spanish translations...
  },
  fr: {
    // French translations...
  },
  sv: {
    // Swedish translations...
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = string;
```

### Route Mappings

Create `src/i18n/routes.ts`:

```typescript
export const routes = {
  index: {
    de: '/',
    en: '/en',
    nl: '/nl',
    es: '/es',
    fr: '/fr',
    sv: '/sv',
  },
  pricing: {
    de: '/preise',
    en: '/en/pricing',
    nl: '/nl/prijzen',
    es: '/es/precios',
    fr: '/fr/tarifs',
    sv: '/sv/priser',
  },
  howItWorks: {
    de: '/so-funktionierts',
    en: '/en/how-it-works',
    nl: '/nl/hoe-werkt-het',
    es: '/es/como-funciona',
    fr: '/fr/comment-ca-marche',
    sv: '/sv/hur-det-fungerar',
  },
  imprint: {
    de: '/impressum',
    en: '/en/imprint',
    nl: '/nl/impressum',
    es: '/es/impressum',
    fr: '/fr/mentions-legales',
    sv: '/sv/impressum',
  },
  privacy: {
    de: '/datenschutz',
    en: '/en/privacy',
    nl: '/nl/privacy',
    es: '/es/privacidad',
    fr: '/fr/confidentialite',
    sv: '/sv/integritet',
  },
  terms: {
    de: '/agb',
    en: '/en/terms',
    nl: '/nl/voorwaarden',
    es: '/es/terminos',
    fr: '/fr/conditions',
    sv: '/sv/villkor',
  },
  questions: {
    de: '/fragen',
    en: '/en/questions',
    nl: false, // Not available
    es: false,
    fr: false,
    sv: false,
  },
  blog: {
    de: '/blog',
    en: false, // German only
    nl: false,
    es: false,
    fr: false,
    sv: false,
  },
  // General pages
  lawyers: {
    de: '/anwaelte',
    en: '/en/lawyers',
    nl: '/nl/advocaten',
    es: '/es/abogados',
    fr: '/fr/avocats',
    sv: '/sv/advokater',
  },
  students: {
    de: '/studenten',
    en: '/en/students',
    nl: false,
    es: false,
    fr: false,
    sv: false,
  },
  // ... add all routes from nuxt.config.ts i18n customRoutes
} as const;

export type RouteKey = keyof typeof routes;
```

### i18n Utilities

Create `src/i18n/utils.ts`:

```typescript
import { translations, type Locale } from './translations';
import { routes, type RouteKey } from './routes';

export function getTranslation(locale: Locale) {
  const t = translations[locale];

  return function(key: string): string {
    const keys = key.split('.');
    let value: any = t;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}

export function getLocalePath(routeKey: RouteKey, locale: Locale): string | false {
  return routes[routeKey]?.[locale] ?? false;
}

export function getAlternateUrls(routeKey: RouteKey): Record<Locale, string | false> {
  return routes[routeKey];
}

export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/nl')) return 'nl';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/sv')) return 'sv';
  return 'de';
}

export const locales: Locale[] = ['de', 'en', 'nl', 'es', 'fr', 'sv'];
export const defaultLocale: Locale = 'de';
```

### Language Switcher Component

```astro
---
import { routes, type RouteKey } from '../i18n/routes';
import { locales, type Locale } from '../i18n/utils';

interface Props {
  currentLocale: Locale;
  routeKey: RouteKey;
}

const { currentLocale, routeKey } = Astro.props;

const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  nl: 'Nederlands',
  es: 'Español',
  fr: 'Français',
  sv: 'Svenska',
};

const availableLocales = locales.filter(
  (locale) => routes[routeKey]?.[locale] !== false
);
---

<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-ghost gap-2">
    <span class="uppercase">{currentLocale}</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    {availableLocales.map((locale) => (
      <li>
        <a
          href={routes[routeKey][locale] as string}
          class:list={[{ 'active': locale === currentLocale }]}
        >
          {localeNames[locale]}
        </a>
      </li>
    ))}
  </ul>
</div>
```

---

## 9. Analytics & Tracking

### PostHog Integration

Create `src/scripts/posthog.ts`:

```typescript
export function initPostHog() {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.innerHTML = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_rEnn5wxbM2FCvmYNEuRu2w8Onbs5WII8VfKylyZcSBs', {
      api_host: 'https://ph.diktat.ai',
      capture_pageview: true,
      capture_pageleave: true,
    });
  `;
  document.head.appendChild(script);
}
```

### Google Tag Manager (Lazy Load)

Create `src/scripts/gtm.ts`:

```typescript
export function initGTM() {
  if (typeof window === 'undefined') return;

  let loaded = false;

  function loadGTM() {
    if (loaded) return;
    loaded = true;

    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `;
    document.head.appendChild(script);
  }

  // Load after 3 seconds or on user interaction
  const timeout = setTimeout(loadGTM, 3000);

  ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
    document.addEventListener(event, () => {
      clearTimeout(timeout);
      loadGTM();
    }, { once: true, passive: true });
  });
}
```

### Add to Layout

```astro
<!-- In Layout.astro, before closing </body> -->
<script>
  import { initPostHog } from '../scripts/posthog';
  import { initGTM } from '../scripts/gtm';

  // Initialize on page load
  initPostHog();
  initGTM();
</script>
```

---

## 10. SEO Migration

### Structured Data

Add to `Layout.astro` head:

```astro
---
// WebApplication Schema
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Diktat AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

// Organization Schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Diktat AI",
  "url": "https://diktat.ai",
  "logo": "https://diktat.ai/logo-dai.svg"
};
---

<script type="application/ld+json" set:html={JSON.stringify(webAppSchema)} />
<script type="application/ld+json" set:html={JSON.stringify(orgSchema)} />
```

### Hreflang Tags

Already included in Layout.astro example above. Key pattern:

```astro
---
import { getAlternateUrls } from '../i18n/utils';

const alternates = getAlternateUrls('pricing'); // or dynamic route key
---

{Object.entries(alternates).map(([locale, path]) => (
  path && <link rel="alternate" hreflang={locale} href={`https://diktat.ai${path}`} />
))}
<link rel="alternate" hreflang="x-default" href={`https://diktat.ai${alternates.de}`} />
```

### Redirects

Create `public/_redirects` (for Netlify) or configure in hosting platform:

```
# Legacy redirects from nuxt config
/funktionen /seite/features 301
/en/features /en/page/features 301

# Locale fallbacks
/en/blog /blog 302
/nl/fragen /fragen 302
/es/fragen /fragen 302

# Add all redirects from config/redirects.ts
```

---

## 11. Build & Deployment

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

### Build Output

Astro generates static files in `dist/`:

```
dist/
├── index.html                    # /
├── preise/index.html            # /preise
├── so-funktionierts/index.html  # /so-funktionierts
├── blog/
│   ├── index.html
│   └── willkommen/index.html
├── fragen/
│   ├── index.html
│   └── [each-question]/index.html
├── en/
│   ├── index.html
│   ├── pricing/index.html
│   └── questions/
│       ├── index.html
│       └── [each-question]/index.html
└── ...
```

### Deployment

Same hosting (Vercel, Netlify, Cloudflare Pages) works:

```bash
# Build
npm run build

# Preview locally
npm run preview

# Deploy (example: Vercel)
vercel --prod
```

---

## 12. Migration Checklist

### Phase 1: Setup (Day 1)
- [ ] Initialize Astro project
- [ ] Configure Tailwind + DaisyUI
- [ ] Copy static assets (fonts, images, favicons)
- [ ] Set up global styles
- [ ] Create base Layout.astro

### Phase 2: Core Pages (Day 2-3)
- [ ] Migrate homepage (all 6 locales)
- [ ] Migrate pricing page (all 6 locales)
- [ ] Migrate how-it-works (all 6 locales)
- [ ] Migrate legal pages (imprint, privacy, terms)
- [ ] Create NavBar.astro
- [ ] Create Footer.astro

### Phase 3: Components (Day 4-5)
- [ ] Migrate HeroSection
- [ ] Migrate BenefitsSection
- [ ] Migrate FAQSection (with schema)
- [ ] Migrate CTASection
- [ ] Migrate PricingCard
- [ ] Set up Vue islands for interactive components

### Phase 4: Content (Day 6-7)
- [ ] Set up content collections
- [ ] Migrate blog posts
- [ ] Migrate question articles (DE + EN)
- [ ] Migrate content pages
- [ ] Create dynamic routes for content

### Phase 5: i18n (Day 8)
- [ ] Extract all translations from Vue i18n blocks
- [ ] Create translation files
- [ ] Set up route mappings
- [ ] Implement language switcher
- [ ] Verify all hreflang tags

### Phase 6: General Pages (Day 9-10)
- [ ] Migrate /anwaelte (lawyers) - all locales
- [ ] Migrate /studenten (students)
- [ ] Migrate /kontakt (contact)
- [ ] Migrate remaining general pages

### Phase 7: SEO & Analytics (Day 11)
- [ ] Set up PostHog
- [ ] Set up GTM (lazy load)
- [ ] Add structured data
- [ ] Configure sitemap
- [ ] Set up redirects
- [ ] Test all canonical URLs

### Phase 8: Testing (Day 12-13)
- [ ] Verify all URLs work (no 404s)
- [ ] Test language switching
- [ ] Validate structured data (schema.org validator)
- [ ] Run Lighthouse audits
- [ ] Test mobile responsiveness
- [ ] Cross-browser testing

### Phase 9: Deployment (Day 14)
- [ ] Deploy to staging
- [ ] Final URL verification
- [ ] DNS/hosting cutover
- [ ] Monitor for 404s in Search Console
- [ ] Submit updated sitemap

---

## Quick Reference: File Mapping

| Nuxt File | Astro File |
|-----------|------------|
| `pages/index.vue` | `src/pages/index.astro` + `src/pages/[locale]/index.astro` |
| `pages/pricing.vue` | `src/pages/preise.astro` + `src/pages/en/pricing.astro` + ... |
| `pages/blog/[...slug].vue` | `src/pages/blog/[...slug].astro` |
| `pages/questions/[slug].vue` | `src/pages/fragen/[...slug].astro` + `src/pages/en/questions/[...slug].astro` |
| `components/HeroSection.vue` | `src/components/HeroSection.astro` |
| `layouts/default.vue` | `src/layouts/Layout.astro` |
| `content/blog/*.md` | `src/content/blog/*.md` |
| `content/questions/de/*.md` | `src/content/questions/de/*.md` |
| `i18n/locales/*.json` | `src/i18n/translations.ts` |
| `nuxt.config.ts` (i18n routes) | `src/i18n/routes.ts` |
| `composables/useSeoCanonical.ts` | Built into Layout.astro |

---

## Notes

1. **Vue Components**: Keep complex interactive components (mobile menu, consent banner) as Vue islands using `client:visible` or `client:idle` directives.

2. **Content Components**: MDC components (`<Hero>`, `<Cta>`, etc.) need to be rewritten as Astro components or handled differently in markdown.

3. **No Runtime i18n**: Unlike Nuxt i18n, Astro generates static pages per locale. There's no runtime locale detection or switching.

4. **Explicit Routes**: Every URL is an explicit file. No magic routing means no broken links.

5. **Performance**: Astro ships zero JS by default. Your site will be faster out of the box.
