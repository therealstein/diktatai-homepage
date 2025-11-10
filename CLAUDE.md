# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Content Structure Overview

This is a Nuxt 3-based marketing homepage for Diktat AI with multilingual content management. The site uses `@nuxt/content` for managing blog posts, pages, and FAQ-style questions.

## Content Collections

Content is organized into three main collections (defined in `content.config.ts`):

### 1. Blog (`content/blog/*.md`)

Blog posts for company updates, guides, and success stories.

**Frontmatter Schema:**
```yaml
---
title: "Blog Post Title"
description: "Post description for SEO and previews"
date: "YYYY-MM-DD"
author: "Author Name" (optional)
image: "/images/blog/image-name.webp" (optional)
---
```

**Current Posts:**
- `willkommen.md` - Welcome post introducing the blog
- `erfolgsgeschichte-diktate.md` - Success story/case study

**Content Guidelines:**
- Write in German (primary language)
- Use conversational, helpful tone
- Focus on practical value and use cases
- Images stored in `/public/images/blog/`
- Date format: ISO format (YYYY-MM-DD)

**Routing:**
- Index: `/blog`
- Posts: `/blog/[slug]`
- Template: `pages/blog/[...slug].vue`

### 2. Pages (`content/page/*.md`)

General content pages with locale-specific versions.

**Frontmatter Schema:**
```yaml
---
title: "Page Title"
description: "Page description"
locale: "de" or "en"
category: "product" or "company" (optional)
image: "/images/page-hero.jpg" (optional)
subtitle: "Optional subtitle" (optional)
---
```

**Naming Convention:**
- Files use pattern: `{slug}.{locale}.md`
- Examples: `features.de.md`, `features.en.md`, `about.de.md`, `about.en.md`

**Current Pages:**
- `features.de.md` / `features.en.md` - Product features
- `about.de.md` / `about.en.md` - About/company information

**Content Guidelines:**
- Always create matching German (`de`) and English (`en`) versions
- Keep parallel versions in sync for content parity
- Can include code examples, tables, and MDC components

**Routing:**
- Dynamic: `/page/[slug]`
- Template: `pages/page/[...slug].vue`
- Actual routes configured via i18n custom routes in `nuxt.config.ts`

### 3. Questions (`content/questions/*.md`)

FAQ-style articles answering specific user questions. SEO-optimized for long-tail search queries.

**Frontmatter Schema:**
```yaml
---
title: "Question as a headline"
description: "Answer summary for SEO"
locale: "de"
---
```

**Naming Convention:**
- Use descriptive slugs based on the question
- Example: `was-ist-ein-sprachdiktat-mehr-als-nur-gesprochene-worte.md`
- Currently German-only (`locale: de`)

**Content Guidelines:**
- Question-focused titles (e.g., "Was ist ein Sprachdiktat?")
- Long-form, comprehensive answers (typically 1000+ words)
- Include relevant subsections with `<h2>` headings
- Use HTML markup directly (articles appear to be imported/converted from WordPress)
- Structure: Problem → Explanation → Solution with Diktat AI
- Include call-to-action mentioning Diktat AI benefits
- Target common user questions and search queries

**Current Question Topics:**
- What is voice dictation
- How to use dictation on Mac/PC
- Google Docs voice-to-text
- Microsoft dictation troubleshooting
- ChatGPT audio transcription
- Excel voice input
- WhatsApp dictation issues
- Keyboard shortcuts for dictation
- Samsung text-to-speech

**Routing:**
- Index: `/fragen` (de), `/en/questions` (en)
- Detail: `/fragen/[slug]` (de), `/en/questions/[slug]` (en)
- Templates: `pages/questions/index.vue`, `pages/questions/[slug].vue`
- **Prerendered**: Questions pages are statically generated at build time

## MDC Components for Content

Custom content components available in Markdown files (located in `components/content/`):

- `<Hero>` - Hero sections with background images and CTAs
- `<Cta>` - Call-to-action sections
- `<CardSection>` - Card-based layouts
- `<SplitSection>` - Two-column layouts
- `<FaqList>` - FAQ components
- `<Fliesstext>` - Flowing text sections
- `<List>` - List components

Each component has a `.vue` implementation and `.md` documentation file.

