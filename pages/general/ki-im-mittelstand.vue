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
            {{ t("introduction.paragraph1") }}
          </p>
          <p class="text-lg">
            {{ t("introduction.paragraph2") }}
          </p>
        </div>

        <!-- Praktischer Nutzen Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("practicalSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("practicalSection.paragraph") }}
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
              <span>{{ t("practicalSection.points.point1") }}</span>
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
              <span>{{ t("practicalSection.points.point2") }}</span>
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
              <span>{{ t("practicalSection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Wettbewerbsfähigkeit Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("competitiveSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("competitiveSection.paragraph") }}
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
              <span>{{ t("competitiveSection.points.point1") }}</span>
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
              <span>{{ t("competitiveSection.points.point2") }}</span>
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
              <span>{{ t("competitiveSection.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Demystifizierung Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("demystifySection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("demystifySection.paragraph") }}
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
              <span>{{ t("demystifySection.points.point1") }}</span>
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
              <span>{{ t("demystifySection.points.point2") }}</span>
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
              <span>{{ t("demystifySection.points.point3") }}</span>
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("examplesSection.examples.example4.title") }}
                </h3>
              </div>
              <p>{{ t("examplesSection.examples.example4.description") }}</p>
            </div>
          </div>
        </div>

        <!-- Diktat AI Sektion -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("diktaiAISection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("diktaiAISection.paragraph1") }}
          </p>
          <p class="mb-6">
            {{ t("diktaiAISection.paragraph2") }}
          </p>
          <div
            class="p-6 bg-base-100 rounded-xl shadow-lg border border-accent/20"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 class="text-xl font-bold">
                {{ t("diktaiAISection.highlight.title") }}
              </h3>
            </div>
            <p>{{ t("diktaiAISection.highlight.description") }}</p>
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
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLinkLocale to="general-kontakt">
                <button
                  class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
                >
                  {{ t("cta.button") }}
                </button>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="general-business-suite">
                <button
                  class="font-display bg-white text-pink-500 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide border-2 border-pink-500"
                >
                  {{ t("cta.button2") }}
                </button>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});

const baseUrl = "https://diktat.ai";
const canonicalPath = computed(() =>
  locale.value === "en"
    ? "/en/ai-in-small-and-medium-sized-enterprises"
    : "/ki-im-mittelstand",
);
const canonicalUrl = computed(() => `${baseUrl}${canonicalPath.value}`);

