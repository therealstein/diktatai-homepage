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
            {{ t('heroTitle') }}
          </h1>
          <p
            class="text-lg text-white"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t('heroSubtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <div class="text-center mb-12">
          <p class="text-xl">
            {{ t('mainText') }}
          </p>
          <a :href="registerUrl" class="mt-6 inline-block">
            <button
              class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
            >
              {{ t('ctaButton') }}
            </button>
          </a>
        </div>

        <!-- Business Benefits Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t('businessBenefitsTitle') }}
          </h2>
          <p class="mb-6">{{ t('businessBenefitsIntro') }}</p>
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
              <span>{{ t('benefit1') }}</span>
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
              <span>{{ t('benefit2') }}</span>
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
              <span>{{ t('benefit3') }}</span>
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
              <span>{{ t('benefit4') }}</span>
            </li>
          </ul>
        </div>

        <!-- Process Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t('processTitle') }}
          </h2>
          <p class="mb-6">{{ t('processIntro') }}</p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div
                class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0"
              >
                1
              </div>
              <span>{{ t('step1') }}</span>
            </li>
            <li class="flex items-start">
              <div
                class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0"
              >
                2
              </div>
              <span>{{ t('step2') }}</span>
            </li>
            <li class="flex items-start">
              <div
                class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0"
              >
                3
              </div>
              <span>{{ t('step3') }}</span>
            </li>
            <li class="flex items-start">
              <div
                class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0"
              >
                4
              </div>
              <span>{{ t('step4') }}</span>
            </li>
          </ul>
        </div>

        <!-- Business Advantages Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t('advantagesTitle') }}
          </h2>
          <p class="mb-6">{{ t('advantagesIntro') }}</p>
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
              <span>{{ t('advantage1') }}</span>
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
              <span>{{ t('advantage2') }}</span>
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
              <span>{{ t('advantage3') }}</span>
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
              <span>{{ t('advantage4') }}</span>
            </li>
          </ul>
        </div>

        <!-- Integration Section -->
        <div
          class="card bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl p-8 rounded-3xl border border-accent/20 mb-12"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t('integrationTitle') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('emailTitle') }}
              </h3>
              <p>{{ t('emailText') }}</p>
              <NuxtLinkLocale
                to="how-it-works"
                class="text-accent hover:underline mt-2 inline-block"
                >{{ t('emailLink') }}</NuxtLinkLocale
              >
            </div>
            <div>
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('apiTitle') }}
              </h3>
              <p>{{ t('apiText') }}</p>
              <NuxtLinkLocale
                to="general-kontakt"
                class="text-accent hover:underline mt-2 inline-block"
                >{{ t('apiLink') }}</NuxtLinkLocale
              >
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('faqTitle') }}
          </h2>
          <div class="space-y-6">
            <div class="card bg-base-200 p-6 rounded-2xl">
              <h3 class="font-display text-xl font-bold mb-2">
                {{ t('faq1Question') }}
              </h3>
              <p>{{ t('faq1Answer') }}</p>
            </div>
            <div class="card bg-base-200 p-6 rounded-2xl">
              <h3 class="font-display text-xl font-bold mb-2">
                {{ t('faq2Question') }}
              </h3>
              <p>{{ t('faq2Answer') }}</p>
            </div>
            <div class="card bg-base-200 p-6 rounded-2xl">
              <h3 class="font-display text-xl font-bold mb-2">
                {{ t('faq3Question') }}
              </h3>
              <p>{{ t('faq3Answer') }}</p>
            </div>
            <div class="card bg-base-200 p-6 rounded-2xl">
              <h3 class="font-display text-xl font-bold mb-2">
                {{ t('faq4Question') }}
              </h3>
              <p>{{ t('faq4Answer') }}</p>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div
          class="card bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl p-8 rounded-3xl border border-accent/20 text-center"
        >
          <h2 class="font-display text-2xl font-bold mb-4">
            {{ t('finalCtaTitle') }}
          </h2>
          <p class="text-lg mb-8">
            {{ t('finalCtaText') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="registerUrl">
              <button
                class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide w-full sm:w-auto"
              >
                {{ t('startFree') }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing">
              <button
                class="font-display bg-white text-pink-500 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-all shadow-lg tracking-wide border-2 border-pink-500 w-full sm:w-auto"
              >
                {{ t('viewPricing') }}
              </button>
            </NuxtLinkLocale>
          </div>
          <div class="mt-8 space-x-4">
            <NuxtLinkLocale to="pricing" class="text-accent hover:underline">{{
              t('pricingModels')
            }}</NuxtLinkLocale>
            <span class="text-gray-400">|</span>
            <NuxtLinkLocale
              to="general-datasafety"
              class="text-accent hover:underline"
              >{{ t('securityArchitecture') }}</NuxtLinkLocale
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta Tags
const { t } = useI18n({
  useScope: 'local',
})
const { registerUrl } = useAppUrl();;
useHead({
  title: t('seoTitle'),
  meta: [{ name: 'description', content: t('seoDescription') }],
});
</script>

<i18n>
{
  "de": {
    "seoTitle": "Business & Management Transkription - Diktat AI",
    "seoDescription": "Diktat AI für Geschäftskunden: Effiziente Transkription für Meeting-Protokolle, Strategie-Notizen und Diktate. Sparen Sie Zeit und steigern Sie Ihre Produktivität.",
    "heroTitle": "Diktat AI für Business & Management",
    "heroSubtitle": "Verwandeln Sie Meeting-Protokolle, Strategie-Notizen und diktierte Ideen blitzschnell in präzisen Text",
    "mainText": "Sparen Sie wertvolle Führungszeit und steigern Sie Ihre Produktivität – sicher & DSGVO-konform.",
    "ctaButton": "Jetzt Effizienz steigern",
    "businessBenefitsTitle": "Ihr strategischer Vorteil im Geschäftsalltag",
    "businessBenefitsIntro": "Entdecken Sie, wie Führungskräfte, Manager und vielbeschäftigte Professionals Diktat AI nutzen, um ihre täglichen Aufgaben zu optimieren:",
    "benefit1": "Effiziente Meeting-Dokumentation: Halten Sie Ergebnisse, Beschlüsse und Action Items aus Besprechungen präzise und ohne Zeitverlust fest.",
    "benefit2": "Spontane Ideen & Diktate: Erfassen Sie strategische Gedanken, Memos und E-Mail-Entwürfe einfach per Sprache – jederzeit und überall.",
    "benefit3": "Wichtige Gespräche festhalten: Dokumentieren Sie Telefonate und Kundengespräche lückenlos als Textgrundlage (Einverständnis vorausgesetzt).",
    "benefit4": "Strategie & Planung: Wandeln Sie Brainstorming-Sessions und Workshop-Ergebnisse schnell in verwertbare Unterlagen um.",
    "processTitle": "Einfach. Schnell. Vertraulich.",
    "processIntro": "Unser unkomplizierter Prozess spart Ihnen wertvolle Management-Zeit und liefert Ergebnisse, auf die Sie sich verlassen können:",
    "step1": "Aufnahme hochladen: Meeting-Mitschnitt, Diktat etc. sicher per Klick starten.",
    "step2": "KI-Transkription: Präzise Umwandlung durch Business-optimierte Spracherkennung.",
    "step3": "Sichere Verarbeitung: Streng DSGVO-konform & verschlüsselt auf EU-Servern.",
    "step4": "Sofort einsatzbereit: Formatierter Text für Reports, Protokolle, CRM oder E-Mails.",
    "advantagesTitle": "Ihr klarer Vorteil für Führung & Produktivität",
    "advantagesIntro": "Steigern Sie die Effektivität Ihrer Arbeit und gewinnen Sie Freiraum für strategische Aufgaben:",
    "advantage1": "Massive Zeitersparnis: Delegieren Sie das Tippen. Gewinnen Sie Stunden für strategische Führung, Kundenpflege und wichtige Kernaufgaben zurück.",
    "advantage2": "Gesteigerte Management-Effizienz: Beschleunigen Sie Reporting, Protokollierung und Informationsverteilung im Team.",
    "advantage3": "Präzise Dokumentation: Erhalten Sie genaue Textprotokolle als verlässliche Grundlage für Entscheidungen und Compliance.",
    "advantage4": "Höchste Datensicherheit: Schützen Sie sensible Geschäftsinformationen durch DSGVO-konforme Verarbeitung in der EU.",
    "integrationTitle": "Nahtlose Integration in Ihre Business-Tools",
    "emailTitle": "E-Mail Transkription",
    "emailText": "Der schnellste Weg für dringende Memos. Senden Sie Ihre Audiodatei als Anhang – Diktat AI liefert den Text diskret zurück.",
    "emailLink": "So funktioniert's →",
    "apiTitle": "API-Anbindung",
    "apiText": "Integrieren Sie Diktat AI direkt in Ihr CRM-System oder andere Business-Anwendungen für automatisierte Workflows.",
    "apiLink": "Individuelle Lösung anfragen →",
    "faqTitle": "Häufig gestellte Fragen",
    "faq1Question": "Was bringt Diktat AI meinem Unternehmen?",
    "faq1Answer": "Diktat AI wandelt gesprochene Inhalte automatisch in Text um. Das spart enorm viel Zeit bei der Dokumentation und ermöglicht Ihnen, sich auf höherwertige Aufgaben zu konzentrieren.",
    "faq2Question": "Sind unsere Geschäftsdaten sicher?",
    "faq2Answer": "Ja. Wir arbeiten streng nach DSGVO, nutzen Verschlüsselung und verarbeiten alle Daten ausschließlich auf Servern innerhalb der EU. Ihre Business-Daten sind geschützt.",
    "faq3Question": "Wie genau sind die Transkriptionen?",
    "faq3Answer": "Die Genauigkeit ist bei guter Audioqualität sehr hoch und für die meisten Geschäftsanwendungen hervorragend geeignet. Sie erhalten eine solide Textbasis, die schnell finalisiert werden kann.",
    "faq4Question": "Ist die Bedienung kompliziert?",
    "faq4Answer": "Nein, Diktat AI ist bewusst extrem einfach gestaltet: Aufnahme hochladen, kurz warten, Text erhalten. Keine Installation, keine Schulung nötig. Sie können sofort starten.",
    "finalCtaTitle": "Schluss mit Tipp-Aufwand: Mehr Zeit für Führung",
    "finalCtaText": "Optimieren Sie Ihre Arbeitsabläufe, steigern Sie die Produktivität und fokussieren Sie sich auf das Wachstum Ihres Unternehmens.",
    "startFree": "Kostenlos starten",
    "viewPricing": "Preise ansehen",
    "pricingModels": "Preismodelle für Unternehmen",
    "securityArchitecture": "Sicherheitsarchitektur"
  },
  "en": {
    "seoTitle": "Business & Management Transcription - Diktat AI",
    "seoDescription": "Diktat AI for business customers: Efficient transcription for meeting minutes, strategy notes, and dictations. Save time and boost your productivity.",
    "heroTitle": "Diktat AI for Business & Management",
    "heroSubtitle": "Transform meeting minutes, strategy notes, and dictated ideas into precise text in a flash",
    "mainText": "Save valuable leadership time and boost your productivity – secure & GDPR-compliant.",
    "ctaButton": "Boost Efficiency Now",
    "businessBenefitsTitle": "Your Strategic Advantage in Business",
    "businessBenefitsIntro": "Discover how executives, managers, and busy professionals use Diktat AI to optimize their daily tasks:",
    "benefit1": "Efficient Meeting Documentation: Precisely capture results, decisions, and action items from meetings without wasting time.",
    "benefit2": "Spontaneous Ideas & Dictations: Easily capture strategic thoughts, memos, and email drafts by voice – anytime, anywhere.",
    "benefit3": "Important Conversations: Document phone calls and customer conversations comprehensively as text basis (with consent).",
    "benefit4": "Strategy & Planning: Quickly convert brainstorming sessions and workshop results into usable documents.",
    "processTitle": "Simple. Fast. Confidential.",
    "processIntro": "Our straightforward process saves you valuable management time and delivers reliable results:",
    "step1": "Upload Recording: Start your meeting recording or dictation securely with one click.",
    "step2": "AI Transcription: Precise conversion through business-optimized speech recognition.",
    "step3": "Secure Processing: Strictly GDPR-compliant & encrypted on EU servers.",
    "step4": "Ready to Use: Formatted text for reports, minutes, CRM, or emails.",
    "advantagesTitle": "Your Clear Advantage for Leadership & Productivity",
    "advantagesIntro": "Increase the effectiveness of your work and gain freedom for strategic tasks:",
    "advantage1": "Massive Time Savings: Delegate typing. Regain hours for strategic leadership, customer care, and important core tasks.",
    "advantage2": "Enhanced Management Efficiency: Accelerate reporting, documentation, and information distribution in your team.",
    "advantage3": "Precise Documentation: Get accurate text protocols as a reliable basis for decisions and compliance.",
    "advantage4": "Highest Data Security: Protect sensitive business information through GDPR-compliant processing in the EU.",
    "integrationTitle": "Seamless Integration with Your Business Tools",
    "emailTitle": "Email Transcription",
    "emailText": "The fastest way for urgent memos. Send your audio file as an attachment – Diktat AI delivers the text discreetly.",
    "emailLink": "How it works →",
    "apiTitle": "API Integration",
    "apiText": "Integrate Diktat AI directly into your CRM system or other business applications for automated workflows.",
    "apiLink": "Request custom solution →",
    "faqTitle": "Frequently Asked Questions",
    "faq1Question": "What does Diktat AI bring to my company?",
    "faq1Answer": "Diktat AI automatically converts spoken content into text. This saves enormous time in documentation and allows you to focus on higher-value tasks.",
    "faq2Question": "Are our business data secure?",
    "faq2Answer": "Yes. We work strictly according to GDPR, use encryption, and process all data exclusively on servers within the EU. Your business data is protected.",
    "faq3Question": "How accurate are the transcriptions?",
    "faq3Answer": "The accuracy is very high with good audio quality and excellent for most business applications. You get a solid text basis that can be quickly finalized.",
    "faq4Question": "Is it complicated to use?",
    "faq4Answer": "No, Diktat AI is deliberately extremely simple: upload recording, wait briefly, get text. No installation, no training needed. You can start immediately.",
    "finalCtaTitle": "End Typing Effort: More Time for Leadership",
    "finalCtaText": "Optimize your workflows, increase productivity, and focus on growing your business.",
    "startFree": "Start Free",
    "viewPricing": "View Pricing",
    "pricingModels": "Pricing Models for Businesses",
    "securityArchitecture": "Security Architecture"
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
