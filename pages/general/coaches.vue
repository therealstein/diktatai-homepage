<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div class="hero min-h-[50vh] relative" style="background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%); background-size: cover; background-position: center;">
      <div class="hero-content text-center">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl">
          <h1 class="font-display text-4xl font-bold text-white mb-4" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('heroTitle') }}
          </h1>
          <p class="text-xl text-white mb-8" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('heroSubtitle') }}
          </p>
          <a :href="registerUrl">
            <button class="font-display bg-white text-pink-500 text-xl font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide">
              {{ t('heroCta') }}
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- "Aha!" Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('ahaMomentTitle') }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('focusTitle') }}
              </h3>
              <p>
                {{ t('focusText') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('documentationTitle') }}
              </h3>
              <p>
                {{ t('documentationText') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('preparationTitle') }}
              </h3>
              <p>
                {{ t('preparationText') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('timeTitle') }}
              </h3>
              <p>
                {{ t('timeText') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Core Features Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('featuresTitle') }}
          </h2>
          
          <div class="space-y-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('clientSessionTitle') }}
              </h3>
              <p>
                {{ t('clientSessionText') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('dictationTitle') }}
              </h3>
              <p>
                {{ t('dictationText') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('workshopTitle') }}
              </h3>
              <p>
                {{ t('workshopText') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('interviewTitle') }}
              </h3>
              <p>
                {{ t('interviewText') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Security Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('securityTitle') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('securitySubtitle') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('gdprTitle') }}
                  </h3>
                  <p>
                    {{ t('gdprText') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('serverTitle') }}
                  </h3>
                  <p>
                    {{ t('serverText') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('encryptionTitle') }}
                  </h3>
                  <p>
                    {{ t('encryptionText') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('sharingTitle') }}
                  </h3>
                  <p>
                    {{ t('sharingText') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Simplicity Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('simplicityTitle') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('simplicitySubtitle') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4">1</div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t('uploadTitle') }}
                </h3>
                <p>
                  {{ t('uploadText') }}
                </p>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4">2</div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t('aiTitle') }}
                </h3>
                <p>
                  {{ t('aiText') }}
                </p>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4">3</div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t('textTitle') }}
                </h3>
                <p>
                  {{ t('textText') }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 card bg-base-200 p-6 rounded-2xl border border-base-300">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t('emailTitle') }}
                </h3>
                <p>
                  {{ t('emailText') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonials Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('testimonialsTitle') }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex flex-col items-center text-center">
                <div class="avatar placeholder mb-4">
                  <div class="bg-neutral text-neutral-content rounded-full w-16">
                    <span class="text-2xl">MK</span>
                  </div>
                </div>
                <p class="mb-4">
                  {{ t('testimonial1') }}
                </p>
                <p class="font-bold">
                  {{ t('testimonial1Name') }}
                </p>
                <p class="text-sm">
                  {{ t('testimonial1Role') }}
                </p>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex flex-col items-center text-center">
                <div class="avatar placeholder mb-4">
                  <div class="bg-neutral text-neutral-content rounded-full w-16">
                    <span class="text-2xl">TS</span>
                  </div>
                </div>
                <p class="mb-4">
                  {{ t('testimonial2') }}
                </p>
                <p class="font-bold">
                  {{ t('testimonial2Name') }}
                </p>
                <p class="text-sm">
                  {{ t('testimonial2Role') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA Section -->
        <div class="card bg-gradient-to-br from-pink-500/10 to-blue-500/10 shadow-xl p-8 rounded-3xl border border-pink-500/20">
          <h2 class="font-display text-3xl font-bold mb-4 text-center">
            {{ t('ctaTitle') }}
          </h2>
          <p class="text-lg text-center mb-8">
            {{ t('ctaSubtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="registerUrl">
              <button class="btn btn-primary btn-lg">
                {{ t('ctaButton1') }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing">
              <button class="btn btn-outline btn-lg">
                {{ t('ctaButton2') }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const { registerUrl } = useAppUrl();

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();

useHead({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description')
    }
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }],
})


</script>

<i18n lang="json">
{
  "de": {
    "meta": {
      "title": "Diktat AI für Coaches & Berater = Effiziente Gesprächsdokumentation",
      "description": "Diktat AI für Coaches: Verwandeln Sie Ihre Coaching-Sessions, Beratungsgespräche und Workshops mühelos in Text. Sparen Sie Zeit bei der Dokumentation."
    },
    "heroTitle": "Ihre Expertise liegt im Gespräch. Nicht im Tippen.",
    "heroSubtitle": "Sind Sie es leid, wertvolle Zeit nach Kundengesprächen, Coachings oder Workshops mit dem Abtippen von Notizen zu verbringen? Diktat AI nimmt Ihnen diese Last ab.",
    "heroCta": "Ja, ich will Zeit sparen & Transkripte automatisieren!",
    "ahaMomentTitle": "Der \"Aha!\"-Moment - Was Diktat AI für SIE tut",
    "focusTitle": "Volle Konzentration im Gespräch",
    "focusText": "Keine Ablenkung durch paralleles Mitschreiben. Hören Sie aktiv zu, erfassen Sie Nuancen, bauen Sie tiefere Verbindungen auf.",
    "documentationTitle": "Mühelose Dokumentation",
    "documentationText": "Nach dem Termin einfach die Aufnahme hochladen. Diktat AI erstellt ein präzises Protokoll Ihrer Sitzung, Ihres Calls oder Ihrer Diktate.",
    "preparationTitle": "Schnellere Nachbereitung",
    "preparationText": "Greifen Sie sofort auf schriftliche Inhalte zu. Identifizieren Sie Kernaussagen, nächste Schritte und wichtige Details in Minuten statt Stunden.",
    "timeTitle": "Mehr Zeit für das Wesentliche",
    "timeText": "Investieren Sie die gewonnene Zeit in die Analyse, die Entwicklung von Strategien, die Akquise oder Ihre eigene Weiterbildung.",
    "featuresTitle": "Wie Diktat AI IHREN Arbeitsalltag transformiert",
    "clientSessionTitle": "Client Session Transcription",
    "clientSessionText": "Lückenlose, genaue Dokumentation jeder Sitzung als Text. Perfekt für Reflexion, Reporting und die Nachverfolgung von Fortschritten.",
    "dictationTitle": "Dictation to Text",
    "dictationText": "Halten Sie spontane Ideen, Konzepte, E-Mail-Entwürfe oder To-Dos einfach per Sprache fest. Diktat AI schreibt es für Sie auf.",
    "workshopTitle": "Workshop & Group Coaching Recap",
    "workshopText": "Erfassen Sie mühelos die vielfältigen Beiträge und Ergebnisse von Gruppensitzungen als übersichtlichen Text.",
    "interviewTitle": "Interview Analysis",
    "interviewText": "Wandeln Sie geführte Interviews schnell in Text um, um Muster zu erkennen und fundierte Analysen zu erstellen.",
    "securityTitle": "Absolute Vertraulichkeit. Garantiert.",
    "securitySubtitle": "Wir verstehen die Sensibilität Ihrer Arbeit und den hohen Stellenwert der Vertraulichkeit von Kundendaten.",
    "gdprTitle": "DSGVO-Konformität",
    "gdprText": "Ihre Daten werden nach höchsten europäischen Datenschutzstandards verarbeitet.",
    "serverTitle": "Serverstandort EU",
    "serverText": "Alle Aufnahmen und Transkripte bleiben innerhalb der Europäischen Union. Keine Umwege, keine Kompromisse.",
    "encryptionTitle": "Sichere Verschlüsselung",
    "encryptionText": "Modernste Technologie schützt Ihre Daten während der Übertragung und Speicherung.",
    "sharingTitle": "Keine Weitergabe",
    "sharingText": "Ihre Inhalte dienen ausschließlich der Transkription durch unsere KI und werden niemals an Dritte weitergegeben.",
    "simplicityTitle": "Startklar in unter 60 Sekunden",
    "simplicitySubtitle": "Diktat AI ist bewusst intuitiv gestaltet. Kein IT-Studium nötig.",
    "uploadTitle": "Audio hochladen",
    "uploadText": "Einfach per Drag & Drop oder Klick (gängige Formate unterstützt).",
    "aiTitle": "KI arbeitet",
    "aiText": "Lehnen Sie sich zurück, während die Transkription läuft.",
    "textTitle": "Text erhalten",
    "textText": "Herunterladen, kopieren, weiterverwenden – fertig!",
    "emailTitle": "Optional: E-Mail-Transkription",
    "emailText": "Für noch mehr Flexibilität: Einfach Audiodatei an Ihre persönliche Diktat AI Adresse senden!",
    "testimonialsTitle": "Was Berater & Coaches sagen",
    "testimonial1": "\"Diktat AI hat meine Nachbereitungszeit halbiert. Ich kann mich jetzt viel mehr auf die eigentliche Coaching-Arbeit konzentrieren. Ein echter Game-Changer!\"",
    "testimonial1Name": "Maria K.",
    "testimonial1Role": "Business Coach",
    "testimonial2": "\"Endlich muss ich nicht mehr jede Sitzung mühsam abtippen. Die Genauigkeit ist beeindruckend und die DSGVO-Konformität gibt mir die nötige Sicherheit.\"",
    "testimonial2Name": "Thomas S.",
    "testimonial2Role": "Unternehmensberater",
    "ctaTitle": "Bereit, Ihre Produktivität zu steigern?",
    "ctaSubtitle": "Testen Sie Diktat AI jetzt unverbindlich und erleben Sie, wie einfach und effizient Transkription sein kann.",
    "ctaButton1": "Kostenlos testen",
    "ctaButton2": "Unsere fairen Preise ansehen"
  },
  "en": {
    "meta": {
      "title": "Diktat AI for Coaches & Consultants = Efficient Conversation Documentation",
      "description": "Diktat AI for Coaches: Transform your coaching sessions, consulting conversations, and workshops into text effortlessly. Save time on documentation."
    },
    "heroTitle": "Your expertise lies in conversation. Not in typing.",
    "heroSubtitle": "Tired of spending valuable time transcribing notes after client meetings, coaching sessions, or workshops? Diktat AI takes this burden off your shoulders.",
    "heroCta": "Yes, I want to save time & automate transcripts!",
    "ahaMomentTitle": "The \"Aha!\" Moment - What Diktat AI Does for YOU",
    "focusTitle": "Full Focus in Conversation",
    "focusText": "No distraction from parallel note-taking. Listen actively, capture nuances, build deeper connections.",
    "documentationTitle": "Effortless Documentation",
    "documentationText": "Simply upload the recording after the session. Diktat AI creates a precise protocol of your session, call, or dictation.",
    "preparationTitle": "Faster Follow-up",
    "preparationText": "Access written content immediately. Identify key points, next steps, and important details in minutes instead of hours.",
    "timeTitle": "More Time for What Matters",
    "timeText": "Invest the saved time in analysis, strategy development, acquisition, or your own further education.",
    "featuresTitle": "How Diktat AI Transforms YOUR Daily Work",
    "clientSessionTitle": "Client Session Transcription",
    "clientSessionText": "Complete, accurate documentation of every session as text. Perfect for reflection, reporting, and progress tracking.",
    "dictationTitle": "Dictation to Text",
    "dictationText": "Capture spontaneous ideas, concepts, email drafts, or to-dos simply by speaking. Diktat AI writes it down for you.",
    "workshopTitle": "Workshop & Group Coaching Recap",
    "workshopText": "Effortlessly capture the diverse contributions and results of group sessions as clear text.",
    "interviewTitle": "Interview Analysis",
    "interviewText": "Quickly convert conducted interviews into text to identify patterns and create informed analyses.",
    "securityTitle": "Absolute Confidentiality. Guaranteed.",
    "securitySubtitle": "We understand the sensitivity of your work and the high importance of client data confidentiality.",
    "gdprTitle": "GDPR Compliance",
    "gdprText": "Your data is processed according to the highest European data protection standards.",
    "serverTitle": "EU Server Location",
    "serverText": "All recordings and transcripts remain within the European Union. No detours, no compromises.",
    "encryptionTitle": "Secure Encryption",
    "encryptionText": "State-of-the-art technology protects your data during transmission and storage.",
    "sharingTitle": "No Sharing",
    "sharingText": "Your content is used exclusively for transcription by our AI and is never shared with third parties.",
    "simplicityTitle": "Ready in Under 60 Seconds",
    "simplicitySubtitle": "Diktat AI is deliberately designed to be intuitive. No IT degree required.",
    "uploadTitle": "Upload Audio",
    "uploadText": "Simply via drag & drop or click (common formats supported).",
    "aiTitle": "AI at Work",
    "aiText": "Sit back while the transcription runs.",
    "textTitle": "Get Text",
    "textText": "Download, copy, reuse - done!",
    "emailTitle": "Optional: Email Transcription",
    "emailText": "For even more flexibility: Simply send the audio file to your personal Diktat AI address!",
    "testimonialsTitle": "What Consultants & Coaches Say",
    "testimonial1": "\"Diktat AI has halved my follow-up time. I can now focus much more on the actual coaching work. A real game-changer!\"",
    "testimonial1Name": "Maria K.",
    "testimonial1Role": "Business Coach",
    "testimonial2": "\"Finally, I don't have to laboriously transcribe every session. The accuracy is impressive and the GDPR compliance gives me the necessary security.\"",
    "testimonial2Name": "Thomas S.",
    "testimonial2Role": "Business Consultant",
    "ctaTitle": "Ready to Boost Your Productivity?",
    "ctaSubtitle": "Try Diktat AI now without obligation and experience how simple and efficient transcription can be.",
    "ctaButton1": "Try for free",
    "ctaButton2": "View our fair prices"
  },
  "nl": {
    "meta": {
      "title": "Diktat AI voor Coaches & Adviseurs = Efficiënte Gespreksdocumentatie",
      "description": "Diktat AI voor Coaches: Zet uw coachingsessies, adviesgesprekken en workshops moeiteloos om in tekst. Bespaar tijd bij de documentatie."
    },
    "heroTitle": "Uw expertise ligt in het gesprek. Niet in het typen.",
    "heroSubtitle": "Bent u het zat om waardevolle tijd na klantgesprekken, coachings of workshops te verspillen aan het uittypen van notities? Diktat AI neemt deze last van u over.",
    "heroCta": "Ja, ik wil tijd besparen & transcripties automatiseren!",
    "ahaMomentTitle": "Het \"Aha!\"-moment - Wat Diktat AI voor U doet",
    "focusTitle": "Volledige concentratie in het gesprek",
    "focusText": "Geen afleiding door tegelijkertijd mee te schrijven. Luister actief, vang nuances op, bouw diepere verbindingen op.",
    "documentationTitle": "Moeiteloze documentatie",
    "documentationText": "Na de afspraak uploadt u eenvoudig de opname. Diktat AI maakt een nauwkeurig verslag van uw sessie, call of dictaten.",
    "preparationTitle": "Snellere nabewerking",
    "preparationText": "Krijg direct toegang tot schriftelijke inhoud. Identificeer kernuitspraken, volgende stappen en belangrijke details in minuten in plaats van uren.",
    "timeTitle": "Meer tijd voor het wezenlijke",
    "timeText": "Investeer de gewonnen tijd in analyse, strategieontwikkeling, acquisitie of uw eigen bijscholing.",
    "featuresTitle": "Hoe Diktat AI UW werkdag transformeert",
    "clientSessionTitle": "Client Session Transcription",
    "clientSessionText": "Naadloze, nauwkeurige documentatie van elke sessie als tekst. Perfect voor reflectie, rapportage en het volgen van voortgang.",
    "dictationTitle": "Dictation to Text",
    "dictationText": "Leg spontane ideeën, concepten, e-mailconcepten of to-do's eenvoudig vast via spraak. Diktat AI schrijft het voor u uit.",
    "workshopTitle": "Workshop & Group Coaching Recap",
    "workshopText": "Leg moeiteloos de diverse bijdragen en resultaten van groepssessies vast als overzichtelijke tekst.",
    "interviewTitle": "Interview Analysis",
    "interviewText": "Zet gevoerde interviews snel om in tekst om patronen te herkennen en onderbouwde analyses te maken.",
    "securityTitle": "Absolute vertrouwelijkheid. Gegarandeerd.",
    "securitySubtitle": "Wij begrijpen de gevoeligheid van uw werk en het grote belang van vertrouwelijkheid van klantgegevens.",
    "gdprTitle": "GDPR-Conformiteit",
    "gdprText": "Uw gegevens worden volgens de hoogste Europese privacynormen verwerkt.",
    "serverTitle": "Serverlocatie EU",
    "serverText": "Alle opnames en transcripties blijven binnen de Europese Unie. Geen omwegen, geen compromissen.",
    "encryptionTitle": "Veilige versleuteling",
    "encryptionText": "Modernste technologie beschermt uw gegevens tijdens overdracht en opslag.",
    "sharingTitle": "Geen doorgifte",
    "sharingText": "Uw inhoud dient uitsluitend voor transcriptie door onze AI en wordt nooit aan derden doorgegeven.",
    "simplicityTitle": "Startklaar in minder dan 60 seconden",
    "simplicitySubtitle": "Diktat AI is bewust intuïtief ontworpen. Geen IT-studie nodig.",
    "uploadTitle": "Audio uploaden",
    "uploadText": "Eenvoudig via drag & drop of klik (gangbare formaten ondersteund).",
    "aiTitle": "AI werkt",
    "aiText": "Leun achterover terwijl de transcriptie loopt.",
    "textTitle": "Tekst ontvangen",
    "textText": "Downloaden, kopiëren, hergebruiken – klaar!",
    "emailTitle": "Optioneel: E-mail-transcriptie",
    "emailText": "Voor nog meer flexibiliteit: Stuur gewoon het audiobestand naar uw persoonlijke Diktat AI adres!",
    "testimonialsTitle": "Wat adviseurs & coaches zeggen",
    "testimonial1": "\"Diktat AI heeft mijn nabewerkingstijd gehalveerd. Ik kan me nu veel meer op het eigenlijke coachingswerk concentreren. Een echte game-changer!\"",
    "testimonial1Name": "Maria K.",
    "testimonial1Role": "Business Coach",
    "testimonial2": "\"Eindelijk hoef ik niet meer elke sessie moeizaam uit te typen. De nauwkeurigheid is indrukwekkend en de GDPR-conformiteit geeft me de nodige zekerheid.\"",
    "testimonial2Name": "Thomas S.",
    "testimonial2Role": "Ondernemingsadviseur",
    "ctaTitle": "Klaar om uw productiviteit te verhogen?",
    "ctaSubtitle": "Test Diktat AI nu vrijblijvend en ervaar hoe eenvoudig en efficiënt transcriptie kan zijn.",
    "ctaButton1": "Gratis testen",
    "ctaButton2": "Onze eerlijke prijzen bekijken"
  },
  "es": {
    "meta": {
      "title": "Diktat AI para Coaches y Consultores = Documentación eficiente de conversaciones",
      "description": "Diktat AI para Coaches: Transforme sus sesiones de coaching, conversaciones de consultoría y talleres en texto sin esfuerzo. Ahorre tiempo en la documentación."
    },
    "heroTitle": "Su experiencia está en la conversación. No en escribir.",
    "heroSubtitle": "¿Está cansado de pasar tiempo valioso después de reuniones con clientes, sesiones de coaching o talleres transcribiendo notas? Diktat AI le quita esa carga.",
    "heroCta": "¡Sí, quiero ahorrar tiempo y automatizar transcripciones!",
    "ahaMomentTitle": "El momento \"¡Ajá!\" - Lo que Diktat AI hace por USTED",
    "focusTitle": "Concentración total en la conversación",
    "focusText": "Sin distracciones por tomar notas en paralelo. Escuche activamente, capte matices, construya conexiones más profundas.",
    "documentationTitle": "Documentación sin esfuerzo",
    "documentationText": "Después de la sesión, simplemente suba la grabación. Diktat AI crea un protocolo preciso de su sesión, llamada o dictado.",
    "preparationTitle": "Seguimiento más rápido",
    "preparationText": "Acceda al contenido escrito inmediatamente. Identifique puntos clave, próximos pasos y detalles importantes en minutos en lugar de horas.",
    "timeTitle": "Más tiempo para lo importante",
    "timeText": "Invierta el tiempo ahorrado en análisis, desarrollo de estrategias, adquisición o su propia formación continua.",
    "featuresTitle": "Cómo Diktat AI transforma SU trabajo diario",
    "clientSessionTitle": "Transcripción de sesiones con clientes",
    "clientSessionText": "Documentación completa y precisa de cada sesión en texto. Perfecto para reflexión, informes y seguimiento del progreso.",
    "dictationTitle": "Dictado a texto",
    "dictationText": "Capture ideas espontáneas, conceptos, borradores de correo o tareas simplemente hablando. Diktat AI lo escribe por usted.",
    "workshopTitle": "Resumen de talleres y coaching grupal",
    "workshopText": "Capture sin esfuerzo las diversas contribuciones y resultados de las sesiones grupales como texto claro.",
    "interviewTitle": "Análisis de entrevistas",
    "interviewText": "Convierta rápidamente entrevistas en texto para identificar patrones y crear análisis fundamentados.",
    "securityTitle": "Confidencialidad absoluta. Garantizada.",
    "securitySubtitle": "Entendemos la sensibilidad de su trabajo y la alta importancia de la confidencialidad de los datos de los clientes.",
    "gdprTitle": "Cumplimiento del RGPD",
    "gdprText": "Sus datos se procesan según los más altos estándares europeos de protección de datos.",
    "serverTitle": "Ubicación de servidores en la UE",
    "serverText": "Todas las grabaciones y transcripciones permanecen dentro de la Unión Europea. Sin desvíos, sin compromisos.",
    "encryptionTitle": "Cifrado seguro",
    "encryptionText": "Tecnología de última generación protege sus datos durante la transmisión y el almacenamiento.",
    "sharingTitle": "Sin compartir datos",
    "sharingText": "Su contenido se utiliza exclusivamente para la transcripción por nuestra IA y nunca se comparte con terceros.",
    "simplicityTitle": "Listo en menos de 60 segundos",
    "simplicitySubtitle": "Diktat AI está diseñado deliberadamente para ser intuitivo. No se requiere título en informática.",
    "uploadTitle": "Subir audio",
    "uploadText": "Simplemente mediante arrastrar y soltar o clic (formatos comunes compatibles).",
    "aiTitle": "La IA trabaja",
    "aiText": "Relájese mientras se ejecuta la transcripción.",
    "textTitle": "Obtener texto",
    "textText": "Descargar, copiar, reutilizar - ¡listo!",
    "emailTitle": "Opcional: Transcripción por correo electrónico",
    "emailText": "Para mayor flexibilidad: ¡Simplemente envíe el archivo de audio a su dirección personal de Diktat AI!",
    "testimonialsTitle": "Lo que dicen consultores y coaches",
    "testimonial1": "\"Diktat AI ha reducido mi tiempo de seguimiento a la mitad. Ahora puedo concentrarme mucho más en el trabajo real de coaching. ¡Un verdadero cambio de juego!\"",
    "testimonial1Name": "María K.",
    "testimonial1Role": "Business Coach",
    "testimonial2": "\"Por fin no tengo que transcribir laboriosamente cada sesión. La precisión es impresionante y el cumplimiento del RGPD me da la seguridad necesaria.\"",
    "testimonial2Name": "Tomás S.",
    "testimonial2Role": "Consultor empresarial",
    "ctaTitle": "¿Listo para aumentar su productividad?",
    "ctaSubtitle": "Pruebe Diktat AI ahora sin compromiso y experimente lo simple y eficiente que puede ser la transcripción.",
    "ctaButton1": "Probar gratis",
    "ctaButton2": "Ver nuestros precios justos"
  },
  "fr": {
    "meta": {
      "title": "Diktat AI pour Coaches et Consultants = Documentation efficace des conversations",
      "description": "Diktat AI pour Coaches : Transformez vos séances de coaching, conversations de conseil et ateliers en texte sans effort. Gagnez du temps sur la documentation."
    },
    "heroTitle": "Votre expertise réside dans la conversation. Pas dans la saisie.",
    "heroSubtitle": "Fatigué de passer un temps précieux après les réunions clients, les séances de coaching ou les ateliers à transcrire des notes ? Diktat AI vous libère de cette charge.",
    "heroCta": "Oui, je veux gagner du temps et automatiser les transcriptions !",
    "ahaMomentTitle": "Le moment \"Aha !\" - Ce que Diktat AI fait pour VOUS",
    "focusTitle": "Concentration totale dans la conversation",
    "focusText": "Aucune distraction due à la prise de notes en parallèle. Écoutez activement, saisissez les nuances, créez des connexions plus profondes.",
    "documentationTitle": "Documentation sans effort",
    "documentationText": "Après la session, il suffit de télécharger l'enregistrement. Diktat AI crée un protocole précis de votre séance, appel ou dictée.",
    "preparationTitle": "Suivi plus rapide",
    "preparationText": "Accédez immédiatement au contenu écrit. Identifiez les points clés, les prochaines étapes et les détails importants en minutes plutôt qu'en heures.",
    "timeTitle": "Plus de temps pour l'essentiel",
    "timeText": "Investissez le temps gagné dans l'analyse, le développement de stratégies, l'acquisition ou votre propre formation continue.",
    "featuresTitle": "Comment Diktat AI transforme VOTRE quotidien professionnel",
    "clientSessionTitle": "Transcription de séances client",
    "clientSessionText": "Documentation complète et précise de chaque séance sous forme de texte. Parfait pour la réflexion, les rapports et le suivi des progrès.",
    "dictationTitle": "Dictée en texte",
    "dictationText": "Capturez simplement des idées spontanées, des concepts, des brouillons d'e-mails ou des tâches par la parole. Diktat AI l'écrit pour vous.",
    "workshopTitle": "Récapitulatif d'atelier et de coaching de groupe",
    "workshopText": "Capturez sans effort les contributions et résultats divers des séances de groupe sous forme de texte clair.",
    "interviewTitle": "Analyse d'entretien",
    "interviewText": "Convertissez rapidement les entretiens menés en texte pour identifier les tendances et créer des analyses éclairées.",
    "securityTitle": "Confidentialité absolue. Garantie.",
    "securitySubtitle": "Nous comprenons la sensibilité de votre travail et l'importance cruciale de la confidentialité des données clients.",
    "gdprTitle": "Conformité RGPD",
    "gdprText": "Vos données sont traitées selon les normes européennes les plus strictes en matière de protection des données.",
    "serverTitle": "Emplacement serveur UE",
    "serverText": "Tous les enregistrements et transcriptions restent au sein de l'Union européenne. Aucun détour, aucun compromis.",
    "encryptionTitle": "Chiffrement sécurisé",
    "encryptionText": "Une technologie de pointe protège vos données pendant la transmission et le stockage.",
    "sharingTitle": "Aucun partage",
    "sharingText": "Votre contenu est utilisé exclusivement pour la transcription par notre IA et n'est jamais partagé avec des tiers.",
    "simplicityTitle": "Prêt en moins de 60 secondes",
    "simplicitySubtitle": "Diktat AI est délibérément conçu pour être intuitif. Aucun diplôme en informatique requis.",
    "uploadTitle": "Télécharger l'audio",
    "uploadText": "Simplement par glisser-déposer ou clic (formats courants pris en charge).",
    "aiTitle": "L'IA au travail",
    "aiText": "Détendez-vous pendant que la transcription s'exécute.",
    "textTitle": "Obtenir le texte",
    "textText": "Télécharger, copier, réutiliser - terminé !",
    "emailTitle": "Facultatif : Transcription par e-mail",
    "emailText": "Pour encore plus de flexibilité : Envoyez simplement le fichier audio à votre adresse personnelle Diktat AI !",
    "testimonialsTitle": "Ce que disent les consultants et coaches",
    "testimonial1": "\"Diktat AI a réduit de moitié mon temps de suivi. Je peux maintenant me concentrer beaucoup plus sur le travail de coaching réel. Un vrai changement de jeu !\"",
    "testimonial1Name": "Maria K.",
    "testimonial1Role": "Coach d'affaires",
    "testimonial2": "\"Enfin, je n'ai plus besoin de transcrire laborieusement chaque session. La précision est impressionnante et la conformité RGPD me donne la sécurité nécessaire.\"",
    "testimonial2Name": "Thomas S.",
    "testimonial2Role": "Consultant en entreprise",
    "ctaTitle": "Prêt à booster votre productivité ?",
    "ctaSubtitle": "Essayez Diktat AI maintenant sans engagement et découvrez à quel point la transcription peut être simple et efficace.",
    "ctaButton1": "Essayer gratuitement",
    "ctaButton2": "Voir nos prix équitables"
  },
  "sv": {
    "meta": {
      "title": "Diktat AI för Coaches och Konsulter = Effektiv samtalsdokumentation",
      "description": "Diktat AI för Coaches: Förvandla dina coachingpass, konsultsamtal och workshops till text utan ansträngning. Spara tid på dokumentation."
    },
    "heroTitle": "Din expertis ligger i samtalet. Inte i skrivandet.",
    "heroSubtitle": "Trött på att spendera värdefull tid efter kundmöten, coachingsessioner eller workshops med att transkribera anteckningar? Diktat AI tar denna börda från dina axlar.",
    "heroCta": "Ja, jag vill spara tid och automatisera transkriptioner!",
    "ahaMomentTitle": "\"Aha!\"-ögonblicket - Vad Diktat AI gör för DIG",
    "focusTitle": "Fullt fokus i samtalet",
    "focusText": "Ingen distraktion från parallell anteckningsföring. Lyssna aktivt, fånga nyanser, bygg djupare kopplingar.",
    "documentationTitle": "Enkel dokumentation",
    "documentationText": "Efter sessionen laddar du helt enkelt upp inspelningen. Diktat AI skapar ett exakt protokoll av din session, samtal eller diktamen.",
    "preparationTitle": "Snabbare uppföljning",
    "preparationText": "Få omedelbar tillgång till skrivet innehåll. Identifiera kärnpunkter, nästa steg och viktiga detaljer på minuter istället för timmar.",
    "timeTitle": "Mer tid för det väsentliga",
    "timeText": "Investera den sparade tiden i analys, strategiutveckling, kundanskaffning eller din egen vidareutbildning.",
    "featuresTitle": "Hur Diktat AI transformerar DIN arbetsvardag",
    "clientSessionTitle": "Klientsessions transkription",
    "clientSessionText": "Fullständig, exakt dokumentation av varje session som text. Perfekt för reflektion, rapportering och framstegsuppföljning.",
    "dictationTitle": "Diktering till text",
    "dictationText": "Fånga spontana idéer, koncept, e-postutkast eller att-göra-listor helt enkelt genom att tala. Diktat AI skriver ner det åt dig.",
    "workshopTitle": "Workshop och gruppcoaching sammanfattning",
    "workshopText": "Fånga enkelt de olika bidragen och resultaten från gruppsessioner som tydlig text.",
    "interviewTitle": "Intervjuanalys",
    "interviewText": "Konvertera genomförda intervjuer snabbt till text för att identifiera mönster och skapa välinformerade analyser.",
    "securityTitle": "Absolut konfidentialitet. Garanterad.",
    "securitySubtitle": "Vi förstår känsligheten i ditt arbete och den höga betydelsen av konfidentialitet för kunddata.",
    "gdprTitle": "GDPR-efterlevnad",
    "gdprText": "Dina data behandlas enligt de högsta europeiska dataskyddsstandarderna.",
    "serverTitle": "Serverplats i EU",
    "serverText": "Alla inspelningar och transkriptioner förblir inom Europeiska unionen. Inga omvägar, inga kompromisser.",
    "encryptionTitle": "Säker kryptering",
    "encryptionText": "Toppmodern teknologi skyddar dina data under överföring och lagring.",
    "sharingTitle": "Ingen delning",
    "sharingText": "Ditt innehåll används uteslutande för transkription av vår AI och delas aldrig med tredje part.",
    "simplicityTitle": "Redo på under 60 sekunder",
    "simplicitySubtitle": "Diktat AI är medvetet utformat för att vara intuitivt. Ingen IT-examen krävs.",
    "uploadTitle": "Ladda upp ljud",
    "uploadText": "Helt enkelt via dra och släpp eller klick (vanliga format stöds).",
    "aiTitle": "AI i arbete",
    "aiText": "Luta dig tillbaka medan transkriptionen körs.",
    "textTitle": "Få text",
    "textText": "Ladda ner, kopiera, återanvänd - klart!",
    "emailTitle": "Valfritt: E-posttranskription",
    "emailText": "För ännu mer flexibilitet: Skicka helt enkelt ljudfilen till din personliga Diktat AI-adress!",
    "testimonialsTitle": "Vad konsulter och coaches säger",
    "testimonial1": "\"Diktat AI har halverat min uppföljningstid. Jag kan nu fokusera mycket mer på det faktiska coachingarbetet. En riktig spelväxlare!\"",
    "testimonial1Name": "Maria K.",
    "testimonial1Role": "Business Coach",
    "testimonial2": "\"Äntligen behöver jag inte mödosamt transkribera varje session. Noggrannheten är imponerande och GDPR-efterlevnaden ger mig nödvändig säkerhet.\"",
    "testimonial2Name": "Thomas S.",
    "testimonial2Role": "Företagskonsult",
    "ctaTitle": "Redo att öka din produktivitet?",
    "ctaSubtitle": "Prova Diktat AI nu utan förpliktelser och upplev hur enkel och effektiv transkription kan vara.",
    "ctaButton1": "Testa gratis",
    "ctaButton2": "Se våra rättvisa priser"
  }
}
</i18n>

<style scoped>
/* Override accent and secondary colors with pink */
:deep(.text-accent) {
  color: #EF56A4 !important;
}

:deep(.text-secondary) {
  color: #EF56A4 !important;
}

:deep(.bg-accent) {
  background-color: #EF56A4 !important;
}

:deep(.bg-secondary) {
  background-color: #EF56A4 !important;
}

.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style> 