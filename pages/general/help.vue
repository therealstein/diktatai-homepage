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
            {{ t('hero.title') }}
          </h1>
          <p
            class="text-xl text-white mb-8"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t('hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Introduction -->
        <div class="mb-16">
          <p class="text-lg mb-8 text-center">
            {{ t('introduction.text') }}
          </p>
        </div>

        <!-- Direct Support Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('support.title') }}
          </h2>
          <p class="text-lg mb-8">
            {{ t('support.description') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('support.contactForm.title') }}
              </h3>
              <p class="mb-4">{{ t('support.contactForm.description') }}</p>
              <NuxtLinkLocale to="general-kontakt" class="btn btn-primary">{{
                t('support.contactForm.button')
              }}</NuxtLinkLocale>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('support.email.title') }}
              </h3>
              <p class="mb-4">{{ t('support.email.description') }}</p>
              <a
                href="mailto:support@diktat.ai"
                class="text-pink-500 hover:text-pink-600 font-bold"
                >support@diktat.ai</a
              >
            </div>
          </div>

          <div class="card bg-base-200 p-6 rounded-2xl border border-base-300">
            <h3 class="font-display text-xl font-bold mb-4">
              {{ t('support.helpTips.title') }}
            </h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>{{ t('support.helpTips.points.0') }}</li>
              <li>{{ t('support.helpTips.points.1') }}</li>
              <li>{{ t('support.helpTips.points.2') }}</li>
              <li>{{ t('support.helpTips.points.3') }}</li>
              <li>{{ t('support.helpTips.points.4') }}</li>
            </ul>
          </div>
        </div>

        <!-- Guides Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t('guides.title') }}
          </h2>
          <p class="text-lg mb-8 text-center">
            {{ t('guides.description') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('guides.gettingStarted.title') }}
              </h3>
              <p class="mb-4">{{ t('guides.gettingStarted.description') }}</p>
              <ol class="list-decimal pl-6 space-y-2">
                <li>{{ t('guides.gettingStarted.steps.0') }}</li>
                <li>{{ t('guides.gettingStarted.steps.1') }}</li>
                <li>{{ t('guides.gettingStarted.steps.2') }}</li>
                <li>{{ t('guides.gettingStarted.steps.3') }}</li>
                <li>{{ t('guides.gettingStarted.steps.4') }}</li>
              </ol>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('guides.emailTranscription.title') }}
              </h3>
              <p class="mb-4">
                {{ t('guides.emailTranscription.description') }}
              </p>
              <ol class="list-decimal pl-6 space-y-2">
                <li>{{ t('guides.emailTranscription.steps.0') }}</li>
                <li>{{ t('guides.emailTranscription.steps.1') }}</li>
                <li>{{ t('guides.emailTranscription.steps.2') }}</li>
                <li>{{ t('guides.emailTranscription.steps.3') }}</li>
              </ol>
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t('guides.tips.title') }}
              </h3>
              <p class="mb-4">{{ t('guides.tips.description') }}</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>{{ t('guides.tips.points.0') }}</li>
                <li>{{ t('guides.tips.points.1') }}</li>
                <li>{{ t('guides.tips.points.2') }}</li>
                <li>{{ t('guides.tips.points.3') }}</li>
                <li>{{ t('guides.tips.points.4') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Response Time Info -->
        <div
          class="card bg-base-200 p-6 rounded-2xl border border-base-300 mb-16"
        >
          <h2 class="font-display text-2xl font-bold mb-4">
            {{ t('responseTime.title') }}
          </h2>
          <p class="mb-4">{{ t('responseTime.description') }}</p>
          <p>{{ t('responseTime.conclusion') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local',
})
const { registerUrl } = useAppUrl();;

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical('/general/help');

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

<i18n lang="json">
{
  "en": {
    "hero": {
      "title": "Help & Support",
      "subtitle": "Welcome to the Diktat AI Help Center!"
    },
    "introduction": {
      "text": "We want to ensure you get the most out of our service and can complete your transcription tasks effortlessly. On this page, you'll find information on how to get support if you have questions or need help."
    },
    "support": {
      "title": "Request Direct Support – We're Here for You!",
      "description": "Do you have a specific question about Diktat AI, need help with a feature, or has a problem occurred? Our support team is happy to help.",
      "contactForm": {
        "title": "Contact Form",
        "description": "The best way to communicate your concerns in detail. Use our contact form to send your request to us in a structured way.",
        "button": "Go to Contact Form"
      },
      "email": {
        "title": "Email Support",
        "description": "You can also write to us directly. Please describe your concern or problem as precisely as possible."
      },
      "helpTips": {
        "title": "To help you quickly:",
        "points": [
          "A clear description of the problem or your question",
          "What steps have you already taken?",
          "Which operating system and browser are you using?",
          "Was an error message displayed? (If yes, what exactly does it say?)",
          "Your email address associated with your Diktat AI account"
        ]
      }
    },
    "guides": {
      "title": "Getting Started & Guides",
      "description": "Would you like to learn more about using specific features? Here you'll find useful guides and tips:",
      "gettingStarted": {
        "title": "Getting Started",
        "description": "How to successfully upload your first audio file and get a transcript:",
        "steps": [
          "Log in to your Diktat AI account",
          "Click on 'New Transcription'",
          "Select your audio file or drag it into the upload area",
          "Wait until the transcription is complete",
          "Download your transcript or copy it directly"
        ]
      },
      "emailTranscription": {
        "title": "Email Transcription",
        "description": "Using email transcription – A step-by-step explanation:",
        "steps": [
          "Write an email to transcribe at diktat.ai",
          "Add your audio file as an attachment",
          "Specify in the subject whether you need a transcript or subtitles",
          "Within minutes, you'll receive your transcript by email"
        ]
      },
      "tips": {
        "title": "Tips & Tricks",
        "description": "How to achieve more precise transcription results through good audio quality:",
        "points": [
          "Use a good microphone for recordings",
          "Reduce background noise",
          "Speak clearly and at normal speed",
          "Maintain a constant volume",
          "Avoid too many speaker changes in a short time"
        ]
      }
    },
    "responseTime": {
      "title": "Our Response Times",
      "description": "We know you need quick help. Our team strives to respond to all support requests promptly. Typically, you can expect an initial response from us within 24-48 hours on weekdays.",
      "conclusion": "We are committed to providing you with a smooth and efficient experience with Diktat AI. Don't hesitate to contact us directly if you have questions or need support!"
    },
    "seo": {
      "title": "Help & Support - Diktat AI - Fast & Precise Transcription",
      "description": "Help and support for Diktat AI. Find guides, contact options, and answers to frequently asked questions about our transcription service."
    }
  },
  "de": {
    "hero": {
      "title": "Hilfe & Support",
      "subtitle": "Willkommen im Hilfe-Bereich von Diktat AI!"
    },
    "introduction": {
      "text": "Wir möchten sicherstellen, dass Sie das Beste aus unserem Service herausholen und Ihre Transkriptionsaufgaben mühelos erledigen können. Auf dieser Seite finden Sie Informationen dazu, wie Sie Unterstützung erhalten, falls Sie Fragen haben oder Hilfe benötigen."
    },
    "support": {
      "title": "Direkte Unterstützung anfordern – Wir sind für Sie da!",
      "description": "Haben Sie eine spezifische Frage zu Diktat AI, benötigen Sie Hilfe bei einer Funktion oder ist ein Problem aufgetreten? Unser Support-Team hilft Ihnen gerne weiter.",
      "contactForm": {
        "title": "Kontaktformular",
        "description": "Der beste Weg, uns Ihr Anliegen detailliert mitzuteilen. Nutzen Sie unser Kontaktformular, um Ihre Anfrage strukturiert an uns zu senden.",
        "button": "Zum Kontaktformular"
      },
      "email": {
        "title": "E-Mail-Support",
        "description": "Sie können uns auch direkt eine E-Mail schreiben. Beschreiben Sie Ihr Anliegen oder Problem so genau wie möglich."
      },
      "helpTips": {
        "title": "Damit wir Ihnen schnell helfen können:",
        "points": [
          "Eine klare Beschreibung des Problems oder Ihrer Frage",
          "Welche Schritte haben Sie bereits unternommen?",
          "Welches Betriebssystem und welchen Browser verwenden Sie?",
          "Wurde eine Fehlermeldung angezeigt? (Wenn ja, wie lautet sie genau?)",
          "Ihre E-Mail-Adresse, die mit Ihrem Diktat AI Konto verknüpft ist"
        ]
      }
    },
    "guides": {
      "title": "Erste Schritte & Anleitungen",
      "description": "Möchten Sie mehr über die Nutzung bestimmter Funktionen erfahren? Hier finden Sie nützliche Leitfäden und Tipps:",
      "gettingStarted": {
        "title": "Erste Schritte",
        "description": "So laden Sie Ihre erste Audiodatei erfolgreich hoch und erhalten ein Transkript:",
        "steps": [
          "Melden Sie sich in Ihrem Diktat AI Konto an",
          "Klicken Sie auf 'Neue Transkription'",
          "Wählen Sie Ihre Audiodatei aus oder ziehen Sie sie in den Upload-Bereich",
          "Warten Sie, bis die Transkription abgeschlossen ist",
          "Laden Sie Ihr Transkript herunter oder kopieren Sie es direkt"
        ]
      },
      "emailTranscription": {
        "title": "E-Mail-Transkription",
        "description": "Die E-Mail-Transkription nutzen – Eine Schritt-für-Schritt Erklärung:",
        "steps": [
          "Schreiben Sie eine E-Mail an transcribe an diktat.ai",
          "Fügen Sie Ihre Audiodatei als Anhang hinzu",
          "Geben Sie im Betreff an, ob Sie ein Transkript oder Untertitel benötigen",
          "Innerhalb weniger Minuten erhalten Sie Ihr Transkript per E-Mail zurück"
        ]
      },
      "tips": {
        "title": "Tipps & Tricks",
        "description": "Wie Sie durch gute Audioqualität präzisere Transkriptionsergebnisse erzielen:",
        "points": [
          "Verwenden Sie ein gutes Mikrofon für Aufnahmen",
          "Reduzieren Sie Hintergrundgeräusche",
          "Sprechen Sie deutlich und in normaler Geschwindigkeit",
          "Halten Sie eine konstante Lautstärke ein",
          "Vermeiden Sie zu viele Sprecherwechsel in kurzer Zeit"
        ]
      }
    },
    "responseTime": {
      "title": "Unsere Reaktionszeiten",
      "description": "Wir wissen, dass Sie schnelle Hilfe benötigen. Unser Team bemüht sich, alle Supportanfragen zeitnah zu beantworten. In der Regel können Sie werktags innerhalb von 24-48 Stunden mit einer ersten Rückmeldung von uns rechnen.",
      "conclusion": "Wir sind bestrebt, Ihnen ein reibungsloses und effizientes Erlebnis mit Diktat AI zu ermöglichen. Zögern Sie nicht, sich bei Fragen oder wenn Sie Unterstützung benötigen, direkt an uns zu wenden!"
    },
    "seo": {
      "title": "Hilfe & Support - Diktat AI - Schnelle & präzise Transkription",
      "description": "Hilfe und Support für Diktat AI. Finden Sie Anleitungen, Kontaktmöglichkeiten und Antworten auf häufig gestellte Fragen zu unserem Transkriptions-Service."
    }
  }
}
</i18n>