// SEO Meta Tags (localized)
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
      content: "https://diktat.ai/images/ki-mittelstand-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/ki-mittelstand-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "KI im Mittelstand pragmatisch nutzen: Sofort Mehrwert, DSGVO‑konform – ohne große Budgets."
    },
    "hero": {
      "title": "KI im Mittelstand: Nicht Zukunftsmusik, sondern Ihr Werkzeug für heute!",
      "subtitle": "Der Mittelstand ist das Herz der Wirtschaft – pragmatisch, innovativ und nah am Kunden. Doch das Thema Künstliche Intelligenz (KI) wirkt oft wie eine Domäne der Großkonzerne? Weit gefehlt! KI ist längst kein abstraktes Konzept mehr, sondern bietet handfeste, zugängliche Lösungen."
    },
    "introduction": {
      "paragraph1": "KI im Mittelstand ist kein Luxus mehr, sondern eine praktische Notwendigkeit, die gerade mittelständischen Unternehmen hilft, effizienter, wettbewerbsfähiger und zukunftssicherer zu werden.",
      "paragraph2": "Vergessen Sie Science-Fiction: Es geht um intelligente Werkzeuge, die Routineaufgaben automatisieren (wie das lästige Abtippen von Diktaten!), Prozesse optimieren und Ihnen wertvolle Zeit zurückgeben – Zeit für Ihr Kerngeschäft, Ihre Kunden und strategische Entscheidungen. Der erste Schritt ist einfacher, als Sie denken!"
    },
    "practicalSection": {
      "title": "Praxisnahe KI-Lösungen für den Mittelstand",
      "paragraph": "Künstliche Intelligenz muss nicht komplex sein. Im Gegenteil: Gerade für mittelständische Unternehmen bieten sich einfach zu implementierende Lösungen an, die sofort Mehrwert schaffen:",
      "points": {
        "point1": "Automatisierung von administrativen Aufgaben wie Transkription von Besprechungen, Kundengesprächen oder internen Diktaten",
        "point2": "Schnellere Informationsverarbeitung durch intelligente Textanalyse und -kategorisierung",
        "point3": "Zeitersparnis bei Routinetätigkeiten – Ihre Mitarbeiter können sich auf wertschöpfende Aufgaben konzentrieren"
      }
    },
    "competitiveSection": {
      "title": "KI als Motor für mehr Wettbewerbsfähigkeit",
      "paragraph": "In einer sich rasant wandelnden Welt ist Stillstand keine Option – auch nicht für den starken deutschen Mittelstand. Künstliche Intelligenz ist dabei kein Trend, dem man hinterherlaufen muss, sondern ein kraftvoller Hebel:",
      "points": {
        "point1": "Weniger Zeit für administrative Hürden, mehr Raum für Innovation",
        "point2": "Optimierte Kundenkommunikation durch schnellere Reaktionszeiten und bessere Dokumentation",
        "point3": "Freiräume im Team schaffen, damit Sie sich auf das konzentrieren können, was Ihr Unternehmen einzigartig macht"
      }
    },
    "demystifySection": {
      "title": "KI im Mittelstand: Keine Angst vor der Black Box!",
      "paragraph": "Künstliche Intelligenz – klingt kompliziert, teuer und nur etwas für Tech-Giganten? Dieses Bild hält sich hartnäckig, entspricht aber längst nicht mehr der Realität:",
      "points": {
        "point1": "Es geht nicht darum, Ihr Unternehmen komplett umzukrempeln, sondern gezielt smarte Technologien dort einzusetzen, wo sie den größten Mehrwert bringen",
        "point2": "Viele KI-Lösungen sind heute benutzerfreundlich, DSGVO-konform und erfordern keine tiefgreifenden technischen Kenntnisse",
        "point3": "Der Einstieg kann schrittweise erfolgen – beginnen Sie mit einer konkreten Anwendung wie der automatisierten Transkription und erweitern Sie Ihre KI-Nutzung nach Bedarf"
      }
    },
    "examplesSection": {
      "title": "Konkrete KI-Anwendungen für den Mittelstand",
      "paragraph": "Sehen Sie hier einige Beispiele, wie KI bereits heute in mittelständischen Unternehmen zum Einsatz kommt:",
      "examples": {
        "example1": {
          "title": "Automatisierte Protokolle",
          "description": "Lassen Sie Ihre Meetings automatisch transkribieren und in strukturierte Protokolle umwandeln – inklusive automatischer Erkennung von Aufgaben und Fristen."
        },
        "example2": {
          "title": "Verbesserte Kundenkommunikation",
          "description": "Kundengespräche können automatisch dokumentiert werden, sodass wertvolle Informationen nicht verloren gehen und Ihr Team sich voll aufs Gespräch konzentrieren kann."
        },
        "example3": {
          "title": "Datenbasierte Entscheidungen",
          "description": "KI-Tools können Ihre Geschäftsdaten analysieren und Ihnen helfen, Trends zu erkennen und fundierte strategische Entscheidungen zu treffen."
        },
        "example4": {
          "title": "Intelligente Textgenerierung",
          "description": "Erstellen Sie mit KI-Unterstützung schneller erste Entwürfe für Angebote, Berichte oder Marketingtexte, die Ihr Team dann nur noch anpassen muss."
        }
      }
    },
    "diktaiAISection": {
      "title": "Diktat AI: Ihr erster praktischer Schritt in die KI-Welt",
      "paragraph1": "Mit Diktat AI können Sie sofort und ohne Vorkenntnisse in die Nutzung von KI einsteigen. Unsere Lösung wandelt gesprochene Sprache – sei es aus Meetings, Kundengesprächen oder Ihren eigenen Notizen – in präzisen Text um.",
      "paragraph2": "Dies ist ein perfektes Beispiel für den sinnvollen Einsatz von KI im Mittelstand: Eine klar umrissene Aufgabe wird effizient automatisiert, spart Zeit und verbessert gleichzeitig die Qualität der Ergebnisse.",
      "highlight": {
        "title": "Ihr konkreter Nutzen mit Diktat AI:",
        "description": "Bis zu 80% Zeitersparnis bei der Dokumentation, DSGVO-konforme Verarbeitung aller Daten, einfache Integration in Ihre bestehenden Arbeitsabläufe und sofort einsetzbar ohne technisches Vorwissen."
      }
    },
    "conclusion": {
      "title": "KI im Mittelstand: Der richtige Zeitpunkt ist jetzt",
      "paragraph": "Künstliche Intelligenz ist kein futuristisches Konzept mehr, sondern ein praktisches Werkzeug, das Ihrem Unternehmen schon heute helfen kann, effizienter und wettbewerbsfähiger zu arbeiten. Der Einstieg muss nicht komplex oder teuer sein – mit dem richtigen Partner und gezielten Lösungen wie Diktat AI können Sie sofort von den Vorteilen der KI profitieren."
    },
    "cta": {
      "title": "Bereit für Ihren ersten Schritt in die KI-Welt?",
      "paragraph": "Entdecken Sie, wie einfach der Einstieg in die Nutzung von KI sein kann. Testen Sie Diktat AI und erleben Sie selbst, wie künstliche Intelligenz Ihren Arbeitsalltag erleichtern kann.",
      "button": "Kontakt aufnehmen",
      "button2": "Jetzt Business Suite entdecken"
    }
  },
  "en": {
    "seo": {
      "description": "AI for SMEs made practical: Immediate value, GDPR‑compliant – no big budgets needed."
    },
    "hero": {
      "title": "AI for SMEs: Not Future Music, But Your Tool for Today!",
      "subtitle": "Small and medium-sized enterprises are the heart of the economy – pragmatic, innovative and close to customers. But artificial intelligence (AI) often seems like the domain of large corporations? Far from it! AI is no longer an abstract concept, but offers practical, accessible solutions."
    },
    "introduction": {
      "paragraph1": "AI for SMEs is no longer a luxury, but a practical necessity that helps medium-sized companies become more efficient, competitive, and future-proof.",
      "paragraph2": "Forget science fiction: It's about intelligent tools that automate routine tasks (like tedious transcription of dictations!), optimize processes, and give you valuable time back – time for your core business, your customers, and strategic decisions. The first step is easier than you think!"
    },
    "practicalSection": {
      "title": "Practical AI Solutions for SMEs",
      "paragraph": "Artificial intelligence doesn't have to be complex. On the contrary: simple-to-implement solutions that immediately create added value are particularly suitable for medium-sized companies:",
      "points": {
        "point1": "Automation of administrative tasks such as transcription of meetings, customer conversations, or internal dictations",
        "point2": "Faster information processing through intelligent text analysis and categorization",
        "point3": "Time savings for routine activities – your employees can focus on value-adding tasks"
      }
    },
    "competitiveSection": {
      "title": "AI as an Engine for Greater Competitiveness",
      "paragraph": "In a rapidly changing world, standing still is not an option – not even for strong German SMEs. Artificial intelligence is not a trend to chase, but a powerful lever:",
      "points": {
        "point1": "Less time for administrative hurdles, more room for innovation",
        "point2": "Optimized customer communication through faster response times and better documentation",
        "point3": "Create free space in your team so you can focus on what makes your company unique"
      }
    },
    "demystifySection": {
      "title": "AI for SMEs: Don't Fear the Black Box!",
      "paragraph": "Artificial intelligence – sounds complicated, expensive and only for tech giants? This image persists, but no longer corresponds to reality:",
      "points": {
        "point1": "It's not about completely reshaping your company, but about using smart technologies specifically where they bring the greatest added value",
        "point2": "Many AI solutions today are user-friendly, GDPR-compliant and don't require in-depth technical knowledge",
        "point3": "The entry can be gradual – start with a specific application such as automated transcription and expand your AI usage as needed"
      }
    },
    "examplesSection": {
      "title": "Concrete AI Applications for SMEs",
      "paragraph": "See here some examples of how AI is already being used in medium-sized companies today:",
      "examples": {
        "example1": {
          "title": "Automated Minutes",
          "description": "Have your meetings automatically transcribed and converted into structured minutes – including automatic recognition of tasks and deadlines."
        },
        "example2": {
          "title": "Improved Customer Communication",
          "description": "Customer conversations can be automatically documented so that valuable information is not lost and your team can fully focus on the conversation."
        },
        "example3": {
          "title": "Data-based Decisions",
          "description": "AI tools can analyze your business data and help you identify trends and make informed strategic decisions."
        },
        "example4": {
          "title": "Intelligent Text Generation",
          "description": "Create first drafts for offers, reports or marketing texts faster with AI support, which your team then only needs to adapt."
        }
      }
    },
    "diktaiAISection": {
      "title": "Diktat AI: Your First Practical Step into the AI World",
      "paragraph1": "With Diktat AI, you can immediately start using AI without any prior knowledge. Our solution converts spoken language – be it from meetings, customer conversations, or your own notes – into precise text.",
      "paragraph2": "This is a perfect example of the meaningful use of AI in SMEs: A clearly defined task is efficiently automated, saves time, and simultaneously improves the quality of results.",
      "highlight": {
        "title": "Your Concrete Benefits with Diktat AI:",
        "description": "Up to 80% time saving on documentation, GDPR-compliant processing of all data, easy integration into your existing workflows, and immediately usable without technical knowledge."
      }
    },
    "conclusion": {
      "title": "AI for SMEs: The Right Time is Now",
      "paragraph": "Artificial intelligence is no longer a futuristic concept, but a practical tool that can help your company work more efficiently and competitively today. Getting started doesn't have to be complex or expensive – with the right partner and targeted solutions like Diktat AI, you can immediately benefit from the advantages of AI."
    },
    "cta": {
      "title": "Ready for Your First Step into the AI World?",
      "paragraph": "Discover how easy it can be to start using AI. Test Diktat AI and experience for yourself how artificial intelligence can make your everyday work easier.",
      "button": "Contact us",
      "button2": "Try Business Suite now"
    }
  },
  "nl": {
    "seo": {
      "description": "AI in het MKB pragmatisch gebruiken: Direct meerwaarde, AVG-conform – zonder grote budgetten."
    },
    "hero": {
      "title": "AI in het MKB: Geen toekomstmuziek, maar uw tool voor vandaag!",
      "subtitle": "Het MKB is het hart van de economie – pragmatisch, innovatief en dicht bij de klant. Maar het onderwerp kunstmatige intelligentie (AI) lijkt vaak een domein van grote bedrijven? Niets is minder waar! AI is allang geen abstract concept meer, maar biedt concrete, toegankelijke oplossingen."
    },
    "introduction": {
      "paragraph1": "AI in het MKB is geen luxe meer, maar een praktische noodzaak die juist middelgrote en kleine ondernemingen helpt om efficiënter, concurrerender en toekomstbestendiger te worden.",
      "paragraph2": "Vergeet science-fiction: het gaat om intelligente tools die routinetaken automatiseren (zoals het vervelende uittypen van dictaten!), processen optimaliseren en u waardevolle tijd teruggeven – tijd voor uw kernactiviteiten, uw klanten en strategische beslissingen. De eerste stap is eenvoudiger dan u denkt!"
    },
    "practicalSection": {
      "title": "Praktische AI-oplossingen voor het MKB",
      "paragraph": "Kunstmatige intelligentie hoeft niet complex te zijn. Integendeel: juist voor het MKB zijn er eenvoudig te implementeren oplossingen die direct meerwaarde creëren:",
      "points": {
        "point1": "Automatisering van administratieve taken zoals transcriptie van vergaderingen, klantgesprekken of interne dictaten",
        "point2": "Snellere informatieverwerking door intelligente tekstanalyse en -categorisering",
        "point3": "Tijdsbesparing bij routinetaken – uw medewerkers kunnen zich concentreren op waardetoevoegende activiteiten"
      }
    },
    "competitiveSection": {
      "title": "AI als motor voor meer concurrentievermogen",
      "paragraph": "In een snel veranderende wereld is stilstand geen optie – ook niet voor het sterke MKB. Kunstmatige intelligentie is daarbij geen trend die u moet volgen, maar een krachtige hefboom:",
      "points": {
        "point1": "Minder tijd voor administratieve hindernissen, meer ruimte voor innovatie",
        "point2": "Geoptimaliseerde klantcommunicatie door snellere reactietijden en betere documentatie",
        "point3": "Vrijheid creëren in het team, zodat u zich kunt concentreren op wat uw onderneming uniek maakt"
      }
    },
    "demystifySection": {
      "title": "AI in het MKB: Geen angst voor de black box!",
      "paragraph": "Kunstmatige intelligentie – klinkt ingewikkeld, duur en alleen iets voor tech-giganten? Dit beeld blijft hardnekkig bestaan, maar komt allang niet meer overeen met de realiteit:",
      "points": {
        "point1": "Het gaat er niet om uw onderneming volledig om te gooien, maar om gericht slimme technologieën in te zetten waar ze de grootste meerwaarde brengen",
        "point2": "Veel AI-oplossingen zijn tegenwoordig gebruiksvriendelijk, AVG-conform en vereisen geen diepgaande technische kennis",
        "point3": "De start kan stapsgewijs gebeuren – begin met een concrete toepassing zoals geautomatiseerde transcriptie en breid uw AI-gebruik naar behoefte uit"
      }
    },
    "examplesSection": {
      "title": "Concrete AI-toepassingen voor het MKB",
      "paragraph": "Zie hier enkele voorbeelden hoe AI vandaag al in het MKB wordt ingezet:",
      "examples": {
        "example1": {
          "title": "Geautomatiseerde notulen",
          "description": "Laat uw vergaderingen automatisch transcriberen en omzetten in gestructureerde notulen – inclusief automatische herkenning van taken en deadlines."
        },
        "example2": {
          "title": "Verbeterde klantcommunicatie",
          "description": "Klantgesprekken kunnen automatisch worden gedocumenteerd, zodat waardevolle informatie niet verloren gaat en uw team zich volledig op het gesprek kan concentreren."
        },
        "example3": {
          "title": "Datagedreven beslissingen",
          "description": "AI-tools kunnen uw bedrijfsgegevens analyseren en u helpen trends te herkennen en gefundeerde strategische beslissingen te nemen."
        },
        "example4": {
          "title": "Intelligente tekstgeneratie",
          "description": "Maak met AI-ondersteuning sneller eerste concepten voor offertes, rapporten of marketingteksten, die uw team alleen nog hoeft aan te passen."
        }
      }
    },
    "diktaiAISection": {
      "title": "DiktatAI: Uw eerste praktische stap in de AI-wereld",
      "paragraph1": "Met DiktatAI kunt u direct en zonder voorkennis beginnen met het gebruik van AI. Onze oplossing zet gesproken taal – uit vergaderingen, klantgesprekken of uw eigen notities – om in nauwkeurige tekst.",
      "paragraph2": "Dit is een perfect voorbeeld van het zinvolle gebruik van AI in het MKB: een duidelijk afgebakende taak wordt efficiënt geautomatiseerd, bespaart tijd en verbetert tegelijkertijd de kwaliteit van de resultaten.",
      "highlight": {
        "title": "Uw concrete voordeel met DiktatAI:",
        "description": "Tot 80% tijdsbesparing bij documentatie, AVG-conforme verwerking van alle gegevens, eenvoudige integratie in uw bestaande werkprocessen en direct inzetbaar zonder technische voorkennis."
      }
    },
    "conclusion": {
      "title": "AI in het MKB: Het juiste moment is nu",
      "paragraph": "Kunstmatige intelligentie is geen futuristisch concept meer, maar een praktisch instrument dat uw onderneming vandaag al kan helpen efficiënter en concurrerender te werken. De start hoeft niet complex of duur te zijn – met de juiste partner en gerichte oplossingen zoals DiktatAI kunt u direct profiteren van de voordelen van AI."
    },
    "cta": {
      "title": "Klaar voor uw eerste stap in de AI-wereld?",
      "paragraph": "Ontdek hoe eenvoudig de start met AI kan zijn. Test DiktatAI en ervaar zelf hoe kunstmatige intelligentie uw werkdag kan verlichten.",
      "button": "Contact opnemen",
      "button2": "Nu Business Suite ontdekken"
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
