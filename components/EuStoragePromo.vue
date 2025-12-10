<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div
    class="glass-card bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
  >
    <div class="text-center">
      <div
        class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-3">
        {{ t('title') }}
      </h3>
      <p class="text-gray-600 mb-4 leading-relaxed text-sm">
        {{ t('description') }}
      </p>
      <NuxtLinkLocale to="general-datasafety">
        <button
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
        >
          {{ t('moreAboutSecurity') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
</style>

<i18n lang="json">
{
  "de": {
    "title": "Speicherung und Datenverarbeitung in der EU",
    "description": "Alle Ihre Daten werden ausschließlich auf Servern innerhalb der Europäischen Union verarbeitet und gespeichert. Wir setzen auf lokale Infrastruktur für maximale Datensicherheit.",
    "moreAboutSecurity": "Mehr über Sicherheit"
  },
  "en": {
    "title": "Storage and Data Processing in the EU",
    "description": "All your data is processed and stored exclusively on servers within the European Union. We rely on local infrastructure for maximum data security.",
    "moreAboutSecurity": "More about Security"
  },
  "nl": {
    "title": "Opslag en gegevensverwerking in de EU",
    "description": "Al uw gegevens worden uitsluitend op servers binnen de Europese Unie verwerkt en opgeslagen. We zetten in op lokale infrastructuur voor maximale gegevensbeveiliging.",
    "moreAboutSecurity": "Meer over beveiliging"
  },
  "es": {
    "title": "Almacenamiento y procesamiento de datos en la UE",
    "description": "Todos sus datos se procesan y almacenan exclusivamente en servidores dentro de la Unión Europea. Confiamos en la infraestructura local para la máxima seguridad de datos.",
    "moreAboutSecurity": "Más sobre seguridad"
  }
}
</i18n>
