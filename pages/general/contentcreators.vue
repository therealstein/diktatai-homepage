<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div class="hero min-h-[50vh] relative" style="background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%); background-size: cover; background-position: center;">
      <div class="hero-content text-center">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl">
          <h1 class="font-display text-4xl font-bold text-white mb-4" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('hero.title') }}
          </h1>
          <p class="text-xl text-white mb-8" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('hero.subtitle') }}
          </p>
          <a :href="registerUrl">
            <button class="font-display bg-white text-pink-500 text-xl font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide">
              {{ t('hero.cta') }}
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Creator Tools Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('creatorTools.title') }}
          </h2>
          <p class="text-lg mb-8">
            {{ t('creatorTools.intro') }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('creatorTools.podcasters.title') }}
              </h3>
              <p>
                {{ t('creatorTools.podcasters.description') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('creatorTools.youtubers.title') }}
              </h3>
              <p>
                {{ t('creatorTools.youtubers.description') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('creatorTools.bloggers.title') }}
              </h3>
              <p>
                {{ t('creatorTools.bloggers.description') }}
              </p>
            </div>
            
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('creatorTools.socialMedia.title') }}
              </h3>
              <p>
                {{ t('creatorTools.socialMedia.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-3">
                {{ t('creatorTools.courseCreators.title') }}
              </h3>
              <p>
                {{ t('creatorTools.courseCreators.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('process.title') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('process.subtitle') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4">1</div>
                <h3 class="font-display text-xl font-bold">
                  {{ t('process.steps.upload.title') }}
                </h3>
              </div>
              <p>
                {{ t('process.steps.upload.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4">2</div>
                <h3 class="font-display text-xl font-bold">
                  {{ t('process.steps.transcription.title') }}
                </h3>
              </div>
              <p>
                {{ t('process.steps.transcription.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4">3</div>
                <h3 class="font-display text-xl font-bold">
                  {{ t('process.steps.security.title') }}
                </h3>
              </div>
              <p>
                {{ t('process.steps.security.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mr-4">4</div>
                <h3 class="font-display text-xl font-bold">
                  {{ t('process.steps.ready.title') }}
                </h3>
              </div>
              <p>
                {{ t('process.steps.ready.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Advantages Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('advantages.title') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('advantages.subtitle') }}
          </p>

          <div class="space-y-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('advantages.timeSaving.title') }}
                  </h3>
                  <p>
                    {{ t('advantages.timeSaving.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('advantages.contentOutput.title') }}
                  </h3>
                  <p>
                    {{ t('advantages.contentOutput.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('advantages.preciseTexts.title') }}
                  </h3>
                  <p>
                    {{ t('advantages.preciseTexts.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('advantages.accessibility.title') }}
                  </h3>
                  <p>
                    {{ t('advantages.accessibility.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">
                    {{ t('advantages.focus.title') }}
                  </h3>
                  <p>
                    {{ t('advantages.focus.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Workflow Integration Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('workflow.title') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('workflow.subtitle') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('workflow.email.title') }}
              </h3>
              <p class="mb-4">
                {{ t('workflow.email.description') }}
              </p>
              <NuxtLinkLocale to="how-it-works" class="text-pink-500 hover:text-pink-600 font-bold">
                {{ t('workflow.email.link') }}
              </NuxtLinkLocale>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('workflow.api.title') }}
              </h3>
              <p class="mb-4">
                {{ t('workflow.api.description') }}
              </p>
              <NuxtLinkLocale to="general-kontakt" class="btn btn-primary">
                {{ t('workflow.api.link') }}
              </NuxtLinkLocale>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t('workflow.features.flexibility.title') }}
              </h4>
              <p>
                {{ t('workflow.features.flexibility.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t('workflow.features.efficiency.title') }}
              </h4>
              <p>
                {{ t('workflow.features.efficiency.description') }}
              </p>
            </div>

            <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
              <h4 class="font-display text-lg font-bold mb-2">
                {{ t('workflow.features.seamlessness.title') }}
              </h4>
              <p>
                {{ t('workflow.features.seamlessness.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('faq.title') }}
          </h2>
          <div class="space-y-6">
            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" checked="checked" /> 
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.benefits.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.benefits.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.suitability.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.suitability.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.timeSaving.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.timeSaving.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.security.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.security.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.accuracy.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.accuracy.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.videoSupport.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.videoSupport.answer') }}
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200 rounded-2xl">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title font-display text-xl font-bold">
                {{ t('faq.questions.easeOfUse.question') }}
              </div>
              <div class="collapse-content">
                <p>
                  {{ t('faq.questions.easeOfUse.answer') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA Section -->
        <div class="card bg-gradient-to-br from-pink-500/10 to-blue-500/10 shadow-xl p-8 rounded-3xl border border-pink-500/20">
          <h2 class="font-display text-3xl font-bold mb-4 text-center">
            {{ t('finalCta.title') }}
          </h2>
          <p class="text-lg text-center mb-8">
            {{ t('finalCta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="registerUrl">
              <button class="btn btn-primary btn-lg">
                {{ t('finalCta.buttons.start') }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing">
              <button class="btn btn-outline btn-lg">
                {{ t('finalCta.buttons.pricing') }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta Tags
const { t } = useI18n({
  useScope: 'local'
})
const { registerUrl } = useAppUrl();

useHead({
  title: t('hero.title'),
  meta: [
    { 
      name: 'description', 
      content: t('hero.subtitle') 
    }
  ],
})

// Enable local translations with inline messages
</script>

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

<i18n lang="json">
{
  "de": {
    "hero": {
      "title": "Diktat AI: Mehr Content, weniger Tippen – Transkripte für Creator",
      "subtitle": "Verwandle deine Videos, Podcasts und Audio-Notizen mühelos in Text. Gewinne Zeit für Kreativität, Reichweite und deine Community.",
      "cta": "Jetzt Content-Workflow beschleunigen"
    },
    "creatorTools": {
      "title": "Diktat AI: Dein Turbo für die Content-Produktion",
      "intro": "Egal ob YouTube, Podcast, Social Media oder Blog – entdecke, wie Diktat AI deinen kreativen Prozess revolutioniert:",
      "podcasters": {
        "title": "Podcaster",
        "description": "Erstelle blitzschnell Shownotes, vollständige Transkripte für SEO oder zitiere Highlights für Social Media."
      },
      "youtubers": {
        "title": "YouTuber & Videomacher",
        "description": "Generiere automatisch Untertitel (SRT/VTT), verwandle Video-Skripte in Blogartikel oder analysiere deine Inhalte einfacher."
      },
      "bloggers": {
        "title": "Blogger & Texter",
        "description": "Wandle Recherche-Interviews, Sprachnotizen oder spontane Ideen sofort in bearbeitbaren Text um."
      },
      "socialMedia": {
        "title": "Social Media Manager",
        "description": "Extrahiere Kernaussagen aus Videos oder Audio für packende Captions und Posts."
      },
      "courseCreators": {
        "title": "Online-Kurs Ersteller",
        "description": "Transkribiere deine Lektionen für bessere Zugänglichkeit und als Lernmaterial für deine Teilnehmer."
      }
    },
    "process": {
      "title": "Hochladen. Umwandeln. Kreativ sein.",
      "subtitle": "Unser simpler Prozess bringt dich in Minuten vom Audio zum fertigen Text – damit du dich aufs Erschaffen konzentrieren kannst.",
      "steps": {
        "upload": {
          "title": "Datei hochladen",
          "description": "Deine Video-/Audiodatei per Klick starten."
        },
        "transcription": {
          "title": "KI-Transkription",
          "description": "Unsere smarte KI erledigt die Umwandlung."
        },
        "security": {
          "title": "Sichere Verarbeitung",
          "description": "Deine Daten sind sicher (DSGVO-konform)."
        },
        "ready": {
          "title": "Sofort einsatzbereit",
          "description": "Text kopieren, herunterladen & weiterverwenden."
        }
      }
    },
    "advantages": {
      "title": "Dein kreativer Vorteil mit Diktat AI",
      "subtitle": "Spare Zeit bei lästigen Aufgaben und investiere sie in das, was wirklich zählt: Deinen Content und deine Community.",
      "timeSaving": {
        "title": "Massive Zeitersparnis",
        "description": "Schluss mit stundenlangem Abtippen. Mehr Zeit für Ideenfindung, Aufnahme, Schnitt und Interaktion."
      },
      "contentOutput": {
        "title": "Mehr Content Output & Repurposing",
        "description": "Verwandle ein Video oder einen Podcast mühelos in Blogartikel, Social Media Snippets oder Newsletter-Inhalte. Maximiere deine Reichweite."
      },
      "preciseTexts": {
        "title": "Präzise Texte für deine Projekte",
        "description": "Erhalte genaue Transkripte als Basis für Untertitel, Shownotes, Artikel und Skripte. Weniger Nacharbeit, schnellere Ergebnisse."
      },
      "accessibility": {
        "title": "Bessere Zugänglichkeit & SEO",
        "description": "Mache deine Inhalte mit Untertiteln und Transkripten für alle zugänglich und verbessere dein Ranking in Suchmaschinen."
      },
      "focus": {
        "title": "Fokus aufs Erschaffen",
        "description": "Konzentriere deine Energie auf kreative Arbeit, Storytelling und den Aufbau deiner Marke – statt auf monotone Transkriptionsarbeit."
      }
    },
    "workflow": {
      "title": "Diktat AI passt sich deinem kreativen Flow an",
      "subtitle": "Wir machen es dir leicht, Transkripte genau dort zu nutzen, wo du sie brauchst.",
      "email": {
        "title": "Einfach per E-Mail transkribieren",
        "description": "Der schnellste Weg für unterwegs oder zwischendurch: Sende deine Audiodatei (Sprachmemo, Interview-Snippet) per E-Mail und erhalte den Text zurück. Perfekt für spontane Ideen!",
        "link": "So funktioniert's →"
      },
      "api": {
        "title": "Integration via API (für Fortgeschrittene)",
        "description": "Binde Diktat AI direkt in deine Tools oder Automatisierungs-Workflows (z.B. Zapier) ein, um den Prozess noch nahtloser zu gestalten.",
        "link": "Individuelle Lösung anfragen"
      },
      "features": {
        "flexibility": {
          "title": "Flexibilität",
          "description": "Nutze Transkription, egal wo du gerade bist oder welche Tools du bevorzugst."
        },
        "efficiency": {
          "title": "Effizienz",
          "description": "Reduziere Klicks und manuelle Schritte, um noch schneller zu sein."
        },
        "seamlessness": {
          "title": "Nahtlosigkeit",
          "description": "Integriere Transkripte direkt in deinen Content-Erstellungsprozess."
        }
      }
    },
    "faq": {
      "title": "Häufig gestellte Fragen zu Diktat AI für Content Creator",
      "questions": {
        "benefits": {
          "question": "Was bringt mir Diktat AI als Creator?",
          "answer": "Diktat AI nimmt dir das lästige Abtippen von Videos, Podcasts oder Sprachnotizen ab. Es wandelt Audio automatisch in Text um, den du für Untertitel, Shownotes, Blogartikel, Social Media und vieles mehr nutzen kannst."
        },
        "suitability": {
          "question": "Ist Diktat AI für meinen Content-Typ geeignet?",
          "answer": "Ja! Egal ob du Videos für YouTube oder TikTok machst, einen Podcast betreibst, bloggst, Online-Kurse erstellst oder einfach nur deine Ideen per Sprache festhältst – Diktat AI hilft dir, Zeit zu sparen."
        },
        "timeSaving": {
          "question": "Wie spare ich damit konkret Zeit?",
          "answer": "Stell dir vor, du musst ein 30-Minuten-Interview nicht mehr manuell abtippen (was Stunden dauern kann). Diktat AI erledigt das in Minuten. Diese Zeit kannst du für Schnitt, Design oder Community Management nutzen."
        },
        "security": {
          "question": "Sind meine unveröffentlichten Inhalte sicher?",
          "answer": "Absolut. Wir nehmen Datenschutz ernst (DSGVO-konform). Deine hochgeladenen Dateien und die Transkripte werden vertraulich behandelt und sicher auf EU-Servern verarbeitet."
        },
        "accuracy": {
          "question": "Wie genau sind die Transkripte für Untertitel etc.?",
          "answer": "Die Genauigkeit ist sehr hoch, besonders bei klarer Audioqualität. Du erhältst eine hervorragende Textgrundlage, die du meist direkt verwenden oder nur minimal anpassen musst. Das ist deutlich schneller als alles selbst zu schreiben."
        },
        "videoSupport": {
          "question": "Kann ich auch Videodateien hochladen?",
          "answer": "Ja, wir unterstützen gängige Audio- und Videodateiformate. Du kannst also direkt deine Video- oder Podcastfolgen hochladen."
        },
        "easeOfUse": {
          "question": "Ist das kompliziert zu bedienen? Ich bin kein Technik-Nerd!",
          "answer": "Nein, überhaupt nicht! Diktat AI ist super einfach: Datei hochladen, kurz warten, Text bekommen. Kein technisches Know-how erforderlich. Du kannst sofort loslegen."
        }
      }
    },
    "finalCta": {
      "title": "Schluss mit Transkriptions-Stress!",
      "subtitle": "Diktat AI ist dein smarter Assistent, der dir hilft, schneller und effizienter zu arbeiten. Steigere deinen Output, erreiche mehr Menschen und konzentriere dich wieder voll auf deine kreative Leidenschaft.",
      "buttons": {
        "start": "Kostenlos starten & ausprobieren",
        "pricing": "Preise ansehen"
      }
    }
  },
  "en": {
    "hero": {
      "title": "Diktat AI: More Content, Less Typing – Transcripts for Creators",
      "subtitle": "Transform your videos, podcasts and audio notes effortlessly into text. Gain time for creativity, reach and your community.",
      "cta": "Speed up your content workflow now"
    },
    "creatorTools": {
      "title": "Diktat AI: Your Turbo for Content Production",
      "intro": "Whether YouTube, podcast, social media or blog – discover how Diktat AI revolutionizes your creative process:",
      "podcasters": {
        "title": "Podcasters",
        "description": "Create show notes, complete transcripts for SEO or quote highlights for social media in a flash."
      },
      "youtubers": {
        "title": "YouTubers & Video Makers",
        "description": "Generate subtitles (SRT/VTT) automatically, turn video scripts into blog articles or analyze your content more easily."
      },
      "bloggers": {
        "title": "Bloggers & Copywriters",
        "description": "Convert research interviews, voice notes or spontaneous ideas into editable text immediately."
      },
      "socialMedia": {
        "title": "Social Media Managers",
        "description": "Extract key messages from videos or audio for compelling captions and posts."
      },
      "courseCreators": {
        "title": "Online Course Creators",
        "description": "Transcribe your lessons for better accessibility and as learning material for your participants."
      }
    },
    "process": {
      "title": "Upload. Convert. Create.",
      "subtitle": "Our simple process gets you from audio to finished text in minutes – so you can focus on creating.",
      "steps": {
        "upload": {
          "title": "Upload file",
          "description": "Start your video/audio file with one click."
        },
        "transcription": {
          "title": "AI Transcription",
          "description": "Our smart AI handles the conversion."
        },
        "security": {
          "title": "Secure Processing",
          "description": "Your data is safe (GDPR compliant)."
        },
        "ready": {
          "title": "Ready to use",
          "description": "Copy, download & reuse text."
        }
      }
    },
    "advantages": {
      "title": "Your creative advantage with Diktat AI",
      "subtitle": "Save time on tedious tasks and invest it in what really matters: Your content and your community.",
      "timeSaving": {
        "title": "Massive Time Savings",
        "description": "No more hours of typing. More time for brainstorming, recording, editing and interaction."
      },
      "contentOutput": {
        "title": "More Content Output & Repurposing",
        "description": "Effortlessly turn a video or podcast into blog articles, social media snippets or newsletter content. Maximize your reach."
      },
      "preciseTexts": {
        "title": "Precise Texts for Your Projects",
        "description": "Get accurate transcripts as a basis for subtitles, show notes, articles and scripts. Less post-processing, faster results."
      },
      "accessibility": {
        "title": "Better Accessibility & SEO",
        "description": "Make your content accessible to everyone with subtitles and transcripts and improve your search engine ranking."
      },
      "focus": {
        "title": "Focus on Creating",
        "description": "Concentrate your energy on creative work, storytelling and building your brand – instead of monotonous transcription work."
      }
    },
    "workflow": {
      "title": "Diktat AI Adapts to Your Creative Flow",
      "subtitle": "We make it easy for you to use transcripts exactly where you need them.",
      "email": {
        "title": "Transcribe via Email",
        "description": "The fastest way on the go or in between: Send your audio file (voice memo, interview snippet) by email and get the text back. Perfect for spontaneous ideas!",
        "link": "See how it works →"
      },
      "api": {
        "title": "Integration via API (for Advanced Users)",
        "description": "Integrate Diktat AI directly into your tools or automation workflows (e.g. Zapier) to make the process even more seamless.",
        "link": "Request custom solution"
      },
      "features": {
        "flexibility": {
          "title": "Flexibility",
          "description": "Use transcription wherever you are or whatever tools you prefer."
        },
        "efficiency": {
          "title": "Efficiency",
          "description": "Reduce clicks and manual steps to be even faster."
        },
        "seamlessness": {
          "title": "Seamlessness",
          "description": "Integrate transcripts directly into your content creation process."
        }
      }
    },
    "faq": {
      "title": "Frequently Asked Questions about Diktat AI for Content Creators",
      "questions": {
        "benefits": {
          "question": "What does Diktat AI do for me as a creator?",
          "answer": "Diktat AI takes the tedious typing of videos, podcasts or voice notes off your hands. It automatically converts audio into text that you can use for subtitles, show notes, blog articles, social media and much more."
        },
        "suitability": {
          "question": "Is Diktat AI suitable for my content type?",
          "answer": "Yes! Whether you make videos for YouTube or TikTok, run a podcast, blog, create online courses or just record your ideas by voice – Diktat AI helps you save time."
        },
        "timeSaving": {
          "question": "How do I save time with this?",
          "answer": "Imagine not having to manually type out a 30-minute interview (which can take hours). Diktat AI does this in minutes. You can use this time for editing, design or community management."
        },
        "security": {
          "question": "Are my unpublished contents safe?",
          "answer": "Absolutely. We take data protection seriously (GDPR compliant). Your uploaded files and transcripts are treated confidentially and processed securely on EU servers."
        },
        "accuracy": {
          "question": "How accurate are the transcripts for subtitles etc.?",
          "answer": "The accuracy is very high, especially with clear audio quality. You get an excellent text base that you can usually use directly or only need to adjust minimally. This is much faster than writing everything yourself."
        },
        "videoSupport": {
          "question": "Can I also upload video files?",
          "answer": "Yes, we support common audio and video file formats. So you can upload your video or podcast episodes directly."
        },
        "easeOfUse": {
          "question": "Is this complicated to use? I'm not a tech nerd!",
          "answer": "No, not at all! Diktat AI is super simple: upload file, wait a bit, get text. No technical know-how required. You can start right away."
        }
      }
    },
    "finalCta": {
      "title": "No More Transcription Stress!",
      "subtitle": "Diktat AI is your smart assistant that helps you work faster and more efficiently. Increase your output, reach more people and focus fully on your creative passion again.",
      "buttons": {
        "start": "Start free & try it out",
        "pricing": "View prices"
      }
    }
  }
}
</i18n> 