<script setup lang="ts">
declare global {
  interface Window {
    gtmLoaded?: boolean;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const route = useRoute();
const { t, locale } = useI18n();
const head = useLocaleHead();

// Supported locales for question pages
const questionsSupportedLocales = ['de', 'en'];

// Check if current page is a questions page
const isQuestionsPage = computed(() => {
  const path = route.path;
  return path.includes('/fragen') || path.includes('/questions') ||
         path.includes('/vragen') || path.includes('/preguntas') || path.includes('/fragor');
});

// For questions pages in unsupported locales, don't render any hreflang links
// This prevents the prerender crawler from following malformed URLs
const shouldRenderHreflang = computed(() => {
  if (isQuestionsPage.value && !questionsSupportedLocales.includes(locale.value)) {
    return false;
  }
  return true;
});

// Filter out malformed hreflang links that have double locale prefixes
// This can happen when NuxtLinkLocale generates paths for routes set to false
const filteredLinks = computed(() => {
  // Don't render any hreflang links for questions pages in unsupported locales
  if (!shouldRenderHreflang.value) {
    return [];
  }

  if (!head.value?.link) return [];

  // All supported locales
  const allLocales = ['de', 'en', 'nl', 'es', 'fr', 'sv'];

  // Regex to detect double locale prefixes like /fr/fr/, /en/sv/, /nl/en/, etc.
  // Also matches any locale followed by another locale pattern (with or without trailing slash)
  const doubleLocalePattern = /^\/(de|en|nl|es|fr|sv)\/(de|en|nl|es|fr|sv)(\/|$)/;

  // Question-related path segments in all supported languages
  const questionPathSegments = ['questions', 'fragen', 'vragen', 'preguntas', 'fragor'];

  return head.value.link.filter((link: any) => {
    if (!link.href) return true;

    // Remove the domain to get the path
    const href = link.href;
    const url = href.startsWith('http') ? new URL(href).pathname : href;

    // Check for double locale prefixes
    if (doubleLocalePattern.test(url)) {
      return false;
    }

    // Check for question page links to unsupported locales
    // Valid question pages are only /fragen/... (de) and /en/questions/... (en)
    const pathParts = url.split('/').filter(Boolean);

    // Check if this is a question page link
    const hasQuestionSegment = pathParts.some(part => questionPathSegments.includes(part));

    if (hasQuestionSegment) {
      // For question pages, only allow:
      // - /fragen/... (German, no prefix)
      // - /en/questions/... (English with prefix)
      const isValidGermanQuestions = pathParts[0] === 'fragen';
      const isValidEnglishQuestions = pathParts[0] === 'en' && pathParts[1] === 'questions';

      if (!isValidGermanQuestions && !isValidEnglishQuestions) {
        return false;
      }
    }

    return true;
  });
});

// Google Tag Manager - loaded after user interaction or 3 second delay to reduce LCP impact
const loadGTM = () => {
  if (window.gtmLoaded) return;
  window.gtmLoaded = true;

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16950089138';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: any[]) => { window.dataLayer.push(args); };
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'AW-16950089138');
};

onMounted(() => {
  // Load GTM after 3 seconds or on user interaction (whichever comes first)
  const timeout = setTimeout(loadGTM, 3000);

  const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  const onInteraction = () => {
    clearTimeout(timeout);
    loadGTM();
    interactionEvents.forEach(event => {
      window.removeEventListener(event, onInteraction, { capture: true });
    });
  };

  interactionEvents.forEach(event => {
    window.addEventListener(event, onInteraction, { capture: true, passive: true });
  });
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in filteredLinks" :key="link.hid">
          <Link
            :id="link.hid"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.hid">
          <Meta
            :id="meta.hid"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body class="min-h-screen bg-base-200 flex flex-col">
        <NavBar />
        <slot />
        <Footer />
      </Body>
    </Html>
  </div>
</template>