## Multilingual Content Strategy

**Supported Locales:**
- `de` (German) - Primary/default locale
- `en` (English) - Secondary locale
- `es` (Spanish) - Translation files exist
- `nl` (Dutch) - Translation files exist

**i18n Configuration:**
- Strategy: `prefix_except_default` (German has no prefix, others use `/en/`, etc.)
- Translation files: `i18n/locales/{de,en,es,nl}.json`
- Custom route translations defined in `nuxt.config.ts`

**Content Localization:**
- Blog: Primarily German
- Pages: German + English versions (`.de.md`, `.en.md`)
- Questions: Currently German only

## SEO Guidelines

### Content Optimization

**Heading Structure:**
- One `<h1>` per page (main title)
- Use logical heading hierarchy (h1 → h2 → h3, never skip levels)
- Include keywords naturally in headings
- Make headings descriptive and user-friendly

**Keyword Strategy:**

*Primary Keywords:*
- AI transcription, Speech to text, Audio transcription, Transkription (DE)

*Long-tail Keywords:*
- AI transcription software for businesses
- GDPR-compliant transcription service
- German audio transcription

*Keyword Placement (Priority Order):*
1. Page title (H1)
2. First paragraph
3. Subheadings (H2, H3)
4. Alt text
5. URL slug
6. Meta description

**Content Requirements:**
- **Minimum length**: 300+ words for key pages
- **Readability**: Write for humans first, SEO second
- **Unique content**: Avoid duplicate content
- **Internal linking**: Link to related pages (3-5 links per page)
- **External links**: Link to authoritative sources when relevant
- **CTAs**: Clear call-to-action on every page

### Meta Tags & Titles

**Title Tags:**
- Length: 50-60 characters (optimal)
- Format: `Primary Keyword - Brand Name`
- Include value proposition
- Unique per page

**Meta Descriptions:**
- Length: 150-160 characters
- Include primary keyword + CTA
- Unique per page
- Compelling and action-oriented

**Implementation in Pages:**
```typescript
useHead({
  title: 'AI Transcription Software - Diktat AI',
  meta: [
    { name: 'description', content: 'Fast AI-powered transcription. Convert speech to text in minutes. GDPR-compliant, EU servers. Start free!' }
  ]
})
```

**Open Graph Tags (Social Media):**
```typescript
useHead({
  meta: [
    { property: 'og:title', content: 'Diktat AI - AI Transcription' },
    { property: 'og:description', content: '...' },
    { property: 'og:image', content: 'https://diktat.ai/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://diktat.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Diktat AI' },
    { name: 'twitter:description', content: '...' },
    { name: 'twitter:image', content: 'https://diktat.ai/twitter-card.jpg' }
  ]
})
```

### Image Optimization

**Format Priority:**
1. WebP (modern browsers) - 25-35% smaller than JPEG
2. AVIF (cutting-edge) - even smaller
3. JPEG (fallback)
4. PNG (for transparency, icons)

**Image Checklist:**
- Compress images (TinyPNG, Squoosh)
- Use appropriate dimensions
- Implement lazy loading
- Add descriptive `alt` text (NOT generic like "image")
- Use responsive images (`srcset`)

**Alt Text Examples:**
```html
<!-- ❌ Bad -->
<img src="img1.jpg" alt="image" />

<!-- ✅ Good -->
<img src="meeting-transcription.webp"
     alt="Professional using Diktat AI to transcribe a business meeting on laptop" />
```

**Implementation:**
```vue
<img src="/herobg.webp"
     alt="Diktat AI transcription dashboard interface"
     loading="lazy"
     width="1200"
     height="630" />
```

### Structured Data (Schema.org)

**Implemented:**
- FAQ Schema in `components/FAQSection.vue` (dynamically generated, supports EN/DE)

**Recommended Schema Types:**

