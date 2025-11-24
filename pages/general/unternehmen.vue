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

        <!-- Anwendungsfälle Section -->
        <div class="mb-8">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("useCasesSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("useCasesSection.paragraph") }}
          </p>

          <!-- Meetings -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.meetings.title") }}
                </h3>
                <p class="mb-3">
                  <strong
                    >{{ t("useCasesSection.meetings.what_title") }}:</strong
                  >
                  {{ t("useCasesSection.meetings.what") }}
                </p>
                <p>
                  <strong
                    >{{ t("useCasesSection.meetings.how_title") }}:</strong
                  >
                  {{ t("useCasesSection.meetings.how") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Gespräche -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.conversations.title") }}
                </h3>
                <p class="mb-3">
                  <strong
                    >{{
                      t("useCasesSection.conversations.what_title")
                    }}:</strong
                  >
                  {{ t("useCasesSection.conversations.what") }}
                </p>
                <p>
                  <strong
                    >{{ t("useCasesSection.conversations.how_title") }}:</strong
                  >
                  {{ t("useCasesSection.conversations.how") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Notizen -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.notes.title") }}
                </h3>
                <p class="mb-3">
                  <strong>{{ t("useCasesSection.notes.what_title") }}:</strong>
                  {{ t("useCasesSection.notes.what") }}
                </p>
                <p>
                  <strong>{{ t("useCasesSection.notes.how_title") }}:</strong>
                  {{ t("useCasesSection.notes.how") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Dokumente -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
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
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.documents.title") }}
                </h3>
                <p class="mb-3">
                  <strong
                    >{{ t("useCasesSection.documents.what_title") }}:</strong
                  >
                  {{ t("useCasesSection.documents.what") }}
                </p>
                <p>
                  <strong
                    >{{ t("useCasesSection.documents.how_title") }}:</strong
                  >
                  {{ t("useCasesSection.documents.how") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.content.title") }}
                </h3>
                <p class="mb-3">
                  <strong
                    >{{ t("useCasesSection.content.what_title") }}:</strong
                  >
                  {{ t("useCasesSection.content.what") }}
                </p>
                <p>
                  <strong>{{ t("useCasesSection.content.how_title") }}:</strong>
                  {{ t("useCasesSection.content.how") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Schulung -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <div class="flex items-start mb-4">
              <div class="bg-accent/10 p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-bold mb-2">
                  {{ t("useCasesSection.training.title") }}
                </h3>
                <p class="mb-3">
                  <strong
                    >{{ t("useCasesSection.training.what_title") }}:</strong
                  >
                  {{ t("useCasesSection.training.what") }}
                </p>
                <p>
                  <strong
                    >{{ t("useCasesSection.training.how_title") }}:</strong
                  >
                  {{ t("useCasesSection.training.how") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("benefitsSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("benefitsSection.paragraph") }}
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
              <span>{{ t("benefitsSection.points.point1") }}</span>
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
              <span>{{ t("benefitsSection.points.point2") }}</span>
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
              <span>{{ t("benefitsSection.points.point3") }}</span>
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
              <span>{{ t("benefitsSection.points.point4") }}</span>
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
              <span>{{ t("benefitsSection.points.point5") }}</span>
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
              <span>{{ t("benefitsSection.points.point6") }}</span>
            </li>
          </ul>
        </div>

        <!-- Integration Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("integrationSection.title") }}
          </h2>
          <p class="text-lg">
            {{ t("integrationSection.paragraph") }}
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
const { registerUrl } = useAppUrl();

// SEO Meta Tags
useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://diktat.ai/de/unternehmen" },
    {
      property: "og:title",
      content: t("meta.title"),
    },
    {
      property: "og:description",
      content: t("meta.description"),
    },
    {
      property: "og:image",
      content: "https://diktat.ai/images/unternehmen-og.jpg",
    },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://diktat.ai/de/unternehmen" },
    {
      name: "twitter:title",
      content: "Diktat AI im Unternehmen: Effizienz steigern im Arbeitsalltag",
    },
    {
      name: "twitter:description",
      content:
        "Praktische Anwendungsfälle für Diktat AI in Ihrem Unternehmen - Zeit sparen und Produktivität steigern!",
    },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/unternehmen-og.jpg",
    },
    // Canonical URL
    { rel: "canonical", href: "https://diktat.ai/de/unternehmen" },
  ],
});
</script>

<i18n lang="json">
{
  "de": {
    "meta": {
      "title": "Diktat AI im Unternehmen: Effizienz steigern im Arbeitsalltag",
      "description": "Entdecken Sie praktische Anwendungsfälle für Diktat AI in Ihrem Unternehmen. Von Meeting-Protokollen bis zur E-Mail-Erstellung – sparen Sie Zeit und steigern Sie die Produktivität."
    },
    "hero": {
      "title": "Effizienter Arbeiten: Der praktische Einsatz von Diktat AI im Unternehmensalltag",
      "subtitle": "In jedem Unternehmen wird täglich gesprochen: Meetings, Telefonate, spontane Ideen, Anweisungen. Doch wie wird diese Fülle an wertvollen Informationen effizient erfasst, dokumentiert und nutzbar gemacht? Diktat AI ist Ihr intelligenter Partner, der gesprochene Worte nahtlos in präzisen Text umwandelt."
    },
    "introduction": {
      "paragraph": "Diktat AI ist Ihr intelligenter Partner, der gesprochene Worte nahtlos in präzisen Text umwandelt und so wertvolle Zeit und Ressourcen in Ihrem täglichen Geschäftsablauf freisetzt. Entdecken Sie, wie Sie Diktat AI konkret einsetzen können, um Prozesse zu verschlanken und die Produktivität zu steigern."
    },
    "useCasesSection": {
      "title": "Vom gesprochenen Wort zum wertvollen Asset: Anwendungsfälle für Diktat AI",
      "paragraph": "Kennen Sie das? Stundenlanges Abtippen von Meeting-Protokollen? Wichtige Details aus Telefonaten gehen verloren? Spontane Ideen verpuffen, weil keine Zeit zum Notieren war? Die manuelle Dokumentation gesprochener Inhalte ist ein echter Zeitfresser und birgt Fehlerquellen. Hier kommt Diktat AI ins Spiel – vielfältig einsetzbar, um Ihren Alltag zu erleichtern:",
      "meetings": {
        "title": "Meeting-Effizienz steigern",
        "what_title": "Was",
        "what": "Interne Teambesprechungen, Kundentermine, Projekt-Updates, Vorstandssitzungen.",
        "how_title": "Wie Diktat AI hilft",
        "how": "Nehmen Sie das Meeting auf (Einverständnis vorausgesetzt!) und laden Sie die Audiodatei hoch. Diktat AI erstellt blitzschnell ein durchsuchbares Protokoll. Halten Sie Entscheidungen, Aufgaben (Action Items) und wichtige Diskussionspunkte präzise und ohne manuellen Tippaufwand fest."
      },
      "conversations": {
        "title": "Wichtige Gespräche & Telefonate festhalten",
        "what_title": "Was",
        "what": "Wichtige Kundenanrufe, Support-Gespräche, Verhandlungen, Experteninterviews (intern/extern).",
        "how_title": "Wie Diktat AI hilft",
        "how": "Zeichnen Sie das Gespräch auf (rechtliche Rahmenbedingungen beachten!). Lassen Sie es transkribieren, um wichtige Details, Vereinbarungen oder Kundenfeedback exakt zu dokumentieren. Erstellen Sie Zusammenfassungen für Ihr CRM, interne Memos oder zur Qualitätssicherung."
      },
      "notes": {
        "title": "Ideen & Notizen sofort sichern",
        "what_title": "Was",
        "what": "Spontane Einfälle unterwegs, Geistesblitze während der Arbeit, kurze Anweisungen, persönliche To-Dos.",
        "how_title": "Wie Diktat AI hilft",
        "how": "Nutzen Sie die Diktierfunktion Ihres Smartphones oder eines Diktiergeräts. Senden Sie die Aufnahme an Diktat AI (z.B. per E-Mail). So stellen Sie sicher, dass keine wertvolle Idee verloren geht und wandeln sie direkt in bearbeitbaren Text für Notizen, Aufgabenlisten oder Entwürfe um."
      },
      "documents": {
        "title": "Dokumente schneller erstellen",
        "what_title": "Was",
        "what": "Berichte, E-Mails, Angebote, Aktenvermerke, Standardprozeduren (SOPs), Briefe.",
        "how_title": "Wie Diktat AI hilft",
        "how": "Diktieren Sie den Inhalt, statt ihn mühsam zu tippen. Gerade bei längeren Texten oder wenn Sie unterwegs sind, sparen Sie enorm viel Zeit. Diktat AI liefert Ihnen die Textgrundlage, die Sie nur noch finalisieren müssen."
      },
      "content": {
        "title": "Content-Produktion beschleunigen",
        "what_title": "Was",
        "what": "Interviews für Blogartikel, Podcast-Aufnahmen, Video-Inhalte, interne Schulungsvideos.",
        "how_title": "Wie Diktat AI hilft",
        "how": "Erstellen Sie automatisch Transkripte Ihrer Audio- und Videoinhalte. Nutzen Sie diese als Basis für schriftliche Artikel, zur Erstellung von Untertiteln (Barrierefreiheit!), für die Inhaltanalyse oder als Show Notes für Podcasts."
      },
      "training": {
        "title": "Wissenstransfer & Schulung optimieren",
        "what_title": "Was",
        "what": "Aufgezeichnete Workshops, interne Schulungen, Präsentationen, Wissensweitergabe von Experten.",
        "how_title": "Wie Diktat AI hilft",
        "how": "Machen Sie aufgezeichnetes Wissen durch Transkription leicht durchsuchbar und zugänglich. Erstellen Sie Schulungsunterlagen oder Handouts effizienter und ermöglichen Sie Mitarbeitern, Inhalte in ihrem eigenen Tempo nachzulesen."
      }
    },
    "benefitsSection": {
      "title": "Ihr klarer Mehrwert: Effizienz, Genauigkeit und Fokus",
      "paragraph": "Der konsequente Einsatz von Diktat AI im Unternehmensalltag führt zu messbaren Verbesserungen:",
      "points": {
        "point1": "Massive Zeitersparnis: Reduzieren Sie den administrativen Aufwand für Dokumentation signifikant und gewinnen Sie Stunden für strategische Aufgaben zurück.",
        "point2": "Gesteigerte Produktivität: Ihre Teams können sich auf ihre Kernkompetenzen konzentrieren, da lästige Tipparbeit entfällt.",
        "point3": "Höhere Genauigkeit & Konsistenz: Minimieren Sie Übertragungsfehler und sorgen Sie für eine zuverlässige Dokumentation wichtiger Informationen.",
        "point4": "Verbessertes Wissensmanagement: Machen Sie gesprochenes Wissen im Unternehmen leicht auffindbar, teilbar und langfristig nutzbar.",
        "point5": "Nahtlose Integration: Diktat AI fügt sich dank einfacher Bedienung (Upload, E-Mail) unkompliziert in Ihre bestehenden Arbeitsabläufe ein.",
        "point6": "Sicherheit & Konformität: Verlassen Sie sich auf höchste Datensicherheit und DSGVO-konforme Verarbeitung Ihrer sensiblen Unternehmensdaten."
      }
    },
    "integrationSection": {
      "title": "Integrieren Sie Diktat AI mühelos in Ihren Workflow",
      "paragraph": "Der Einstieg ist denkbar einfach. Ob Sie Audiodateien direkt auf unserer Plattform hochladen oder die praktische E-Mail-Funktion nutzen – Sie erhalten Ihre Transkripte schnell und unkompliziert. Keine komplexe Softwareinstallation, keine langen Schulungen. Starten Sie noch heute damit, gesprochene Informationen effizienter zu nutzen."
    },
    "cta": {
      "title": "Bereit, die Effizienz in Ihrem Unternehmen zu revolutionieren?",
      "paragraph": "Erleben Sie selbst, wie Diktat AI zeitraubende Dokumentationsaufgaben in Ihrem Unternehmen vereinfacht. Optimieren Sie Ihre Prozesse und geben Sie Ihren Mitarbeitern mehr Zeit für das Wesentliche.",
      "button": "Jetzt Kontakt aufnehmen & beraten lassen"
    }
  },
  "en": {
    "meta": {
      "title": "Diktat AI in the Company: Increase Efficiency in the Daily Work",
      "description": "Discover practical use cases for Diktat AI in your company. From meeting minutes to email creation – save time and increase productivity."
    },
    "hero": {
      "title": "Work More Efficiently: The Practical Use of Diktat AI in Everyday Business",
      "subtitle": "In every company, there is daily communication: meetings, phone calls, spontaneous ideas, instructions. But how is this wealth of valuable information efficiently captured, documented, and made usable? Diktat AI is your intelligent partner that seamlessly converts spoken words into precise text."
    },
    "introduction": {
      "paragraph": "Diktat AI is your intelligent partner that seamlessly converts spoken words into precise text, freeing up valuable time and resources in your daily business operations. Discover how you can use Diktat AI specifically to streamline processes and increase productivity."
    },
    "useCasesSection": {
      "title": "From Spoken Word to Valuable Asset: Use Cases for Diktat AI",
      "paragraph": "Does this sound familiar? Hours of typing meeting minutes? Important details from phone calls are lost? Spontaneous ideas evaporate because there was no time to take notes? Manual documentation of spoken content is a real time-waster and source of errors. This is where Diktat AI comes in – versatile and ready to make your everyday life easier:",
      "meetings": {
        "title": "Increase Meeting Efficiency",
        "what_title": "What",
        "what": "Internal team meetings, customer appointments, project updates, board meetings.",
        "how_title": "How Diktat AI helps",
        "how": "Record the meeting (consent assumed!) and upload the audio file. Diktat AI quickly creates a searchable protocol. Capture decisions, action items, and important discussion points precisely and without manual typing effort."
      },
      "conversations": {
        "title": "Capture Important Conversations & Phone Calls",
        "what_title": "What",
        "what": "Important customer calls, support conversations, negotiations, expert interviews (internal/external).",
        "how_title": "How Diktat AI helps",
        "how": "Record the conversation (observing legal requirements!). Have it transcribed to document important details, agreements, or customer feedback precisely. Create summaries for your CRM, internal memos, or for quality assurance."
      },
      "notes": {
        "title": "Secure Ideas & Notes Immediately",
        "what_title": "What",
        "what": "Spontaneous ideas on the go, flashes of inspiration during work, brief instructions, personal to-dos.",
        "how_title": "How Diktat AI helps",
        "how": "Use the dictation function of your smartphone or a dictation device. Send the recording to Diktat AI (e.g., via email). This ensures that no valuable idea is lost and converts it directly into editable text for notes, task lists, or drafts."
      },
      "documents": {
        "title": "Create Documents Faster",
        "what_title": "What",
        "what": "Reports, emails, offers, memos, standard operating procedures (SOPs), letters.",
        "how_title": "How Diktat AI helps",
        "how": "Dictate the content instead of laboriously typing it. Especially for longer texts or when you're on the go, you save an enormous amount of time. Diktat AI provides you with the text foundation that you only need to finalize."
      },
      "content": {
        "title": "Accelerate Content Production",
        "what_title": "What",
        "what": "Interviews for blog articles, podcast recordings, video content, internal training videos.",
        "how_title": "How Diktat AI helps",
        "how": "Automatically create transcripts of your audio and video content. Use these as a basis for written articles, to create subtitles (accessibility!), for content analysis, or as show notes for podcasts."
      },
      "training": {
        "title": "Optimize Knowledge Transfer & Training",
        "what_title": "What",
        "what": "Recorded workshops, internal training, presentations, knowledge transfer from experts.",
        "how_title": "How Diktat AI helps",
        "how": "Make recorded knowledge easily searchable and accessible through transcription. Create training materials or handouts more efficiently and enable employees to read content at their own pace."
      }
    },
    "benefitsSection": {
      "title": "Your Clear Added Value: Efficiency, Accuracy, and Focus",
      "paragraph": "The consistent use of Diktat AI in everyday business leads to measurable improvements:",
      "points": {
        "point1": "Massive time savings: Significantly reduce the administrative effort for documentation and regain hours for strategic tasks.",
        "point2": "Increased productivity: Your teams can focus on their core competencies as tedious typing work is eliminated.",
        "point3": "Higher accuracy & consistency: Minimize transfer errors and ensure reliable documentation of important information.",
        "point4": "Improved knowledge management: Make spoken knowledge in the company easily findable, shareable, and usable in the long term.",
        "point5": "Seamless integration: Diktat AI fits easily into your existing workflows thanks to simple operation (upload, email).",
        "point6": "Security & compliance: Rely on the highest data security and GDPR-compliant processing of your sensitive company data."
      }
    },
    "integrationSection": {
      "title": "Integrate Diktat AI Effortlessly into Your Workflow",
      "paragraph": "Getting started is incredibly simple. Whether you upload audio files directly to our platform or use the practical email function – you receive your transcripts quickly and easily. No complex software installation, no lengthy training. Start today to use spoken information more efficiently."
    },
    "cta": {
      "title": "Ready to Revolutionize Efficiency in Your Company?",
      "paragraph": "Experience for yourself how Diktat AI simplifies time-consuming documentation tasks in your company. Optimize your processes and give your employees more time for what matters.",
      "button": "Contact us now & get advice"
    }
  },
  "nl": {
    "meta": {
      "title": "DiktatAI in het bedrijf: Efficiëntie verhogen in het dagelijks werk",
      "description": "Ontdek praktische toepassingen voor DiktatAI in uw bedrijf. Van vergadernotulen tot het opstellen van e-mails – bespaar tijd en verhoog de productiviteit."
    },
    "hero": {
      "title": "Efficiënter werken: De praktische inzet van DiktatAI in de bedrijfsalltag",
      "subtitle": "In elk bedrijf wordt dagelijks gesproken: vergaderingen, telefoongesprekken, spontane ideeën, instructies. Maar hoe wordt deze overvloed aan waardevolle informatie efficiënt vastgelegd, gedocumenteerd en bruikbaar gemaakt? DiktatAI is uw intelligente partner die gesproken woorden naadloos omzet in nauwkeurige tekst."
    },
    "introduction": {
      "paragraph": "DiktatAI is uw intelligente partner die gesproken woorden naadloos omzet in nauwkeurige tekst en zo waardevolle tijd en middelen in uw dagelijkse bedrijfsprocessen vrijmaakt. Ontdek hoe u DiktatAI concreet kunt inzetten om processen te stroomlijnen en de productiviteit te verhogen."
    },
    "useCasesSection": {
      "title": "Van het gesproken woord naar waardevol bezit: Toepassingen voor DiktatAI",
      "paragraph": "Herkent u dit? Urenlang uittypen van vergadernotulen? Belangrijke details uit telefoongesprekken gaan verloren? Spontane ideeën verdampen omdat er geen tijd was om ze te noteren? Het handmatig documenteren van gesproken inhoud is een echte tijdvreter en bevat foutenbronnen. Hier komt DiktatAI van pas – veelzijdig inzetbaar om uw dagelijks werk te verlichten:",
      "meetings": {
        "title": "Vergaderefficiëntie verhogen",
        "what_title": "Wat",
        "what": "Interne teamvergaderingen, klantafspraken, project-updates, directievergaderingen.",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Neem de vergadering op (met toestemming!) en upload het audiobestand. DiktatAI maakt razendsnel doorzoekbare notulen. Leg beslissingen, taken (actiepunten) en belangrijke discussiepunten nauwkeurig vast zonder handmatig typewerk."
      },
      "conversations": {
        "title": "Belangrijke gesprekken & telefoongesprekken vastleggen",
        "what_title": "Wat",
        "what": "Belangrijke klantgesprekken, supportgesprekken, onderhandelingen, expertinterviews (intern/extern).",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Neem het gesprek op (let op wettelijke kaders!). Laat het transcriberen om belangrijke details, afspraken of klantfeedback exact te documenteren. Maak samenvattingen voor uw CRM, interne memo's of voor kwaliteitsborging."
      },
      "notes": {
        "title": "Ideeën & notities direct veiligstellen",
        "what_title": "Wat",
        "what": "Spontane invallen onderweg, geniale ingevingen tijdens het werk, korte instructies, persoonlijke to-do's.",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Gebruik de dicteerfunctie van uw smartphone of een dictafoon. Stuur de opname naar DiktatAI (bijvoorbeeld per e-mail). Zo zorgt u ervoor dat geen waardevol idee verloren gaat en zet u deze direct om in bewerkbare tekst voor notities, takenlijsten of concepten."
      },
      "documents": {
        "title": "Documenten sneller opstellen",
        "what_title": "Wat",
        "what": "Rapporten, e-mails, offertes, dossiernotities, standaardprocedures (SOP's), brieven.",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Dicteer de inhoud in plaats van moeizaam te typen. Vooral bij langere teksten of wanneer u onderweg bent, bespaart u enorm veel tijd. DiktatAI levert u de tekstbasis die u alleen nog hoeft af te ronden."
      },
      "content": {
        "title": "Contentproductie versnellen",
        "what_title": "Wat",
        "what": "Interviews voor blogartikelen, podcastopnames, video-inhoud, interne trainingsvideo's.",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Maak automatisch transcripties van uw audio- en video-inhoud. Gebruik deze als basis voor geschreven artikelen, voor het maken van ondertitels (toegankelijkheid!), voor inhoudsanalyse of als show notes voor podcasts."
      },
      "training": {
        "title": "Kennisoverdracht & training optimaliseren",
        "what_title": "Wat",
        "what": "Opgenomen workshops, interne trainingen, presentaties, kennisoverdracht van experts.",
        "how_title": "Hoe DiktatAI helpt",
        "how": "Maak opgenomen kennis door transcriptie gemakkelijk doorzoekbaar en toegankelijk. Stel trainingsmaterialen of handouts efficiënter op en geef medewerkers de mogelijkheid om inhoud in hun eigen tempo na te lezen."
      }
    },
    "benefitsSection": {
      "title": "Uw duidelijke meerwaarde: Efficiëntie, nauwkeurigheid en focus",
      "paragraph": "De consequente inzet van DiktatAI in de bedrijfsalltag leidt tot meetbare verbeteringen:",
      "points": {
        "point1": "Enorme tijdsbesparing: Verminder de administratieve last voor documentatie aanzienlijk en win uren terug voor strategische taken.",
        "point2": "Verhoogde productiviteit: Uw teams kunnen zich richten op hun kerncompetenties doordat vervelend typewerk wegvalt.",
        "point3": "Hogere nauwkeurigheid & consistentie: Minimaliseer overdrachtsfouten en zorg voor betrouwbare documentatie van belangrijke informatie.",
        "point4": "Verbeterd kennisbeheer: Maak gesproken kennis in het bedrijf gemakkelijk vindbaar, deelbaar en langdurig bruikbaar.",
        "point5": "Naadloze integratie: DiktatAI past dankzij eenvoudige bediening (upload, e-mail) probleemloos in uw bestaande werkprocessen.",
        "point6": "Veiligheid & compliance: Vertrouw op de hoogste dataveiligheid en AVG-conforme verwerking van uw gevoelige bedrijfsgegevens."
      }
    },
    "integrationSection": {
      "title": "Integreer DiktatAI moeiteloos in uw workflow",
      "paragraph": "De start is bijzonder eenvoudig. Of u nu audiobestanden direct op ons platform uploadt of de praktische e-mailfunctie gebruikt – u ontvangt uw transcripties snel en ongecompliceerd. Geen complexe software-installatie, geen lange trainingen. Begin vandaag nog met het efficiënter gebruiken van gesproken informatie."
    },
    "cta": {
      "title": "Klaar om de efficiëntie in uw bedrijf te revolutioneren?",
      "paragraph": "Ervaar zelf hoe DiktatAI tijdrovende documentatietaken in uw bedrijf vereenvoudigt. Optimaliseer uw processen en geef uw medewerkers meer tijd voor wat echt belangrijk is.",
      "button": "Neem nu contact op & laat u adviseren"
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
