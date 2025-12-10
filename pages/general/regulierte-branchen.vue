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

        <!-- Anforderungen Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("requirementsSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("requirementsSection.paragraph") }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Datensensibilität -->
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div class="bg-accent/10 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("requirementsSection.points.point1_title") }}
                </h3>
              </div>
              <p>{{ t("requirementsSection.points.point1") }}</p>
            </div>

            <!-- Compliance-Vorgaben -->
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div class="bg-accent/10 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("requirementsSection.points.point2_title") }}
                </h3>
              </div>
              <p>{{ t("requirementsSection.points.point2") }}</p>
            </div>

            <!-- Präzise Dokumentation -->
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div class="bg-accent/10 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent"
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
                </div>
                <h3 class="font-bold">
                  {{ t("requirementsSection.points.point3_title") }}
                </h3>
              </div>
              <p>{{ t("requirementsSection.points.point3") }}</p>
            </div>

            <!-- Auditierbarkeit -->
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div class="bg-accent/10 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("requirementsSection.points.point4_title") }}
                </h3>
              </div>
              <p>{{ t("requirementsSection.points.point4") }}</p>
            </div>
          </div>

          <p>{{ t("requirementsSection.conclusion") }}</p>
        </div>

        <!-- Sicherheit Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("securitySection.title") }}
          </h2>
          <p class="mb-8">
            {{ t("securitySection.paragraph") }}
          </p>
          <ul class="space-y-6">
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point1_title") }}:</span
                >
                <span> {{ t("securitySection.points.point1") }}</span>
              </div>
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point2_title") }}:</span
                >
                <span> {{ t("securitySection.points.point2") }}</span>
              </div>
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point3_title") }}:</span
                >
                <span> {{ t("securitySection.points.point3") }}</span>
              </div>
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point4_title") }}:</span
                >
                <span> {{ t("securitySection.points.point4") }}</span>
              </div>
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point5_title") }}:</span
                >
                <span> {{ t("securitySection.points.point5") }}</span>
              </div>
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
              <div>
                <span class="font-bold"
                  >{{ t("securitySection.points.point6_title") }}:</span
                >
                <span> {{ t("securitySection.points.point6") }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Business Suite Section -->
        <div
          class="bg-gradient-to-br from-accent/5 to-secondary/5 shadow-xl mb-12 p-8 rounded-3xl border border-accent/20"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("businessSuiteSection.title") }}
          </h2>
          <p class="mb-8">
            {{ t("businessSuiteSection.paragraph") }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300"
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
                  {{ t("businessSuiteSection.features.feature1") }}
                </h3>
              </div>
              <p>{{ t("businessSuiteSection.features.feature1_desc") }}</p>
            </div>
            <div
              class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300"
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("businessSuiteSection.features.feature2") }}
                </h3>
              </div>
              <p>{{ t("businessSuiteSection.features.feature2_desc") }}</p>
            </div>
            <div
              class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300"
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("businessSuiteSection.features.feature3") }}
                </h3>
              </div>
              <p>{{ t("businessSuiteSection.features.feature3_desc") }}</p>
            </div>
            <div
              class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300"
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
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("businessSuiteSection.features.feature4") }}
                </h3>
              </div>
              <p>{{ t("businessSuiteSection.features.feature4_desc") }}</p>
            </div>
            <div
              class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300 md:col-span-2"
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
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("businessSuiteSection.features.feature5") }}
                </h3>
              </div>
              <p>{{ t("businessSuiteSection.features.feature5_desc") }}</p>
            </div>
          </div>
          <p class="mb-6">{{ t("businessSuiteSection.conclusion") }}</p>
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
            <NuxtLinkLocale to="general-business-suite">
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
    { name: "description", content: t("seo.description") },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl.value },
    { property: "og:title", content: t("hero.title") },
    { property: "og:description", content: t("seo.description") },
    {
      property: "og:image",
      content: "https://diktat.ai/images/compliance-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/compliance-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "Regulierte Branchen sicher transkribieren: DSGVO‑konform, vertraulich, auditierbar."
    },
    "hero": {
      "title": "Höchste Sicherheit & Compliance: Diktat AI für regulierte Branchen",
      "subtitle": "Im Gesundheitswesen, im Rechtswesen und im Finanzsektor ist der Umgang mit sensiblen Daten Alltag – und die Einhaltung strengster Vorschriften oberstes Gebot. Die Notwendigkeit zur Effizienzsteigerung darf niemals auf Kosten von Sicherheit und Compliance gehen."
    },
    "introduction": {
      "paragraph": "Diktat AI versteht diese Herausforderung und bietet eine Transkriptionslösung, die speziell darauf ausgelegt ist, Vertraulichkeit zu wahren und regulatorische Anforderungen wie die DSGVO zu erfüllen. Erfahren Sie, wie Sie auch in hochsensiblen Umgebungen sicher und effizient diktieren können."
    },
    "requirementsSection": {
      "title": "Vertraulichkeit als Währung: Warum Standardlösungen oft nicht genügen",
      "paragraph": "Unternehmen in regulierten Branchen bewegen sich in einem Spannungsfeld:",
      "points": {
        "point1_title": "Extreme Datensensibilität",
        "point1": "Patientenakten, Mandantengeheimnisse, Finanzdaten – diese Informationen erfordern ein Höchstmaß an Schutz vor unbefugtem Zugriff.",
        "point2_title": "Strenge Compliance-Vorgaben",
        "point2": "DSGVO, branchenspezifische Richtlinien (z.B. Schweigepflichten) setzen klare Grenzen für die Datenverarbeitung. Verstöße haben gravierende rechtliche und finanzielle Konsequenzen.",
        "point3_title": "Notwendigkeit präziser Dokumentation",
        "point3": "Fehlerfreie Protokolle, Gutachten oder Berichte sind essenziell. Ungenauigkeiten können fatale Folgen haben.",
        "point4_title": "Nachweisbarkeit & Auditierbarkeit",
        "point4": "Prozesse müssen oft nachvollziehbar und dokumentiert sein, um Compliance nachweisen zu können."
      },
      "conclusion": "Die Nutzung von KI-Tools, insbesondere zur Verarbeitung sensibler Sprachdaten, erfordert daher Lösungen, die diesen Anforderungen nicht nur genügen, sondern sie als Kernprinzip verinnerlicht haben."
    },
    "securitySection": {
      "title": "Ihre sichere Brücke zur Effizienz: So erfüllt Diktat AI Ihre Anforderungen",
      "paragraph": "Diktat AI wurde mit einem klaren Fokus auf Sicherheit und Datenschutz entwickelt, um den spezifischen Bedürfnissen regulierter Branchen gerecht zu werden:",
      "points": {
        "point1_title": "Kompromisslose DSGVO-Konformität",
        "point1": "Unsere Prozesse sind von Grund auf nach den strengen Vorgaben der Datenschutz-Grundverordnung gestaltet. Ihre Daten werden sicher und ausschließlich zweckgebunden verarbeitet.",
        "point2_title": "Durchgängige Verschlüsselung",
        "point2": "Sowohl bei der Übertragung als auch bei der Speicherung sind Ihre Audioaufnahmen und Transkripte durch robuste Verschlüsselungsverfahren geschützt.",
        "point3_title": "Sichere Infrastruktur",
        "point3": "Wir setzen auf sichere Server-Infrastrukturen mit Standort in der EU, um den Schutz Ihrer Daten zu maximieren.",
        "point4_title": "Keine Kompromisse bei der Vertraulichkeit",
        "point4": "Ihre Daten gehören Ihnen. Wir nutzen sie nicht für andere Zwecke und gewährleisten höchste Vertraulichkeit bei der Verarbeitung.",
        "point5_title": "Präzision für kritische Inhalte",
        "point5": "Unsere KI ist auf hohe Genauigkeit trainiert, um auch bei Fachterminologie zuverlässige Transkripte für Ihre wichtigen Dokumentationen zu liefern.",
        "point6_title": "Fokus auf geringes Risiko (gemäß EU AI Act)",
        "point6": "Diktat AI dient der Umwandlung von Sprache in Text und fällt nicht unter die Hochrisiko-Anwendungen des EU KI-Gesetzes, was die Compliance weiter vereinfacht."
      }
    },
    "businessSuiteSection": {
      "title": "Erweiterte Kontrolle und Funktionen für Ihr Unternehmen",
      "paragraph": "Für Unternehmen in regulierten Branchen, die erweiterte Funktionen, zusätzliche Kontrolle oder spezifische Integrationsanforderungen haben, haben wir die Diktat AI Business Suite entwickelt. Diese bietet Ihnen:",
      "features": {
        "feature1": "Verwaltung von Nutzerrechten und Zugängen",
        "feature1_desc": "Steuern Sie präzise, wer in Ihrem Unternehmen Zugriff auf welche Transkriptionen hat und welche Aktionen ausgeführt werden dürfen.",
        "feature2": "Erweiterte Sicherheitsfeatures",
        "feature2_desc": "Von dedizierten Verarbeitungsressourcen bis hin zu zusätzlichen Sicherheitsmaßnahmen – wir bieten maßgeschneiderte Lösungen für Ihre spezifischen Compliance-Anforderungen.",
        "feature3": "Priorisierter Support",
        "feature3_desc": "Genießen Sie bevorzugte Behandlung und schnelle Reaktionszeiten bei allen geschäftskritischen Anfragen durch unseren spezialisierten Business-Support.",
        "feature4": "Nahtlose Integration",
        "feature4_desc": "Verbinden Sie Diktat AI mit Ihren bestehenden Fachanwendungen, Dokumentenmanagementsystemen oder anderen internen Plattformen durch flexible API-Schnittstellen.",
        "feature5": "Erweiterte Audit-Protokolle und Reporting",
        "feature5_desc": "Behalten Sie den Überblick über alle Aktivitäten mit detaillierten Audit-Trails und umfassenden Reporting-Funktionen, die Ihre Compliance-Nachweise unterstützen."
      },
      "conclusion": "Die Business Suite ist die ideale Lösung, um die Effizienz von Diktat AI nahtlos und sicher in die komplexen Arbeitsabläufe und strengen Compliance-Rahmenbedingungen Ihres Unternehmens zu integrieren."
    },
    "cta": {
      "title": "Entdecken Sie die sichere Transkriptionslösung für Ihre Branche",
      "paragraph": "Erfahren Sie mehr darüber, wie die Diktat AI Business Suite Ihr Unternehmen im Gesundheitswesen, Rechtswesen oder Finanzsektor unterstützen kann, effizienter und gleichzeitig sicher und konform zu arbeiten. Fordern Sie jetzt weitere Informationen an oder vereinbaren Sie ein persönliches Beratungsgespräch.",
      "button": "Zur Diktat AI Business Suite"
    }
  },
  "en": {
    "seo": {
      "description": "Transcribe securely in regulated industries: GDPR‑compliant, confidential, auditable."
    },
    "hero": {
      "title": "Maximum Security & Compliance: Diktat AI for Regulated Industries",
      "subtitle": "In healthcare, legal services, and the financial sector, handling sensitive data is routine – and compliance with the strictest regulations is paramount. The need for increased efficiency must never come at the expense of security and compliance."
    },
    "introduction": {
      "paragraph": "Diktat AI understands this challenge and offers a transcription solution specifically designed to maintain confidentiality and meet regulatory requirements such as GDPR. Learn how you can dictate securely and efficiently even in highly sensitive environments."
    },
    "requirementsSection": {
      "title": "Confidentiality as Currency: Why Standard Solutions Often Don't Suffice",
      "paragraph": "Companies in regulated industries operate in a field of tension:",
      "points": {
        "point1_title": "Extreme Data Sensitivity",
        "point1": "Patient records, client confidentiality, financial data – this information requires the highest level of protection against unauthorized access.",
        "point2_title": "Strict Compliance Requirements",
        "point2": "GDPR, industry-specific guidelines (e.g., confidentiality obligations) set clear boundaries for data processing. Violations have serious legal and financial consequences.",
        "point3_title": "Need for Precise Documentation",
        "point3": "Error-free protocols, expert opinions, or reports are essential. Inaccuracies can have fatal consequences.",
        "point4_title": "Verifiability & Auditability",
        "point4": "Processes often need to be traceable and documented to demonstrate compliance."
      },
      "conclusion": "The use of AI tools, especially for processing sensitive voice data, therefore requires solutions that not only meet these requirements but have internalized them as core principles."
    },
    "securitySection": {
      "title": "Your Secure Bridge to Efficiency: How Diktat AI Meets Your Requirements",
      "paragraph": "Diktat AI was developed with a clear focus on security and data protection to meet the specific needs of regulated industries:",
      "points": {
        "point1_title": "Uncompromising GDPR Compliance",
        "point1": "Our processes are designed from the ground up according to the strict requirements of the General Data Protection Regulation. Your data is processed securely and exclusively for its intended purpose.",
        "point2_title": "End-to-End Encryption",
        "point2": "Both during transmission and storage, your audio recordings and transcripts are protected by robust encryption methods.",
        "point3_title": "Secure Infrastructure",
        "point3": "We rely on secure server infrastructures located within the EU to maximize the protection of your data.",
        "point4_title": "No Compromises on Confidentiality",
        "point4": "Your data belongs to you. We do not use it for other purposes and ensure the highest level of confidentiality during processing.",
        "point5_title": "Precision for Critical Content",
        "point5": "Our AI is trained for high accuracy to provide reliable transcripts for your important documentation, even with specialized terminology.",
        "point6_title": "Focus on Low Risk (according to EU AI Act)",
        "point6": "Diktat AI serves to convert speech to text and does not fall under the high-risk applications of the EU AI Act, which further simplifies compliance."
      }
    },
    "businessSuiteSection": {
      "title": "Enhanced Control and Features for Your Company",
      "paragraph": "For companies in regulated industries that require enhanced features, additional control, or specific integration requirements, we have developed the Diktat AI Business Suite. This offers you:",
      "features": {
        "feature1": "User Rights and Access Management",
        "feature1_desc": "Precisely control who in your company has access to which transcriptions and what actions they can perform.",
        "feature2": "Advanced Security Features",
        "feature2_desc": "From dedicated processing resources to additional security measures – we offer tailored solutions for your specific compliance requirements.",
        "feature3": "Prioritized Support",
        "feature3_desc": "Enjoy preferential treatment and fast response times for all business-critical requests through our specialized business support.",
        "feature4": "Seamless Integration",
        "feature4_desc": "Connect Diktat AI with your existing specialized applications, document management systems, or other internal platforms through flexible API interfaces.",
        "feature5": "Enhanced Audit Logs and Reporting",
        "feature5_desc": "Keep track of all activities with detailed audit trails and comprehensive reporting functions that support your compliance documentation."
      },
      "conclusion": "The Business Suite is the ideal solution for seamlessly and securely integrating the efficiency of Diktat AI into the complex workflows and strict compliance frameworks of your company."
    },
    "cta": {
      "title": "Discover the Secure Transcription Solution for Your Industry",
      "paragraph": "Learn more about how the Diktat AI Business Suite can support your company in healthcare, legal services, or the financial sector to work more efficiently while maintaining security and compliance. Request more information now or schedule a personal consultation.",
      "button": "Go to Diktat AI Business Suite"
    }
  },
  "nl": {
    "seo": {
      "description": "Veilig transcriberen voor gereguleerde sectoren: AVG-conform, vertrouwelijk, auditeerbaar."
    },
    "hero": {
      "title": "Hoogste veiligheid & compliance: Diktat AI voor gereguleerde sectoren",
      "subtitle": "In de gezondheidszorg, juridische sector en financiële sector is de omgang met gevoelige data dagelijkse praktijk – en het naleven van de strengste voorschriften het hoogste gebod. De noodzaak tot efficiëntieverhoging mag nooit ten koste gaan van veiligheid en compliance."
    },
    "introduction": {
      "paragraph": "Diktat AI begrijpt deze uitdaging en biedt een transcriptieoplossing die speciaal is ontworpen om vertrouwelijkheid te waarborgen en te voldoen aan regelgevende vereisten zoals de AVG. Ontdek hoe u ook in hooggevoelige omgevingen veilig en efficiënt kunt dicteren."
    },
    "requirementsSection": {
      "title": "Vertrouwelijkheid als valuta: Waarom standaardoplossingen vaak tekortschieten",
      "paragraph": "Bedrijven in gereguleerde sectoren bewegen zich in een spanningsveld:",
      "points": {
        "point1_title": "Extreme datagevoeligheid",
        "point1": "Patiëntendossiers, cliëntgeheimen, financiële data – deze informatie vereist een maximum aan bescherming tegen ongeautoriseerde toegang.",
        "point2_title": "Strenge compliance-eisen",
        "point2": "AVG, sectorspecifieke richtlijnen (bijv. geheimhoudingsplichten) stellen duidelijke grenzen voor dataverwerking. Overtredingen hebben ernstige juridische en financiële consequenties.",
        "point3_title": "Noodzaak van nauwkeurige documentatie",
        "point3": "Foutloze protocollen, expertiserapporten of verslagen zijn essentieel. Onnauwkeurigheden kunnen fatale gevolgen hebben.",
        "point4_title": "Aantoonbaarheid & auditeerbaarheid",
        "point4": "Processen moeten vaak navolgbaar en gedocumenteerd zijn om compliance aan te kunnen tonen."
      },
      "conclusion": "Het gebruik van AI-tools, vooral voor het verwerken van gevoelige spraakdata, vereist daarom oplossingen die niet alleen aan deze eisen voldoen, maar ze als kernprincipe hebben geïnternaliseerd."
    },
    "securitySection": {
      "title": "Uw veilige brug naar efficiëntie: Zo voldoet Diktat AI aan uw eisen",
      "paragraph": "Diktat AI is ontwikkeld met een duidelijke focus op veiligheid en databescherming om te voldoen aan de specifieke behoeften van gereguleerde sectoren:",
      "points": {
        "point1_title": "Compromisloze AVG-conformiteit",
        "point1": "Onze processen zijn vanaf de basis vormgegeven volgens de strenge voorschriften van de Algemene Verordening Gegevensbescherming. Uw data wordt veilig en uitsluitend doelgebonden verwerkt.",
        "point2_title": "Doorlopende versleuteling",
        "point2": "Zowel bij overdracht als bij opslag zijn uw audio-opnames en transcripties beschermd door robuuste versleutelingsmethoden.",
        "point3_title": "Veilige infrastructuur",
        "point3": "We maken gebruik van beveiligde serverinfrastructuren met locatie in de EU om de bescherming van uw data te maximaliseren.",
        "point4_title": "Geen compromissen bij vertrouwelijkheid",
        "point4": "Uw data is van u. We gebruiken deze niet voor andere doeleinden en waarborgen de hoogste vertrouwelijkheid bij de verwerking.",
        "point5_title": "Precisie voor kritieke inhoud",
        "point5": "Onze AI is getraind op hoge nauwkeurigheid om ook bij vakterminologie betrouwbare transcripties voor uw belangrijke documentatie te leveren.",
        "point6_title": "Focus op laag risico (conform EU AI Act)",
        "point6": "Diktat AI dient voor het omzetten van spraak naar tekst en valt niet onder de hoogrisicotoepassingen van de EU AI-wet, wat de compliance verder vereenvoudigt."
      }
    },
    "businessSuiteSection": {
      "title": "Uitgebreide controle en functies voor uw bedrijf",
      "paragraph": "Voor bedrijven in gereguleerde sectoren die uitgebreide functies, extra controle of specifieke integratievereisten hebben, hebben we de Diktat AI Business Suite ontwikkeld. Deze biedt u:",
      "features": {
        "feature1": "Beheer van gebruikersrechten en toegangen",
        "feature1_desc": "Stuur precies aan wie in uw bedrijf toegang heeft tot welke transcripties en welke acties mogen worden uitgevoerd.",
        "feature2": "Uitgebreide beveiligingsfuncties",
        "feature2_desc": "Van toegewijde verwerkingsbronnen tot aanvullende beveiligingsmaatregelen – we bieden oplossingen op maat voor uw specifieke compliance-vereisten.",
        "feature3": "Geprioriteerde ondersteuning",
        "feature3_desc": "Geniet van voorkeursbehandeling en snelle reactietijden bij alle bedrijfskritieke aanvragen door onze gespecialiseerde business-support.",
        "feature4": "Naadloze integratie",
        "feature4_desc": "Verbind Diktat AI met uw bestaande vaktoepassingen, documentbeheersystemen of andere interne platforms via flexibele API-interfaces.",
        "feature5": "Uitgebreide audit-logs en rapportage",
        "feature5_desc": "Behoud het overzicht over alle activiteiten met gedetailleerde audit-trails en uitgebreide rapportagefuncties die uw compliance-bewijsvoering ondersteunen."
      },
      "conclusion": "De Business Suite is de ideale oplossing om de efficiëntie van Diktat AI naadloos en veilig te integreren in de complexe werkprocessen en strenge compliance-kaders van uw bedrijf."
    },
    "cta": {
      "title": "Ontdek de veilige transcriptieoplossing voor uw sector",
      "paragraph": "Lees meer over hoe de Diktat AI Business Suite uw bedrijf in de gezondheidszorg, juridische sector of financiële sector kan ondersteunen om efficiënter en tegelijkertijd veilig en conform te werken. Vraag nu meer informatie aan of maak een afspraak voor een persoonlijk adviesgesprek.",
      "button": "Naar de Diktat AI Business Suite"
    }
  },
  "es": {
    "seo": {
      "description": "Transcripción segura para sectores regulados: Conforme al RGPD, confidencial, auditable."
    },
    "hero": {
      "title": "Máxima seguridad y cumplimiento: Diktat AI para sectores regulados",
      "subtitle": "En el sector sanitario, jurídico y financiero, el manejo de datos sensibles es el día a día, y el cumplimiento de las normativas más estrictas es primordial. La necesidad de mayor eficiencia nunca debe ir en detrimento de la seguridad y el cumplimiento."
    },
    "introduction": {
      "paragraph": "Diktat AI comprende este desafío y ofrece una solución de transcripción específicamente diseñada para mantener la confidencialidad y cumplir con los requisitos regulatorios como el RGPD. Descubra cómo puede dictar de forma segura y eficiente incluso en entornos altamente sensibles."
    },
    "requirementsSection": {
      "title": "La confidencialidad como moneda: Por qué las soluciones estándar a menudo no son suficientes",
      "paragraph": "Las empresas en sectores regulados operan en un campo de tensión:",
      "points": {
        "point1_title": "Extrema sensibilidad de datos",
        "point1": "Historiales de pacientes, secretos de clientes, datos financieros: esta información requiere el más alto nivel de protección contra el acceso no autorizado.",
        "point2_title": "Requisitos de cumplimiento estrictos",
        "point2": "RGPD, directrices específicas del sector (por ejemplo, obligaciones de confidencialidad) establecen límites claros para el procesamiento de datos. Las infracciones tienen graves consecuencias legales y financieras.",
        "point3_title": "Necesidad de documentación precisa",
        "point3": "Protocolos, informes periciales o informes sin errores son esenciales. Las imprecisiones pueden tener consecuencias fatales.",
        "point4_title": "Verificabilidad y auditabilidad",
        "point4": "Los procesos a menudo necesitan ser rastreables y documentados para demostrar el cumplimiento."
      },
      "conclusion": "El uso de herramientas de IA, especialmente para procesar datos de voz sensibles, requiere soluciones que no solo cumplan estos requisitos sino que los hayan interiorizado como principios fundamentales."
    },
    "securitySection": {
      "title": "Su puente seguro hacia la eficiencia: Cómo Diktat AI cumple sus requisitos",
      "paragraph": "Diktat AI se desarrolló con un claro enfoque en la seguridad y protección de datos para satisfacer las necesidades específicas de los sectores regulados:",
      "points": {
        "point1_title": "Cumplimiento inquebrantable del RGPD",
        "point1": "Nuestros procesos están diseñados desde cero según los estrictos requisitos del Reglamento General de Protección de Datos. Sus datos se procesan de forma segura y exclusivamente para su propósito previsto.",
        "point2_title": "Cifrado de extremo a extremo",
        "point2": "Tanto durante la transmisión como en el almacenamiento, sus grabaciones de audio y transcripciones están protegidas por métodos de cifrado robustos.",
        "point3_title": "Infraestructura segura",
        "point3": "Confiamos en infraestructuras de servidores seguros ubicados dentro de la UE para maximizar la protección de sus datos.",
        "point4_title": "Sin compromisos en confidencialidad",
        "point4": "Sus datos le pertenecen. No los utilizamos para otros fines y garantizamos el más alto nivel de confidencialidad durante el procesamiento.",
        "point5_title": "Precisión para contenido crítico",
        "point5": "Nuestra IA está entrenada para alta precisión para proporcionar transcripciones fiables para su documentación importante, incluso con terminología especializada.",
        "point6_title": "Enfoque en bajo riesgo (según la Ley de IA de la UE)",
        "point6": "Diktat AI sirve para convertir voz en texto y no entra en las aplicaciones de alto riesgo de la Ley de IA de la UE, lo que simplifica aún más el cumplimiento."
      }
    },
    "businessSuiteSection": {
      "title": "Control y funciones mejoradas para su empresa",
      "paragraph": "Para empresas en sectores regulados que requieren funciones mejoradas, control adicional o requisitos de integración específicos, hemos desarrollado la Diktat AI Business Suite. Esta le ofrece:",
      "features": {
        "feature1": "Gestión de derechos de usuario y acceso",
        "feature1_desc": "Controle con precisión quién en su empresa tiene acceso a qué transcripciones y qué acciones pueden realizar.",
        "feature2": "Funciones de seguridad avanzadas",
        "feature2_desc": "Desde recursos de procesamiento dedicados hasta medidas de seguridad adicionales, ofrecemos soluciones personalizadas para sus requisitos específicos de cumplimiento.",
        "feature3": "Soporte prioritario",
        "feature3_desc": "Disfrute de un trato preferencial y tiempos de respuesta rápidos para todas las solicitudes críticas del negocio a través de nuestro soporte empresarial especializado.",
        "feature4": "Integración perfecta",
        "feature4_desc": "Conecte Diktat AI con sus aplicaciones especializadas existentes, sistemas de gestión documental u otras plataformas internas a través de interfaces API flexibles.",
        "feature5": "Registros de auditoría e informes mejorados",
        "feature5_desc": "Mantenga un seguimiento de todas las actividades con rastros de auditoría detallados y funciones de informes completas que respaldan su documentación de cumplimiento."
      },
      "conclusion": "La Business Suite es la solución ideal para integrar de forma perfecta y segura la eficiencia de Diktat AI en los flujos de trabajo complejos y marcos de cumplimiento estrictos de su empresa."
    },
    "cta": {
      "title": "Descubra la solución de transcripción segura para su sector",
      "paragraph": "Obtenga más información sobre cómo la Diktat AI Business Suite puede ayudar a su empresa en el sector sanitario, jurídico o financiero a trabajar de manera más eficiente manteniendo la seguridad y el cumplimiento. Solicite más información ahora o programe una consulta personal.",
      "button": "Ir a Diktat AI Business Suite"
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

:deep(.from-accent\/5) {
  --tw-gradient-from: rgba(239, 86, 164, 0.05) !important;
}

:deep(.to-secondary\/10) {
  --tw-gradient-to: rgba(239, 86, 164, 0.1) !important;
}

:deep(.to-secondary\/5) {
  --tw-gradient-to: rgba(239, 86, 164, 0.05) !important;
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
