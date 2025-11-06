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
              📄 Impressum
            </h1>
            <div
              class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"
            ></div>
          </div>

          <!-- Content -->
          <div class="prose-custom">
            <p><strong>Diktat.AI ist ein Produkt der ARTDROP OÜ</strong><br><em>Diktat.AI – entwickelt mit 💜 und KI</em></p>

            <p>Männimäe/1, Pudisoo küla<br>Kuusalu vald, Harju maakond<br>74626 Estland<br><br>Vertretungsberechtigt: Steffen Stein</p>

            <p>📬 Kontakt? Einfach über unser <a href="https://diktat.ai/kontakt" class="text-indigo-600 hover:text-purple-600 underline transition-colors duration-200">Formular</a> – wir mögen strukturierte Anfragen.</p>

            <p>🧾 Eingetragen im Estnischen Handelsregister (e-Äriregister)<br>Registernummer: 17092348<br><br>📊 USt-ID: Derzeit nicht umsatzsteuerlich registriert gemäß estnischem Recht (Micro Company / Kleinunternehmensregelung)</p>

            <h3 class="wp-block-heading">💡 Noch ein paar rechtliche Kleinigkeiten</h3>

            <p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind hierzu auch nicht verpflichtet.<br>Falls doch mal etwas schieflaufen sollte, sprich uns einfach an – wir finden bestimmt eine Lösung.</p>

            <p>📪 <strong>Bitte keine Werbung. Wirklich.</strong><br>Wir freuen uns über Post. Aber nicht über Werbe-E-Mails.<br>Kurz gesagt: Keine unerwünschten Angebote, keine Massenmails, keine „Ich wollte nur mal fragen"-Anfragen.<br>Wird's zu bunt, reagieren wir unentspannt – vielleicht mit einem Augenrollen, vielleicht auch mit einem rechtlichen Hinweis. 💜</p>

            <p>Dieses Impressum gilt übrigens auch für unsere Online-Präsenzen in sozialen Netzwerken oder auf anderen Plattformen, auf denen wir aktiv sind oder sein werden.</p>

            <p><strong>Stand: Juli 2025</strong><br>Wenn sich etwas ändert, aktualisieren wir das hier. Versprochen.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

// SEO Meta Tags
useHead({
  title:
    locale.value === 'de' ? 'Impressum - Diktat AI' : 'Imprint - Diktat AI',
  meta: [
    {
      name: 'description',
      content:
        locale.value === 'de'
          ? 'Rechtliche Informationen und Impressum für den Diktat AI Transkriptionsdienst.'
          : 'Legal information and imprint for Diktat AI transcription service.',
    },
    { name: 'robots', content: 'noindex, nofollow' },
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
