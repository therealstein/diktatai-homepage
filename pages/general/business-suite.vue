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
        <!-- Part 1 Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("part1.title") }}
          </h2>
          <p class="mb-8">{{ t("part1.intro") }}</p>

          <div class="space-y-8">
            <!-- On-Premise Feature -->
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
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("part1.features.onpremise.title") }}
                </h3>
              </div>
              <p>{{ t("part1.features.onpremise.description") }}</p>
            </div>

            <!-- Authentication Feature -->
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
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">{{ t("part1.features.auth.title") }}</h3>
              </div>
              <p>{{ t("part1.features.auth.description") }}</p>
            </div>

            <!-- Data Storage Feature -->
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("part1.features.datastorage.title") }}
                </h3>
              </div>
              <p>{{ t("part1.features.datastorage.description") }}</p>
            </div>

            <!-- Compliance Feature -->
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
                  {{ t("part1.features.compliance.title") }}
                </h3>
              </div>
              <p>{{ t("part1.features.compliance.description") }}</p>
            </div>

            <!-- Custom Training Feature -->
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 class="font-bold">
                  {{ t("part1.features.training.title") }}
                </h3>
              </div>
              <p>{{ t("part1.features.training.description") }}</p>
            </div>
          </div>
        </div>

        <!-- Part 2 Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("part2.title") }}
          </h2>
          <p class="mb-6">
            {{ t("part2.intro") }}
          </p>

          <div
            class="bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-xl shadow-lg border border-accent/20"
          >
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-accent mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <h3 class="text-xl font-bold">{{ t("part2.api.title") }}</h3>
            </div>
            <p>{{ t("part2.api.description") }}</p>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("benefits.title") }}
          </h2>
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
              <span>{{ t("benefits.points.point1") }}</span>
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
              <span>{{ t("benefits.points.point2") }}</span>
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
              <span>{{ t("benefits.points.point3") }}</span>
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
              <span>{{ t("benefits.points.point4") }}</span>
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
              <span>{{ t("benefits.points.point5") }}</span>
            </li>
          </ul>
        </div>

        <!-- For Whom Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("forWhom.title") }}
          </h2>
          <p class="mb-6">
            {{ t("forWhom.intro") }}
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ t("forWhom.points.point1") }}</span>
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ t("forWhom.points.point2") }}</span>
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ t("forWhom.points.point3") }}</span>
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ t("forWhom.points.point4") }}</span>
            </li>
          </ul>
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
      content: "https://diktat.ai/images/business-suite-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/business-suite-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "Business Suite von Diktat AI: On‑Premise, SSO, API & Training – maximale Sicherheit und Kontrolle."
    },
    "hero": {
      "title": "Die Diktat AI Business Suite: Volle Kontrolle, Nahtlose Integration.",
      "subtitle": "Für Unternehmen, die mehr als eine Standardlösung benötigen: Die Diktat AI Business Suite bietet erweiterte Möglichkeiten zur tiefen Integration in Ihre bestehende IT-Infrastruktur und Software-Landschaft. Erhalten Sie maximale Kontrolle über Ihre Daten, erfüllen Sie strengste Compliance-Anforderungen und passen Sie die Transkriptionsleistung exakt an Ihre Bedürfnisse an."
    },
    "part1": {
      "title": "Teil 1: Maßgeschneiderte Einbettung in Ihre Infrastruktur und Richtlinien",
      "intro": "Die Business Suite gibt Ihnen die Kontrolle zurück und ermöglicht eine nahtlose Integration in Ihre Kernsysteme und Sicherheitsarchitekturen.",
      "features": {
        "onpremise": {
          "title": "Ihre Daten, Ihre Infrastruktur: On-Premise oder Private Cloud Option",
          "description": "Behalten Sie die volle Datenhoheit. Mit der Business Suite bieten wir Ihnen die Möglichkeit, Diktat AI auf Ihren eigenen Servern (On-Premise) oder in Ihrer dedizierten Private Cloud Umgebung zu betreiben. So stellen Sie sicher, dass alle Datenverarbeitungsprozesse innerhalb Ihrer kontrollierten Infrastruktur und gemäß Ihren internen Richtlinien stattfinden."
        },
        "auth": {
          "title": "Nahtlose Authentifizierung: Integration in Ihr Identitätsmanagement",
          "description": "Vereinfachen Sie den Zugang und erhöhen Sie die Sicherheit. Wir binden Diktat AI an Ihre bestehenden Authentifizierungssysteme an. Ob Microsoft Azure AD, Okta, Ping Identity oder andere SAML 2.0-basierte Lösungen – Ihre Mitarbeiter nutzen ihre gewohnten Unternehmens-Logins. Das reduziert den administrativen Aufwand und stellt sicher, dass nur autorisierte Nutzer Zugriff haben."
        },
        "datastorage": {
          "title": "Vollständige Datenhaltung an Ihrem Standort",
          "description": "Maximale Kontrolle und Compliance. Entscheiden Sie selbst, wo Ihre sensiblen Audio- und Textdaten gespeichert werden. Bei einer On-Premise-Lösung verbleiben alle Daten physisch innerhalb Ihrer definierten Umgebung, was die Einhaltung strengster Compliance-Vorgaben (z.B. in kritischen Infrastrukturen oder im Finanzwesen) erleichtert."
        },
        "compliance": {
          "title": "Umsetzung Ihrer strengsten Datenrichtlinien",
          "description": "Compliance nach Ihren Vorgaben. Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass der Betrieb von Diktat AI Ihre spezifischen Compliance-, Sicherheits- und Datenschutzvorgaben erfüllt. Von Datenminimierung bis hin zu spezifischen Audit-Anforderungen – wir konfigurieren die Lösung entsprechend."
        },
        "training": {
          "title": "Maßgeschneiderte Präzision: Training auf Ihren Unternehmensdaten (Optional)",
          "description": "Höchste Genauigkeit für Ihre Fachsprache. Für Branchen mit sehr spezifischer Terminologie oder besonderen akustischen Umgebungen bieten wir optional die Möglichkeit, die KI-Modelle zusätzlich auf Ihren anonymisierten Unternehmensdaten zu trainieren. Dies kann die Erkennungsgenauigkeit für Ihre spezifischen Anwendungsfälle weiter optimieren."
        }
      }
    },
    "part2": {
      "title": "Teil 2: Integration in Ihre bestehenden Systeme und Workflows",
      "intro": "Die Business Suite ist darauf ausgelegt, sich nahtlos in Ihre täglichen Arbeitsabläufe und die von Ihnen genutzte Software zu integrieren.",
      "api": {
        "title": "Flexibel und Leistungsstark: API-Schnittstellen für Ihre Systeme",
        "description": "Automatisieren Sie Ihre Prozesse. Nutzen Sie unsere umfassenden API (Application Programming Interface)-Schnittstellen, um die leistungsstarke Transkriptionsfunktion von Diktat AI direkt in Ihre bestehenden Anwendungen zu integrieren. Ob CRM-System, Dokumentenmanagement (DMS), ERP-Software, Branchenlösungen oder individuelle Eigenentwicklungen – übergeben Sie Audio-Daten direkt und erhalten Sie Transkripte automatisiert zurück. Optimieren Sie Workflows, vermeiden Sie manuelle Schritte und steigern Sie die Effizienz Ihrer Kernprozesse."
      }
    },
    "benefits": {
      "title": "Ihr maßgeschneidertes Transkriptions-Kraftwerk",
      "points": {
        "point1": "Maximale Kontrolle: Entscheiden Sie über Infrastruktur, Datenspeicherung und Zugriff.",
        "point2": "Höchste Sicherheit & Compliance: Erfüllen Sie strengste interne und externe Vorgaben (DSGVO, Branchenstandards).",
        "point3": "Nahtlose Integration: Binden Sie Diktat AI tief in Ihre IT-Landschaft (SSO, On-Premise) und Software (API) ein.",
        "point4": "Optionale Anpassung: Optimieren Sie die Genauigkeit durch Training auf spezifische Unternehmensdaten.",
        "point5": "Gesteigerte Effizienz: Automatisieren Sie Workflows durch direkte Systemanbindung via API."
      }
    },
    "forWhom": {
      "title": "Die Lösung für anspruchsvolle Anforderungen",
      "intro": "Die Diktat AI Business Suite ist besonders geeignet für:",
      "points": {
        "point1": "Unternehmen in stark regulierten Branchen (Gesundheit, Finanzen, Recht, KRITIS).",
        "point2": "Organisationen mit spezifischen IT-Sicherheits- und Compliance-Vorgaben.",
        "point3": "Größere Unternehmen und Teams mit Bedarf an zentraler Verwaltung und Kontrolle.",
        "point4": "Firmen, die KI-Transkription tief und automatisiert in ihre Kernprozesse integrieren möchten."
      }
    },
    "cta": {
      "title": "Bereit für eine maßgeschneiderte Transkriptionslösung?",
      "paragraph": "Diskutieren Sie mit uns Ihre spezifischen Anforderungen an Integration, Sicherheit und Kontrolle. Lassen Sie uns gemeinsam herausfinden, wie die Diktat AI Business Suite die Effizienz in Ihrem Unternehmen auf die nächste Stufe heben kann.",
      "button": "Kontakt aufnehmen & Business Suite besprechen"
    }
  },
  "en": {
    "seo": {
      "description": "Diktat AI Business Suite: On‑prem, SSO, API & training – maximum security and control."
    },
    "hero": {
      "title": "The Diktat AI Business Suite: Full Control, Seamless Integration.",
      "subtitle": "For companies that need more than a standard solution: The Diktat AI Business Suite offers advanced capabilities for deep integration into your existing IT infrastructure and software landscape. Gain maximum control over your data, meet the strictest compliance requirements, and tailor transcription performance precisely to your needs."
    },
    "part1": {
      "title": "Part 1: Tailored Integration into Your Infrastructure and Policies",
      "intro": "The Business Suite gives you back control and enables seamless integration into your core systems and security architectures.",
      "features": {
        "onpremise": {
          "title": "Your Data, Your Infrastructure: On-Premise or Private Cloud Option",
          "description": "Maintain full data sovereignty. With the Business Suite, we offer you the option to operate Diktat AI on your own servers (on-premise) or in your dedicated private cloud environment. This ensures that all data processing takes place within your controlled infrastructure and according to your internal policies."
        },
        "auth": {
          "title": "Seamless Authentication: Integration with Your Identity Management",
          "description": "Simplify access and increase security. We connect Diktat AI to your existing authentication systems. Whether Microsoft Azure AD, Okta, Ping Identity, or other SAML 2.0-based solutions – your employees use their familiar corporate logins. This reduces administrative effort and ensures that only authorized users have access."
        },
        "datastorage": {
          "title": "Complete Data Storage at Your Location",
          "description": "Maximum control and compliance. Decide for yourself where your sensitive audio and text data is stored. With an on-premise solution, all data remains physically within your defined environment, facilitating compliance with the strictest requirements (e.g., in critical infrastructures or financial sector)."
        },
        "compliance": {
          "title": "Implementation of Your Strictest Data Policies",
          "description": "Compliance according to your specifications. We work closely with you to ensure that the operation of Diktat AI meets your specific compliance, security, and data protection requirements. From data minimization to specific audit requirements – we configure the solution accordingly."
        },
        "training": {
          "title": "Customized Precision: Training on Your Corporate Data (Optional)",
          "description": "Highest accuracy for your specialized terminology. For industries with very specific terminology or particular acoustic environments, we optionally offer the possibility to additionally train the AI models on your anonymized corporate data. This can further optimize recognition accuracy for your specific use cases."
        }
      }
    },
    "part2": {
      "title": "Part 2: Integration into Your Existing Systems and Workflows",
      "intro": "The Business Suite is designed to integrate seamlessly into your daily workflows and the software you use.",
      "api": {
        "title": "Flexible and Powerful: API Interfaces for Your Systems",
        "description": "Automate your processes. Use our comprehensive API (Application Programming Interface) to integrate Diktat AI's powerful transcription function directly into your existing applications. Whether CRM system, document management (DMS), ERP software, industry solutions, or custom in-house developments – transfer audio data directly and receive transcripts automatically. Optimize workflows, avoid manual steps, and increase the efficiency of your core processes."
      }
    },
    "benefits": {
      "title": "Your Customized Transcription Powerhouse",
      "points": {
        "point1": "Maximum Control: Decide on infrastructure, data storage, and access.",
        "point2": "Highest Security & Compliance: Meet the strictest internal and external requirements (GDPR, industry standards).",
        "point3": "Seamless Integration: Deeply integrate Diktat AI into your IT landscape (SSO, on-premise) and software (API).",
        "point4": "Optional Customization: Optimize accuracy through training on specific corporate data.",
        "point5": "Increased Efficiency: Automate workflows through direct system connection via API."
      }
    },
    "forWhom": {
      "title": "The Solution for Demanding Requirements",
      "intro": "The Diktat AI Business Suite is particularly suitable for:",
      "points": {
        "point1": "Companies in highly regulated industries (healthcare, finance, legal, critical infrastructure).",
        "point2": "Organizations with specific IT security and compliance requirements.",
        "point3": "Larger companies and teams with the need for central management and control.",
        "point4": "Companies that want to deeply and automatically integrate AI transcription into their core processes."
      }
    },
    "cta": {
      "title": "Ready for a Customized Transcription Solution?",
      "paragraph": "Discuss your specific requirements for integration, security, and control with us. Let's find out together how the Diktat AI Business Suite can take efficiency in your company to the next level.",
      "button": "Contact Us & Discuss Business Suite"
    }
  },
  "nl": {
    "seo": {
      "description": "Business Suite van DiktatAI: On-Premise, SSO, API & Training – maximale veiligheid en controle."
    },
    "hero": {
      "title": "De DiktatAI Business Suite: Volledige controle, naadloze integratie.",
      "subtitle": "Voor ondernemingen die meer dan een standaardoplossing nodig hebben: De DiktatAI Business Suite biedt uitgebreide mogelijkheden voor diepe integratie in uw bestaande IT-infrastructuur en softwarelandschap. Verkrijg maximale controle over uw gegevens, voldoe aan de strengste compliance-eisen en pas de transcriptieprestaties exact aan uw behoeften aan."
    },
    "part1": {
      "title": "Deel 1: Op maat gemaakte inbedding in uw infrastructuur en richtlijnen",
      "intro": "De Business Suite geeft u de controle terug en maakt naadloze integratie in uw kernsystemen en beveiligingsarchitecturen mogelijk.",
      "features": {
        "onpremise": {
          "title": "Uw gegevens, uw infrastructuur: On-Premise of Private Cloud optie",
          "description": "Behoud volledige gegevenssoevereiniteit. Met de Business Suite bieden we u de mogelijkheid om DiktatAI op uw eigen servers (On-Premise) of in uw toegewijde Private Cloud-omgeving te draaien. Zo zorgt u ervoor dat alle gegevensverwerkingsprocessen binnen uw gecontroleerde infrastructuur en volgens uw interne richtlijnen plaatsvinden."
        },
        "auth": {
          "title": "Naadloze authenticatie: Integratie in uw identiteitsbeheer",
          "description": "Vereenvoudig de toegang en verhoog de veiligheid. We koppelen DiktatAI aan uw bestaande authenticatiesystemen. Of het nu gaat om Microsoft Azure AD, Okta, Ping Identity of andere SAML 2.0-gebaseerde oplossingen – uw medewerkers gebruiken hun vertrouwde bedrijfslogins. Dit vermindert de administratieve last en zorgt ervoor dat alleen geautoriseerde gebruikers toegang hebben."
        },
        "datastorage": {
          "title": "Volledige gegevensopslag op uw locatie",
          "description": "Maximale controle en compliance. Bepaal zelf waar uw gevoelige audio- en tekstgegevens worden opgeslagen. Bij een On-Premise-oplossing blijven alle gegevens fysiek binnen uw gedefinieerde omgeving, wat het naleven van de strengste compliance-voorschriften (bijv. in kritieke infrastructuren of de financiële sector) vergemakkelijkt."
        },
        "compliance": {
          "title": "Implementatie van uw strengste gegevensrichtlijnen",
          "description": "Compliance volgens uw voorschriften. We werken nauw met u samen om ervoor te zorgen dat de werking van DiktatAI voldoet aan uw specifieke compliance-, beveiligings- en privacyvereisten. Van gegevensminimalisatie tot specifieke auditvereisten – we configureren de oplossing dienovereenkomstig."
        },
        "training": {
          "title": "Op maat gemaakte precisie: Training op uw bedrijfsgegevens (Optioneel)",
          "description": "Hoogste nauwkeurigheid voor uw vaktaal. Voor sectoren met zeer specifieke terminologie of bijzondere akoestische omgevingen bieden we optioneel de mogelijkheid om de AI-modellen aanvullend te trainen op uw geanonimiseerde bedrijfsgegevens. Dit kan de herkenningsnauwkeurigheid voor uw specifieke toepassingen verder optimaliseren."
        }
      }
    },
    "part2": {
      "title": "Deel 2: Integratie in uw bestaande systemen en workflows",
      "intro": "De Business Suite is ontworpen om naadloos te integreren in uw dagelijkse werkprocessen en de software die u gebruikt.",
      "api": {
        "title": "Flexibel en krachtig: API-interfaces voor uw systemen",
        "description": "Automatiseer uw processen. Gebruik onze uitgebreide API (Application Programming Interface)-interfaces om de krachtige transcriptiefunctie van DiktatAI direct in uw bestaande applicaties te integreren. Of het nu gaat om CRM-systemen, documentbeheer (DMS), ERP-software, brancheoplossingen of individuele eigen ontwikkelingen – geef audiogegevens direct door en ontvang transcripties automatisch terug. Optimaliseer workflows, vermijd handmatige stappen en verhoog de efficiëntie van uw kernprocessen."
      }
    },
    "benefits": {
      "title": "Uw op maat gemaakte transcriptie-krachtcentrale",
      "points": {
        "point1": "Maximale controle: Beslis over infrastructuur, gegevensopslag en toegang.",
        "point2": "Hoogste veiligheid & compliance: Voldoe aan de strengste interne en externe voorschriften (AVG, branchenormen).",
        "point3": "Naadloze integratie: Integreer DiktatAI diep in uw IT-landschap (SSO, On-Premise) en software (API).",
        "point4": "Optionele aanpassing: Optimaliseer de nauwkeurigheid door training op specifieke bedrijfsgegevens.",
        "point5": "Verhoogde efficiëntie: Automatiseer workflows door directe systeemkoppeling via API."
      }
    },
    "forWhom": {
      "title": "De oplossing voor veeleisende vereisten",
      "intro": "De DiktatAI Business Suite is bijzonder geschikt voor:",
      "points": {
        "point1": "Ondernemingen in sterk gereguleerde sectoren (gezondheidszorg, financiën, recht, vitale infrastructuur).",
        "point2": "Organisaties met specifieke IT-beveiligings- en compliance-voorschriften.",
        "point3": "Grotere bedrijven en teams met behoefte aan centraal beheer en controle.",
        "point4": "Bedrijven die AI-transcriptie diep en geautomatiseerd in hun kernprocessen willen integreren."
      }
    },
    "cta": {
      "title": "Klaar voor een op maat gemaakte transcriptie-oplossing?",
      "paragraph": "Bespreek met ons uw specifieke vereisten voor integratie, veiligheid en controle. Laten we samen ontdekken hoe de DiktatAI Business Suite de efficiëntie in uw onderneming naar een hoger niveau kan tillen.",
      "button": "Contact opnemen & Business Suite bespreken"
    }
  },
  "es": {
    "seo": {
      "description": "Business Suite de Diktat AI: On-Premise, SSO, API y formación – máxima seguridad y control."
    },
    "hero": {
      "title": "Diktat AI Business Suite: Control total, integración perfecta.",
      "subtitle": "Para empresas que necesitan más que una solución estándar: Diktat AI Business Suite ofrece capacidades avanzadas para una integración profunda en su infraestructura de TI y entorno de software existentes. Obtenga el máximo control sobre sus datos, cumpla con los requisitos de cumplimiento más estrictos y adapte el rendimiento de transcripción exactamente a sus necesidades."
    },
    "part1": {
      "title": "Parte 1: Integración personalizada en su infraestructura y políticas",
      "intro": "La Business Suite le devuelve el control y permite una integración perfecta en sus sistemas centrales y arquitecturas de seguridad.",
      "features": {
        "onpremise": {
          "title": "Sus datos, su infraestructura: Opción On-Premise o nube privada",
          "description": "Mantenga la soberanía total de sus datos. Con la Business Suite, le ofrecemos la opción de operar Diktat AI en sus propios servidores (On-Premise) o en su entorno de nube privada dedicado. Así garantiza que todos los procesos de datos se realicen dentro de su infraestructura controlada y según sus políticas internas."
        },
        "auth": {
          "title": "Autenticación perfecta: Integración con su gestión de identidades",
          "description": "Simplifique el acceso y aumente la seguridad. Conectamos Diktat AI con sus sistemas de autenticación existentes. Ya sea Microsoft Azure AD, Okta, Ping Identity u otras soluciones basadas en SAML 2.0, sus empleados utilizan sus credenciales corporativas habituales. Esto reduce el esfuerzo administrativo y garantiza que solo los usuarios autorizados tengan acceso."
        },
        "datastorage": {
          "title": "Almacenamiento completo de datos en su ubicación",
          "description": "Máximo control y cumplimiento. Decida usted mismo dónde se almacenan sus datos sensibles de audio y texto. Con una solución On-Premise, todos los datos permanecen físicamente dentro de su entorno definido, facilitando el cumplimiento de los requisitos de conformidad más estrictos (por ejemplo, en infraestructuras críticas o el sector financiero)."
        },
        "compliance": {
          "title": "Implementación de sus políticas de datos más estrictas",
          "description": "Cumplimiento según sus especificaciones. Trabajamos estrechamente con usted para garantizar que la operación de Diktat AI cumpla con sus requisitos específicos de cumplimiento, seguridad y protección de datos. Desde la minimización de datos hasta requisitos de auditoría específicos, configuramos la solución en consecuencia."
        },
        "training": {
          "title": "Precisión personalizada: Entrenamiento con sus datos corporativos (Opcional)",
          "description": "La máxima precisión para su terminología especializada. Para industrias con terminología muy específica o entornos acústicos particulares, ofrecemos opcionalmente la posibilidad de entrenar adicionalmente los modelos de IA con sus datos corporativos anonimizados. Esto puede optimizar aún más la precisión de reconocimiento para sus casos de uso específicos."
        }
      }
    },
    "part2": {
      "title": "Parte 2: Integración en sus sistemas y flujos de trabajo existentes",
      "intro": "La Business Suite está diseñada para integrarse perfectamente en sus flujos de trabajo diarios y el software que utiliza.",
      "api": {
        "title": "Flexible y potente: Interfaces API para sus sistemas",
        "description": "Automatice sus procesos. Utilice nuestras completas interfaces API (Interfaz de Programación de Aplicaciones) para integrar la potente función de transcripción de Diktat AI directamente en sus aplicaciones existentes. Ya sea sistema CRM, gestión documental (DMS), software ERP, soluciones sectoriales o desarrollos propios personalizados, transfiera datos de audio directamente y reciba transcripciones automáticamente. Optimice flujos de trabajo, evite pasos manuales y aumente la eficiencia de sus procesos principales."
      }
    },
    "benefits": {
      "title": "Su central de transcripción personalizada",
      "points": {
        "point1": "Control máximo: Decida sobre infraestructura, almacenamiento de datos y acceso.",
        "point2": "Máxima seguridad y cumplimiento: Cumpla con los requisitos internos y externos más estrictos (RGPD, estándares del sector).",
        "point3": "Integración perfecta: Integre profundamente Diktat AI en su entorno de TI (SSO, On-Premise) y software (API).",
        "point4": "Personalización opcional: Optimice la precisión mediante entrenamiento con datos corporativos específicos.",
        "point5": "Mayor eficiencia: Automatice flujos de trabajo mediante conexión directa del sistema a través de API."
      }
    },
    "forWhom": {
      "title": "La solución para requisitos exigentes",
      "intro": "Diktat AI Business Suite es especialmente adecuada para:",
      "points": {
        "point1": "Empresas en sectores altamente regulados (salud, finanzas, legal, infraestructuras críticas).",
        "point2": "Organizaciones con requisitos específicos de seguridad de TI y cumplimiento.",
        "point3": "Empresas grandes y equipos con necesidad de gestión y control centralizados.",
        "point4": "Compañías que desean integrar la transcripción con IA de forma profunda y automatizada en sus procesos principales."
      }
    },
    "cta": {
      "title": "¿Listo para una solución de transcripción personalizada?",
      "paragraph": "Discuta con nosotros sus requisitos específicos de integración, seguridad y control. Descubramos juntos cómo Diktat AI Business Suite puede llevar la eficiencia de su empresa al siguiente nivel.",
      "button": "Contactar y hablar sobre Business Suite"
    }
  },
  "fr": {
    "seo": {
      "description": "Business Suite de Diktat AI : On-Premise, SSO, API et formation – sécurité et contrôle maximaux."
    },
    "hero": {
      "title": "La Suite Business de Diktat AI : Contrôle total, intégration transparente.",
      "subtitle": "Pour les entreprises qui ont besoin de plus qu'une solution standard : La Suite Business de Diktat AI offre des capacités avancées pour une intégration profonde dans votre infrastructure informatique existante et votre paysage logiciel. Obtenez un contrôle maximal sur vos données, respectez les exigences de conformité les plus strictes et adaptez les performances de transcription précisément à vos besoins."
    },
    "part1": {
      "title": "Partie 1 : Intégration personnalisée dans votre infrastructure et vos politiques",
      "intro": "La Suite Business vous redonne le contrôle et permet une intégration transparente dans vos systèmes principaux et vos architectures de sécurité.",
      "features": {
        "onpremise": {
          "title": "Vos données, votre infrastructure : Option On-Premise ou Cloud privé",
          "description": "Maintenez la souveraineté totale des données. Avec la Suite Business, nous vous offrons la possibilité d'exploiter Diktat AI sur vos propres serveurs (on-premise) ou dans votre environnement cloud privé dédié. Cela garantit que tout le traitement des données se déroule dans votre infrastructure contrôlée et selon vos politiques internes."
        },
        "auth": {
          "title": "Authentification transparente : Intégration avec votre gestion d'identité",
          "description": "Simplifiez l'accès et augmentez la sécurité. Nous connectons Diktat AI à vos systèmes d'authentification existants. Que ce soit Microsoft Azure AD, Okta, Ping Identity ou d'autres solutions basées sur SAML 2.0 – vos employés utilisent leurs identifiants d'entreprise habituels. Cela réduit les efforts administratifs et garantit que seuls les utilisateurs autorisés ont accès."
        },
        "datastorage": {
          "title": "Stockage complet des données à votre emplacement",
          "description": "Contrôle et conformité maximaux. Décidez vous-même où vos données audio et texte sensibles sont stockées. Avec une solution on-premise, toutes les données restent physiquement dans votre environnement défini, facilitant le respect des exigences de conformité les plus strictes (par exemple, dans les infrastructures critiques ou le secteur financier)."
        },
        "compliance": {
          "title": "Mise en œuvre de vos politiques de données les plus strictes",
          "description": "Conformité selon vos spécifications. Nous travaillons en étroite collaboration avec vous pour garantir que le fonctionnement de Diktat AI répond à vos exigences spécifiques en matière de conformité, de sécurité et de protection des données. De la minimisation des données aux exigences d'audit spécifiques – nous configurons la solution en conséquence."
        },
        "training": {
          "title": "Précision personnalisée : Formation sur vos données d'entreprise (en option)",
          "description": "La plus haute précision pour votre terminologie spécialisée. Pour les industries avec une terminologie très spécifique ou des environnements acoustiques particuliers, nous offrons en option la possibilité de former en plus les modèles IA sur vos données d'entreprise anonymisées. Cela peut optimiser davantage la précision de reconnaissance pour vos cas d'utilisation spécifiques."
        }
      }
    },
    "part2": {
      "title": "Partie 2 : Intégration dans vos systèmes et flux de travail existants",
      "intro": "La Suite Business est conçue pour s'intégrer de manière transparente dans vos flux de travail quotidiens et les logiciels que vous utilisez.",
      "api": {
        "title": "Flexible et puissant : Interfaces API pour vos systèmes",
        "description": "Automatisez vos processus. Utilisez nos interfaces API (Application Programming Interface) complètes pour intégrer la puissante fonction de transcription de Diktat AI directement dans vos applications existantes. Que ce soit un système CRM, une gestion documentaire (DMS), un logiciel ERP, des solutions sectorielles ou des développements internes personnalisés – transférez directement les données audio et recevez automatiquement les transcriptions. Optimisez les flux de travail, évitez les étapes manuelles et augmentez l'efficacité de vos processus principaux."
      }
    },
    "benefits": {
      "title": "Votre centrale de transcription personnalisée",
      "points": {
        "point1": "Contrôle maximal : Décidez de l'infrastructure, du stockage des données et de l'accès.",
        "point2": "Sécurité et conformité maximales : Respectez les exigences internes et externes les plus strictes (RGPD, normes sectorielles).",
        "point3": "Intégration transparente : Intégrez profondément Diktat AI dans votre paysage informatique (SSO, on-premise) et vos logiciels (API).",
        "point4": "Personnalisation optionnelle : Optimisez la précision grâce à la formation sur des données d'entreprise spécifiques.",
        "point5": "Efficacité accrue : Automatisez les flux de travail grâce à la connexion directe du système via API."
      }
    },
    "forWhom": {
      "title": "La solution pour les exigences exigeantes",
      "intro": "La Suite Business de Diktat AI est particulièrement adaptée pour :",
      "points": {
        "point1": "Les entreprises dans des secteurs fortement réglementés (santé, finance, juridique, infrastructures critiques).",
        "point2": "Les organisations ayant des exigences spécifiques en matière de sécurité informatique et de conformité.",
        "point3": "Les grandes entreprises et équipes ayant besoin d'une gestion et d'un contrôle centralisés.",
        "point4": "Les entreprises qui souhaitent intégrer profondément et automatiquement la transcription IA dans leurs processus principaux."
      }
    },
    "cta": {
      "title": "Prêt pour une solution de transcription personnalisée ?",
      "paragraph": "Discutez avec nous de vos exigences spécifiques en matière d'intégration, de sécurité et de contrôle. Découvrons ensemble comment la Suite Business de Diktat AI peut faire passer l'efficacité de votre entreprise au niveau supérieur.",
      "button": "Nous contacter et discuter de la Suite Business"
    }
  },
  "sv": {
    "seo": {
      "description": "Business Suite från Diktat AI: On-Premise, SSO, API och utbildning – maximal säkerhet och kontroll."
    },
    "hero": {
      "title": "Diktat AI Business Suite: Full kontroll, sömlös integration.",
      "subtitle": "För företag som behöver mer än en standardlösning: Diktat AI Business Suite erbjuder avancerade möjligheter för djup integration i din befintliga IT-infrastruktur och programvarulandskap. Få maximal kontroll över dina data, uppfyll de strängaste efterlevnadskraven och anpassa transkriptionsprestanda exakt till dina behov."
    },
    "part1": {
      "title": "Del 1: Skräddarsydd integration i din infrastruktur och policyer",
      "intro": "Business Suite ger dig tillbaka kontrollen och möjliggör sömlös integration i dina kärnsystem och säkerhetsarkitekturer.",
      "features": {
        "onpremise": {
          "title": "Dina data, din infrastruktur: On-Premise eller privat moln-alternativ",
          "description": "Behåll full datasuveränitet. Med Business Suite erbjuder vi dig möjligheten att driva Diktat AI på dina egna servrar (on-premise) eller i din dedikerade privata molnmiljö. Detta säkerställer att all databehandling sker inom din kontrollerade infrastruktur och enligt dina interna policyer."
        },
        "auth": {
          "title": "Sömlös autentisering: Integration med din identitetshantering",
          "description": "Förenkla åtkomst och öka säkerheten. Vi ansluter Diktat AI till dina befintliga autentiseringssystem. Oavsett om det är Microsoft Azure AD, Okta, Ping Identity eller andra SAML 2.0-baserade lösningar – dina anställda använder sina bekanta företagsinloggningar. Detta minskar den administrativa bördan och säkerställer att endast auktoriserade användare har åtkomst."
        },
        "datastorage": {
          "title": "Fullständig datalagring på din plats",
          "description": "Maximal kontroll och efterlevnad. Bestäm själv var dina känsliga ljud- och textdata lagras. Med en on-premise-lösning förblir all data fysiskt inom din definierade miljö, vilket underlättar efterlevnad av de strängaste kraven (t.ex. i kritiska infrastrukturer eller finanssektorn)."
        },
        "compliance": {
          "title": "Implementering av dina strängaste datapolicyer",
          "description": "Efterlevnad enligt dina specifikationer. Vi arbetar nära med dig för att säkerställa att driften av Diktat AI uppfyller dina specifika krav på efterlevnad, säkerhet och dataskydd. Från dataminimering till specifika revisionskrav – vi konfigurerar lösningen därefter."
        },
        "training": {
          "title": "Skräddarsydd precision: Utbildning på dina företagsdata (valfritt)",
          "description": "Högsta noggrannhet för din specialiserade terminologi. För industrier med mycket specifik terminologi eller särskilda akustiska miljöer erbjuder vi valfritt möjligheten att ytterligare träna AI-modellerna på dina anonymiserade företagsdata. Detta kan ytterligare optimera igenkänningsnoggrannheten för dina specifika användningsfall."
        }
      }
    },
    "part2": {
      "title": "Del 2: Integration i dina befintliga system och arbetsflöden",
      "intro": "Business Suite är utformad för att integreras sömlöst i dina dagliga arbetsflöden och den programvara du använder.",
      "api": {
        "title": "Flexibel och kraftfull: API-gränssnitt för dina system",
        "description": "Automatisera dina processer. Använd våra omfattande API-gränssnitt (Application Programming Interface) för att integrera Diktat AI:s kraftfulla transkriptionsfunktion direkt i dina befintliga applikationer. Oavsett om det är CRM-system, dokumenthantering (DMS), ERP-programvara, branschlösningar eller anpassade interna utvecklingar – överför ljuddata direkt och få transkript automatiskt. Optimera arbetsflöden, undvik manuella steg och öka effektiviteten i dina kärnprocesser."
      }
    },
    "benefits": {
      "title": "Ditt skräddarsydda transkriptionskraftverk",
      "points": {
        "point1": "Maximal kontroll: Bestäm om infrastruktur, datalagring och åtkomst.",
        "point2": "Högsta säkerhet och efterlevnad: Uppfyll de strängaste interna och externa kraven (GDPR, branschstandarder).",
        "point3": "Sömlös integration: Integrera djupt Diktat AI i ditt IT-landskap (SSO, on-premise) och programvara (API).",
        "point4": "Valfri anpassning: Optimera noggrannhet genom träning på specifika företagsdata.",
        "point5": "Ökad effektivitet: Automatisera arbetsflöden genom direkt systemanslutning via API."
      }
    },
    "forWhom": {
      "title": "Lösningen för krävande krav",
      "intro": "Diktat AI Business Suite är särskilt lämplig för:",
      "points": {
        "point1": "Företag i hårt reglerade branscher (hälso- och sjukvård, finans, juridik, kritisk infrastruktur).",
        "point2": "Organisationer med specifika IT-säkerhets- och efterlevnadskrav.",
        "point3": "Större företag och team med behov av central hantering och kontroll.",
        "point4": "Företag som vill integrera AI-transkription djupt och automatiskt i sina kärnprocesser."
      }
    },
    "cta": {
      "title": "Redo för en skräddarsydd transkriptionslösning?",
      "paragraph": "Diskutera dina specifika krav på integration, säkerhet och kontroll med oss. Låt oss tillsammans ta reda på hur Diktat AI Business Suite kan ta effektiviteten i ditt företag till nästa nivå.",
      "button": "Kontakta oss och diskutera Business Suite"
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
