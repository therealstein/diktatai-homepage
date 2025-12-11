<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div
      class="hero min-h-[50vh] relative"
      style="
        background: linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%);
        background-size: cover;
        background-position: center;
      "
    >
      <div class="hero-content text-center">
        <div
          class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl"
        >
          <h1
            class="font-display text-4xl font-bold text-white mb-4"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.title") }}
          </h1>
          <p
            class="text-xl text-white mb-8"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.subtitle") }}
          </p>
          <a :href="registerUrl">
            <button
              class="font-display bg-white text-pink-500 text-xl font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide"
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
        <!-- Journalist Tools Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("journalistTools.title") }}
          </h2>
          <p class="text-lg mb-8">
            {{ t("journalistTools.intro") }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t("journalistTools.interviews.title") }}
              </h3>
              <p>
                {{ t("journalistTools.interviews.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t("journalistTools.pressConferences.title") }}
              </h3>
              <p>
                {{ t("journalistTools.pressConferences.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t("journalistTools.research.title") }}
              </h3>
              <p>
                {{ t("journalistTools.research.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t("journalistTools.podcast.title") }}
              </h3>
              <p>
                {{ t("journalistTools.podcast.description") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("process.title") }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t("process.intro") }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4"
                >
                  1
                </div>
                <h3 class="font-display text-xl font-bold">
                  {{ t("process.upload.title") }}
                </h3>
              </div>
              <p>
                {{ t("process.upload.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4"
                >
                  2
                </div>
                <h3 class="font-display text-xl font-bold">
                  {{ t("process.transcription.title") }}
                </h3>
              </div>
              <p>
                {{ t("process.transcription.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4"
                >
                  3
                </div>
                <h3 class="font-display text-xl font-bold">
                  {{ t("process.security.title") }}
                </h3>
              </div>
              <p>
                {{ t("process.security.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4"
                >
                  4
                </div>
                <h3 class="font-display text-xl font-bold">
                  {{ t("process.ready.title") }}
                </h3>
              </div>
              <p>
                {{ t("process.ready.description") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Advantages Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("advantages.title") }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t("advantages.intro") }}
          </p>

          <div class="space-y-6">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0"
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
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.timeSaving.title") }}
                  </h3>
                  <p>
                    {{ t("advantages.timeSaving.description") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0"
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
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.fasterPublication.title") }}
                  </h3>
                  <p>
                    {{ t("advantages.fasterPublication.description") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0"
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
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.preciseResults.title") }}
                  </h3>
                  <p>
                    {{ t("advantages.preciseResults.description") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <div class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0"
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
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t("advantages.dataSecurity.title") }}
                  </h3>
                  <p>
                    {{ t("advantages.dataSecurity.description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Workflow Integration Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("workflow.title") }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t("workflow.intro") }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("workflow.email.title") }}
              </h3>
              <p class="mb-4">
                {{ t("workflow.email.description") }}
              </p>
              <NuxtLinkLocale
                to="how-it-works"
                class="text-pink-500 hover:text-pink-600 font-bold"
              >
                {{ t("workflow.email.link") }}
              </NuxtLinkLocale>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("workflow.api.title") }}
              </h3>
              <p class="mb-4">
                {{ t("workflow.api.description") }}
              </p>
              <NuxtLinkLocale to="general-kontakt" class="btn btn-primary">
                {{ t("workflow.api.link") }}
              </NuxtLinkLocale>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t("workflow.speed.title") }}
              </h4>
              <p>
                {{ t("workflow.speed.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t("workflow.flexibility.title") }}
              </h4>
              <p>
                {{ t("workflow.flexibility.description") }}
              </p>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t("workflow.efficiency.title") }}
              </h4>
              <p>
                {{ t("workflow.efficiency.description") }}
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("faq.title") }}
          </h2>
          <div class="space-y-6">
            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" checked="checked" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t("faq.whatIs.question") }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t("faq.whatIs.answer") }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t("faq.suitable.question") }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t("faq.suitable.answer") }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t("faq.accuracy.question") }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t("faq.accuracy.answer") }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t("faq.security.question") }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t("faq.security.answer") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA Section -->
        <div
          class="card bg-gradient-to-br from-pink-500/10 to-blue-500/10 shadow-xl p-8 rounded-3xl border border-pink-500/20"
        >
          <h2 class="font-display text-3xl font-bold mb-4 text-center">
            {{ t("finalCta.title") }}
          </h2>
          <p class="text-lg text-center mb-8">
            {{ t("finalCta.description") }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="registerUrl">
              <button class="btn btn-primary btn-lg">
                {{ t("finalCta.start") }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing">
              <button class="btn btn-outline btn-lg">
                {{ t("finalCta.pricing") }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLinkLocale } from "#components";

const { t } = useI18n({
  useScope: "local",
});
const { registerUrl } = useAppUrl();

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();
useHead({
  title: t("hero.title"),
  meta: [
    {
      name: "description",
      content: t("hero.subtitle"),
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
});
</script>

<i18n>
{
  "en": {
    "hero": {
      "title": "Diktat AI: Lightning-fast Transcription for Journalists & Editors",
      "subtitle": "Transform interviews, press conferences, and research recordings into precise, quotable text in minutes. Focus on the story, not typing – and meet every deadline.",
      "cta": "Start Transcription Now"
    },
    "journalistTools": {
      "title": "Your Indispensable Tool in the Newsroom",
      "intro": "Whether for print, online, radio, or TV – discover how journalists and editors use Diktat AI to work faster and more efficiently:",
      "interviews": {
        "title": "Interviews & Soundbites",
        "description": "Quickly convert conversation recordings into text – for precise quotes and fast article drafts."
      },
      "pressConferences": {
        "title": "Press Conferences & Events",
        "description": "Capture all important statements and details as searchable text, even under time pressure."
      },
      "research": {
        "title": "Research & Background Talks",
        "description": "Make audio notes and phone call recordings easily usable and searchable."
      },
      "podcast": {
        "title": "Podcast & Video Content",
        "description": "Effortlessly create transcripts for show notes, subtitles, or for repurposing as articles."
      }
    },
    "process": {
      "title": "Simple. Fast. Reliable.",
      "intro": "Our straightforward process delivers transcripts when you need them – without detours.",
      "upload": {
        "title": "Upload Recording",
        "description": "Start interview, press conference recording etc. with one click."
      },
      "transcription": {
        "title": "AI Transcription",
        "description": "Precise conversion through intelligent speech recognition."
      },
      "security": {
        "title": "Secure Processing",
        "description": "Strictly GDPR-compliant & encrypted on EU servers."
      },
      "ready": {
        "title": "Ready to Use",
        "description": "Formatted text for download, copy and paste."
      }
    },
    "advantages": {
      "title": "Your Clear Advantage in Research and Production",
      "intro": "Diktat AI solves one of the biggest time-wasters in journalism – so you can focus on what matters.",
      "timeSaving": {
        "title": "Massive Time Savings",
        "description": "Hours of typing are a thing of the past. Gain valuable time for research, writing, and meeting your deadlines."
      },
      "fasterPublication": {
        "title": "Faster Publication",
        "description": "Get from recording to finished article faster. Process more material in less time and increase your output."
      },
      "preciseResults": {
        "title": "Precise & Quotable Results",
        "description": "Get accurate text transcripts as a reliable basis for your articles, reports, and quotes. Easily searchable and editable."
      },
      "dataSecurity": {
        "title": "Highest Data Security & Source Protection",
        "description": "Protect your confidential interviews and sources. We guarantee GDPR-compliant processing exclusively in the EU."
      }
    },
    "workflow": {
      "title": "Diktat AI Adapts to Your Editorial Workflow",
      "intro": "We know it has to be fast. Use Diktat AI flexibly, in whatever way best fits your working style.",
      "email": {
        "title": "Transcribe via Email",
        "description": "The fastest way to text: Send your audio file directly as an email attachment. Diktat AI delivers the transcript immediately. Ideal for on the go or quick assistance.",
        "link": "See how it works →"
      },
      "api": {
        "title": "Seamless Integration (via API)",
        "description": "Integrate Diktat AI directly into your editorial systems or tools. Automate the transcription process for maximum efficiency.",
        "link": "Request Custom Solution"
      },
      "speed": {
        "title": "Speed",
        "description": "Get transcripts often faster than you could type yourself."
      },
      "flexibility": {
        "title": "Flexibility",
        "description": "Use Diktat AI from your desk or mobile via email."
      },
      "efficiency": {
        "title": "Efficiency",
        "description": "Reduce manual steps and speed up the entire production process."
      }
    },
    "faq": {
      "title": "Frequently Asked Questions about Diktat AI for Journalists",
      "whatIs": {
        "question": "What exactly does Diktat AI do for journalists?",
        "answer": "Diktat AI converts your audio recordings – interviews, press conferences, phone calls (with consent!), research conversations – automatically into written text. You upload the file, our AI delivers the transcript."
      },
      "suitable": {
        "question": "Is Diktat AI suitable for my newsroom?",
        "answer": "Yes, Diktat AI is perfect for individual journalists, freelancers, editorial teams, and entire media houses that regularly need to transcribe audio content and want to save valuable time."
      },
      "accuracy": {
        "question": "How accurate are the transcriptions for quotes?",
        "answer": "Our AI offers high accuracy, especially with clear audio quality. You get a very good text base that you can quickly review and use for exact quotes. This saves enormous time compared to complete typing."
      },
      "security": {
        "question": "Are my sources and interviews safe with Diktat AI?",
        "answer": "Absolutely. The protection of your data and sources has the highest priority. We work strictly in compliance with GDPR and process all data on secure servers exclusively within the EU."
      }
    },
    "finalCta": {
      "title": "No More Typing Marathons After the Interview",
      "description": "Diktat AI is your fast and reliable partner for transcription in journalism. Gain hours back, speed up your reporting, and focus on what you do best: telling great stories.",
      "start": "Start Free Trial",
      "pricing": "View Pricing"
    }
  },
  "de": {
    "hero": {
      "title": "Diktat AI: Blitzschnelle Transkription für Journalisten & Redakteure",
      "subtitle": "Verwandeln Sie Interviews, Pressekonferenzen und Recherche-Aufnahmen in Minuten in präzisen, zitierfähigen Text. Konzentrieren Sie sich auf die Story, nicht aufs Tippen – und halten Sie jede Deadline.",
      "cta": "Jetzt Transkription starten"
    },
    "journalistTools": {
      "title": "Ihr unverzichtbares Werkzeug im Redaktionsalltag",
      "intro": "Ob für Print, Online, Radio oder TV – entdecken Sie, wie Journalisten und Redakteure Diktat AI nutzen, um schneller und effizienter zu arbeiten:",
      "interviews": {
        "title": "Interviews & O-Töne",
        "description": "Wandeln Sie Gesprächsaufnahmen blitzschnell in Text um – für präzise Zitate und schnelle Artikelentwürfe."
      },
      "pressConferences": {
        "title": "Pressekonferenzen & Events",
        "description": "Erfassen Sie alle wichtigen Aussagen und Details als durchsuchbaren Text, auch unter Zeitdruck."
      },
      "research": {
        "title": "Recherche & Hintergrundgespräche",
        "description": "Machen Sie Audio-Notizen und Aufnahmen von Telefonaten einfach nutzbar und durchsuchbar."
      },
      "podcast": {
        "title": "Podcast & Video Content",
        "description": "Erstellen Sie mühelos Transkripte für Shownotes, Untertitel oder zur Weiterverwertung als Artikel."
      }
    },
    "process": {
      "title": "Einfach. Schnell. Zuverlässig.",
      "intro": "Unser unkomplizierter Prozess liefert Ihnen Transkripte, wenn Sie sie brauchen – ohne Umwege.",
      "upload": {
        "title": "Aufnahme hochladen",
        "description": "Interview, PK-Mitschnitt etc. mit einem Klick starten."
      },
      "transcription": {
        "title": "KI-Transkription",
        "description": "Präzise Umwandlung durch intelligente Spracherkennung."
      },
      "security": {
        "title": "Sichere Verarbeitung",
        "description": "Streng DSGVO-konform & auf EU-Servern verschlüsselt."
      },
      "ready": {
        "title": "Sofort einsatzbereit",
        "description": "Formatierter Text zum Download, Kopieren und Einfügen."
      }
    },
    "advantages": {
      "title": "Ihr klarer Vorteil bei Recherche und Produktion",
      "intro": "Diktat AI löst eines der größten Zeitfresser im Journalismus – damit Sie sich auf das konzentrieren können, was zählt.",
      "timeSaving": {
        "title": "Massive Zeitersparnis",
        "description": "Stundenlanges Abtippen gehört der Vergangenheit an. Gewinnen Sie wertvolle Zeit für Recherche, Schreiben und das Einhalten Ihrer Deadlines."
      },
      "fasterPublication": {
        "title": "Schnellere Veröffentlichung",
        "description": "Kommen Sie schneller von der Aufnahme zum fertigen Beitrag. Verarbeiten Sie mehr Material in kürzerer Zeit und erhöhen Sie Ihren Output."
      },
      "preciseResults": {
        "title": "Präzise & Zitierfähige Ergebnisse",
        "description": "Erhalten Sie genaue Text-Transkripte als verlässliche Grundlage für Ihre Artikel, Berichte und Zitate. Leicht durchsuchbar und bearbeitbar."
      },
      "dataSecurity": {
        "title": "Höchste Datensicherheit & Quellenschutz",
        "description": "Schützen Sie Ihre vertraulichen Interviews und Quellen. Wir garantieren DSGVO-konforme Verarbeitung ausschließlich in der EU."
      }
    },
    "workflow": {
      "title": "Diktat AI passt sich Ihrem Redaktions-Workflow an",
      "intro": "Wir wissen, dass es schnell gehen muss. Nutzen Sie Diktat AI flexibel, wie es am besten in Ihre Arbeitsweise passt.",
      "email": {
        "title": "Einfach per E-Mail transkribieren",
        "description": "Der schnellste Weg zum Text: Senden Sie Ihre Audiodatei direkt als E-Mail-Anhang. Diktat AI liefert das Transkript umgehend zurück. Ideal für unterwegs oder schnelle Zuarbeit.",
        "link": "So funktioniert's →"
      },
      "api": {
        "title": "Nahtlose Integration (via API)",
        "description": "Binden Sie Diktat AI direkt in Ihre Redaktionssysteme oder Tools ein. Automatisieren Sie den Transkriptionsprozess für maximale Effizienz.",
        "link": "Individuelle Lösung anfragen"
      },
      "speed": {
        "title": "Geschwindigkeit",
        "description": "Erhalten Sie Transkripte oft schneller als Sie selbst tippen könnten."
      },
      "flexibility": {
        "title": "Flexibilität",
        "description": "Nutzen Sie Diktat AI vom Schreibtisch oder mobil per E-Mail."
      },
      "efficiency": {
        "title": "Effizienz",
        "description": "Reduzieren Sie manuelle Schritte und beschleunigen Sie den gesamten Produktionsprozess."
      }
    },
    "faq": {
      "title": "Häufig gestellte Fragen zu Diktat AI für Journalisten",
      "whatIs": {
        "question": "Was genau macht Diktat AI für Journalisten?",
        "answer": "Diktat AI wandelt Ihre Audioaufnahmen – Interviews, Pressekonferenzen, Telefonmitschnitte (mit Zustimmung!), Recherchegespräche – automatisch in geschriebenen Text um. Sie laden die Datei hoch, unsere KI liefert das Transkript."
      },
      "suitable": {
        "question": "Ist Diktat AI für meine Redaktion geeignet?",
        "answer": "Ja, Diktat AI ist perfekt für einzelne Journalisten, freie Mitarbeiter, Redaktionsteams und ganze Medienhäuser, die regelmäßig Audioinhalte verschriftlichen müssen und wertvolle Zeit sparen wollen."
      },
      "accuracy": {
        "question": "Wie genau sind die Transkriptionen für Zitate?",
        "answer": "Unsere KI bietet eine hohe Genauigkeit, besonders bei klarer Audioqualität. Sie erhalten eine sehr gute Textbasis, die Sie schnell überprüfen und für exakte Zitate verwenden können. Das spart enorm Zeit gegenüber dem kompletten Abtippen."
      },
      "security": {
        "question": "Sind meine Quellen und Interviews bei Diktat AI sicher?",
        "answer": "Absolut. Der Schutz Ihrer Daten und Quellen hat höchste Priorität. Wir arbeiten streng DSGVO-konform und verarbeiten alle Daten auf sicheren Servern ausschließlich innerhalb der EU."
      }
    },
    "finalCta": {
      "title": "Schluss mit Tipp-Marathons nach dem Interview",
      "description": "Diktat AI ist Ihr schneller und zuverlässiger Partner für die Transkription im Journalismus. Gewinnen Sie Stunden zurück, beschleunigen Sie Ihre Berichterstattung und konzentrieren Sie sich auf das, was Sie am besten können: großartige Geschichten erzählen.",
      "start": "Kostenlos starten & testen",
      "pricing": "Preise ansehen"
    }
  },
  "nl": {
    "hero": {
      "title": "DiktatAI: Bliksemsnel transcriberen voor journalisten & redacteuren",
      "subtitle": "Zet interviews, persconferenties en onderzoeksopnames binnen enkele minuten om in nauwkeurige, citeerbare tekst. Focus op het verhaal, niet op het typen – en haal elke deadline.",
      "cta": "Start nu met transcriberen"
    },
    "journalistTools": {
      "title": "Uw onmisbare tool in de redactie",
      "intro": "Of het nu voor print, online, radio of tv is – ontdek hoe journalisten en redacteuren DiktatAI gebruiken om sneller en efficiënter te werken:",
      "interviews": {
        "title": "Interviews & quotes",
        "description": "Zet gespreksopnames razendsnel om in tekst – voor nauwkeurige citaten en snelle artikelconcepten."
      },
      "pressConferences": {
        "title": "Persconferenties & evenementen",
        "description": "Leg alle belangrijke uitspraken en details vast als doorzoekbare tekst, ook onder tijdsdruk."
      },
      "research": {
        "title": "Onderzoek & achtergrondgesprekken",
        "description": "Maak audio-notities en opnames van telefoongesprekken eenvoudig bruikbaar en doorzoekbaar."
      },
      "podcast": {
        "title": "Podcast & videocontent",
        "description": "Maak moeiteloos transcripties voor shownotes, ondertitels of voor hergebruik als artikel."
      }
    },
    "process": {
      "title": "Eenvoudig. Snel. Betrouwbaar.",
      "intro": "Ons ongecompliceerde proces levert u transcripties wanneer u ze nodig heeft – zonder omwegen.",
      "upload": {
        "title": "Opname uploaden",
        "description": "Interview, persconferentie-opname etc. met één klik starten."
      },
      "transcription": {
        "title": "AI-transcriptie",
        "description": "Nauwkeurige omzetting door intelligente spraakherkenning."
      },
      "security": {
        "title": "Veilige verwerking",
        "description": "Strikt AVG-conform & versleuteld op EU-servers."
      },
      "ready": {
        "title": "Direct gebruiksklaar",
        "description": "Geformatteerde tekst om te downloaden, kopiëren en plakken."
      }
    },
    "advantages": {
      "title": "Uw duidelijke voordeel bij onderzoek en productie",
      "intro": "DiktatAI lost een van de grootste tijdvreters in de journalistiek op – zodat u zich kunt concentreren op wat telt.",
      "timeSaving": {
        "title": "Enorme tijdsbesparing",
        "description": "Urenlang uittypen behoort tot het verleden. Win waardevolle tijd voor onderzoek, schrijven en het halen van uw deadlines."
      },
      "fasterPublication": {
        "title": "Snellere publicatie",
        "description": "Ga sneller van opname naar afgewerkt artikel. Verwerk meer materiaal in kortere tijd en verhoog uw output."
      },
      "preciseResults": {
        "title": "Nauwkeurige & citeerbare resultaten",
        "description": "Ontvang exacte teksttranscripties als betrouwbare basis voor uw artikelen, rapporten en citaten. Gemakkelijk doorzoekbaar en bewerkbaar."
      },
      "dataSecurity": {
        "title": "Hoogste databeveiliging & bronnenbescherming",
        "description": "Bescherm uw vertrouwelijke interviews en bronnen. Wij garanderen AVG-conforme verwerking uitsluitend binnen de EU."
      }
    },
    "workflow": {
      "title": "DiktatAI past zich aan uw redactionele workflow aan",
      "intro": "We weten dat het snel moet gaan. Gebruik DiktatAI flexibel, zoals het het beste bij uw manier van werken past.",
      "email": {
        "title": "Eenvoudig transcriberen via e-mail",
        "description": "De snelste weg naar tekst: stuur uw audiobestand direct als e-mailbijlage. DiktatAI levert het transcript direct terug. Ideaal voor onderweg of snelle ondersteuning.",
        "link": "Zo werkt het →"
      },
      "api": {
        "title": "Naadloze integratie (via API)",
        "description": "Integreer DiktatAI direct in uw redactiesystemen of tools. Automatiseer het transcriptieproces voor maximale efficiëntie.",
        "link": "Vraag een oplossing op maat aan"
      },
      "speed": {
        "title": "Snelheid",
        "description": "Ontvang transcripties vaak sneller dan u zelf kunt typen."
      },
      "flexibility": {
        "title": "Flexibiliteit",
        "description": "Gebruik DiktatAI vanaf uw bureau of mobiel via e-mail."
      },
      "efficiency": {
        "title": "Efficiëntie",
        "description": "Verminder handmatige stappen en versnel het hele productieproces."
      }
    },
    "faq": {
      "title": "Veelgestelde vragen over DiktatAI voor journalisten",
      "whatIs": {
        "question": "Wat doet DiktatAI precies voor journalisten?",
        "answer": "DiktatAI zet uw audio-opnames – interviews, persconferenties, telefoonopnames (met toestemming!), onderzoeksgesprekken – automatisch om in geschreven tekst. U uploadt het bestand, onze AI levert het transcript."
      },
      "suitable": {
        "question": "Is DiktatAI geschikt voor mijn redactie?",
        "answer": "Ja, DiktatAI is perfect voor individuele journalisten, freelancers, redactieteams en complete mediahuizen die regelmatig audio-inhoud moeten uitschrijven en waardevolle tijd willen besparen."
      },
      "accuracy": {
        "question": "Hoe nauwkeurig zijn de transcripties voor citaten?",
        "answer": "Onze AI biedt een hoge nauwkeurigheid, vooral bij heldere audiokwaliteit. U krijgt een zeer goede tekstbasis die u snel kunt controleren en voor exacte citaten kunt gebruiken. Dit bespaart enorm veel tijd vergeleken met volledig uittypen."
      },
      "security": {
        "question": "Zijn mijn bronnen en interviews veilig bij DiktatAI?",
        "answer": "Absoluut. De bescherming van uw data en bronnen heeft de hoogste prioriteit. We werken strikt AVG-conform en verwerken alle data op beveiligde servers uitsluitend binnen de EU."
      }
    },
    "finalCta": {
      "title": "Klaar met typemarathons na het interview",
      "description": "DiktatAI is uw snelle en betrouwbare partner voor transcriptie in de journalistiek. Win uren terug, versnel uw berichtgeving en concentreer u op wat u het beste kunt: geweldige verhalen vertellen.",
      "start": "Gratis starten & testen",
      "pricing": "Bekijk prijzen"
    }
},
"es": {
    "hero": {
      "title": "Diktat AI: Transcripción ultrarrápida para periodistas y editores",
      "subtitle": "Transforme entrevistas, conferencias de prensa y grabaciones de investigación en texto preciso y citable en minutos. Concéntrese en la historia, no en escribir – y cumpla cada fecha límite.",
      "cta": "Comenzar transcripción ahora"
    },
    "journalistTools": {
      "title": "Su herramienta indispensable en la redacción",
      "intro": "Ya sea para prensa, online, radio o TV – descubra cómo periodistas y editores usan Diktat AI para trabajar más rápido y eficientemente:",
      "interviews": {
        "title": "Entrevistas y declaraciones",
        "description": "Convierta grabaciones de conversaciones rápidamente en texto – para citas precisas y borradores de artículos rápidos."
      },
      "pressConferences": {
        "title": "Conferencias de prensa y eventos",
        "description": "Capture todas las declaraciones importantes y detalles como texto buscable, incluso bajo presión de tiempo."
      },
      "research": {
        "title": "Investigación y conversaciones de fondo",
        "description": "Haga que las notas de audio y grabaciones de llamadas telefónicas sean fácilmente utilizables y buscables."
      },
      "podcast": {
        "title": "Podcast y contenido de video",
        "description": "Cree transcripciones sin esfuerzo para notas del programa, subtítulos o para reutilizar como artículos."
      }
    },
    "process": {
      "title": "Simple. Rápido. Confiable.",
      "intro": "Nuestro proceso sencillo le entrega transcripciones cuando las necesita – sin rodeos.",
      "upload": {
        "title": "Subir grabación",
        "description": "Inicie entrevista, grabación de conferencia de prensa, etc. con un clic."
      },
      "transcription": {
        "title": "Transcripción con IA",
        "description": "Conversión precisa mediante reconocimiento de voz inteligente."
      },
      "security": {
        "title": "Procesamiento seguro",
        "description": "Estrictamente conforme al RGPD y cifrado en servidores de la UE."
      },
      "ready": {
        "title": "Listo para usar",
        "description": "Texto formateado para descargar, copiar y pegar."
      }
    },
    "advantages": {
      "title": "Su clara ventaja en investigación y producción",
      "intro": "Diktat AI resuelve uno de los mayores consumidores de tiempo en el periodismo – para que pueda concentrarse en lo que importa.",
      "timeSaving": {
        "title": "Ahorro de tiempo masivo",
        "description": "Horas de escribir son cosa del pasado. Gane tiempo valioso para investigación, escritura y cumplir sus plazos."
      },
      "fasterPublication": {
        "title": "Publicación más rápida",
        "description": "Llegue más rápido de la grabación al artículo terminado. Procese más material en menos tiempo y aumente su producción."
      },
      "preciseResults": {
        "title": "Resultados precisos y citables",
        "description": "Obtenga transcripciones de texto exactas como base confiable para sus artículos, informes y citas. Fácilmente buscables y editables."
      },
      "dataSecurity": {
        "title": "Máxima seguridad de datos y protección de fuentes",
        "description": "Proteja sus entrevistas confidenciales y fuentes. Garantizamos procesamiento conforme al RGPD exclusivamente en la UE."
      }
    },
    "workflow": {
      "title": "Diktat AI se adapta a su flujo de trabajo editorial",
      "intro": "Sabemos que debe ser rápido. Use Diktat AI de forma flexible, como mejor se adapte a su forma de trabajar.",
      "email": {
        "title": "Transcribir fácilmente por correo electrónico",
        "description": "El camino más rápido al texto: envíe su archivo de audio directamente como adjunto de correo. Diktat AI entrega la transcripción inmediatamente. Ideal para trabajar en movimiento o asistencia rápida.",
        "link": "Vea cómo funciona →"
      },
      "api": {
        "title": "Integración perfecta (vía API)",
        "description": "Integre Diktat AI directamente en sus sistemas editoriales o herramientas. Automatice el proceso de transcripción para máxima eficiencia.",
        "link": "Solicitar solución personalizada"
      },
      "speed": {
        "title": "Velocidad",
        "description": "Reciba transcripciones a menudo más rápido de lo que podría escribir usted mismo."
      },
      "flexibility": {
        "title": "Flexibilidad",
        "description": "Use Diktat AI desde su escritorio o móvil por correo electrónico."
      },
      "efficiency": {
        "title": "Eficiencia",
        "description": "Reduzca pasos manuales y acelere todo el proceso de producción."
      }
    },
    "faq": {
      "title": "Preguntas frecuentes sobre Diktat AI para periodistas",
      "whatIs": {
        "question": "¿Qué hace exactamente Diktat AI para periodistas?",
        "answer": "Diktat AI convierte sus grabaciones de audio – entrevistas, conferencias de prensa, grabaciones telefónicas (¡con consentimiento!), conversaciones de investigación – automáticamente en texto escrito. Usted sube el archivo, nuestra IA entrega la transcripción."
      },
      "suitable": {
        "question": "¿Es Diktat AI adecuado para mi redacción?",
        "answer": "Sí, Diktat AI es perfecto para periodistas individuales, freelancers, equipos editoriales y medios completos que regularmente necesitan transcribir contenido de audio y quieren ahorrar tiempo valioso."
      },
      "accuracy": {
        "question": "¿Qué tan precisas son las transcripciones para citas?",
        "answer": "Nuestra IA ofrece alta precisión, especialmente con buena calidad de audio. Obtiene una muy buena base de texto que puede revisar rápidamente y usar para citas exactas. Esto ahorra mucho tiempo comparado con escribir todo manualmente."
      },
      "security": {
        "question": "¿Están seguras mis fuentes y entrevistas con Diktat AI?",
        "answer": "Absolutamente. La protección de sus datos y fuentes tiene la máxima prioridad. Trabajamos estrictamente conforme al RGPD y procesamos todos los datos en servidores seguros exclusivamente dentro de la UE."
      }
    },
    "finalCta": {
      "title": "Adiós a las maratones de escritura después de la entrevista",
      "description": "Diktat AI es su socio rápido y confiable para la transcripción en periodismo. Recupere horas, acelere sus reportajes y concéntrese en lo que mejor sabe hacer: contar grandes historias.",
      "start": "Comenzar gratis y probar",
      "pricing": "Ver precios"
    }
},
"fr": {
    "hero": {
      "title": "Diktat AI : Transcription ultra-rapide pour journalistes et rédacteurs",
      "subtitle": "Transformez interviews, conférences de presse et enregistrements de recherche en texte précis et citable en quelques minutes. Concentrez-vous sur l'histoire, pas sur la frappe – et respectez chaque deadline.",
      "cta": "Démarrer la transcription maintenant"
    },
    "journalistTools": {
      "title": "Votre outil indispensable dans la salle de rédaction",
      "intro": "Que ce soit pour la presse écrite, en ligne, la radio ou la télévision – découvrez comment les journalistes et rédacteurs utilisent Diktat AI pour travailler plus vite et plus efficacement :",
      "interviews": {
        "title": "Interviews et déclarations",
        "description": "Convertissez rapidement les enregistrements de conversations en texte – pour des citations précises et des brouillons d'articles rapides."
      },
      "pressConferences": {
        "title": "Conférences de presse et événements",
        "description": "Capturez toutes les déclarations et détails importants sous forme de texte consultable, même sous pression temporelle."
      },
      "research": {
        "title": "Recherche et entretiens de fond",
        "description": "Rendez les notes audio et enregistrements d'appels facilement utilisables et consultables."
      },
      "podcast": {
        "title": "Podcast et contenu vidéo",
        "description": "Créez sans effort des transcriptions pour les notes d'émission, sous-titres ou pour réutilisation en articles."
      }
    },
    "process": {
      "title": "Simple. Rapide. Fiable.",
      "intro": "Notre processus simple vous livre des transcriptions quand vous en avez besoin – sans détours.",
      "upload": {
        "title": "Télécharger l'enregistrement",
        "description": "Lancez interview, enregistrement de conférence de presse etc. en un clic."
      },
      "transcription": {
        "title": "Transcription IA",
        "description": "Conversion précise par reconnaissance vocale intelligente."
      },
      "security": {
        "title": "Traitement sécurisé",
        "description": "Strictement conforme au RGPD et chiffré sur serveurs EU."
      },
      "ready": {
        "title": "Prêt à l'emploi",
        "description": "Texte formaté pour téléchargement, copier-coller."
      }
    },
    "advantages": {
      "title": "Votre avantage clair en recherche et production",
      "intro": "Diktat AI résout l'un des plus grands pertes de temps du journalisme – pour que vous puissiez vous concentrer sur ce qui compte.",
      "timeSaving": {
        "title": "Gain de temps massif",
        "description": "Fini les heures de frappe. Gagnez un temps précieux pour la recherche, l'écriture et le respect de vos deadlines."
      },
      "fasterPublication": {
        "title": "Publication plus rapide",
        "description": "Passez plus rapidement de l'enregistrement à l'article fini. Traitez plus de matériel en moins de temps et augmentez votre production."
      },
      "preciseResults": {
        "title": "Résultats précis et citables",
        "description": "Obtenez des transcriptions textuelles précises comme base fiable pour vos articles, reportages et citations. Facilement consultables et modifiables."
      },
      "dataSecurity": {
        "title": "Sécurité des données et protection des sources maximales",
        "description": "Protégez vos interviews confidentielles et sources. Nous garantissons un traitement conforme au RGPD exclusivement dans l'UE."
      }
    },
    "workflow": {
      "title": "Diktat AI s'adapte à votre flux de travail éditorial",
      "intro": "Nous savons que ça doit être rapide. Utilisez Diktat AI de manière flexible, comme cela convient le mieux à votre façon de travailler.",
      "email": {
        "title": "Transcrire par e-mail",
        "description": "Le moyen le plus rapide vers le texte : envoyez votre fichier audio directement en pièce jointe par e-mail. Diktat AI renvoie la transcription immédiatement. Idéal en déplacement ou pour une aide rapide.",
        "link": "Voir comment ça marche →"
      },
      "api": {
        "title": "Intégration transparente (via API)",
        "description": "Intégrez Diktat AI directement dans vos systèmes éditoriaux ou outils. Automatisez le processus de transcription pour une efficacité maximale.",
        "link": "Demander une solution personnalisée"
      },
      "speed": {
        "title": "Rapidité",
        "description": "Obtenez des transcriptions souvent plus rapidement que vous ne pourriez taper vous-même."
      },
      "flexibility": {
        "title": "Flexibilité",
        "description": "Utilisez Diktat AI depuis votre bureau ou mobile par e-mail."
      },
      "efficiency": {
        "title": "Efficacité",
        "description": "Réduisez les étapes manuelles et accélérez tout le processus de production."
      }
    },
    "faq": {
      "title": "Questions fréquentes sur Diktat AI pour journalistes",
      "whatIs": {
        "question": "Que fait exactement Diktat AI pour les journalistes ?",
        "answer": "Diktat AI convertit vos enregistrements audio – interviews, conférences de presse, enregistrements téléphoniques (avec consentement !), conversations de recherche – automatiquement en texte écrit. Vous téléchargez le fichier, notre IA livre la transcription."
      },
      "suitable": {
        "question": "Diktat AI convient-il à ma salle de rédaction ?",
        "answer": "Oui, Diktat AI est parfait pour les journalistes individuels, les freelances, les équipes de rédaction et les maisons de médias entières qui doivent régulièrement transcrire du contenu audio et souhaitent gagner un temps précieux."
      },
      "accuracy": {
        "question": "Quelle est la précision des transcriptions pour les citations ?",
        "answer": "Notre IA offre une grande précision, surtout avec une bonne qualité audio. Vous obtenez une très bonne base de texte que vous pouvez rapidement vérifier et utiliser pour des citations exactes. Cela fait gagner énormément de temps par rapport à une frappe complète."
      },
      "security": {
        "question": "Mes sources et interviews sont-elles en sécurité avec Diktat AI ?",
        "answer": "Absolument. La protection de vos données et sources a la plus haute priorité. Nous travaillons strictement en conformité avec le RGPD et traitons toutes les données sur des serveurs sécurisés exclusivement dans l'UE."
      }
    },
    "finalCta": {
      "title": "Fini les marathons de frappe après l'interview",
      "description": "Diktat AI est votre partenaire rapide et fiable pour la transcription en journalisme. Récupérez des heures, accélérez vos reportages et concentrez-vous sur ce que vous faites de mieux : raconter de grandes histoires.",
      "start": "Commencer l'essai gratuit",
      "pricing": "Voir les tarifs"
    }
  },
  "sv": {
    "hero": {
      "title": "Diktat AI: Blixtsnabb transkribering för journalister och redaktörer",
      "subtitle": "Förvandla intervjuer, presskonferenser och forskningsinspelningar på några minuter till precis, citerbar text. Fokusera på storyn, inte på skrivandet – och håll varje deadline.",
      "cta": "Starta transkribering nu"
    },
    "journalistTools": {
      "title": "Ert oumbärliga verktyg i redaktionen",
      "intro": "Oavsett om det är för print, online, radio eller TV – upptäck hur journalister och redaktörer använder Diktat AI för att arbeta snabbare och mer effektivt:",
      "interviews": {
        "title": "Intervjuer och uttalanden",
        "description": "Omvandla samtalsinspelningar blixtsnabbt till text – för precisa citat och snabba artikelutkast."
      },
      "pressConferences": {
        "title": "Presskonferenser och evenemang",
        "description": "Fånga alla viktiga uttalanden och detaljer som sökbar text, även under tidspress."
      },
      "research": {
        "title": "Forskning och bakgrundssamtal",
        "description": "Gör ljudanteckningar och telefonsamtalsinspelningar enkelt användbara och sökbara."
      },
      "podcast": {
        "title": "Podcast och videoinnehåll",
        "description": "Skapa enkelt transkriptioner för programnoteringar, undertexter eller för återanvändning som artiklar."
      }
    },
    "process": {
      "title": "Enkelt. Snabbt. Pålitligt.",
      "intro": "Vår okomplicerade process levererar transkriptioner när du behöver dem – utan omvägar.",
      "upload": {
        "title": "Ladda upp inspelning",
        "description": "Starta intervju, presskonferensinspelning etc. med ett klick."
      },
      "transcription": {
        "title": "AI-transkribering",
        "description": "Precis konvertering genom intelligent röstigenkänning."
      },
      "security": {
        "title": "Säker behandling",
        "description": "Strikt GDPR-kompatibel och krypterad på EU-servrar."
      },
      "ready": {
        "title": "Omedelbart klar",
        "description": "Formaterad text för nedladdning, kopiera och klistra in."
      }
    },
    "advantages": {
      "title": "Er tydliga fördel i forskning och produktion",
      "intro": "Diktat AI löser en av de största tidstjuvarna inom journalistiken – så att du kan fokusera på det som räknas.",
      "timeSaving": {
        "title": "Massiv tidsvinst",
        "description": "Timslång skrivning är ett minne blott. Vinn värdefull tid för forskning, skrivande och att hålla dina deadlines."
      },
      "fasterPublication": {
        "title": "Snabbare publicering",
        "description": "Gå snabbare från inspelning till färdig artikel. Bearbeta mer material på kortare tid och öka din produktion."
      },
      "preciseResults": {
        "title": "Precisa och citerbara resultat",
        "description": "Få exakta texttranskriptioner som pålitlig grund för dina artiklar, reportage och citat. Lätt sökbara och redigerbara."
      },
      "dataSecurity": {
        "title": "Högsta datasäkerhet och källskydd",
        "description": "Skydda dina konfidentiella intervjuer och källor. Vi garanterar GDPR-kompatibel behandling uteslutande inom EU."
      }
    },
    "workflow": {
      "title": "Diktat AI anpassar sig till ert redaktionella arbetsflöde",
      "intro": "Vi vet att det måste gå snabbt. Använd Diktat AI flexibelt, på det sätt som bäst passar ert arbetssätt.",
      "email": {
        "title": "Transkribera via e-post",
        "description": "Snabbaste vägen till text: skicka din ljudfil direkt som e-postbilaga. Diktat AI levererar transkriptionen omedelbart. Idealiskt när du är på språng eller för snabb hjälp.",
        "link": "Se hur det fungerar →"
      },
      "api": {
        "title": "Sömlös integration (via API)",
        "description": "Integrera Diktat AI direkt i era redaktionssystem eller verktyg. Automatisera transkriptionsprocessen för maximal effektivitet.",
        "link": "Begär skräddarsydd lösning"
      },
      "speed": {
        "title": "Hastighet",
        "description": "Få transkriptioner ofta snabbare än du själv skulle kunna skriva."
      },
      "flexibility": {
        "title": "Flexibilitet",
        "description": "Använd Diktat AI från skrivbordet eller mobilt via e-post."
      },
      "efficiency": {
        "title": "Effektivitet",
        "description": "Minska manuella steg och påskynda hela produktionsprocessen."
      }
    },
    "faq": {
      "title": "Vanliga frågor om Diktat AI för journalister",
      "whatIs": {
        "question": "Vad gör Diktat AI exakt för journalister?",
        "answer": "Diktat AI konverterar dina ljudinspelningar – intervjuer, presskonferenser, telefoninspelningar (med samtycke!), forskningssamtal – automatiskt till skriven text. Du laddar upp filen, vår AI levererar transkriptionen."
      },
      "suitable": {
        "question": "Är Diktat AI lämplig för min redaktion?",
        "answer": "Ja, Diktat AI är perfekt för enskilda journalister, frilansare, redaktionsteam och hela mediehus som regelbundet behöver transkribera ljudinnehåll och vill spara värdefull tid."
      },
      "accuracy": {
        "question": "Hur noggranna är transkriptionerna för citat?",
        "answer": "Vår AI erbjuder hög noggrannhet, särskilt med tydlig ljudkvalitet. Du får en mycket bra textbas som du snabbt kan granska och använda för exakta citat. Detta sparar enormt mycket tid jämfört med fullständig avskrivning."
      },
      "security": {
        "question": "Är mina källor och intervjuer säkra med Diktat AI?",
        "answer": "Absolut. Skyddet av dina data och källor har högsta prioritet. Vi arbetar strikt GDPR-kompatibelt och behandlar all data på säkra servrar uteslutande inom EU."
      }
    },
    "finalCta": {
      "title": "Slut på skrivmaraton efter intervjun",
      "description": "Diktat AI är din snabba och pålitliga partner för transkribering inom journalistiken. Vinn tillbaka timmar, påskynda din rapportering och fokusera på det du gör bäst: berätta fantastiska historier.",
      "start": "Börja gratis provperiod",
      "pricing": "Se priser"
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

.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
