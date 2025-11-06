<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead();

// Google Tag Manager
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-16950089138',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16950089138');
      `,
    },
  ],
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
