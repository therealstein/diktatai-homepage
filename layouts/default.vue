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
        <template v-for="link in head.link" :key="link.hid">
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
