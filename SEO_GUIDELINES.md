# SEO Guidelines for Diktat AI

This document outlines on-page SEO best practices implemented and recommended for Diktat AI.

## 📋 Table of Contents

1. [Structured Data (Schema.org)](#structured-data-schemaorg)
2. [Meta Tags & Titles](#meta-tags--titles)
3. [Content Optimization](#content-optimization)
4. [Image Optimization](#image-optimization)
5. [Technical SEO](#technical-seo)
6. [URL Structure](#url-structure)
7. [AI & LLM Optimization](#ai--llm-optimization)
8. [Internationalization (i18n)](#internationalization-i18n)
9. [Performance](#performance)
10. [Checklist](#checklist)

---

## Structured Data (Schema.org)

### ✅ Implemented

**FAQ Schema** (`components/FAQSection.vue`)

- Type: `FAQPage` with JSON-LD
- Dynamically generated from i18n translations
- Automatically supports EN/DE languages
- Enables rich snippets in Google Search

```vue
useHead({ script: [{ type: 'application/ld+json', children:
JSON.stringify(faqSchema.value) }] })
```

### 🎯 Recommended Schema Types

**Organization Schema** (Add to main layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Diktat AI",
  "url": "https://diktat.ai",
  "logo": "https://diktat.ai/logo.svg",
  "sameAs": [
    "https://twitter.com/diktatai",
    "https://linkedin.com/company/diktatai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@diktat.ai"
  }
}
```

**WebApplication Schema** (Add to homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Diktat AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
}
```

**BreadcrumbList** (Add to relevant pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

---

## Meta Tags & Titles

### Best Practices

**Title Tags**

- Length: 50-60 characters (optimal)
- Format: `Primary Keyword - Brand Name`
- Include value proposition
- Unique per page

```vue
useHead({ title: 'AI Transcription Software - Diktat AI', })
```

**Meta Descriptions**

- Length: 150-160 characters
- Include primary keyword + CTA
- Unique per page
- Compelling and action-oriented

```vue
useHead({ meta: [ { name: 'description', content: 'Fast AI-powered
transcription. Convert speech to text in minutes. GDPR-compliant, EU servers.
Start free!' } ] })
```

**Open Graph Tags** (Social Media)

```vue
useHead({ meta: [ { property: 'og:title', content: 'Diktat AI - AI
Transcription' }, { property: 'og:description', content: '...' }, { property:
'og:image', content: 'https://diktat.ai/og-image.jpg' }, { property: 'og:type',
content: 'website' }, { property: 'og:url', content: 'https://diktat.ai' }, {
name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title',
content: 'Diktat AI' }, { name: 'twitter:description', content: '...' }, { name:
'twitter:image', content: 'https://diktat.ai/twitter-card.jpg' } ] })
```

---

## Content Optimization

### Heading Structure

```html
<!-- ✅ Good: Logical hierarchy -->
<h1>Main Page Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>
<h2>Section 2</h2>

<!-- ❌ Bad: Skipping levels -->
<h1>Main Title</h1>
<h3>Subsection</h3>
<!-- Skipped h2 -->
```

**Rules:**

- One `<h1>` per page (main title)
- Use heading hierarchy (`h1` → `h2` → `h3`)
- Include keywords naturally
- Make descriptive and user-friendly

### Keyword Strategy

**Primary Keywords:**

- AI transcription
- Speech to text
- Audio transcription
- Transkription (DE)

**Long-tail Keywords:**

- AI transcription software for businesses
- GDPR-compliant transcription service
- German audio transcription

**Keyword Placement:**

1. Page title (H1)
2. First paragraph
3. Subheadings (H2, H3)
4. Alt text
5. URL slug
6. Meta description

### Content Guidelines

- **Minimum length**: 300+ words for key pages
- **Readability**: Write for humans first, SEO second
- **Unique content**: Avoid duplicate content
- **Internal linking**: Link to related pages (3-5 links per page)
- **External links**: Link to authoritative sources when relevant
- **CTAs**: Clear call-to-action on every page

---

## Image Optimization

### ✅ Current Implementation

- WebP format used (`/public/app/*.webp`, logos, etc.)
- Descriptive filenames
- Multiple resolutions (192x192, 512x512 for icons)

### Best Practices

**Format Priority:**

1. WebP (modern browsers) - 25-35% smaller than JPEG
2. AVIF (cutting-edge) - even smaller
3. JPEG (fallback)
4. PNG (for transparency, icons)

**Optimization Checklist:**

- [ ] Compress images (TinyPNG, Squoosh)
- [ ] Use appropriate dimensions (don't serve 4K images for thumbnails)
- [ ] Implement lazy loading
- [ ] Add descriptive `alt` text
- [ ] Use responsive images (`srcset`)

**Alt Text Examples:**

```html
<!-- ❌ Bad -->
<img src="img1.jpg" alt="image" />

<!-- ✅ Good -->
<img
  src="meeting-transcription.webp"
  alt="Professional using Diktat AI to transcribe a business meeting on laptop"
/>
```

**Implementation:**

```vue
<img
  src="/herobg.webp"
  alt="Diktat AI transcription dashboard interface"
  loading="lazy"
  width="1200"
  height="630"
/>
```

---

## Technical SEO

### Sitemap

**Location:** `/public/sitemap.xml` or generate dynamically

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://diktat.ai/</loc>
    <lastmod>2025-01-10</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://diktat.ai/pricing</loc>
    <lastmod>2025-01-10</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Robots.txt

**Current:** `/public/robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /app/
Disallow: /admin/

Sitemap: https://diktat.ai/sitemap.xml
```

### Canonical Tags

Prevent duplicate content:

```vue
useHead({ link: [ { rel: 'canonical', href: 'https://diktat.ai/pricing' } ] })
```

### HTTPS & Security

- ✅ Use HTTPS (ranking factor)
- ✅ Valid SSL certificate
- ✅ HSTS headers
- ✅ Secure cookies

---

## URL Structure

### Best Practices

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
❌ https://diktat.ai/products/category1/item456/details
❌ https://diktat.ai/hOw-It_WORKS
```

**Rules:**

- Use hyphens (not underscores)
- Lowercase only
- Include keywords
- Keep short (3-5 words max)
- Avoid parameters when possible
- Use localized slugs for i18n

---

## AI & LLM Optimization

### llms.txt

**Location:** `/public/llms.txt` ✅

This file helps AI crawlers (Claude, GPT, Perplexity) understand your site structure.

**Best Practices:**

- Keep updated with new features
- Include clear descriptions
- Highlight USPs (GDPR, EU servers, accuracy)
- List use cases and target audiences
- Add integration methods

**Example Structure:**

```markdown
# Diktat AI - AI-Powered Transcription Service

## Overview

Fast, accurate, GDPR-compliant transcription service...

## Key Features

- Speech-to-text conversion
- Multi-language support (DE, EN, FR, ES)
- Speaker diarization
- EU data storage

## Target Users

- Journalists & content creators
- Lawyers & legal professionals
- Students & researchers
- Business professionals

## API

Available at https://diktat.ai/docs/api
```

### robots.txt for AI Crawlers

Some AI services respect additional directives:

```txt
# Allow AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /
```

---

## Internationalization (i18n)

### ✅ Current Implementation

- Nuxt i18n module
- DE/EN languages
- Translation files: `/i18n/locales/`

### SEO Best Practices

**Hreflang Tags** (Critical!)

```vue
useHead({ link: [ { rel: 'alternate', hreflang: 'en', href:
'https://diktat.ai/en/pricing' }, { rel: 'alternate', hreflang: 'de', href:
'https://diktat.ai/de/preise' }, { rel: 'alternate', hreflang: 'x-default',
href: 'https://diktat.ai/en/pricing' } ] })
```

**URL Structure:**

```
✅ https://diktat.ai/en/pricing (subdirectory - recommended)
✅ https://en.diktat.ai/pricing (subdomain)
❌ https://diktat.ai/pricing?lang=en (parameters - avoid)
```

**Localized Content:**

- Translate ALL content (not just UI)
- Adapt to local culture and terminology
- Use local keywords
- Get native speakers to review

---

## Performance

### Core Web Vitals (Ranking Factor)

**LCP (Largest Contentful Paint)** - Target: <2.5s

- Optimize hero images
- Use CDN
- Preload critical resources

**FID (First Input Delay)** - Target: <100ms

- Minimize JavaScript
- Use code splitting

**CLS (Cumulative Layout Shift)** - Target: <0.1

- Set image dimensions
- Reserve space for dynamic content

### Implementation

```vue
<!-- Preload critical resources -->
useHead({ link: [ { rel: 'preload', as: 'font', href: '/fonts/main.woff2',
crossorigin: '' }, { rel: 'preload', as: 'image', href: '/herobg.webp' } ] })
```

### Nuxt-Specific Optimizations

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // Enable compression
  nitro: {
    compressPublicAssets: true,
  },

  // Optimize images
  image: {
    formats: ['webp', 'avif'],
    quality: 80,
  },

  // Prefetch links
  experimental: {
    componentIslands: true,
  },
});
```

---

## Checklist

### Per-Page SEO Checklist

#### Content

- [ ] Unique, descriptive `<title>` (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] One `<h1>` tag with primary keyword
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] 300+ words of quality content
- [ ] 3-5 internal links to relevant pages
- [ ] Primary keyword in first paragraph
- [ ] Natural keyword distribution (avoid stuffing)

#### Technical

- [ ] Canonical URL set
- [ ] Mobile-responsive design
- [ ] Fast loading time (<3s)
- [ ] No broken links or 404 errors
- [ ] HTTPS enabled
- [ ] Structured data where appropriate
- [ ] Hreflang tags for multi-language

#### Images

- [ ] WebP format (with fallbacks)
- [ ] Descriptive file names
- [ ] Alt text on all images
- [ ] Appropriate dimensions
- [ ] Lazy loading enabled
- [ ] Compressed/optimized

#### Accessibility (also helps SEO)

- [ ] Semantic HTML
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast
- [ ] ARIA labels where needed
- [ ] Form labels present

---

## Tools & Testing

### Validation Tools

- **Schema Markup**: https://validator.schema.org/
- **Rich Results**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Screaming Frog**: Desktop tool for technical SEO audits

### Monitoring

- **Google Search Console**: Track rankings, clicks, impressions
- **Google Analytics**: Traffic analysis
- **Bing Webmaster Tools**: Bing search data

### Browser Extensions

- **SEO Minion**: Quick SEO checks
- **META SEO Inspector**: View all meta tags
- **Lighthouse**: Performance & SEO audit (Chrome DevTools)

---

## Implementation Priority

### High Priority (Do First)

1. ✅ FAQ Schema (DONE)
2. Title tags & meta descriptions (all pages)
3. Image alt text
4. Sitemap.xml
5. Hreflang tags (for i18n)
6. Core Web Vitals optimization

### Medium Priority

1. Organization schema
2. Breadcrumb schema
3. Internal linking strategy
4. Image optimization (WebP conversion)
5. Content expansion (300+ words per page)

### Low Priority (Nice to Have)

1. Article schema (blog posts)
2. Video schema (if applicable)
3. Review/Rating schema
4. Advanced tracking (heatmaps, session recording)

---

## Notes

- **Update regularly**: SEO is ongoing, not one-time
- **Monitor competitors**: Check their keywords and strategies
- **Test changes**: Use A/B testing for major changes
- **Mobile-first**: Most users are on mobile
- **User experience**: Good UX = better SEO
- **Quality over quantity**: Better to have 10 great pages than 100 mediocre ones

---

**Last Updated:** January 2025  
**Maintained by:** Development Team  
**Contact:** engineering@diktat.ai