1. **Organization Schema** (Add to main layout):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Diktat AI",
  "url": "https://diktat.ai",
  "logo": "https://diktat.ai/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@diktat.ai"
  }
}
```

2. **WebApplication Schema** (Already in `app.vue`)

3. **BreadcrumbList** (for navigation)

### URL Structure

**Good URLs:**
```
✅ https://diktat.ai/how-it-works
✅ https://diktat.ai/pricing
✅ https://diktat.ai/blog/ai-transcription-benefits
✅ https://diktat.ai/de/preise (localized)
```

**Bad URLs:**
```
❌ https://diktat.ai/page?id=123
❌ https://diktat.ai/hOw-It_WORKS
```

**Rules:**
- Use hyphens (not underscores)
- Lowercase only
- Include keywords
- Keep short (3-5 words max)
- Avoid parameters when possible
- Use localized slugs for i18n

### Internationalization SEO

**Hreflang Tags (Critical!):**
```typescript
useHead({
  link: [
    { rel: 'alternate', hreflang: 'en', href: 'https://diktat.ai/en/pricing' },
    { rel: 'alternate', hreflang: 'de', href: 'https://diktat.ai/de/preise' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://diktat.ai/en/pricing' }
  ]
})
```

**Canonical Tags:**
```typescript
useHead({
  link: [
    { rel: 'canonical', href: 'https://diktat.ai/pricing' }
  ]
})
```

Use the `useSeoCanonical()` composable for canonical URLs.

### Technical SEO

**Sitemap:**
- Automatically generated via `@nuxtjs/sitemap` module
- Configuration in `nuxt.config.ts`
- Excludes: `/imprint`, `/privacy`, `/terms`

**Robots.txt:**
- Location: `/public/robots.txt`
- Allows AI crawlers (GPTBot, ChatGPT-User, CCBot, anthropic-ai)

**llms.txt:**
- Location: `/public/llms.txt`
- Helps AI crawlers understand site structure
- Keep updated with new features

**Prerendering:**
- Questions pages (`/fragen/**`) are prerendered
- Configured in `nuxt.config.ts` under `nitro.prerender.routes`
- Crawl links enabled for automatic route discovery

### Per-Page SEO Checklist

**Content:**
- [ ] Unique, descriptive `<title>` (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] One `<h1>` tag with primary keyword
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] 300+ words of quality content
- [ ] 3-5 internal links to relevant pages
- [ ] Primary keyword in first paragraph
- [ ] Natural keyword distribution (avoid stuffing)

**Technical:**
- [ ] Canonical URL set
- [ ] Mobile-responsive design
- [ ] Fast loading time (<3s)
- [ ] No broken links or 404 errors
- [ ] HTTPS enabled
- [ ] Structured data where appropriate
- [ ] Hreflang tags for multi-language

**Images:**
- [ ] WebP format (with fallbacks)
- [ ] Descriptive file names
- [ ] Alt text on all images
- [ ] Appropriate dimensions
- [ ] Lazy loading enabled
- [ ] Compressed/optimized

## Adding New Content

### New Blog Post:
1. Create `content/blog/{slug}.md`
2. Add frontmatter with title, description, date, optional image
3. Write content in German (primary audience)
4. Add image to `/public/images/blog/` if needed
5. Ensure 300+ words minimum
6. Include internal links to relevant pages
7. Add clear CTA

### New Page:
1. Create locale versions: `content/page/{slug}.de.md` and `content/page/{slug}.en.md`
2. Add frontmatter with title, description, locale
3. Ensure content parity between translations
4. Add route translation to `nuxt.config.ts` i18n custom routes if needed
5. Set up hreflang tags
6. Add canonical URL
7. Include structured data if applicable

### New Question Article:
1. Create `content/questions/{descriptive-slug}.md`
2. Use question-based title (e.g., "Wie funktioniert...?")
3. Set `locale: de` in frontmatter
4. Write comprehensive answer (1000+ words minimum)
5. Use logical heading hierarchy (h1 → h2 → h3)
6. Include Diktat AI benefits and CTA
7. Add 3-5 internal links to related content
8. Optimize for long-tail keywords
9. No need to update prerender routes - crawling is enabled

## SEO Testing & Monitoring

**Validation Tools:**
- Schema Markup: https://validator.schema.org/
- Rich Results: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

**Monitoring:**
- Google Search Console
- Google Analytics
- Bing Webmaster Tools

**Full SEO Guidelines:** See `SEO_GUIDELINES.md` for complete details on performance, Core Web Vitals, and advanced optimization techniques.
