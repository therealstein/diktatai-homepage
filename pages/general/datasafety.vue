<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div
      class="hero min-h-[40vh] relative"
      style="
        background: linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%);
        background-size: cover;
        background-position: center;
      "
    >
      <div class="hero-content text-center">
        <div
          class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          <h1
            class="font-display text-4xl font-bold text-white mb-2"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.title") }}
          </h1>
          <p
            class="text-lg text-white"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <h2 class="font-display text-3xl font-bold mb-8 text-center">
          {{ t("main.title") }}
        </h2>

        <div class="mb-12">
          <p class="text-lg">
            {{ t("main.intro") }}
          </p>
        </div>

        <!-- EU Data Processing Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h3 class="font-display text-2xl font-bold mb-6">
            {{ t("eu.title") }}
          </h3>
          <p class="mb-6">{{ t("eu.intro") }}</p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("eu.points.0") }}</span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("eu.points.1") }}</span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("eu.points.2") }}</span>
            </li>
          </ul>
        </div>

        <!-- GDPR Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h3 class="font-display text-2xl font-bold mb-6">
            {{ t("gdpr.title") }}
          </h3>
          <p class="mb-6">{{ t("gdpr.intro") }}</p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("gdpr.points.0") }}</span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("gdpr.points.1") }}</span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ t("gdpr.points.2") }}</span>
            </li>
          </ul>
        </div>

        <!-- Trust Section -->
        <div class="mb-12">
          <h3 class="font-display text-2xl font-bold mb-6">
            {{ t("trust.title") }}
          </h3>
          <p class="text-lg mb-6">
            {{ t("trust.content") }}
          </p>
        </div>

        <!-- Call to Action -->
        <div
          class="card bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl p-8 rounded-3xl border border-accent/20"
        >
          <h3 class="font-display text-2xl font-bold mb-4 text-center">
            {{ t("cta.title") }}
          </h3>
          <p class="text-lg text-center mb-8">
            {{ t("cta.content") }}
          </p>
          <div class="text-center">
            <a :href="registerUrl">
              <button
                class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
              >
                {{ t("cta.button") }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "local",
});
const { registerUrl } = useAppUrl();

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();

useHead({
  title: t("meta.title"),
  meta: [{ name: "description", content: t("meta.description") }],
  link: [{ rel: "canonical", href: canonicalUrl }],
});
</script>

