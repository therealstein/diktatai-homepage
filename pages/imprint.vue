<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white/40 py-12"
  >
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Main Content Card -->
      <div
        class="bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <section class="space-y-6">
          <!-- Title with gradient -->
          <div class="text-center pb-6 border-b border-indigo-200/30">
            <h1 class="text-4xl font-bold bg-gradient-to-r text-black mb-2">
              {{ pageContent.title }}
            </h1>
            <div
              class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"
            ></div>
          </div>

          <!-- Content -->
          <div class="prose-custom" v-html="pageContent.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const {{ locale }} = useI18n();

// Content for both languages
const content = {
  de: {
    title: "\ud83d\udcc4 Impressum",
    content: "\n<p><strong>Diktat.AI ist ein Produkt der ARTDROP O\u00dc</strong><br><em>Diktat.AI \u2013 entwickelt mit \ud83d\udc9c und KI</em></p>\n\n<p>M\u00e4nnim\u00e4e/1, Pudisoo k\u00fcla<br>Kuusalu vald, Harju maakond<br>74626 Estland<br><br>Vertretungsberechtigt: Steffen Stein</p>\n\n<p>\ud83d\udcec Kontakt? Einfach \u00fcber unser <a href=\"https://diktat.ai/kontakt\" data-type=\"link\" data-id=\"https://diktat.ai/kontakt\">Formular</a> \u2013 wir m\u00f6gen strukturierte Anfragen.</p>\n\n<p>\ud83e\uddfe Eingetragen im Estnischen Handelsregister (e-\u00c4riregister)<br>Registernummer: 17092348<br><br>\ud83d\udcca USt-ID: Derzeit nicht umsatzsteuerlich registriert gem\u00e4\u00df estnischem Recht (Micro Company / Kleinunternehmensregelung)</p>\n\n<h3 class=\"wp-block-heading\">\ud83d\udca1 Noch ein paar rechtliche Kleinigkeiten</h3>\n\n<p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind hierzu auch nicht verpflichtet.<br>Falls doch mal etwas schieflaufen sollte, sprich uns einfach an \u2013 wir finden bestimmt eine L\u00f6sung.</p>\n\n<p>\ud83d\udcea <strong>Bitte keine Werbung. Wirklich.</strong><br>Wir freuen uns \u00fcber Post. Aber nicht \u00fcber Werbe-E-Mails.<br>Kurz gesagt: Keine unerw\u00fcnschten Angebote, keine Massenmails, keine \u201eIch wollte nur mal fragen\u201c-Anfragen.<br>Wird\u2019s zu bunt, reagieren wir unentspannt \u2013 vielleicht mit einem Augenrollen, vielleicht auch mit einem rechtlichen Hinweis. \ud83d\udc9c</p>\n\n<p>Dieses Impressum gilt \u00fcbrigens auch f\u00fcr unsere Online-Pr\u00e4senzen in sozialen Netzwerken oder auf anderen Plattformen, auf denen wir aktiv sind oder sein werden.</p>\n\n<p><strong>Stand: Juli 2025</strong><br>Wenn sich etwas \u00e4ndert, aktualisieren wir das hier. Versprochen.</p>\n"
  },
  en: {
    title: "\ud83d\udcc4 Imprint",
    content: "\n<p></p>\n\n<p><strong>Diktat.AI is a product of ARTDROP O\u00dc</strong><br><em>Diktat.AI \u2013 built with \ud83d\udc9c and AI</em></p>\n\n<p>M\u00e4nnim\u00e4e/1, Pudisoo village<br>Kuusalu Parish, Harju County<br>74626 Estonia</p>\n\n<p>Authorized representative: Steffen Stein<br><br>\ud83d\udcec Want to get in touch? Use our <a href=\"https://diktat.ai/contact\" data-type=\"link\" data-id=\"https://diktat.ai/kontakt\">contact form</a> \u2013 we like things tidy.</p>\n\n<p>\ud83e\uddfe Registered with the Estonian Commercial Register (e-\u00c4riregister)<br>Company registration number: 17092348<br><br>\ud83d\udcca VAT ID: Not currently VAT registered under Estonian law (micro company scheme)</p>\n\n<h3 class=\"wp-block-heading\">\ud83d\udca1 A few legal notes</h3>\n\n<p>We don\u2019t take part in consumer dispute resolution procedures \u2013 mainly because we\u2019d much rather solve things together than fill out forms.<br>So if something\u2019s bothering you: talk to us. We\u2019re friendly humans and always up for finding a good fix.</p>\n\n<p>\ud83d\udcea <strong>No unsolicited marketing. Seriously.</strong><br>We love emails \u2013 just not the cold-pitch kind.<br>No bulk offers, no outreach templates, no \u201cjust reaching out\u201d messages.<br>If it gets out of hand, we may respond \u2013 maybe with an eye roll, maybe with legal steps. \ud83d\udc9c</p>\n\n<p>This imprint also applies to any other platform where we\u2019re active or may become active in future, including social media.</p>\n\n<p><strong>Last updated: July 2025</strong><br>If anything changes, we\u2019ll update this page. Promise.</p>\n"
  }
};

// Get content based on current locale
const pageContent = computed(() => {
  return content[locale.value] || content.de;
});

// SEO Meta Tags
useHead({
  title: computed(() =>
    locale.value === 'de'
      ? 'Impressum - Diktat AI'
      : 'Impressum - Diktat AI'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        locale.value === 'de'
          ? 'Rechtliche Informationen für den Diktat AI Transkriptionsdienst.'
          : 'Legal information for Diktat AI transcription service.'
      ),
    },
    {{ name: 'robots', content: 'noindex, nofollow' }},
  ],
});
</script>

<style scoped>
.prose-custom {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(h1) {
  @apply text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0;
}

.prose-custom :deep(h2) {
  @apply text-2xl font-semibold text-gray-800 mb-4 mt-8 first:mt-0;
  @apply border-b border-indigo-200/30 pb-2;
}

.prose-custom :deep(h3) {
  @apply text-xl font-semibold text-gray-800 mb-3 mt-6 first:mt-0;
}

.prose-custom :deep(h4) {
  @apply text-lg font-medium text-gray-800 mb-2 mt-4 first:mt-0;
}

.prose-custom :deep(p) {
  @apply text-gray-700 mb-4 leading-relaxed;
}

.prose-custom :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(ol) {
  @apply list-decimal list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(li) {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(strong) {
  @apply font-semibold text-gray-800;
}

.prose-custom :deep(em) {
  @apply italic text-gray-700;
}

.prose-custom :deep(a) {
  @apply text-indigo-600 hover:text-purple-600 underline transition-colors duration-200;
}

.prose-custom :deep(blockquote) {
  @apply border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-4;
}

.prose-custom :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.prose-custom :deep(pre) {
  @apply bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm;
}

.prose-custom :deep(table) {
  @apply w-full border-collapse border border-gray-300 my-4;
}

.prose-custom :deep(th) {
  @apply bg-indigo-50 border border-gray-300 px-4 py-2 font-semibold text-gray-800;
}

.prose-custom :deep(td) {
  @apply border border-gray-300 px-4 py-2 text-gray-700;
}

.prose-custom :deep(hr) {
  @apply border-t border-indigo-200/50 my-8;
}
</style>
