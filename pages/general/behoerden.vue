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
        <!-- Introduction -->
        <div class="mb-12">
          <p class="text-lg">
            {{ t("introduction.paragraph") }}
          </p>
        </div>

        <!-- Zeitersparnis Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("timeSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("timeSection.paragraph") }}
          </p>
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
              <span>{{ t("timeSection.points.point1") }}</span>
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
              <span>{{ t("timeSection.points.point2") }}</span>
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
              <span>{{ t("timeSection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Präzision Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("precisionSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("precisionSection.paragraph") }}
          </p>
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
              <span>{{ t("precisionSection.points.point1") }}</span>
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
              <span>{{ t("precisionSection.points.point2") }}</span>
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
              <span>{{ t("precisionSection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Datensicherheit Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("securitySection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("securitySection.paragraph") }}
          </p>
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
              <span>{{ t("securitySection.points.point1") }}</span>
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
              <span>{{ t("securitySection.points.point2") }}</span>
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
              <span>{{ t("securitySection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Integration Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("integrationSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("integrationSection.paragraph") }}
          </p>
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
              <span>{{ t("integrationSection.points.point1") }}</span>
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
              <span>{{ t("integrationSection.points.point2") }}</span>
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
              <span>{{ t("integrationSection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Anwendungsbeispiele Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("examplesSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("examplesSection.paragraph") }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 7-3-3m4-3v8M19 16v4"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example1.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example1.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example2.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example2.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example3.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example3.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example4.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example4.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300 md:col-span-2"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example5.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example5.description") }}</p>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("conclusion.title") }}
          </h2>
          <p class="text-lg">
            {{ t("conclusion.paragraph") }}
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
            {{ t("cta.paragraph") }}
          </p>
          <div class="text-center">
            <NuxtLinkLocale to="general-kontakt">
              <button
                class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
              >
                {{ t("cta.button") }}
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
  useScope: "local",
});

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();

useHead(() => ({
  title: t("hero.title"),
  meta: [
    {
      name: "description",
      content: t("seo.description"),
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl.value },
    { property: "og:title", content: t("hero.title") },
    { property: "og:description", content: t("seo.description") },
    {
      property: "og:image",
      content: "https://diktat.ai/images/behoerden-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/behoerden-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "Wie Diktat AI Behörden-Dokumentation beschleunigt – effizient, sicher, DSGVO‑konform."
    },
    "hero": {
      "title": "Mehr Zeit für Bürger: Wie Diktat AI die Dokumentation in Behörden revolutioniert",
      "subtitle": "Der öffentliche Sektor steht vor besonderen Herausforderungen: Steigende Anforderungen an Transparenz und Dokumentation treffen auf knappe Ressourcen und den ständigen Druck, effizienter zu arbeiten. Diktat AI ist Ihre intelligente Lösung für schnelle, präzise und sichere Transkriptionen im Behördenumfeld."
    },
    "introduction": {
      "paragraph": "Die Erstellung von Protokollen für Sitzungen, die Verschriftlichung von Diktaten für Bescheide und Berichte oder die Dokumentation von Bürgergesprächen bindet wertvolle Arbeitszeit, die an anderer Stelle dringend benötigt wird. Das manuelle Abtippen von Audioaufnahmen ist nicht nur zeitaufwändig, sondern auch fehleranfällig. Hier setzt Diktat AI an – Ihre smarte Lösung für effiziente Verwaltungsprozesse."
    },
    "timeSection": {
      "title": "Massive Zeitersparnis für Kernaufgaben",
      "paragraph": "Stellen Sie sich vor, wie viel Zeit Ihre Mitarbeiterinnen und Mitarbeiter täglich mit dem Abtippen von Diktaten oder dem Erstellen von Sitzungsprotokollen verbringen. Diktat AI reduziert diesen Aufwand drastisch:",
      "points": {
        "point1": "Schnelle Protokollierung: Wandeln Sie Aufnahmen von Gemeinderatssitzungen, Ausschusstreffen, internen Besprechungen oder Anhörungen in Minutenschnelle in Text um. Die gewonnene Zeit kann direkt in die inhaltliche Nachbereitung oder andere wichtige Aufgaben fließen.",
        "point2": "Effizienter Schriftverkehr: Diktieren Sie Bescheide, Aktenvermerke, Berichte oder E-Mails und lassen Sie Diktat AI die Umwandlung in geschriebenen Text übernehmen. Ideal für Führungskräfte, Sachbearbeiter und Juristen in der Verwaltung.",
        "point3": "Entlastung von Schreibkräften: Automatisieren Sie einen Großteil der Transkriptionsarbeit und ermöglichen Sie es Ihren Schreibkräften, sich auf komplexere administrative Aufgaben zu konzentrieren."
      }
    },
    "precisionSection": {
      "title": "Präzision und Nachvollziehbarkeit in der Dokumentation",
      "paragraph": "Gerade im öffentlichen Sektor ist eine akkurate Dokumentation unerlässlich. Diktat AI liefert eine hochpräzise Textgrundlage:",
      "points": {
        "point1": "Minimierung von Übertragungsfehlern: Unsere KI ist darauf trainiert, Sprache exakt zu erkennen, wodurch Fehler, die beim manuellen Tippen entstehen können, reduziert werden.",
        "point2": "Verbesserte Durchsuchbarkeit: Transkribierte Texte sind digital durchsuchbar. Finden Sie spezifische Informationen in Protokollen oder Diktaten sekundenschnell wieder, ohne lange Audioaufnahmen durchhören zu müssen.",
        "point3": "Konsistente Qualität: Die KI liefert gleichbleibend gute Ergebnisse, unabhängig von der Tagesform oder Ermüdung, die bei manueller Transkription eine Rolle spielen kann."
      }
    },
    "securitySection": {
      "title": "Höchste Datensicherheit und DSGVO-Konformität",
      "paragraph": "Der Umgang mit sensiblen Bürger- und Verwaltungsdaten erfordert höchste Sicherheitsstandards. Diktat AI ist sich dieser Verantwortung bewusst:",
      "points": {
        "point1": "Strikte DSGVO-Einhaltung: Wir verarbeiten Ihre Daten streng nach den Vorgaben der europäischen Datenschutz-Grundverordnung. Vertraulichkeit und Sicherheit stehen an erster Stelle.",
        "point2": "Sichere Verarbeitung: Ihre Audioaufnahmen und die daraus generierten Texte werden verschlüsselt und ausschließlich auf sicheren Servern innerhalb der EU verarbeitet.",
        "point3": "Keine Kompromisse bei der Vertraulichkeit: Sie behalten die volle Kontrolle über Ihre Daten. Diktat AI ist ein Werkzeug, das Ihnen dient, ohne Ihre Daten für andere Zwecke zu nutzen."
      }
    },
    "integrationSection": {
      "title": "Einfache Integration in bestehende Abläufe",
      "paragraph": "Die Einführung neuer Tools sollte keine Hürde darstellen. Diktat AI ist bewusst einfach gehalten:",
      "points": {
        "point1": "Intuitive Bedienung: Laden Sie Audiodateien einfach über unsere Plattform hoch oder nutzen Sie die praktische E-Mail-Funktion. Keine komplizierte Softwareinstallation oder langwierige Schulung notwendig.",
        "point2": "Flexibel einsetzbar: Ob am Arbeitsplatzrechner oder mobil per Diktiergerät aufgenommene Dateien – Diktat AI passt sich Ihren Bedürfnissen an.",
        "point3": "Schnelle Ergebnisse: Erhalten Sie Ihre Transkripte zeitnah zurück und integrieren Sie sie direkt in Ihre gewohnten Textverarbeitungs- oder Dokumentenmanagementsysteme."
      }
    },
    "examplesSection": {
      "title": "Konkrete Anwendungsbeispiele in Behörden",
      "paragraph": "Diktat AI lässt sich in zahlreichen Bereichen der öffentlichen Verwaltung gewinnbringend einsetzen:",
      "examples": {
        "example1": {
          "title": "Gremien & Sitzungen",
          "description": "Protokolle von Stadtrat-, Kreistag-, Ausschuss- oder internen Teamsitzungen schnell und akkurat erstellen."
        },
        "example2": {
          "title": "Rechtsabteilungen",
          "description": "Diktate für Schriftsätze, Vermerke und Gutachten effizient in Text umwandeln."
        },
        "example3": {
          "title": "Sozial- & Jugendämter",
          "description": "Dokumentation von Beratungsgesprächen oder Hausbesuchen unter Beachtung datenschutzrechtlicher Vorgaben."
        },
        "example4": {
          "title": "Bauämter & Planungsämter",
          "description": "Mitschriften von Ortsterminen, Anhörungen oder Planungsbesprechungen zeitnah verfügbar machen."
        },
        "example5": {
          "title": "Interne Verwaltung",
          "description": "Erstellung von Rundschreiben, Berichten oder Schulungsunterlagen aus diktierten Vorlagen ohne langwierige Tipparbeit."
        }
      }
    },
    "conclusion": {
      "title": "Der Schritt zur modernen Verwaltung",
      "paragraph": "Diktat AI ist mehr als nur ein Transkriptionsdienst. Es ist ein Werkzeug zur Modernisierung Ihrer Verwaltungsprozesse. Indem Sie Routineaufgaben wie das Tippen automatisieren, schaffen Sie Freiräume für Ihre Mitarbeiter, erhöhen die Qualität Ihrer Dokumentation und gewährleisten gleichzeitig höchste Datensicherheit nach DSGVO. Machen Sie den Schritt zu einer effizienteren und zeitgemäßen Verwaltung."
    },
    "cta": {
      "title": "Bereit für optimierte Dokumentationsprozesse?",
      "paragraph": "Entdecken Sie, wie Diktat AI Ihnen helfen kann, wertvolle Zeit zu sparen und die Effizienz zu steigern. Kontaktieren Sie uns für eine unverbindliche Beratung oder erfahren Sie mehr über unsere Lösungen für den öffentlichen Sektor.",
      "button": "Jetzt Kontakt aufnehmen"
    }
  },
  "en": {
    "seo": {
      "description": "How Diktat AI speeds up documentation in the public sector – efficient, secure and GDPR‑compliant."
    },
    "hero": {
      "title": "More Time for Citizens: How Diktat AI Revolutionizes Documentation in Public Authorities",
      "subtitle": "The public sector faces unique challenges: Increasing demands for transparency and documentation meet limited resources and constant pressure to work more efficiently. Diktat AI is your intelligent solution for fast, precise, and secure transcriptions in government settings."
    },
    "introduction": {
      "paragraph": "Creating minutes for meetings, transcribing dictations for notices and reports, or documenting citizen consultations ties up valuable working time that is urgently needed elsewhere. Manual transcription of audio recordings is not only time-consuming but also prone to errors. This is where Diktat AI comes in – your smart solution for efficient administrative processes."
    },
    "timeSection": {
      "title": "Massive Time Savings for Core Tasks",
      "paragraph": "Imagine how much time your staff spends daily typing dictations or creating meeting minutes. Diktat AI drastically reduces this effort:",
      "points": {
        "point1": "Fast protocol creation: Convert recordings from municipal council meetings, committee meetings, internal discussions, or hearings into text in minutes. The time saved can flow directly into content follow-up or other important tasks.",
        "point2": "Efficient correspondence: Dictate notices, memos, reports, or emails and let Diktat AI handle the conversion to written text. Ideal for managers, clerks, and legal professionals in administration.",
        "point3": "Relief for typists: Automate a large part of the transcription work and allow your typists to focus on more complex administrative tasks."
      }
    },
    "precisionSection": {
      "title": "Precision and Traceability in Documentation",
      "paragraph": "Accurate documentation is essential, especially in the public sector. Diktat AI provides a highly precise text foundation:",
      "points": {
        "point1": "Minimization of transmission errors: Our AI is trained to recognize speech precisely, reducing errors that can occur with manual typing.",
        "point2": "Improved searchability: Transcribed texts are digitally searchable. Find specific information in protocols or dictations in seconds, without having to listen through long audio recordings.",
        "point3": "Consistent quality: The AI delivers consistently good results, regardless of daily form or fatigue that can play a role in manual transcription."
      }
    },
    "securitySection": {
      "title": "Highest Data Security and GDPR Compliance",
      "paragraph": "Handling sensitive citizen and administrative data requires the highest security standards. Diktat AI is aware of this responsibility:",
      "points": {
        "point1": "Strict GDPR compliance: We process your data strictly according to the provisions of the European General Data Protection Regulation. Confidentiality and security are top priorities.",
        "point2": "Secure processing: Your audio recordings and the resulting texts are encrypted and processed exclusively on secure servers within the EU.",
        "point3": "No compromises on confidentiality: You retain full control over your data. Diktat AI is a tool that serves you without using your data for other purposes."
      }
    },
    "integrationSection": {
      "title": "Easy Integration into Existing Workflows",
      "paragraph": "Introducing new tools should not be a hurdle. Diktat AI is deliberately kept simple:",
      "points": {
        "point1": "Intuitive operation: Simply upload audio files via our platform or use the practical email function. No complicated software installation or lengthy training necessary.",
        "point2": "Flexible use: Whether files recorded on a workplace computer or mobile dictation device – Diktat AI adapts to your needs.",
        "point3": "Quick results: Receive your transcripts promptly and integrate them directly into your familiar word processing or document management systems."
      }
    },
    "examplesSection": {
      "title": "Concrete Application Examples in Public Authorities",
      "paragraph": "Diktat AI can be profitably used in numerous areas of public administration:",
      "examples": {
        "example1": {
          "title": "Committees & Meetings",
          "description": "Quickly and accurately create minutes of city council, county council, committee, or internal team meetings."
        },
        "example2": {
          "title": "Legal Departments",
          "description": "Efficiently convert dictations for briefs, memos, and expert opinions into text."
        },
        "example3": {
          "title": "Social & Youth Welfare Offices",
          "description": "Documentation of consultations or home visits in compliance with data protection requirements."
        },
        "example4": {
          "title": "Building & Planning Offices",
          "description": "Make transcripts of on-site appointments, hearings, or planning meetings available promptly."
        },
        "example5": {
          "title": "Internal Administration",
          "description": "Creation of circulars, reports, or training materials from dictated templates without lengthy typing work."
        }
      }
    },
    "conclusion": {
      "title": "The Step to Modern Administration",
      "paragraph": "Diktat AI is more than just a transcription service. It's a tool for modernizing your administrative processes. By automating routine tasks like typing, you create space for your employees, increase the quality of your documentation, and ensure the highest data security according to GDPR. Take the step towards more efficient and contemporary administration."
    },
    "cta": {
      "title": "Ready for Optimized Documentation Processes?",
      "paragraph": "Discover how Diktat AI can help you save valuable time and increase efficiency. Contact us for a non-binding consultation or learn more about our solutions for the public sector.",
      "button": "Contact us now"
    }
  },
  "nl": {
    "seo": {
      "description": "Hoe DiktatAI overheidsdocumentatie versnelt – efficiënt, veilig, AVG-conform."
    },
    "hero": {
      "title": "Meer tijd voor burgers: Hoe DiktatAI de documentatie bij overheden revolutioneert",
      "subtitle": "De publieke sector staat voor bijzondere uitdagingen: Stijgende eisen aan transparantie en documentatie treffen op schaarse middelen en de constante druk om efficiënter te werken. DiktatAI is uw intelligente oplossing voor snelle, nauwkeurige en veilige transcripties in de overheidsomgeving."
    },
    "introduction": {
      "paragraph": "Het opstellen van notulen voor vergaderingen, het uitschrijven van dictaten voor beschikkingen en rapporten of het documenteren van burgergesprekken legt beslag op waardevolle werktijd die elders dringend nodig is. Het handmatig uittypen van audio-opnames is niet alleen tijdrovend, maar ook foutgevoelig. Hier komt DiktatAI in beeld – uw slimme oplossing voor efficiënte overheidsprocessen."
    },
    "timeSection": {
      "title": "Enorme tijdsbesparing voor kerntaken",
      "paragraph": "Stel u voor hoeveel tijd uw medewerkers dagelijks besteden aan het uittypen van dictaten of het opstellen van vergadernotulen. DiktatAI vermindert deze inspanning drastisch:",
      "points": {
        "point1": "Snelle notulering: Zet opnames van gemeenteraadsvergaderingen, commissiebijeenkomsten, interne besprekingen of hoorzittingen in enkele minuten om in tekst. De gewonnen tijd kan direct worden besteed aan inhoudelijke nabewerking of andere belangrijke taken.",
        "point2": "Efficiëntere correspondentie: Dicteer beschikkingen, dossieraantekeningen, rapporten of e-mails en laat DiktatAI de omzetting naar geschreven tekst verzorgen. Ideaal voor leidinggevenden, ambtenaren en juristen in de overheid.",
        "point3": "Ontlasting van administratief personeel: Automatiseer een groot deel van het transcriptiewerk en stel uw administratief medewerkers in staat zich te concentreren op complexere administratieve taken."
      }
    },
    "precisionSection": {
      "title": "Precisie en traceerbaarheid in documentatie",
      "paragraph": "Juist in de publieke sector is accurate documentatie onmisbaar. DiktatAI levert een zeer nauwkeurige tekstbasis:",
      "points": {
        "point1": "Minimalisering van overdrachtsfouten: Onze AI is getraind om spraak exact te herkennen, waardoor fouten die bij handmatig typen kunnen ontstaan, worden verminderd.",
        "point2": "Verbeterde doorzoekbaarheid: Getranscribeerde teksten zijn digitaal doorzoekbaar. Vind specifieke informatie in notulen of dictaten in enkele seconden terug, zonder lange audio-opnames te moeten doorluisteren.",
        "point3": "Consistente kwaliteit: De AI levert constant goede resultaten, onafhankelijk van dagvorm of vermoeidheid die bij handmatige transcriptie een rol kunnen spelen."
      }
    },
    "securitySection": {
      "title": "Hoogste gegevensbeveiliging en AVG-conformiteit",
      "paragraph": "De omgang met gevoelige burger- en overheidsgegevens vereist de hoogste beveiligingsstandaarden. DiktatAI is zich bewust van deze verantwoordelijkheid:",
      "points": {
        "point1": "Strikte AVG-naleving: We verwerken uw gegevens strikt volgens de richtlijnen van de Algemene Verordening Gegevensbescherming. Vertrouwelijkheid en veiligheid staan voorop.",
        "point2": "Veilige verwerking: Uw audio-opnames en de daaruit gegenereerde teksten worden versleuteld en uitsluitend op beveiligde servers binnen de EU verwerkt.",
        "point3": "Geen compromissen bij vertrouwelijkheid: U behoudt volledige controle over uw gegevens. DiktatAI is een tool die u dient, zonder uw gegevens voor andere doeleinden te gebruiken."
      }
    },
    "integrationSection": {
      "title": "Eenvoudige integratie in bestaande werkprocessen",
      "paragraph": "De invoering van nieuwe tools hoeft geen hindernis te zijn. DiktatAI is bewust eenvoudig gehouden:",
      "points": {
        "point1": "Intuïtieve bediening: Upload audiobestanden eenvoudig via ons platform of gebruik de praktische e-mailfunctie. Geen ingewikkelde software-installatie of langdurige training nodig.",
        "point2": "Flexibel inzetbaar: Of het nu gaat om bestanden op de werkplek-computer of mobiel via dicteerrecorder opgenomen – DiktatAI past zich aan uw behoeften aan.",
        "point3": "Snelle resultaten: Ontvang uw transcripties tijdig terug en integreer ze direct in uw vertrouwde tekstverwerkings- of documentbeheersystemen."
      }
    },
    "examplesSection": {
      "title": "Concrete toepassingsvoorbeelden bij overheden",
      "paragraph": "DiktatAI kan op tal van gebieden binnen de overheid waardevol worden ingezet:",
      "examples": {
        "example1": {
          "title": "Gremia & vergaderingen",
          "description": "Notulen van gemeenteraad-, provinciale staten-, commissie- of interne teamvergaderingen snel en accuraat opstellen."
        },
        "example2": {
          "title": "Juridische afdelingen",
          "description": "Dictaten voor processtukken, aantekeningen en adviezen efficiënt in tekst omzetten."
        },
        "example3": {
          "title": "Sociale diensten & jeugdzorg",
          "description": "Documentatie van adviesgesprekken of huisbezoeken met inachtneming van privacywetgeving."
        },
        "example4": {
          "title": "Bouw- & planningsafdelingen",
          "description": "Verslagen van locatiebezoeken, hoorzittingen of planningsbesprekingen tijdig beschikbaar maken."
        },
        "example5": {
          "title": "Interne administratie",
          "description": "Opstellen van circulaires, rapporten of trainingsmateriaal uit gedicteerde voorbeelden zonder langdurig typwerk."
        }
      }
    },
    "conclusion": {
      "title": "De stap naar moderne overheid",
      "paragraph": "DiktatAI is meer dan alleen een transcriptiedienst. Het is een instrument voor de modernisering van uw overheidsprocessen. Door routinetaken zoals typen te automatiseren, creëert u ruimte voor uw medewerkers, verhoogt u de kwaliteit van uw documentatie en waarborgt u tegelijkertijd de hoogste gegevensbeveiliging volgens de AVG. Maak de stap naar een efficiëntere en eigentijdse overheid."
    },
    "cta": {
      "title": "Klaar voor geoptimaliseerde documentatieprocessen?",
      "paragraph": "Ontdek hoe DiktatAI u kan helpen waardevolle tijd te besparen en de efficiëntie te verhogen. Neem contact met ons op voor een vrijblijvend advies of leer meer over onze oplossingen voor de publieke sector.",
      "button": "Nu contact opnemen"
    }
  },
  "es": {
    "seo": {
      "description": "Cómo Diktat AI acelera la documentación en el sector público – eficiente, seguro, conforme al RGPD."
    },
    "hero": {
      "title": "Más tiempo para los ciudadanos: Cómo Diktat AI revoluciona la documentación en las administraciones públicas",
      "subtitle": "El sector público enfrenta desafíos únicos: Las crecientes demandas de transparencia y documentación se encuentran con recursos limitados y la presión constante de trabajar de manera más eficiente. Diktat AI es su solución inteligente para transcripciones rápidas, precisas y seguras en entornos gubernamentales."
    },
    "introduction": {
      "paragraph": "La creación de actas de reuniones, la transcripción de dictados para resoluciones e informes, o la documentación de consultas ciudadanas consume un tiempo de trabajo valioso que se necesita urgentemente en otros lugares. La transcripción manual de grabaciones de audio no solo consume tiempo, sino que también es propensa a errores. Aquí es donde entra Diktat AI – su solución inteligente para procesos administrativos eficientes."
    },
    "timeSection": {
      "title": "Ahorro masivo de tiempo para tareas principales",
      "paragraph": "Imagine cuánto tiempo dedican diariamente sus empleados a transcribir dictados o crear actas de reuniones. Diktat AI reduce drásticamente este esfuerzo:",
      "points": {
        "point1": "Creación rápida de actas: Convierta grabaciones de reuniones del ayuntamiento, reuniones de comités, discusiones internas o audiencias en texto en minutos. El tiempo ahorrado puede destinarse directamente al seguimiento del contenido u otras tareas importantes.",
        "point2": "Correspondencia eficiente: Dicte resoluciones, memorandos, informes o correos electrónicos y deje que Diktat AI se encargue de la conversión a texto escrito. Ideal para directivos, funcionarios y profesionales jurídicos en la administración.",
        "point3": "Alivio para el personal administrativo: Automatice gran parte del trabajo de transcripción y permita que su personal administrativo se concentre en tareas más complejas."
      }
    },
    "precisionSection": {
      "title": "Precisión y trazabilidad en la documentación",
      "paragraph": "La documentación precisa es esencial, especialmente en el sector público. Diktat AI proporciona una base de texto altamente precisa:",
      "points": {
        "point1": "Minimización de errores de transcripción: Nuestra IA está entrenada para reconocer el habla con precisión, reduciendo los errores que pueden ocurrir con la escritura manual.",
        "point2": "Mejor capacidad de búsqueda: Los textos transcritos son digitalmente buscables. Encuentre información específica en actas o dictados en segundos, sin tener que escuchar largas grabaciones de audio.",
        "point3": "Calidad consistente: La IA ofrece resultados consistentemente buenos, independientemente del estado diario o la fatiga que pueden influir en la transcripción manual."
      }
    },
    "securitySection": {
      "title": "Máxima seguridad de datos y conformidad con el RGPD",
      "paragraph": "El manejo de datos sensibles de ciudadanos y administraciones requiere los más altos estándares de seguridad. Diktat AI es consciente de esta responsabilidad:",
      "points": {
        "point1": "Estricto cumplimiento del RGPD: Procesamos sus datos estrictamente según las disposiciones del Reglamento General de Protección de Datos europeo. La confidencialidad y la seguridad son las principales prioridades.",
        "point2": "Procesamiento seguro: Sus grabaciones de audio y los textos resultantes se cifran y procesan exclusivamente en servidores seguros dentro de la UE.",
        "point3": "Sin compromisos en confidencialidad: Usted mantiene el control total sobre sus datos. Diktat AI es una herramienta que le sirve sin utilizar sus datos para otros fines."
      }
    },
    "integrationSection": {
      "title": "Fácil integración en los flujos de trabajo existentes",
      "paragraph": "La introducción de nuevas herramientas no debería ser un obstáculo. Diktat AI está diseñado para ser deliberadamente simple:",
      "points": {
        "point1": "Operación intuitiva: Simplemente cargue archivos de audio a través de nuestra plataforma o utilice la práctica función de correo electrónico. No es necesaria ninguna instalación de software complicada ni formación prolongada.",
        "point2": "Uso flexible: Ya sean archivos grabados en una computadora de trabajo o en un dispositivo de dictado móvil, Diktat AI se adapta a sus necesidades.",
        "point3": "Resultados rápidos: Reciba sus transcripciones rápidamente e intégrelas directamente en sus sistemas habituales de procesamiento de texto o gestión documental."
      }
    },
    "examplesSection": {
      "title": "Ejemplos concretos de aplicación en administraciones públicas",
      "paragraph": "Diktat AI puede utilizarse de manera beneficiosa en numerosas áreas de la administración pública:",
      "examples": {
        "example1": {
          "title": "Comités y reuniones",
          "description": "Cree actas de reuniones del ayuntamiento, diputaciones, comités o equipos internos de forma rápida y precisa."
        },
        "example2": {
          "title": "Departamentos jurídicos",
          "description": "Convierta eficientemente dictados de escritos, memorandos e informes periciales en texto."
        },
        "example3": {
          "title": "Servicios sociales y de juventud",
          "description": "Documentación de consultas o visitas domiciliarias cumpliendo con los requisitos de protección de datos."
        },
        "example4": {
          "title": "Oficinas de urbanismo y planificación",
          "description": "Haga disponibles rápidamente transcripciones de visitas in situ, audiencias o reuniones de planificación."
        },
        "example5": {
          "title": "Administración interna",
          "description": "Creación de circulares, informes o materiales de formación a partir de plantillas dictadas sin trabajo de escritura prolongado."
        }
      }
    },
    "conclusion": {
      "title": "El paso hacia una administración moderna",
      "paragraph": "Diktat AI es más que un simple servicio de transcripción. Es una herramienta para modernizar sus procesos administrativos. Al automatizar tareas rutinarias como la escritura, crea espacio para sus empleados, aumenta la calidad de su documentación y garantiza al mismo tiempo la máxima seguridad de datos según el RGPD. Dé el paso hacia una administración más eficiente y moderna."
    },
    "cta": {
      "title": "¿Listo para procesos de documentación optimizados?",
      "paragraph": "Descubra cómo Diktat AI puede ayudarle a ahorrar tiempo valioso y aumentar la eficiencia. Contáctenos para una consulta sin compromiso o conozca más sobre nuestras soluciones para el sector público.",
      "button": "Contactar ahora"
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
