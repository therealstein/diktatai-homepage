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
            {{ t('hero.title') }}
          </h1>
          <p
            class="text-lg text-white"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t('hero.description') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4">
      <!-- Process Steps Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="font-display text-3xl font-bold mb-12 text-center">{{ t('process.title') }}</h2>
        
        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 h-full">
            <div class="card-body flex flex-col items-center text-center">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 class="card-title font-display text-xl font-bold">{{ t('steps.step1.title') }}</h3>
              <p class="flex-grow">
                {{ t('steps.step1.description') }}
              </p>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 h-full">
            <div class="card-body flex flex-col items-center text-center">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 class="card-title font-display text-xl font-bold">{{ t('steps.step2.title') }}</h3>
              <p class="flex-grow">
                {{ t('steps.step2.description') }}
              </p>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 h-full">
            <div class="card-body flex flex-col items-center text-center">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="card-title font-display text-xl font-bold">{{ t('steps.step3.title') }}</h3>
              <p class="flex-grow">
                {{ t('steps.step3.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Process Visual Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="card bg-base-200 shadow-xl p-8 rounded-3xl border border-base-300">
          <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <!-- Upload Icon -->
            <div class="text-center">
              <div class="bg-accent/10 p-6 rounded-full inline-block mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p class="text-sm font-bold">Hochladen</p>
            </div>
            
            <!-- Arrow -->
            <div class="hidden md:block text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            <!-- Down Arrow (Mobile) -->
            <div class="block md:hidden text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <!-- AI Processing Icon -->
            <div class="text-center">
              <div class="bg-accent/10 p-6 rounded-full inline-block mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p class="text-sm font-bold">KI Verarbeitung</p>
            </div>
            
            <!-- Arrow -->
            <div class="hidden md:block text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            <!-- Down Arrow (Mobile) -->
            <div class="block md:hidden text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <!-- Document Icon -->
            <div class="text-center">
              <div class="bg-accent/10 p-6 rounded-full inline-block mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p class="text-sm font-bold">Transkript</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Summary Section -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="prose prose-lg max-w-none">
          <h3 class="font-display text-2xl font-bold mb-6 text-center">{{ t('summary.title') }}</h3>
          <p class="text-lg text-center mb-8">
            {{ t('summary.description') }}
          </p>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="max-w-3xl mx-auto">
        <div class="card bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl p-8 rounded-3xl border border-accent/20 text-center">
          <h3 class="font-display text-2xl font-bold mb-4">{{ t('cta.title') }}</h3>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <a :href="registerUrl">
              <button class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide w-full md:w-auto">
                {{ t('cta.register') }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing" class="btn btn-outline btn-accent px-8 rounded-full">
              {{ t('cta.pricing') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="general-help" class="btn btn-ghost px-8 rounded-full">
              {{ t('cta.help') }}
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
const { canonicalUrl } = useSeoCanonical('/how-it-works');

useHead({
  title: t('seo.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.description'),
    },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
});
</script>

<style scoped>
.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

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

:deep(.badge-accent) {
  background-color: #ef56a4 !important;
  border-color: #ef56a4 !important;
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
</style>

<i18n lang="json">
{
  "de": {
    "seo": {
      "title": "So funktioniert es - Diktat AI",
      "description": "Erfahren Sie, wie einfach die Spracherkennung mit Diktat AI funktioniert. In nur 3 Schritten verwandeln Sie Ihre Audioaufnahmen in Text."
    },
    "hero": {
      "title": "In 3 einfachen Schritten zu Ihrem fertigen Transkript",
      "description": "Mit Diktat AI verwandeln Sie Ihre Audioaufnahmen schnell und mühelos in Text über unsere sichere Plattform. So sparen Sie wertvolle Zeit."
    },
    "process": {
      "title": "So funktioniert Diktat AI"
    },
    "steps": {
      "step1": {
        "title": "Schritt 1: Aufnahme hochladen",
        "description": "Laden Sie Ihre Audiodatei (z.B. MP3, WAV, M4A von Meetings, Interviews, Diktaten) mit nur einem Klick direkt über unsere sichere Web-Plattform hoch."
      },
      "step2": {
        "title": "Schritt 2: KI erledigt die Arbeit",
        "description": "Lehnen Sie sich zurück! Unsere fortschrittliche künstliche Intelligenz analysiert Ihre Aufnahme sicher und DSGVO-konform. Die gesprochenen Worte werden präzise erkannt und in geschriebenen Text umgewandelt. Dieser Prozess dauert meist nur einen Bruchteil der Audio-Länge."
      },
      "step3": {
        "title": "Schritt 3: Transkript erhalten & nutzen",
        "description": "Sobald die Transkription fertig ist, finden Sie Ihren Text direkt in Ihrem Account. Laden Sie ihn als Datei herunter (z.B. .txt, .docx) oder kopieren Sie ihn direkt. Nutzen Sie den Text sofort für Protokolle, Notizen, Artikel, Untertitel oder Analysen."
      }
    },
    "summary": {
      "title": "Das war's schon!",
      "description": "Kein mühsames Abtippen, keine komplizierten Umwege. Nur drei klare Schritte trennen Sie von Ihrem fertigen Transkript auf unserer Plattform. So einfach kann Effizienz sein."
    },
    "cta": {
      "title": "Bereit, Zeit zu sparen?",
      "register": "Jetzt kostenlos starten",
      "pricing": "Preise ansehen",
      "help": "Häufig gestellte Fragen"
    }
  },
  "en": {
    "seo": {
      "title": "How it Works - Diktat AI",
      "description": "Learn how easy speech recognition works with Diktat AI. Transform your audio recordings into text in just 3 steps."
    },
    "hero": {
      "title": "Get Your Finished Transcript in 3 Easy Steps",
      "description": "With Diktat AI, transform your audio recordings quickly and effortlessly into text through our secure platform. Save valuable time."
    },
    "process": {
      "title": "How Diktat AI Works"
    },
    "steps": {
      "step1": {
        "title": "Step 1: Upload Recording",
        "description": "Upload your audio file (e.g., MP3, WAV, M4A from meetings, interviews, dictations) with just one click directly through our secure web platform."
      },
      "step2": {
        "title": "Step 2: AI Does the Work",
        "description": "Sit back! Our advanced artificial intelligence analyzes your recording securely and GDPR-compliant. The spoken words are precisely recognized and converted into written text. This process usually takes only a fraction of the audio length."
      },
      "step3": {
        "title": "Step 3: Receive & Use Transcript",
        "description": "Once the transcription is complete, you'll find your text directly in your account. Download it as a file (e.g., .txt, .docx) or copy it directly. Use the text immediately for protocols, notes, articles, subtitles, or analyses."
      }
    },
    "summary": {
      "title": "That's it!",
      "description": "No tedious typing, no complicated detours. Just three clear steps separate you from your finished transcript on our platform. Efficiency can be this simple."
    },
    "cta": {
      "title": "Ready to Save Time?",
      "register": "Start Free Now",
      "pricing": "View Pricing",
      "help": "Frequently Asked Questions"
    }
  }
}
</i18n> 