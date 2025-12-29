<template>
  <!-- Heldenbereich mit Hintergrundbild -->
  <div class="hero min-h-[80vh] relative flex items-center justify-center">
    <!-- LCP Image - using <img> for better discovery and fetchpriority -->
    <img
      src="/herobg.webp"
      alt=""
      fetchpriority="high"
      loading="eager"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
      width="1920"
      height="1080"
    />
    <div class="hero-content text-center w-full px-4 py-6 md:py-12 flex flex-col md:flex-row md:justify-center items-center gap-8 relative z-10">
      <!-- Hauptinhalt Box -->
      <div class="backdrop-blur-sm bg-white/20 p-6 md:p-10 rounded-3xl shadow-2xl border border-white/30 w-full md:w-3/5 lg:w-3/5">
        <div class="relative w-full flex justify-center mb-6 md:mb-8 px-4 md:px-8">
          <h1 class="font-display text-2xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight" style="text-shadow: 0 3px 6px rgba(0,0,0,0.4);">
            {{ t('title') }}
          </h1>
          <div class="absolute -inset-1 bg-gradient-to-r from-accent to-secondary opacity-30 blur-lg rounded-lg">
          </div>
        </div>
        <p class="py-6 md:py-8 text-lg md:text-xl font-medium text-white leading-relaxed tracking-wide max-w-2xl mx-auto" style="text-shadow: 0 0 6px rgba(0,0,0,0.8);">
          {{ t('description') }}
        </p>
        <div class="flex flex-col items-center mt-6">
          <a :href="registerUrl">
            <button class="font-display bg-pink-500 text-white text-lg md:text-xl font-bold py-3 px-10 md:py-4 md:px-14 rounded-full hover:bg-pink-600 transition-all shadow-xl tracking-wide">{{ t('startNow') }}</button>
          </a>
        </div>
      </div>

      <!-- Logo Container -->
      <div class="backdrop-blur-sm bg-white/20 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 w-full md:w-1/5 mt-8 md:mt-0">
        <div class="logo-container flex justify-center">
          <a :href="registerUrl">
            <div class="logo-wrapper">
              <LogoSingle class="logo-animation" />
            </div>
            <span class="tooltip font-display font-medium">Diktat AI</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoSingle from './LogoSingle.vue'

const { t } = useI18n()
const { registerUrl } = useAppUrl()
</script>

<style scoped>
/* Logo animation styles */
.logo-container {
  position: relative;
  display: inline-block;
}

.logo-wrapper {
  width: 100px;
  height: 100px;
  border: 4px solid #9D4EDD;
  border-radius: 50%;
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
  background: rgba(157, 78, 221, 0.1);
}

@media (min-width: 768px) {
  .logo-wrapper {
    width: 140px;
    height: 140px;
    border-width: 6px;
    padding: 20px;
  }
}

.logo-wrapper:hover {
  transform: scale(1.05);
  background: rgba(157, 78, 221, 0.2);
}

.logo-animation {
  animation: scale 3s ease-in-out infinite;
}

.tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%);
  background: transparent;
  color: #9D4EDD;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity .2s ease;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .tooltip {
    bottom: -35px;
    font-size: 16px;
  }
}

.logo-container:hover .tooltip {
  opacity: 1;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<i18n lang="json">
{
  "de": {
    "title": "Automatisch Schreiben mit Diktat AI",
    "description": "Diktat AI bietet schnelle und präzise Transkriptionen für Meetings, Interviews und mehr. Ideal für Berufstätige und Teams, die Zeit sparen und sich auf das Wesentliche konzentrieren möchten. Ihre Daten sind sicher und DSGVO-konform.",
    "startNow": "Jetzt starten",
    "subDescription": "Sparen Sie bis zu 80% Ihrer Zeit bei der Transkription. Starten Sie jetzt kostenlos – keine Kreditkarte erforderlich.",
    "socialProof": "Bereits über 1.000 Nutzer sparen täglich Zeit"
  },
  "en": {
    "title": "Autowrite with Dictate AI",
    "description": "Dictate AI offers fast and accurate transcriptions for meetings, interviews, and more. Ideal for professionals and teams who want to save time and focus on what matters. Your data is secure and GDPR-compliant.",
    "startNow": "Start Now",
    "subDescription": "Save up to 80% of your time on transcription. Start free now – no credit card required.",
    "socialProof": "Already over 1,000 users save time daily"
  },
  "nl": {
    "title": "Transcriberen met Diktat AI",
    "description": "Diktat AI biedt snelle en nauwkeurige transcripties voor meetings, interviews en meer. Ideaal voor professionals en teams die tijd willen besparen en zich op het wezenlijke willen concentreren. Uw gegevens zijn veilig en worden GDPR-conform verwerkt.",
    "startNow": "Nu starten",
    "subDescription": "Bespaar tot 80% van uw tijd bij het transcriberen. Start nu gratis – geen creditcard vereist.",
    "socialProof": "Al meer dan 1.000 gebruikers besparen dagelijks tijd"
  },
  "es": {
    "title": "Escribir automáticamente con Diktat AI",
    "description": "Diktat AI ofrece transcripciones rápidas y precisas para reuniones, entrevistas y más. Ideal para profesionales y equipos que desean ahorrar tiempo y centrarse en lo esencial. Sus datos están seguros y cumplen con el RGPD.",
    "startNow": "Comenzar ahora",
    "subDescription": "Ahorre hasta el 80% de su tiempo en transcripción. Comience gratis ahora – sin tarjeta de crédito.",
    "socialProof": "Ya más de 1.000 usuarios ahorran tiempo diariamente"
  },
  "fr": {
    "title": "Écriture automatique avec Diktat AI",
    "description": "Diktat AI offre des transcriptions rapides et précises pour les réunions, entretiens et plus encore. Idéal pour les professionnels et équipes qui souhaitent gagner du temps et se concentrer sur l'essentiel. Vos données sont sécurisées et conformes au RGPD.",
    "startNow": "Commencer maintenant",
    "subDescription": "Économisez jusqu'à 80% de votre temps de transcription. Commencez gratuitement maintenant – sans carte de crédit.",
    "socialProof": "Déjà plus de 1 000 utilisateurs économisent du temps quotidiennement"
  },
  "sv": {
    "title": "Skriv automatiskt med Diktat AI",
    "description": "Diktat AI erbjuder snabba och exakta transkriptioner för möten, intervjuer och mer. Perfekt för yrkesverksamma och team som vill spara tid och fokusera på det väsentliga. Dina data är säkra och GDPR-kompatibla.",
    "startNow": "Börja nu",
    "subDescription": "Spara upp till 80% av din tid vid transkribering. Börja gratis nu – inget kreditkort krävs.",
    "socialProof": "Redan över 1 000 användare sparar tid dagligen"
  }
}
</i18n> 