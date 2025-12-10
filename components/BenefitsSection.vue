<template>
  <!-- Benefits Section - Enhanced with Cards -->
  <div class="container mx-auto px-4 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-4 tracking-tight">
      {{ t('title') }}
    </h2>
    <p
      class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
    >
      {{ t('description') }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div
        class="card glass bg-base-100 shadow-xl rounded-3xl border border-base-300 p-6"
      >
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ t('benefits.timeSaving.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ t('benefits.timeSaving.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ t('benefits.productivity.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ t('benefits.productivity.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ t('benefits.precision.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ t('benefits.precision.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ t('benefits.security.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ t('benefits.security.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ t('benefits.focus.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ t('benefits.focus.description') }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <!-- Placeholder for an image or illustration -->
        <img
          src="/diktatai-transkribieren.webp"
          :alt="t('title')"
          class="rounded-3xl shadow-xl"
          width="700"
          height="700"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
/* Component-specific styles if needed */
</style>

<i18n lang="json">
{
  "de": {
    "title": "Ihr klarer Vorteil mit Diktat AI",
    "description": "Diktat AI bringt messbaren Mehrwert in Ihren Arbeitsalltag – durch clevere Automatisierung und optimierte Prozesse bei der Umwandlung von Sprache in Text.",
    "benefits": {
      "timeSaving": {
        "title": "Massive Zeitersparnis",
        "description": "Verabschieden Sie sich vom mühsamen Abtippen. Gewinnen Sie Stunden zurück für Ihre wichtigen Aufgaben, Projekte und Kernkompetenzen."
      },
      "productivity": {
        "title": "Gesteigerte Produktivität",
        "description": "Erledigen Sie mehr in weniger Zeit. Wandeln Sie gesprochene Inhalte blitzschnell in Text um und beschleunigen Sie Ihre Arbeitsabläufe spürbar – vom Meetingprotokoll bis zur Content-Erstellung."
      },
      "precision": {
        "title": "Präzise & Nutzbare Ergebnisse",
        "description": "Erhalten Sie genaue Text-Transkripte Ihrer Audioaufnahmen, die Sie sofort weiterverwenden, durchsuchen, bearbeiten oder archivieren können."
      },
      "security": {
        "title": "Höchste Datensicherheit & Konformität",
        "description": "Verlassen Sie sich auf strengste Vertraulichkeit und DSGVO-konforme Verarbeitung. Ihre sensiblen Informationen und Aufnahmen sind bei uns jederzeit sicher und geschützt."
      },
      "focus": {
        "title": "Fokus auf das Wesentliche",
        "description": "Reduzieren Sie lästige Routineaufgaben auf ein Minimum. Konzentrieren Sie Ihre Energie und Aufmerksamkeit auf strategische Entscheidungen, kreative Arbeit oder die Analyse von Inhalten statt auf das Tippen."
      }
    }
  },
  "en": {
    "title": "Your Clear Advantage with Dictate AI",
    "description": "Dictate AI brings measurable added value to your daily work – through clever automation and optimized processes when converting speech to text.",
    "benefits": {
      "timeSaving": {
        "title": "Massive Time Savings",
        "description": "Say goodbye to tedious typing. Gain back hours for your important tasks, projects, and core competencies."
      },
      "productivity": {
        "title": "Increased Productivity",
        "description": "Get more done in less time. Convert spoken content into text in a flash and significantly accelerate your workflows – from meeting minutes to content creation."
      },
      "precision": {
        "title": "Precise & Usable Results",
        "description": "Get accurate text transcripts of your audio recordings that you can immediately reuse, search, edit, or archive."
      },
      "security": {
        "title": "Highest Data Security & Compliance",
        "description": "Rely on strictest confidentiality and GDPR-compliant processing. Your sensitive information and recordings are safe and protected with us at all times."
      },
      "focus": {
        "title": "Focus on What Matters",
        "description": "Reduce annoying routine tasks to a minimum. Concentrate your energy and attention on strategic decisions, creative work, or content analysis instead of typing."
      }
    }
  },
  "nl": {
    "title": "Uw duidelijke voordeel met Diktat AI",
    "description": "Diktat AI brengt meetbare meerwaarde in uw werkdag – door slimme automatisering en geoptimaliseerde processen bij de omzetting van spraak naar tekst.",
    "benefits": {
      "timeSaving": {
        "title": "Enorme tijdsbesparing",
        "description": "Neem afscheid van het moeizame uittypen. Win uren terug voor uw belangrijke taken, projecten en kerncompetenties."
      },
      "productivity": {
        "title": "Verhoogde productiviteit",
        "description": "Doe meer in minder tijd. Zet gesproken inhoud bliksemsnel om in tekst en versnel uw werkprocessen merkbaar – van meetingnotulen tot content-creatie."
      },
      "precision": {
        "title": "Nauwkeurige & Bruikbare resultaten",
        "description": "Ontvang exacte teksttranscripties van uw audio-opnames, die u direct kunt hergebruiken, doorzoeken, bewerken of archiveren."
      },
      "security": {
        "title": "Hoogste gegevensbeveiliging & Conformiteit",
        "description": "Vertrouw op de strengste vertrouwelijkheid en GDPR-conforme verwerking. Uw gevoelige informatie en opnames zijn bij ons te allen tijde veilig en beschermd."
      },
      "focus": {
        "title": "Focus op het wezenlijke",
        "description": "Reduceer vervelende routinetaken tot een minimum. Concentreer uw energie en aandacht op strategische beslissingen, creatief werk of de analyse van inhoud in plaats van op het typen."
      }
    }
  },
  "es": {
    "title": "Su ventaja clara con Diktat AI",
    "description": "Diktat AI aporta valor medible a su jornada laboral – mediante automatización inteligente y procesos optimizados en la conversión de voz a texto.",
    "benefits": {
      "timeSaving": {
        "title": "Ahorro masivo de tiempo",
        "description": "Despídase de la tediosa tarea de escribir. Recupere horas para sus tareas importantes, proyectos y competencias principales."
      },
      "productivity": {
        "title": "Mayor productividad",
        "description": "Haga más en menos tiempo. Convierta contenido hablado en texto en un instante y acelere notablemente sus flujos de trabajo – desde actas de reuniones hasta creación de contenido."
      },
      "precision": {
        "title": "Resultados precisos y utilizables",
        "description": "Obtenga transcripciones de texto exactas de sus grabaciones de audio que puede reutilizar, buscar, editar o archivar inmediatamente."
      },
      "security": {
        "title": "Máxima seguridad de datos y conformidad",
        "description": "Confíe en la más estricta confidencialidad y procesamiento conforme al RGPD. Su información sensible y grabaciones están siempre seguras y protegidas con nosotros."
      },
      "focus": {
        "title": "Enfóquese en lo esencial",
        "description": "Reduzca las tareas rutinarias molestas al mínimo. Concentre su energía y atención en decisiones estratégicas, trabajo creativo o análisis de contenido en lugar de escribir."
      }
    }
  }
}
</i18n>
