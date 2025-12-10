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
          <a :href="registerUrl" class="mt-6 inline-block">
            <button
              class="font-display bg-white text-pink-500 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide"
            >
              {{ t("hero.cta") }}
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Für Studium & Forschung Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("intro.title") }}
          </h2>
          <p class="text-lg mb-8">{{ t("intro.subtitle") }}</p>

          <!-- Students Card -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <h3 class="font-display text-2xl font-bold mb-6">
              {{ t("students.title") }}
            </h3>
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
                <span>{{ t("students.item1") }}</span>
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
                <span>{{ t("students.item2") }}</span>
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
                <span>{{ t("students.item3") }}</span>
              </li>
            </ul>
          </div>

          <!-- Academics Card -->
          <div
            class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300"
          >
            <h3 class="font-display text-2xl font-bold mb-6">
              {{ t("academics.title") }}
            </h3>
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
                <span>{{ t("academics.item1") }}</span>
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
                <span>{{ t("academics.item2") }}</span>
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
                <span>{{ t("academics.item3") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Process Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("process.title") }}
          </h2>
          <p class="text-lg mb-8">{{ t("process.subtitle") }}</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("process.step1.title") }}
              </h3>
              <p>{{ t("process.step1.text") }}</p>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("process.step2.title") }}
              </h3>
              <p>{{ t("process.step2.text") }}</p>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("process.step3.title") }}
              </h3>
              <p>{{ t("process.step3.text") }}</p>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("process.step4.title") }}
              </h3>
              <p>{{ t("process.step4.text") }}</p>
            </div>
          </div>
        </div>

        <!-- Advantages Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("advantages.title") }}
          </h2>
          <p class="text-lg mb-8">{{ t("advantages.subtitle") }}</p>

          <div class="space-y-6">
            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <div class="flex items-start">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.timeSaving.title") }}
                  </h3>
                  <p>{{ t("advantages.timeSaving.text") }}</p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <div class="flex items-start">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.learning.title") }}
                  </h3>
                  <p>{{ t("advantages.learning.text") }}</p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <div class="flex items-start">
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
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.research.title") }}
                  </h3>
                  <p>{{ t("advantages.research.text") }}</p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <div class="flex items-start">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.precision.title") }}
                  </h3>
                  <p>{{ t("advantages.precision.text") }}</p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300"
            >
              <div class="flex items-start">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.focus.title") }}
                  </h3>
                  <p>{{ t("advantages.focus.text") }}</p>
                </div>
              </div>
            </div>
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

