<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-4 tracking-tight">{{ t('title') }}</h2>
    <p class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
      {{ t('description') }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- EU KI-Gesetz Card -->
      <NuxtLinkLocale to="general-eu-ki-gesetz" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('aiAct.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('aiAct.description') }}</p>
        </div>
      </NuxtLinkLocale>

      <!-- KI-Potenziale im Mittelstand Card -->
      <NuxtLinkLocale to="general-ki-im-mittelstand" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('sme.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('sme.description') }}</p>
        </div>
      </NuxtLinkLocale>

      <!-- Sicherer Einsatz in Behörden Card -->
      <NuxtLinkLocale to="general-behoerden" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('government.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('government.description') }}</p>
        </div>
      </NuxtLinkLocale>

      <!-- Compliance in Regulierten Branchen Card -->
      <NuxtLinkLocale to="general-regulierte-branchen" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('regulated.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('regulated.description') }}</p>
        </div>
      </NuxtLinkLocale>

      <!-- Diktat AI für Unternehmen Card -->
      <NuxtLinkLocale to="general-unternehmen" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('business.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('business.description') }}</p>
        </div>
      </NuxtLinkLocale>

      <!-- Die Diktat AI Business Suite Card -->
      <NuxtLinkLocale to="general-business-suite" class="card glass bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border border-base-300">
        <figure class="pt-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h3 class="card-title font-display text-xl font-bold">{{ t('suite.title') }}</h3>
          <p class="text-base-content/80 leading-relaxed">{{ t('suite.description') }}</p>
        </div>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
</style>

<i18n lang="json">
{
  "de": {
    "title": "Lösungen für Unternehmen und Organisationen",
    "description": "Entdecken Sie, wie Diktat AI speziell auf die Anforderungen verschiedener Organisationen und Branchen zugeschnitten ist",
    "aiAct": {
      "title": "EU KI-Gesetz (AI Act) & Diktat AI",
      "description": "Das neue EU KI-Gesetz kommt. Erfahren Sie, was der AI Act für KI-Anwendungen wie Diktat AI bedeutet, welche Anforderungen gelten und wie wir uns auf eine verantwortungsvolle und konforme Zukunft vorbereiten."
    },
    "sme": {
      "title": "KI-Potenziale im Mittelstand nutzen",
      "description": "Entdecken Sie, wie Diktat AI speziell kleinen und mittleren Unternehmen (KMU) hilft, Prozesse zu optimieren, wertvolle Zeit zu sparen und die Produktivität ohne große IT-Investitionen zu steigern."
    },
    "government": {
      "title": "Sicherer Einsatz in Behörden",
      "description": "Datenschutz, Sicherheit und Zuverlässigkeit sind im öffentlichen Sektor entscheidend. Lesen Sie, wie Diktat AI die besonderen Anforderungen von Behörden und Verwaltungen erfüllt und effiziente Workflows ermöglicht."
    },
    "regulated": {
      "title": "Compliance in Regulierten Branchen",
      "description": "Für Branchen wie Finanzen, Recht oder Gesundheit gelten strenge Vorschriften. Erfahren Sie, wie Diktat AI Vertraulichkeit gewährleistet und Compliance-Anforderungen bei der Transkription unterstützt."
    },
    "business": {
      "title": "Diktat AI für Unternehmen",
      "description": "Erfahren Sie mehr über die vielfältigen Einsatzmöglichkeiten von Diktat AI in Unternehmen jeder Größe – von der Meeting-Dokumentation bis zur Content-Erstellung. Skalierbare Lösungen für Ihren Erfolg."
    },
    "suite": {
      "title": "Die Diktat AI Business Suite",
      "description": "Entdecken Sie unsere Premium-Lösungen für Teams und Power-User. Profitieren Sie von erweiterten Funktionen, Team-Management, Prioritäts-Support und maßgeschneiderten Optionen für höchste Ansprüche."
    }
  },
  "en": {
    "title": "Solutions for Businesses and Organizations",
    "description": "Discover how Dictate AI is tailored to meet the specific needs of various organizations and industries",
    "aiAct": {
      "title": "EU AI Act & Dictate AI",
      "description": "The new EU AI Act is coming. Learn what the AI Act means for AI applications like Dictate AI, what requirements apply, and how we're preparing for a responsible and compliant future."
    },
    "sme": {
      "title": "Leveraging AI Potential for SMEs",
      "description": "Discover how Dictate AI specifically helps small and medium-sized enterprises (SMEs) optimize processes, save valuable time, and increase productivity without major IT investments."
    },
    "government": {
      "title": "Secure Use in Government Agencies",
      "description": "Data protection, security, and reliability are crucial in the public sector. Read how Dictate AI meets the special requirements of government agencies and administrations and enables efficient workflows."
    },
    "regulated": {
      "title": "Compliance in Regulated Industries",
      "description": "Strict regulations apply to industries such as finance, law, or healthcare. Learn how Dictate AI ensures confidentiality and supports compliance requirements in transcription."
    },
    "business": {
      "title": "Dictate AI for Businesses",
      "description": "Learn more about the diverse applications of Dictate AI in businesses of all sizes – from meeting documentation to content creation. Scalable solutions for your success."
    },
    "suite": {
      "title": "The Dictate AI Business Suite",
      "description": "Discover our premium solutions for teams and power users. Benefit from advanced features, team management, priority support, and customized options for the highest demands."
    }
  },
  "nl": {
    "title": "Oplossingen voor bedrijven en organisaties",
    "description": "Ontdek hoe Diktat AI speciaal is afgestemd op de eisen van verschillende organisaties en branches",
    "aiAct": {
      "title": "EU AI-Wet (AI Act) & Diktat AI",
      "description": "De nieuwe EU AI-Wet komt eraan. Lees wat de AI Act betekent voor AI-toepassingen zoals Diktat AI, welke eisen gelden en hoe we ons voorbereiden op een verantwoorde en conforme toekomst."
    },
    "sme": {
      "title": "AI-potentieel in het MKB benutten",
      "description": "Ontdek hoe Diktat AI specifiek kleine en middelgrote ondernemingen (MKB) helpt om processen te optimaliseren, waardevolle tijd te besparen en de productiviteit te verhogen zonder grote IT-investeringen."
    },
    "government": {
      "title": "Veilig gebruik in overheidsinstanties",
      "description": "Gegevensbescherming, veiligheid en betrouwbaarheid zijn cruciaal in de publieke sector. Lees hoe Diktat AI voldoet aan de bijzondere eisen van overheidsinstanties en overheden en efficiënte workflows mogelijk maakt."
    },
    "regulated": {
      "title": "Compliance in gereguleerde branches",
      "description": "Voor branches zoals financiën, recht of gezondheidszorg gelden strenge voorschriften. Lees hoe Diktat AI vertrouwelijkheid waarborgt en compliance-eisen bij transcriptie ondersteunt."
    },
    "business": {
      "title": "Diktat AI voor bedrijven",
      "description": "Lees meer over de veelzijdige toepassingsmogelijkheden van Diktat AI in bedrijven van elke omvang – van meeting-documentatie tot content-creatie. Schaalbare oplossingen voor uw succes."
    },
    "suite": {
      "title": "De Diktat AI Business Suite",
      "description": "Ontdek onze premium-oplossingen voor teams en power-users. Profiteer van uitgebreide functies, team-management, prioriteitsondersteuning en maatwerkopties voor de hoogste eisen."
    }
  },
  "es": {
    "title": "Soluciones para empresas y organizaciones",
    "description": "Descubra cómo Diktat AI está adaptado para satisfacer las necesidades específicas de diversas organizaciones e industrias",
    "aiAct": {
      "title": "Ley de IA de la UE (AI Act) y Diktat AI",
      "description": "La nueva Ley de IA de la UE está llegando. Conozca qué significa el AI Act para aplicaciones de IA como Diktat AI, qué requisitos se aplican y cómo nos preparamos para un futuro responsable y conforme."
    },
    "sme": {
      "title": "Aprovechar el potencial de la IA para PYMES",
      "description": "Descubra cómo Diktat AI ayuda específicamente a las pequeñas y medianas empresas (PYMES) a optimizar procesos, ahorrar tiempo valioso y aumentar la productividad sin grandes inversiones en TI."
    },
    "government": {
      "title": "Uso seguro en agencias gubernamentales",
      "description": "La protección de datos, la seguridad y la fiabilidad son cruciales en el sector público. Lea cómo Diktat AI cumple con los requisitos especiales de las agencias gubernamentales y permite flujos de trabajo eficientes."
    },
    "regulated": {
      "title": "Cumplimiento en industrias reguladas",
      "description": "Se aplican regulaciones estrictas a industrias como finanzas, derecho o salud. Conozca cómo Diktat AI garantiza la confidencialidad y apoya los requisitos de cumplimiento en la transcripción."
    },
    "business": {
      "title": "Diktat AI para empresas",
      "description": "Conozca más sobre las diversas aplicaciones de Diktat AI en empresas de todos los tamaños – desde documentación de reuniones hasta creación de contenido. Soluciones escalables para su éxito."
    },
    "suite": {
      "title": "La Suite Empresarial de Diktat AI",
      "description": "Descubra nuestras soluciones premium para equipos y usuarios avanzados. Benefíciese de funciones avanzadas, gestión de equipos, soporte prioritario y opciones personalizadas para las más altas exigencias."
    }
  },
  "fr": {
    "title": "Solutions pour les entreprises et organisations",
    "description": "Découvrez comment Diktat AI est adapté aux besoins spécifiques de diverses organisations et secteurs",
    "aiAct": {
      "title": "Loi européenne sur l'IA (AI Act) et Diktat AI",
      "description": "La nouvelle loi européenne sur l'IA arrive. Découvrez ce que l'AI Act signifie pour les applications d'IA comme Diktat AI, quelles exigences s'appliquent et comment nous nous préparons à un avenir responsable et conforme."
    },
    "sme": {
      "title": "Exploiter le potentiel de l'IA pour les PME",
      "description": "Découvrez comment Diktat AI aide spécifiquement les petites et moyennes entreprises (PME) à optimiser les processus, économiser un temps précieux et augmenter la productivité sans investissements informatiques majeurs."
    },
    "government": {
      "title": "Utilisation sécurisée dans les administrations publiques",
      "description": "La protection des données, la sécurité et la fiabilité sont cruciales dans le secteur public. Découvrez comment Diktat AI répond aux exigences spéciales des administrations publiques et permet des flux de travail efficaces."
    },
    "regulated": {
      "title": "Conformité dans les secteurs réglementés",
      "description": "Des réglementations strictes s'appliquent aux secteurs comme la finance, le droit ou la santé. Découvrez comment Diktat AI garantit la confidentialité et soutient les exigences de conformité dans la transcription."
    },
    "business": {
      "title": "Diktat AI pour les entreprises",
      "description": "Découvrez les diverses applications de Diktat AI dans les entreprises de toutes tailles – de la documentation de réunions à la création de contenu. Solutions évolutives pour votre succès."
    },
    "suite": {
      "title": "La Suite Business Diktat AI",
      "description": "Découvrez nos solutions premium pour les équipes et utilisateurs avancés. Bénéficiez de fonctionnalités avancées, gestion d'équipe, support prioritaire et options personnalisées pour les plus hautes exigences."
    }
  },
  "sv": {
    "title": "Lösningar för företag och organisationer",
    "description": "Upptäck hur Diktat AI är anpassat för att möta de specifika behoven hos olika organisationer och branscher",
    "aiAct": {
      "title": "EU:s AI-lag (AI Act) och Diktat AI",
      "description": "Den nya EU:s AI-lag är på väg. Lär dig vad AI Act betyder för AI-applikationer som Diktat AI, vilka krav som gäller och hur vi förbereder oss för en ansvarsfull och regelkonform framtid."
    },
    "sme": {
      "title": "Utnyttja AI-potential för små och medelstora företag",
      "description": "Upptäck hur Diktat AI specifikt hjälper små och medelstora företag att optimera processer, spara värdefull tid och öka produktiviteten utan stora IT-investeringar."
    },
    "government": {
      "title": "Säker användning i myndigheter",
      "description": "Dataskydd, säkerhet och tillförlitlighet är avgörande i den offentliga sektorn. Läs om hur Diktat AI uppfyller de särskilda kraven för myndigheter och möjliggör effektiva arbetsflöden."
    },
    "regulated": {
      "title": "Efterlevnad i reglerade branscher",
      "description": "Strikta regler gäller för branscher som finans, juridik eller hälsovård. Lär dig hur Diktat AI säkerställer sekretess och stöder efterlevnadskrav vid transkribering."
    },
    "business": {
      "title": "Diktat AI för företag",
      "description": "Lär dig mer om de olika tillämpningarna av Diktat AI i företag av alla storlekar – från mötesdokumentation till innehållsskapande. Skalbara lösningar för din framgång."
    },
    "suite": {
      "title": "Diktat AI Business Suite",
      "description": "Upptäck våra premiumlösningar för team och avancerade användare. Dra nytta av avancerade funktioner, teamhantering, prioriterad support och anpassade alternativ för de högsta kraven."
    }
  }
}
</i18n> 