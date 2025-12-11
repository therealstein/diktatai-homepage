<template>
  <!-- Final CTA Section - Enhanced -->
  <div class="w-full py-16   bg-cover bg-center" style="background-image: url('/cta-web.webp');">
    <div class="flex justify-center items-center text-center">
      <div class="max-w-2xl backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 class="font-display text-4xl font-bold leading-tight tracking-tight mb-2">{{ t('title') }}</h2>
        <p class="py-6 text-lg font-medium leading-relaxed">
          {{ t('description') }}
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <a :href="registerUrl">
            <button class="font-display bg-pink-500 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide">{{ t('startFree') }}</button>
          </a>
          <NuxtLinkLocale to="pricing">
            <button class="font-display border-2 border-white/70 bg-white/10 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-white/20 transition-all shadow-lg tracking-wide">{{ t('viewPricing') }}</button>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { registerUrl } = useAppUrl()
</script>

<style scoped>
/* Component-specific styles if needed */
</style>

<i18n lang="json">
{
  "de": {
    "title": "Schluss mit Tippen: Diktat AI erledigt die Transkription.",
    "description": "Verwandeln Sie gesprochene Worte mühelos in präzisen Text. Diktat AI nimmt Ihnen die Tipparbeit ab, damit Sie sich auf das Wesentliche konzentrieren können – egal ob Meeting-Notizen, Interviews oder spontane Ideen. Sparen Sie wertvolle Zeit und steigern Sie Ihre Produktivität.",
    "startFree": "Kostenlos starten",
    "viewPricing": "Preise ansehen"
  },
  "en": {
    "title": "Stop Typing: Dictate AI Handles the Transcription.",
    "description": "Effortlessly transform spoken words into precise text. Dictate AI takes care of the typing so you can focus on what matters – whether it's meeting notes, interviews, or spontaneous ideas. Save valuable time and boost your productivity.",
    "startFree": "Start Free",
    "viewPricing": "View Pricing"
  },
  "nl": {
    "title": "Klaar met typen: Diktat AI verzorgt de transcriptie.",
    "description": "Zet gesproken woorden moeiteloos om in nauwkeurige tekst. Diktat AI neemt het typwerk van u over, zodat u zich kunt concentreren op het wezenlijke – of het nu gaat om meetingnotities, interviews of spontane ideeën. Bespaar waardevolle tijd en verhoog uw productiviteit.",
    "startFree": "Gratis starten",
    "viewPricing": "Prijzen bekijken"
  },
  "es": {
    "title": "Deje de escribir: Diktat AI se encarga de la transcripción.",
    "description": "Transforme palabras habladas en texto preciso sin esfuerzo. Diktat AI se encarga de escribir para que pueda concentrarse en lo importante – ya sean notas de reuniones, entrevistas o ideas espontáneas. Ahorre tiempo valioso y aumente su productividad.",
    "startFree": "Comenzar gratis",
    "viewPricing": "Ver precios"
  },
  "fr": {
    "title": "Arrêtez de taper : Diktat AI s'occupe de la transcription.",
    "description": "Transformez sans effort les mots parlés en texte précis. Diktat AI se charge de la frappe pour que vous puissiez vous concentrer sur l'essentiel – que ce soit des notes de réunion, des interviews ou des idées spontanées. Gagnez un temps précieux et boostez votre productivité.",
    "startFree": "Commencer gratuitement",
    "viewPricing": "Voir les tarifs"
  },
  "sv": {
    "title": "Sluta skriva: Diktat AI tar hand om transkriptionen.",
    "description": "Omvandla enkelt talade ord till exakt text. Diktat AI tar hand om skrivandet så att du kan fokusera på det viktiga – oavsett om det är mötesanteckningar, intervjuer eller spontana idéer. Spara värdefull tid och öka din produktivitet.",
    "startFree": "Börja gratis",
    "viewPricing": "Se priser"
  }
}
</i18n> 