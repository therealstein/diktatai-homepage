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

        <!-- Our Story Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("story.title") }}
          </h2>
          <p class="mb-6">
            {{ t("story.paragraph") }}
          </p>
          <h3 class="font-display text-xl font-bold mb-4">
            {{ t("story.challenge") }}
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
              <span>{{ t("story.points.point1") }}</span>
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
              <span>{{ t("story.points.point2") }}</span>
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
              <span>{{ t("story.points.point3") }}</span>
            </li>
          </ul>
        </div>

        <!-- Our Vision Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("vision.title") }}
          </h2>
          <p class="mb-6">
            {{ t("vision.paragraph") }}
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
              <span>{{ t("vision.points.point1") }}</span>
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
              <span>{{ t("vision.points.point2") }}</span>
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
              <span>{{ t("vision.points.point3") }}</span>
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
              <span>{{ t("vision.points.point4") }}</span>
            </li>
          </ul>
        </div>

        <!-- Today Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("today.title") }}
          </h2>
          <p class="text-lg mb-6">
            {{ t("today.paragraph1") }}
          </p>
          <p class="text-lg">
            {{ t("today.paragraph2") }}
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
            <a :href="registerUrl">
              <button
                class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
              >
                {{ t("cta.button") }}
              </button>
            </a>
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

<i18n lang="json">
{
  "en": {
    "hero": {
      "title": "About Diktat AI",
      "subtitle": "From personal frustration to your solution"
    },
    "introduction": {
      "paragraph1": "Do you know this too? Hours of tedious typing of audio recordings? Meetings, interviews, important notes - the valuable content is there, but the path to usable text is rocky and takes an infinite amount of time. Time that is urgently needed elsewhere.",
      "paragraph2": "This very frustration was the spark that led to the founding of Diktat AI."
    },
    "story": {
      "title": "Our Story",
      "paragraph": "We - the founders of Diktat AI - come from professional fields where spoken words play a central role. Whether as consultants in intensive customer discussions, as content creators in podcast production, or as entrepreneurs who need to quickly capture ideas and meeting results - we have experienced the pain of manual transcription firsthand.",
      "challenge": "We repeatedly faced the same challenge:",
      "points": {
        "point1": "The fear of missing or forgetting important details in long recordings.",
        "point2": "The enormous time investment that went into typing - time we would rather have invested in our core competencies.",
        "point3": "The search for a solution that is not only fast but also reliable and, above all, secure."
      }
    },
    "vision": {
      "title": "Our Vision",
      "paragraph": "Driven by this thought and our passion for efficient solutions and technology, we decided to tackle the problem ourselves. Our goal was clear:",
      "points": {
        "point1": "To develop a transcription solution that we would like to use ourselves.",
        "point2": "To put simplicity and user-friendliness at the center.",
        "point3": "To ensure the highest precision through the use of state-of-the-art AI speech recognition.",
        "point4": "To integrate uncompromising security and data protection as fundamental pillars from the start."
      }
    },
    "today": {
      "title": "Diktat AI Today",
      "paragraph1": "Behind Diktat AI today is a dedicated team that continuously works to further improve the service and adapt it to the needs of our users. We understand the challenges of your everyday work because we know them ourselves.",
      "paragraph2": "Our mission is to give you valuable time back and increase your productivity - simple, safe and efficient."
    },
    "cta": {
      "title": "Start now with Diktat AI",
      "paragraph": "We are happy if Diktat AI also helps you to make your everyday work easier.",
      "button": "Try for free"
    },
    "meta": {
      "title": "About us - Diktat AI",
      "description": "Learn more about the history and vision of Diktat AI. How frustration with time-consuming transcriptions led to an innovative solution."
    }
  },
  "de": {
    "hero": {
      "title": "Über Diktat AI",
      "subtitle": "Von der eigenen Frustration zur Lösung für Sie"
    },
    "introduction": {
      "paragraph1": "Kennen Sie das auch? Stundenlanges, mühsames Abtippen von Audioaufnahmen? Meetings, Interviews, wichtige Notizen – die wertvollen Inhalte sind da, aber der Weg zum nutzbaren Text ist steinig und kostet unendlich viel Zeit. Zeit, die an anderer Stelle dringend gebraucht wird.",
      "paragraph2": "Genau diese Frustration war der Funke, der zur Gründung von Diktat AI führte."
    },
    "story": {
      "title": "Unsere Geschichte",
      "paragraph": "Wir – die Gründer von Diktat AI – kommen selbst aus Berufsfeldern, in denen gesprochene Worte eine zentrale Rolle spielen. Ob als Berater in intensiven Kundengesprächen, als Content Creator bei der Produktion von Podcasts oder als Unternehmer, der schnell Ideen und Meeting-Ergebnisse festhalten muss – wir haben den Schmerz der manuellen Transkription am eigenen Leib erfahren.",
      "challenge": "Immer wieder standen wir vor der gleichen Herausforderung:",
      "points": {
        "point1": "Die Angst, wichtige Details in langen Aufnahmen zu überhören oder zu vergessen.",
        "point2": "Der enorme Zeitaufwand, der für das Abtippen draufging – Zeit, die wir lieber in unsere Kernkompetenzen investiert hätten.",
        "point3": "Die Suche nach einer Lösung, die nicht nur schnell, sondern auch zuverlässig und vor allem sicher ist."
      }
    },
    "vision": {
      "title": "Unsere Vision",
      "paragraph": "Angetrieben von diesem Gedanken und unserer Leidenschaft für effiziente Lösungen und Technologie, beschlossen wir, das Problem selbst anzugehen. Unser Ziel war klar:",
      "points": {
        "point1": "Eine Transkriptionslösung zu entwickeln, die wir selbst gerne nutzen würden.",
        "point2": "Einfachheit und Benutzerfreundlichkeit in den Mittelpunkt zu stellen.",
        "point3": "Höchste Präzision durch den Einsatz modernster KI-Spracherkennung zu gewährleisten.",
        "point4": "Kompromisslose Sicherheit und Datenschutz von Anfang an als Grundpfeiler zu integrieren."
      }
    },
    "today": {
      "title": "DiktatAI heute",
      "paragraph1": "Hinter DiktatAI steht heute ein engagiertes Team, das kontinuierlich daran arbeitet, den Service weiter zu verbessern und an die Bedürfnisse unserer Nutzer anzupassen. Wir verstehen die Herausforderungen Ihres Arbeitsalltags, weil wir sie selbst kennen.",
      "paragraph2": "Unsere Mission ist es, Ihnen wertvolle Zeit zurückzugeben und Ihre Produktivität zu steigern – einfach, sicher und effizient."
    },
    "cta": {
      "title": "Starten Sie jetzt mit Diktat AI",
      "paragraph": "Wir freuen uns, wenn Diktat AI auch Ihnen dabei hilft, Ihren Arbeitsalltag zu erleichtern.",
      "button": "Kostenlos testen"
    },
    "meta": {
      "title": "Über uns - Diktat AI",
      "description": "Erfahren Sie mehr über die Geschichte und Vision von Diktat AI. Wie aus der Frustration über zeitaufwändige Transkriptionen eine innovative Lösung entstand."
    }
  },
  "nl": {
    "hero": {
      "title": "Over DiktatAI",
      "subtitle": "Van eigen frustratie naar een oplossing voor u"
    },
    "introduction": {
      "paragraph1": "Herkent u dit ook? Urenlang, moeizaam audio-opnames uittypen? Vergaderingen, interviews, belangrijke notities – de waardevolle inhoud is er, maar de weg naar bruikbare tekst is lastig en kost oneindig veel tijd. Tijd die elders dringend nodig is.",
      "paragraph2": "Precies deze frustratie was de vonk die leidde tot de oprichting van DiktatAI."
    },
    "story": {
      "title": "Ons verhaal",
      "paragraph": "Wij – de oprichters van DiktatAI – komen zelf uit werkvelden waar gesproken woorden een centrale rol spelen. Of het nu gaat om adviseurs in intensieve klantgesprekken, content creators bij de productie van podcasts of ondernemers die snel ideeën en vergaderresultaten moeten vastleggen – wij hebben de pijn van handmatige transcriptie aan den lijve ondervonden.",
      "challenge": "Steeds weer stonden we voor dezelfde uitdaging:",
      "points": {
        "point1": "De angst om belangrijke details in lange opnames te missen of te vergeten.",
        "point2": "De enorme tijdsinvestering die het uittypen kostte – tijd die we liever in onze kerncompetenties hadden gestoken.",
        "point3": "De zoektocht naar een oplossing die niet alleen snel, maar ook betrouwbaar en vooral veilig is."
      }
    },
    "vision": {
      "title": "Onze visie",
      "paragraph": "Gedreven door deze gedachte en onze passie voor efficiënte oplossingen en technologie, besloten we het probleem zelf aan te pakken. Ons doel was helder:",
      "points": {
        "point1": "Een transcriptie-oplossing ontwikkelen die we zelf graag zouden gebruiken.",
        "point2": "Eenvoud en gebruiksvriendelijkheid centraal stellen.",
        "point3": "Hoogste precisie garanderen door de inzet van de modernste AI-spraakherkenning.",
        "point4": "Compromisloze veiligheid en gegevensbescherming vanaf het begin als fundament integreren."
      }
    },
    "today": {
      "title": "DiktatAI vandaag",
      "paragraph1": "Achter DiktatAI staat vandaag een toegewijd team dat continu werkt aan het verder verbeteren van de service en het aanpassen aan de behoeften van onze gebruikers. We begrijpen de uitdagingen van uw werkdag, omdat we ze zelf kennen.",
      "paragraph2": "Onze missie is om u waardevolle tijd terug te geven en uw productiviteit te verhogen – eenvoudig, veilig en efficiënt."
    },
    "cta": {
      "title": "Start nu met DiktatAI",
      "paragraph": "We zijn blij als DiktatAI ook u helpt om uw werkdag te verlichten.",
      "button": "Gratis proberen"
    },
    "meta": {
      "title": "Over ons - DiktatAI",
      "description": "Leer meer over de geschiedenis en visie van DiktatAI. Hoe uit frustratie over tijdrovende transcripties een innovatieve oplossing ontstond."
    }
  },
  "es": {
    "hero": {
      "title": "Sobre Diktat AI",
      "subtitle": "De la frustración personal a la solución para usted"
    },
    "introduction": {
      "paragraph1": "¿Conoce esto también? ¿Horas de tedioso tecleo de grabaciones de audio? Reuniones, entrevistas, notas importantes – el contenido valioso está ahí, pero el camino al texto utilizable es difícil y cuesta infinito tiempo. Tiempo que se necesita urgentemente en otro lugar.",
      "paragraph2": "Exactamente esta frustración fue la chispa que llevó a la fundación de Diktat AI."
    },
    "story": {
      "title": "Nuestra historia",
      "paragraph": "Nosotros – los fundadores de Diktat AI – venimos de campos profesionales donde las palabras habladas juegan un papel central. Ya sea como consultores en conversaciones intensivas con clientes, como creadores de contenido en la producción de podcasts o como empresarios que necesitan capturar rápidamente ideas y resultados de reuniones – hemos experimentado el dolor de la transcripción manual en carne propia.",
      "challenge": "Una y otra vez nos enfrentábamos al mismo desafío:",
      "points": {
        "point1": "El miedo a pasar por alto o olvidar detalles importantes en grabaciones largas.",
        "point2": "La enorme inversión de tiempo que costaba escribir – tiempo que hubiéramos preferido invertir en nuestras competencias principales.",
        "point3": "La búsqueda de una solución que no solo sea rápida, sino también confiable y sobre todo segura."
      }
    },
    "vision": {
      "title": "Nuestra visión",
      "paragraph": "Impulsados por este pensamiento y nuestra pasión por soluciones eficientes y tecnología, decidimos abordar el problema nosotros mismos. Nuestro objetivo era claro:",
      "points": {
        "point1": "Desarrollar una solución de transcripción que nosotros mismos usaríamos con gusto.",
        "point2": "Poner la simplicidad y la facilidad de uso en el centro.",
        "point3": "Garantizar la máxima precisión mediante el uso del reconocimiento de voz por IA más avanzado.",
        "point4": "Integrar seguridad y protección de datos sin compromisos como pilares fundamentales desde el principio."
      }
    },
    "today": {
      "title": "Diktat AI hoy",
      "paragraph1": "Detrás de Diktat AI hay hoy un equipo dedicado que trabaja continuamente para mejorar el servicio y adaptarlo a las necesidades de nuestros usuarios. Entendemos los desafíos de su día a día laboral porque los conocemos nosotros mismos.",
      "paragraph2": "Nuestra misión es devolverle tiempo valioso y aumentar su productividad – simple, seguro y eficiente."
    },
    "cta": {
      "title": "Comience ahora con Diktat AI",
      "paragraph": "Nos alegra si Diktat AI también le ayuda a facilitar su día a día laboral.",
      "button": "Probar gratis"
    },
    "meta": {
      "title": "Sobre nosotros - Diktat AI",
      "description": "Conozca más sobre la historia y visión de Diktat AI. Cómo de la frustración con las transcripciones que consumen tiempo surgió una solución innovadora."
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