<i18n lang="json">
{
  "de": {
    "meta": {
      "title": "Diktat AI für Studierende & Akademiker - Vorlesungen & Interviews transkribieren",
      "description": "Transkribiere Vorlesungen, Seminare und Forschungsinterviews mühelos mit Diktat AI. Spare Zeit für Prüfungen, Abschlussarbeiten und Publikationen."
    },
    "hero": {
      "title": "Smarter Studieren & Forschen – Transkripte statt Tippen",
      "subtitle": "Verwandle Vorlesungen, Seminare und Interviews mühelos in durchsuchbaren Text. Gewinne wertvolle Zeit für Prüfungen, Abschlussarbeiten und Publikationen.",
      "cta": "Jetzt kostenlos starten & Zeit sparen"
    },
    "intro": {
      "title": "Diktat AI: Dein unverzichtbarer Helfer an Uni & Hochschule",
      "subtitle": "Entdecke, wie Studierende und Akademiker Diktat AI nutzen, um Lern- und Forschungsprozesse zu optimieren:"
    },
    "students": {
      "title": "Studierende",
      "item1": "Transkribiere Vorlesungen und Seminare, um Inhalte leichter zu wiederholen und zu durchsuchen.",
      "item2": "Wandle Interviews für Haus- und Abschlussarbeiten (Bachelor, Master, Doktorarbeit) schnell in Text um.",
      "item3": "Erstelle mühelos Mitschriften von Lerngruppen oder Diskussionsrunden."
    },
    "academics": {
      "title": "Akademiker & Forschende",
      "item1": "Transkribiere Forschungsinterviews und qualitative Daten für eine effiziente Analyse.",
      "item2": "Wandle Vorträge, Konferenzbeiträge oder diktierte Notizen in Text um.",
      "item3": "Archiviere gesprochene Inhalte als durchsuchbare Textdokumente für spätere Referenzen."
    },
    "process": {
      "title": "Einfach. Schnell. Effektiv.",
      "subtitle": "Unser unkomplizierter Prozess spart dir wertvolle Stunden, die du besser ins Lernen oder Forschen investieren kannst.",
      "step1": {
        "title": "1. Aufnahme hochladen",
        "text": "Vorlesung, Interview, Notiz etc. mit einem Klick starten."
      },
      "step2": {
        "title": "2. KI-Transkription",
        "text": "Präzise Umwandlung durch intelligente Spracherkennung."
      },
      "step3": {
        "title": "3. Sichere Verarbeitung",
        "text": "Deine Daten sind sicher & DSGVO-konform (EU-Server)."
      },
      "step4": {
        "title": "4. Sofort nutzbar",
        "text": "Text herunterladen, kopieren, in deine Dokumente einfügen."
      }
    },
    "advantages": {
      "title": "Dein klarer Vorteil im Studium & in der Forschung mit Diktat AI",
      "subtitle": "Nutze die Kraft der Automatisierung, um dich auf das Wesentliche zu konzentrieren: Wissen erwerben und Erkenntnisse gewinnen.",
      "timeSaving": {
        "title": "Massive Zeitersparnis",
        "text": "Schluss mit stundenlangem Abtippen von Aufnahmen. Gewinne wertvolle Zeit für Lernen, Analyse, Schreiben und Experimente."
      },
      "learning": {
        "title": "Effektiver Lernen & Verstehen",
        "text": "Durchsuche Vorlesungsmitschriften gezielt nach Stichwörtern. Finde wichtige Passagen sofort wieder, ohne stundenlang Audio zu hören."
      },
      "research": {
        "title": "Beschleunigte Forschung",
        "text": "Verarbeite qualitative Daten (Interviews, Fokusgruppen) deutlich schneller. Konzentriere dich auf die Analyse statt auf die Transkription."
      },
      "precision": {
        "title": "Präzise Grundlage für deine Arbeit",
        "text": "Erhalte genaue Text-Transkripte als verlässliche Basis für Zitate, Analysen, Studienarbeiten und Publikationen."
      },
      "focus": {
        "title": "Fokus auf Inhalte & Erkenntnisse",
        "text": "Reduziere mühsame Routineaufgaben. Investiere deine Energie in das Verstehen komplexer Themen und das Gewinnen neuer wissenschaftlicher Einsichten."
      }
    }
  },
  "en": {
    "meta": {
      "title": "Diktat AI for Students & Academics - Transcribe Lectures & Interviews",
      "description": "Effortlessly transcribe lectures, seminars, and research interviews with Diktat AI. Save time for exams, theses, and publications."
    },
    "hero": {
      "title": "Study & Research Smarter – Transcripts Instead of Typing",
      "subtitle": "Effortlessly transform lectures, seminars, and interviews into searchable text. Gain valuable time for exams, theses, and publications.",
      "cta": "Start Free Now & Save Time"
    },
    "intro": {
      "title": "Diktat AI: Your Essential Helper at University",
      "subtitle": "Discover how students and academics use Diktat AI to optimize learning and research processes:"
    },
    "students": {
      "title": "Students",
      "item1": "Transcribe lectures and seminars to review and search content more easily.",
      "item2": "Quickly convert interviews for term papers and theses (Bachelor's, Master's, PhD) into text.",
      "item3": "Effortlessly create notes from study groups or discussion rounds."
    },
    "academics": {
      "title": "Academics & Researchers",
      "item1": "Transcribe research interviews and qualitative data for efficient analysis.",
      "item2": "Convert presentations, conference contributions, or dictated notes into text.",
      "item3": "Archive spoken content as searchable text documents for later reference."
    },
    "process": {
      "title": "Simple. Fast. Effective.",
      "subtitle": "Our straightforward process saves you valuable hours that you can better invest in learning or researching.",
      "step1": {
        "title": "1. Upload Recording",
        "text": "Start with a lecture, interview, note, etc. with one click."
      },
      "step2": {
        "title": "2. AI Transcription",
        "text": "Precise conversion through intelligent speech recognition."
      },
      "step3": {
        "title": "3. Secure Processing",
        "text": "Your data is secure & GDPR-compliant (EU servers)."
      },
      "step4": {
        "title": "4. Ready to Use",
        "text": "Download, copy, paste text into your documents."
      }
    },
    "advantages": {
      "title": "Your Clear Advantage in Studies & Research with Diktat AI",
      "subtitle": "Use the power of automation to focus on what matters: acquiring knowledge and gaining insights.",
      "timeSaving": {
        "title": "Massive Time Savings",
        "text": "No more hours of typing up recordings. Gain valuable time for learning, analysis, writing, and experiments."
      },
      "learning": {
        "title": "Learn & Understand More Effectively",
        "text": "Search lecture notes for specific keywords. Find important passages instantly without listening to hours of audio."
      },
      "research": {
        "title": "Accelerated Research",
        "text": "Process qualitative data (interviews, focus groups) much faster. Focus on analysis rather than transcription."
      },
      "precision": {
        "title": "Precise Foundation for Your Work",
        "text": "Receive accurate text transcripts as a reliable basis for quotes, analyses, academic papers, and publications."
      },
      "focus": {
        "title": "Focus on Content & Insights",
        "text": "Reduce tedious routine tasks. Invest your energy in understanding complex topics and gaining new scientific insights."
      }
    }
  },
  "nl": {
    "meta": {
      "title": "DiktatAI voor Studenten & Academici - Colleges & Interviews transcriberen",
      "description": "Transcribeer colleges, seminars en onderzoeksinterviews moeiteloos met DiktatAI. Bespaar tijd voor tentamens, scripties en publicaties."
    },
    "hero": {
      "title": "Slimmer Studeren & Onderzoeken – Transcripties in plaats van Typen",
      "subtitle": "Zet colleges, seminars en interviews moeiteloos om in doorzoekbare tekst. Win waardevolle tijd voor tentamens, scripties en publicaties.",
      "cta": "Start nu gratis & bespaar tijd"
    },
    "intro": {
      "title": "DiktatAI: Jouw onmisbare helper op universiteit & hogeschool",
      "subtitle": "Ontdek hoe studenten en academici DiktatAI gebruiken om leer- en onderzoeksprocessen te optimaliseren:"
    },
    "students": {
      "title": "Studenten",
      "item1": "Transcribeer colleges en seminars om inhoud gemakkelijker te herhalen en te doorzoeken.",
      "item2": "Zet interviews voor papers en scripties (Bachelor, Master, Proefschrift) snel om in tekst.",
      "item3": "Maak moeiteloos aantekeningen van studiegroepen of discussierondes."
    },
    "academics": {
      "title": "Academici & Onderzoekers",
      "item1": "Transcribeer onderzoeksinterviews en kwalitatieve data voor efficiënte analyse.",
      "item2": "Zet lezingen, conferentiebijdragen of gedicteerde notities om in tekst.",
      "item3": "Archiveer gesproken inhoud als doorzoekbare tekstdocumenten voor latere referentie."
    },
    "process": {
      "title": "Eenvoudig. Snel. Effectief.",
      "subtitle": "Ons ongecompliceerde proces bespaart je waardevolle uren die je beter in studeren of onderzoeken kunt investeren.",
      "step1": {
        "title": "1. Opname uploaden",
        "text": "College, interview, notitie etc. met één klik starten."
      },
      "step2": {
        "title": "2. AI-transcriptie",
        "text": "Nauwkeurige omzetting door intelligente spraakherkenning."
      },
      "step3": {
        "title": "3. Veilige verwerking",
        "text": "Jouw data is veilig & AVG-conform (EU-servers)."
      },
      "step4": {
        "title": "4. Direct bruikbaar",
        "text": "Tekst downloaden, kopiëren, in je documenten plakken."
      }
    },
    "advantages": {
      "title": "Jouw duidelijke voordeel in studie & onderzoek met DiktatAI",
      "subtitle": "Gebruik de kracht van automatisering om je te focussen op wat echt belangrijk is: kennis verwerven en inzichten verkrijgen.",
      "timeSaving": {
        "title": "Enorme tijdbesparing",
        "text": "Gedaan met urenlang uittypen van opnames. Win waardevolle tijd voor leren, analyse, schrijven en experimenten."
      },
      "learning": {
        "title": "Effectiever leren & begrijpen",
        "text": "Doorzoek collegeaantekeningen gericht op trefwoorden. Vind belangrijke passages direct terug, zonder urenlang audio te beluisteren."
      },
      "research": {
        "title": "Versneld onderzoek",
        "text": "Verwerk kwalitatieve data (interviews, focusgroepen) aanzienlijk sneller. Focus op de analyse in plaats van op de transcriptie."
      },
      "precision": {
        "title": "Nauwkeurige basis voor jouw werk",
        "text": "Krijg exacte tekst-transcripties als betrouwbare basis voor citaten, analyses, studiewerken en publicaties."
      },
      "focus": {
        "title": "Focus op inhoud & inzichten",
        "text": "Verminder moeizame routinetaken. Investeer je energie in het begrijpen van complexe onderwerpen en het verkrijgen van nieuwe wetenschappelijke inzichten."
      }
    }
  },
  "es": {
    "meta": {
      "title": "Diktat AI para estudiantes y académicos - Transcribir clases y entrevistas",
      "description": "Transcribe clases, seminarios y entrevistas de investigación sin esfuerzo con Diktat AI. Ahorra tiempo para exámenes, tesis y publicaciones."
    },
    "hero": {
      "title": "Estudia e investiga más inteligentemente – Transcripciones en lugar de escribir",
      "subtitle": "Transforma clases, seminarios y entrevistas en texto buscable sin esfuerzo. Gana tiempo valioso para exámenes, tesis y publicaciones.",
      "cta": "Comenzar gratis ahora y ahorrar tiempo"
    },
    "intro": {
      "title": "Diktat AI: Tu ayudante esencial en la universidad",
      "subtitle": "Descubre cómo estudiantes y académicos usan Diktat AI para optimizar los procesos de aprendizaje e investigación:"
    },
    "students": {
      "title": "Estudiantes",
      "item1": "Transcribe clases y seminarios para revisar y buscar contenido más fácilmente.",
      "item2": "Convierte rápidamente entrevistas para trabajos y tesis (Grado, Máster, Doctorado) en texto.",
      "item3": "Crea notas de grupos de estudio o rondas de discusión sin esfuerzo."
    },
    "academics": {
      "title": "Académicos e investigadores",
      "item1": "Transcribe entrevistas de investigación y datos cualitativos para un análisis eficiente.",
      "item2": "Convierte presentaciones, contribuciones a conferencias o notas dictadas en texto.",
      "item3": "Archiva contenido hablado como documentos de texto buscables para referencia futura."
    },
    "process": {
      "title": "Simple. Rápido. Efectivo.",
      "subtitle": "Nuestro proceso sencillo te ahorra horas valiosas que puedes invertir mejor en estudiar o investigar.",
      "step1": {
        "title": "1. Subir grabación",
        "text": "Inicia con una clase, entrevista, nota, etc. con un clic."
      },
      "step2": {
        "title": "2. Transcripción con IA",
        "text": "Conversión precisa mediante reconocimiento de voz inteligente."
      },
      "step3": {
        "title": "3. Procesamiento seguro",
        "text": "Tus datos están seguros y cumplen con RGPD (servidores UE)."
      },
      "step4": {
        "title": "4. Listo para usar",
        "text": "Descarga, copia y pega el texto en tus documentos."
      }
    },
    "advantages": {
      "title": "Tu clara ventaja en estudios e investigación con Diktat AI",
      "subtitle": "Usa el poder de la automatización para concentrarte en lo que importa: adquirir conocimiento y obtener perspectivas.",
      "timeSaving": {
        "title": "Ahorro de tiempo masivo",
        "text": "Olvídate de horas escribiendo grabaciones. Gana tiempo valioso para aprender, analizar, escribir y experimentar."
      },
      "learning": {
        "title": "Aprende y comprende más efectivamente",
        "text": "Busca en las notas de clase por palabras clave específicas. Encuentra pasajes importantes instantáneamente sin escuchar horas de audio."
      },
      "research": {
        "title": "Investigación acelerada",
        "text": "Procesa datos cualitativos (entrevistas, grupos focales) mucho más rápido. Concéntrate en el análisis en lugar de la transcripción."
      },
      "precision": {
        "title": "Base precisa para tu trabajo",
        "text": "Recibe transcripciones de texto precisas como base confiable para citas, análisis, trabajos académicos y publicaciones."
      },
      "focus": {
        "title": "Enfoque en contenido y perspectivas",
        "text": "Reduce tareas rutinarias tediosas. Invierte tu energía en comprender temas complejos y obtener nuevas perspectivas científicas."
      }
    }
  }
}
</i18n>
