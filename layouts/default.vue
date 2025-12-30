<script setup lang="ts">
declare global {
  interface Window {
    gtmLoaded?: boolean;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead();

// Filter out malformed hreflang links that have double locale prefixes
// This can happen when NuxtLinkLocale generates paths for routes set to false
const filteredLinks = computed(() => {
  if (!head.value?.link) return [];

  // Regex to detect double locale prefixes like /fr/fr/, /en/sv/, /nl/en/, etc.
  const doubleLocalePattern = /^\/(de|en|nl|es|fr|sv)\/(de|en|nl|es|fr|sv)\//;

  // Also filter out question pages for locales that don't support them
  const invalidQuestionPatterns = [
    /^\/(nl|es|fr|sv)\/.*\/(questions|fragen|vragen|preguntas|fragor)\//,
    /^\/(nl|es|fr|sv)\/(questions|fragen|vragen|preguntas|fragor)/,
  ];

  return head.value.link.filter((link: any) => {
    if (!link.href) return true;

    // Remove the domain to get the path
    const href = link.href;
    const url = href.startsWith('http') ? new URL(href).pathname : href;

    // Check for double locale prefixes
    if (doubleLocalePattern.test(url)) {
      return false;
    }

    // Check for invalid question page links
    for (const pattern of invalidQuestionPatterns) {
      if (pattern.test(url)) {
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