<i18n lang="json">
{
  "en": {
    "hero": {
      "title": "Security at Diktat AI",
      "subtitle": "Your data is safe with us"
    },
    "main": {
      "title": "Trust & Security: How Diktat AI Protects Your Data",
      "intro": "We know: The content of your audio recordings is often confidential. Whether it's sensitive business conversations, personal interviews, or important lecture notes – protecting your data is our absolute priority at Diktat AI. That's why we've made sure from the ground up that your information is safe and protected with us, so you can use our service without worries and focus entirely on your content."
    },
    "eu": {
      "title": "Consistent Data Protection: Processing Only in the EU",
      "intro": "A central building block of our security strategy is the location of our technology:",
      "points": [
        "All your data stays in Europe: Both your uploaded audio files and the texts created from them are processed and stored exclusively on servers within the European Union.",
        "No detours through third countries: We deliberately use server locations within the EU. This means for you: Your data is subject to strict European data protection laws – known as some of the highest standards worldwide.",
        "Maximum control, minimal risk: By keeping your data locally in the EU, we not only ensure compliance with legal requirements but also minimize the risks that can be associated with international data transfers."
      ]
    },
    "gdpr": {
      "title": "Strictly According to GDPR Guidelines",
      "intro": "Of course, we work in compliance with the General Data Protection Regulation (GDPR). This means for you:",
      "points": [
        "Your rights are at the center: We respect your right to information, correction, and deletion of your data.",
        "Transparency: We openly state how your data is processed.",
        "Purpose limitation: Your data is only used for the purpose of transcription and not used or sold for other purposes."
      ]
    },
    "trust": {
      "title": "Your Trust is Our Greatest Asset",
      "content": "We understand that you entrust us with sensitive information. We take this trust very seriously. That's why we continuously invest in the security of our platform and processes. We rely on proven technologies and strict internal policies to ensure the integrity and confidentiality of your data at all times."
    },
    "cta": {
      "title": "Use Diktat AI with Confidence",
      "content": "Rely on Diktat AI not only for fast and precise text recognition but also for uncompromising security according to European standards. Your privacy and the protection of your data are an integral part of our promise to you.",
      "button": "Start for free now"
    },
    "meta": {
      "title": "Security - Diktat AI",
      "description": "Learn more about our security measures and how we protect your data. Diktat AI processes all data exclusively in the EU according to GDPR standards."
    }
  },
  "de": {
    "hero": {
      "title": "Sicherheit bei Diktat AI",
      "subtitle": "Ihre Daten sind bei uns sicher"
    },
    "main": {
      "title": "Vertrauen & Sicherheit: So schützt Diktat AI Ihre Daten",
      "intro": "Wir wissen: Die Inhalte Ihrer Audioaufnahmen sind oft vertraulich. Ob sensible Geschäftsgespräche, persönliche Interviews oder wichtige Vorlesungsmitschriften – der Schutz Ihrer Daten hat für uns bei Diktat AI absolute Priorität. Deshalb haben wir von Grund auf darauf geachtet, dass Ihre Informationen bei uns sicher und geschützt sind, damit Sie unseren Service sorgenfrei nutzen können und sich voll und ganz auf Ihre Inhalte konzentrieren können."
    },
    "eu": {
      "title": "Konsequenter Datenschutz: Verarbeitung nur in der EU",
      "intro": "Ein zentraler Baustein unserer Sicherheitsstrategie ist der Standort unserer Technik:",
      "points": [
        "Alle Ihre Daten bleiben in Europa: Sowohl Ihre hochgeladenen Audiodateien als auch die daraus erstellten Texte werden ausschließlich auf Servern innerhalb der Europäischen Union verarbeitet und gespeichert.",
        "Keine Umwege über Drittländer: Wir nutzen bewusst Serverstandorte innerhalb der EU. Das bedeutet für Sie: Ihre Daten unterliegen den strengen europäischen Datenschutzgesetzen – bekannt als einige der höchsten Standards weltweit.",
        "Maximale Kontrolle, minimales Risiko: Indem wir Ihre Daten lokal in der EU halten, gewährleisten wir nicht nur die Einhaltung gesetzlicher Vorgaben, sondern minimieren auch die Risiken, die mit internationalen Datentransfers verbunden sein können."
      ]
    },
    "gdpr": {
      "title": "Streng nach DSGVO-Richtlinien",
      "intro": "Selbstverständlich arbeiten wir konform zur Datenschutz-Grundverordnung (DSGVO). Das bedeutet für Sie:",
      "points": [
        "Ihre Rechte stehen im Mittelpunkt: Wir respektieren Ihr Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten.",
        "Transparenz: Wir legen offen dar, wie Ihre Daten verarbeitet werden.",
        "Zweckbindung: Ihre Daten werden nur für den Zweck der Transkription genutzt und nicht anderweitig verwendet oder verkauft."
      ]
    },
    "trust": {
      "title": "Ihr Vertrauen ist unser höchstes Gut",
      "content": "Wir verstehen, dass Sie uns sensible Informationen anvertrauen. Dieses Vertrauen nehmen wir sehr ernst. Deshalb investieren wir kontinuierlich in die Sicherheit unserer Plattform und Prozesse. Wir setzen auf bewährte Technologien und strenge interne Richtlinien, um die Integrität und Vertraulichkeit Ihrer Daten jederzeit zu gewährleisten."
    },
    "cta": {
      "title": "Nutzen Sie Diktat AI mit gutem Gefühl",
      "content": "Verlassen Sie sich auf Diktat AI nicht nur für schnelle und präzise Texterkennung, sondern auch für kompromisslose Sicherheit nach europäischen Standards. Ihre Privatsphäre und der Schutz Ihrer Daten sind fester Bestandteil unseres Versprechens an Sie.",
      "button": "Jetzt kostenlos starten"
    },
    "meta": {
      "title": "Sicherheit - Diktat AI",
      "description": "Erfahren Sie mehr über unsere Sicherheitsmaßnahmen und wie wir Ihre Daten schützen. Diktat AI verarbeitet alle Daten ausschließlich in der EU nach DSGVO-Standards."
    }
  },
  "nl": {
    "hero": {
      "title": "Veiligheid bij DiktatAI",
      "subtitle": "Uw gegevens zijn veilig bij ons"
    },
    "main": {
      "title": "Vertrouwen & veiligheid: Zo beschermt DiktatAI uw gegevens",
      "intro": "We weten het: De inhoud van uw audio-opnames is vaak vertrouwelijk. Of het nu gaat om gevoelige zakelijke gesprekken, persoonlijke interviews of belangrijke college-aantekeningen – de bescherming van uw gegevens heeft voor ons bij DiktatAI absolute prioriteit. Daarom hebben we vanaf het begin ervoor gezorgd dat uw informatie bij ons veilig en beschermd is, zodat u onze service zorgeloos kunt gebruiken en u volledig kunt concentreren op uw inhoud."
    },
    "eu": {
      "title": "Consequente gegevensbescherming: Verwerking alleen in de EU",
      "intro": "Een centrale pijler van onze veiligheidsstrategie is de locatie van onze techniek:",
      "points": [
        "Al uw gegevens blijven in Europa: Zowel uw geüploade audiobestanden als de daaruit gemaakte teksten worden uitsluitend verwerkt en opgeslagen op servers binnen de Europese Unie.",
        "Geen omwegen via derde landen: We gebruiken bewust serverlocaties binnen de EU. Dat betekent voor u: Uw gegevens vallen onder de strenge Europese privacywetgeving – bekend als een van de hoogste standaarden wereldwijd.",
        "Maximale controle, minimaal risico: Door uw gegevens lokaal in de EU te houden, waarborgen we niet alleen de naleving van wettelijke voorschriften, maar minimaliseren we ook de risico's die verbonden kunnen zijn aan internationale gegevensoverdrachten."
      ]
    },
    "gdpr": {
      "title": "Strikt volgens AVG-richtlijnen",
      "intro": "Vanzelfsprekend werken we conform de Algemene Verordening Gegevensbescherming (AVG). Dat betekent voor u:",
      "points": [
        "Uw rechten staan centraal: We respecteren uw recht op inzage, correctie en verwijdering van uw gegevens.",
        "Transparantie: We leggen open uit hoe uw gegevens worden verwerkt.",
        "Doelbinding: Uw gegevens worden alleen gebruikt voor het doel van transcriptie en niet anderszins gebruikt of verkocht."
      ]
    },
    "trust": {
      "title": "Uw vertrouwen is ons hoogste goed",
      "content": "We begrijpen dat u ons gevoelige informatie toevertrouwt. Dit vertrouwen nemen we zeer serieus. Daarom investeren we continu in de veiligheid van ons platform en onze processen. We zetten in op bewezen technologieën en strenge interne richtlijnen om de integriteit en vertrouwelijkheid van uw gegevens te allen tijde te waarborgen."
    },
    "cta": {
      "title": "Gebruik DiktatAI met een gerust gevoel",
      "content": "Vertrouw op DiktatAI niet alleen voor snelle en nauwkeurige tekstherkenning, maar ook voor compromisloze veiligheid volgens Europese standaarden. Uw privacy en de bescherming van uw gegevens zijn een vast onderdeel van onze belofte aan u.",
      "button": "Nu gratis starten"
    },
    "meta": {
      "title": "Veiligheid - DiktatAI",
      "description": "Lees meer over onze beveiligingsmaatregelen en hoe we uw gegevens beschermen. DiktatAI verwerkt alle gegevens uitsluitend in de EU volgens AVG-standaarden."
    }
  }
}
</i18n>

<style scoped>
/* Override accent and secondary colors with pink */
:deep(.text-accent) {
  color: #ef56a4 !important;
}

:deep(.text-secondary) {
  color: #ef56a4 !important;
}

:deep(.bg-accent) {
  background-color: #ef56a4 !important;
}

:deep(.bg-secondary) {
  background-color: #ef56a4 !important;
}

:deep(.from-accent\/10) {
  --tw-gradient-from: rgba(239, 86, 164, 0.1) !important;
}

:deep(.to-secondary\/10) {
  --tw-gradient-to: rgba(239, 86, 164, 0.1) !important;
}

:deep(.border-accent\/20) {
  border-color: rgba(239, 86, 164, 0.2) !important;
}

.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
