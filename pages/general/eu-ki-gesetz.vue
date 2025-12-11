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

        <!-- Diktat AI im Kontext des AI Acts -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("context.title") }}
          </h2>
          <p class="mb-6">
            {{ t("context.paragraph") }}
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
              <span>{{ t("context.points.point1") }}</span>
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
              <span>{{ t("context.points.point2") }}</span>
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
              <span>{{ t("context.points.point3") }}</span>
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
              <span>{{ t("context.points.point4") }}</span>
            </li>
          </ul>
        </div>

        <!-- Benefits Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("benefits.title") }}
          </h2>
          <p class="mb-6">
            {{ t("benefits.paragraph") }}
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
              <span>{{ t("benefits.points.point1") }}</span>
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
              <span>{{ t("benefits.points.point2") }}</span>
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
              <span>{{ t("benefits.points.point3") }}</span>
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
              <span>{{ t("benefits.points.point4") }}</span>
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
              <span>{{ t("benefits.points.point5") }}</span>
            </li>
          </ul>
        </div>

        <!-- Trust Section -->
        <div class="mb-12">
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("trust.title") }}
          </h2>
          <p class="text-lg">
            {{ t("trust.paragraph") }}
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
const { t, locale } = useI18n({
  useScope: "local",
});

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();

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
      content: "https://diktat.ai/images/eu-ai-act-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/eu-ai-act-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "EU KI‑Gesetz einfach erklärt: Warum Diktat AI eine sichere, konforme Wahl für Transkriptionen ist."
    },
    "hero": {
      "title": "EU KI-Gesetz: Warum Diktat AI Ihre sichere und konforme Wahl für Transkriptionen ist",
      "subtitle": "Das neue KI-Gesetz (AI Act) der Europäischen Union setzt einen wichtigen Rahmen für den Einsatz künstlicher Intelligenz. Für Unternehmen und professionelle Anwender wirft dies Fragen auf: Wie stelle ich sicher, dass die von mir genutzten KI-Tools konform sind? Wie schütze ich meine Daten? Diktat AI bietet Ihnen hier Klarheit und Sicherheit. Erfahren Sie, warum unser Transkriptionsdienst nicht nur effizient, sondern auch eine verantwortungsbewusste Wahl im Einklang mit den neuen Regulierungen ist."
    },
    "introduction": {
      "paragraph": "Das EU KI-Gesetz verfolgt einen risikobasierten Ansatz. Es verbietet bestimmte \"inakzeptable\" KI-Anwendungen (wie Social Scoring) und stellt hohe Anforderungen an \"Hochrisiko-Systeme\" in sensiblen Bereichen (z. B. Personalwesen, kritische Infrastrukturen)."
    },
    "context": {
      "title": "Konzipiert für Effizienz, gebaut mit Verantwortung: Diktat AI und der AI Act",
      "paragraph": "Hier punktet Diktat AI für Sie:",
      "points": {
        "point1": "Fokus auf geringes Risiko: Diktat AI ist darauf spezialisiert, gesprochene Sprache in Text umzuwandeln. Es trifft keine autonomen Entscheidungen mit weitreichenden Folgen für Personen und fällt daher klar nicht in die Kategorien der verbotenen oder hochriskanten KI-Systeme gemäß AI Act. Sie nutzen ein Werkzeug zur Steigerung Ihrer Produktivität, keine KI für kritische Bewertungen oder Entscheidungen.",
        "point2": "Transparenz & Klarheit: Bei Diktat AI ist offensichtlich, dass Sie eine KI zur Unterstützung Ihrer Arbeit nutzen. Dies entspricht dem Transparenzgedanken des AI Acts für Systeme mit begrenztem Risiko.",
        "point3": "Datenschutz als Fundament (DSGVO & AI Act): Lange bevor der AI Act verabschiedet wurde, war für uns klar: Der Schutz Ihrer Daten hat oberste Priorität. Unsere strikte Einhaltung der DSGVO – mit sicherer Verarbeitung, Verschlüsselung und klaren Richtlinien – deckt sich nahtlos mit den hohen Datenschutz- und Sicherheitsanforderungen, die auch das KI-Gesetz betont.",
        "point4": "Keine verbotenen Praktiken: Diktat AI nutzt keine unterschwelligen Techniken, führt keine biometrische Kategorisierung sensibler Merkmale durch und erstellt keine Emotionserkennung am Arbeitsplatz. Wir konzentrieren uns ausschließlich auf präzise und nützliche Transkription."
      }
    },
    "benefits": {
      "title": "Effizienz gewinnen, Sorgenfreiheit behalten",
      "paragraph": "Die Einführung des KI-Gesetzes bedeutet nicht, dass Sie auf die Vorteile intelligenter Werkzeuge verzichten müssen. Im Gegenteil: Mit Diktat AI wählen Sie einen Partner, der Compliance ernst nimmt. So können Sie sich weiterhin auf das Wesentliche konzentrieren:",
      "points": {
        "point1": "Massive Zeitersparnis: Verwandeln Sie Stunden an Tipparbeit in Minuten – sicher und konform.",
        "point2": "Gesteigerte Produktivität: Beschleunigen Sie Ihre Workflows, von Meeting-Protokollen bis zur Content-Erstellung, ohne regulatorische Bedenken.",
        "point3": "Präzise & Nutzbare Ergebnisse: Erhalten Sie genaue Transkripte, auf deren Grundlage Sie vertrauensvoll weiterarbeiten können.",
        "point4": "Höchste Datensicherheit: Verlassen Sie sich auf unsere bewährten DSGVO-konformen Prozesse, die im Einklang mit dem AI Act stehen.",
        "point5": "Fokus auf Ihre Kernkompetenzen: Überlassen Sie uns die Transkription – wir kümmern uns um die Technik und die Einhaltung der Spielregeln."
      }
    },
    "trust": {
      "title": "Ihr vertrauenswürdiger Partner im KI-Zeitalter",
      "paragraph": "Die KI-Welt und ihre Regularien entwickeln sich ständig weiter. Als Anbieter von Diktat AI ist es unsere Aufgabe, diese Entwicklungen zu verfolgen und sicherzustellen, dass unser Dienst nicht nur leistungsstark, sondern auch verantwortungsbewusst und im Einklang mit gesetzlichen Vorgaben wie dem EU KI-Gesetz betrieben wird. Wir managen die technologische und regulatorische Komplexität im Hintergrund, damit Sie einfach und sicher arbeiten können."
    },
    "cta": {
      "title": "Bereit für sorgenfreie Transkription im Einklang mit dem EU KI-Gesetz?",
      "paragraph": "Haben Sie weitere Fragen dazu, wie Diktat AI Ihnen helfen kann, effizient und konform zu arbeiten? Möchten Sie besprechen, wie sich Diktat AI nahtlos und sicher in Ihre Prozesse integrieren lässt? Unser Team steht Ihnen gerne zur Verfügung.",
      "button": "Jetzt Kontakt aufnehmen & sicher durchstarten"
    }
  },
  "en": {
    "seo": {
      "description": "EU AI Act made simple: Why Diktat AI is a safe, compliant choice for transcriptions."
    },
    "hero": {
      "title": "EU AI Act: Why Diktat AI Is Your Safe and Compliant Choice for Transcriptions",
      "subtitle": "The new EU AI Act sets an important framework for the use of artificial intelligence. For companies and professional users, this raises questions: How do I ensure that the AI tools I use are compliant? How do I protect my data? Diktat AI offers clarity and security. Learn why our transcription service is not only efficient but also a responsible choice in line with the new regulations."
    },
    "introduction": {
      "paragraph": "The EU AI Act follows a risk-based approach. It prohibits certain \"unacceptable\" AI applications (such as social scoring) and places high demands on \"high-risk systems\" in sensitive areas (e.g., human resources, critical infrastructure)."
    },
    "context": {
      "title": "Designed for Efficiency, Built with Responsibility: Diktat AI and the AI Act",
      "paragraph": "Here's where Diktat AI scores points for you:",
      "points": {
        "point1": "Focus on low risk: Diktat AI specializes in converting spoken language into text. It does not make autonomous decisions with far-reaching consequences for individuals and therefore clearly does not fall into the categories of prohibited or high-risk AI systems according to the AI Act. You are using a tool to increase your productivity, not AI for critical evaluations or decisions.",
        "point2": "Transparency & Clarity: With Diktat AI, it is obvious that you are using AI to support your work. This aligns with the transparency principle of the AI Act for systems with limited risk.",
        "point3": "Data protection as a foundation (GDPR & AI Act): Long before the AI Act was passed, it was clear to us: The protection of your data is our top priority. Our strict compliance with the GDPR – with secure processing, encryption, and clear guidelines – aligns seamlessly with the high data protection and security requirements that the AI Act also emphasizes.",
        "point4": "No prohibited practices: Diktat AI does not use subliminal techniques, does not perform biometric categorization of sensitive characteristics, and does not create emotion recognition in the workplace. We focus exclusively on precise and useful transcription."
      }
    },
    "benefits": {
      "title": "Gain Efficiency, Maintain Peace of Mind",
      "paragraph": "The introduction of the AI Act does not mean you have to forego the benefits of intelligent tools. On the contrary: With Diktat AI, you choose a partner that takes compliance seriously. This allows you to continue focusing on what matters:",
      "points": {
        "point1": "Massive time savings: Turn hours of typing work into minutes – safely and compliantly.",
        "point2": "Increased productivity: Accelerate your workflows, from meeting minutes to content creation, without regulatory concerns.",
        "point3": "Precise & Usable Results: Get accurate transcripts that you can confidently work with.",
        "point4": "Highest data security: Rely on our proven GDPR-compliant processes that align with the AI Act.",
        "point5": "Focus on your core competencies: Leave the transcription to us – we take care of the technology and compliance with the rules."
      }
    },
    "trust": {
      "title": "Your Trusted Partner in the AI Era",
      "paragraph": "The AI world and its regulations are constantly evolving. As the provider of Diktat AI, it is our responsibility to follow these developments and ensure that our service is not only powerful but also responsible and in line with legal requirements such as the EU AI Act. We manage the technological and regulatory complexity in the background so that you can work simply and safely."
    },
    "cta": {
      "title": "Ready for Worry-Free Transcription in Line with the EU AI Act?",
      "paragraph": "Do you have more questions about how Diktat AI can help you work efficiently and compliantly? Would you like to discuss how Diktat AI can be seamlessly and securely integrated into your processes? Our team is happy to assist you.",
      "button": "Contact us now & start securely"
    }
  },
  "nl": {
    "seo": {
      "description": "EU AI-wet eenvoudig uitgelegd: Waarom DiktatAI een veilige, conforme keuze is voor transcripties."
    },
    "hero": {
      "title": "EU AI-wet: Waarom DiktatAI uw veilige en conforme keuze is voor transcripties",
      "subtitle": "De nieuwe AI-wet (AI Act) van de Europese Unie zet een belangrijk kader voor het gebruik van kunstmatige intelligentie. Voor bedrijven en professionele gebruikers roept dit vragen op: Hoe zorg ik ervoor dat de AI-tools die ik gebruik conform zijn? Hoe bescherm ik mijn gegevens? DiktatAI biedt u hier duidelijkheid en zekerheid. Ontdek waarom onze transcriptiedienst niet alleen efficiënt is, maar ook een verantwoorde keuze in overeenstemming met de nieuwe regelgeving."
    },
    "introduction": {
      "paragraph": "De EU AI-wet hanteert een risicogebaseerde aanpak. Het verbiedt bepaalde \"onaanvaardbare\" AI-toepassingen (zoals social scoring) en stelt hoge eisen aan \"hoog-risicosystemen\" in gevoelige gebieden (bijv. personeelszaken, kritieke infrastructuren)."
    },
    "context": {
      "title": "Ontworpen voor efficiëntie, gebouwd met verantwoordelijkheid: DiktatAI en de AI Act",
      "paragraph": "Hier scoort DiktatAI voor u:",
      "points": {
        "point1": "Focus op laag risico: DiktatAI is gespecialiseerd in het omzetten van gesproken taal naar tekst. Het neemt geen autonome beslissingen met verstrekkende gevolgen voor personen en valt daarom duidelijk niet in de categorieën van verboden of hoogriskante AI-systemen volgens de AI Act. U gebruikt een tool om uw productiviteit te verhogen, geen AI voor kritieke beoordelingen of beslissingen.",
        "point2": "Transparantie & duidelijkheid: Bij DiktatAI is het evident dat u AI gebruikt ter ondersteuning van uw werk. Dit komt overeen met de transparantiegedachte van de AI Act voor systemen met beperkt risico.",
        "point3": "Gegevensbescherming als fundament (AVG & AI Act): Lang voordat de AI Act werd aangenomen, was het voor ons duidelijk: de bescherming van uw gegevens heeft topprioriteit. Onze strikte naleving van de AVG – met veilige verwerking, versleuteling en heldere richtlijnen – sluit naadloos aan bij de hoge privacy- en beveiligingseisen die ook de AI-wet benadrukt.",
        "point4": "Geen verboden praktijken: DiktatAI gebruikt geen onderbewuste technieken, voert geen biometrische categorisering van gevoelige kenmerken uit en maakt geen emotieherkenning op de werkplek. We concentreren ons uitsluitend op nauwkeurige en nuttige transcriptie."
      }
    },
    "benefits": {
      "title": "Efficiëntie winnen, zorgeloosheid behouden",
      "paragraph": "De invoering van de AI-wet betekent niet dat u moet afzien van de voordelen van intelligente tools. Integendeel: met DiktatAI kiest u een partner die compliance serieus neemt. Zo kunt u zich blijven concentreren op wat belangrijk is:",
      "points": {
        "point1": "Enorme tijdsbesparing: Zet uren typwerk om in minuten – veilig en conform.",
        "point2": "Verhoogde productiviteit: Versnel uw workflows, van vergadernotulen tot contentcreatie, zonder zorgen over regelgeving.",
        "point3": "Nauwkeurige & bruikbare resultaten: Ontvang precieze transcripties waarop u met vertrouwen kunt voortbouwen.",
        "point4": "Hoogste gegevensbeveiliging: Vertrouw op onze bewezen AVG-conforme processen, die in lijn zijn met de AI Act.",
        "point5": "Focus op uw kerncompetenties: Laat de transcriptie aan ons over – wij zorgen voor de techniek en de naleving van de regels."
      }
    },
    "trust": {
      "title": "Uw betrouwbare partner in het AI-tijdperk",
      "paragraph": "De AI-wereld en haar regelgeving ontwikkelen zich voortdurend. Als aanbieder van DiktatAI is het onze taak om deze ontwikkelingen te volgen en ervoor te zorgen dat onze dienst niet alleen krachtig is, maar ook verantwoord en in overeenstemming met wettelijke voorschriften zoals de EU AI-wet wordt uitgevoerd. We beheren de technologische en regelgevende complexiteit op de achtergrond, zodat u eenvoudig en veilig kunt werken."
    },
    "cta": {
      "title": "Klaar voor zorgeloze transcriptie in overeenstemming met de EU AI-wet?",
      "paragraph": "Heeft u nog vragen over hoe DiktatAI u kan helpen efficiënt en conform te werken? Wilt u bespreken hoe DiktatAI naadloos en veilig in uw processen kan worden geïntegreerd? Ons team staat graag voor u klaar.",
      "button": "Nu contact opnemen & veilig van start gaan"
    }
  },
  "es": {
    "seo": {
      "description": "Ley de IA de la UE explicada de forma sencilla: Por qué Diktat AI es una opción segura y conforme para transcripciones."
    },
    "hero": {
      "title": "Ley de IA de la UE: Por qué Diktat AI es su opción segura y conforme para transcripciones",
      "subtitle": "La nueva Ley de IA de la UE establece un marco importante para el uso de la inteligencia artificial. Para empresas y usuarios profesionales, esto plantea preguntas: ¿Cómo me aseguro de que las herramientas de IA que uso sean conformes? ¿Cómo protejo mis datos? Diktat AI ofrece claridad y seguridad. Descubra por qué nuestro servicio de transcripción no solo es eficiente, sino también una opción responsable en línea con las nuevas regulaciones."
    },
    "introduction": {
      "paragraph": "La Ley de IA de la UE sigue un enfoque basado en el riesgo. Prohíbe ciertas aplicaciones de IA \"inaceptables\" (como la puntuación social) e impone altas exigencias a los \"sistemas de alto riesgo\" en áreas sensibles (por ejemplo, recursos humanos, infraestructuras críticas)."
    },
    "context": {
      "title": "Diseñado para la eficiencia, construido con responsabilidad: Diktat AI y la Ley de IA",
      "paragraph": "Aquí es donde Diktat AI destaca para usted:",
      "points": {
        "point1": "Enfoque en bajo riesgo: Diktat AI se especializa en convertir el habla en texto. No toma decisiones autónomas con consecuencias de largo alcance para las personas y, por lo tanto, claramente no entra en las categorías de sistemas de IA prohibidos o de alto riesgo según la Ley de IA. Está utilizando una herramienta para aumentar su productividad, no IA para evaluaciones o decisiones críticas.",
        "point2": "Transparencia y claridad: Con Diktat AI, es evidente que está utilizando IA para apoyar su trabajo. Esto se alinea con el principio de transparencia de la Ley de IA para sistemas con riesgo limitado.",
        "point3": "Protección de datos como fundamento (RGPD y Ley de IA): Mucho antes de que se aprobara la Ley de IA, teníamos claro: La protección de sus datos es nuestra máxima prioridad. Nuestro estricto cumplimiento del RGPD – con procesamiento seguro, cifrado y directrices claras – se alinea perfectamente con los altos requisitos de protección de datos y seguridad que también enfatiza la Ley de IA.",
        "point4": "Sin prácticas prohibidas: Diktat AI no utiliza técnicas subliminales, no realiza categorización biométrica de características sensibles y no crea reconocimiento de emociones en el lugar de trabajo. Nos centramos exclusivamente en la transcripción precisa y útil."
      }
    },
    "benefits": {
      "title": "Gane eficiencia, mantenga la tranquilidad",
      "paragraph": "La introducción de la Ley de IA no significa que deba renunciar a los beneficios de las herramientas inteligentes. Al contrario: Con Diktat AI, elige un socio que se toma en serio el cumplimiento. Esto le permite seguir centrándose en lo que importa:",
      "points": {
        "point1": "Ahorro masivo de tiempo: Convierta horas de trabajo de escritura en minutos – de forma segura y conforme.",
        "point2": "Mayor productividad: Acelere sus flujos de trabajo, desde actas de reuniones hasta creación de contenido, sin preocupaciones regulatorias.",
        "point3": "Resultados precisos y utilizables: Obtenga transcripciones precisas con las que puede trabajar con confianza.",
        "point4": "Máxima seguridad de datos: Confíe en nuestros procesos probados conformes al RGPD que se alinean con la Ley de IA.",
        "point5": "Céntrese en sus competencias principales: Déjenos la transcripción – nosotros nos encargamos de la tecnología y el cumplimiento de las normas."
      }
    },
    "trust": {
      "title": "Su socio de confianza en la era de la IA",
      "paragraph": "El mundo de la IA y sus regulaciones están en constante evolución. Como proveedor de Diktat AI, es nuestra responsabilidad seguir estos desarrollos y asegurar que nuestro servicio no solo sea potente, sino también responsable y conforme con los requisitos legales como la Ley de IA de la UE. Gestionamos la complejidad tecnológica y regulatoria en segundo plano para que usted pueda trabajar de forma simple y segura."
    },
    "cta": {
      "title": "¿Listo para una transcripción sin preocupaciones conforme a la Ley de IA de la UE?",
      "paragraph": "¿Tiene más preguntas sobre cómo Diktat AI puede ayudarle a trabajar de manera eficiente y conforme? ¿Le gustaría discutir cómo Diktat AI puede integrarse de forma perfecta y segura en sus procesos? Nuestro equipo estará encantado de ayudarle.",
      "button": "Contactar ahora y comenzar de forma segura"
    }
  },
  "fr": {
    "seo": {
      "description": "AI Act de l'UE expliqué simplement : Pourquoi Diktat AI est un choix sûr et conforme pour les transcriptions."
    },
    "hero": {
      "title": "AI Act de l'UE : Pourquoi Diktat AI est votre choix sûr et conforme pour les transcriptions",
      "subtitle": "Le nouvel AI Act de l'UE établit un cadre important pour l'utilisation de l'intelligence artificielle. Pour les entreprises et les utilisateurs professionnels, cela soulève des questions : Comment m'assurer que les outils d'IA que j'utilise sont conformes ? Comment protéger mes données ? Diktat AI offre clarté et sécurité. Découvrez pourquoi notre service de transcription n'est pas seulement efficace mais aussi un choix responsable conforme aux nouvelles réglementations."
    },
    "introduction": {
      "paragraph": "L'AI Act de l'UE suit une approche basée sur le risque. Il interdit certaines applications d'IA \"inacceptables\" (comme le scoring social) et impose des exigences élevées aux \"systèmes à haut risque\" dans les domaines sensibles (par exemple, ressources humaines, infrastructures critiques)."
    },
    "context": {
      "title": "Conçu pour l'efficacité, construit avec responsabilité : Diktat AI et l'AI Act",
      "paragraph": "Voici où Diktat AI marque des points pour vous :",
      "points": {
        "point1": "Focus sur le faible risque : Diktat AI se spécialise dans la conversion de la parole en texte. Il ne prend pas de décisions autonomes avec des conséquences importantes pour les individus et ne relève donc clairement pas des catégories de systèmes d'IA interdits ou à haut risque selon l'AI Act. Vous utilisez un outil pour augmenter votre productivité, pas une IA pour des évaluations ou décisions critiques.",
        "point2": "Transparence et clarté : Avec Diktat AI, il est évident que vous utilisez l'IA pour soutenir votre travail. Cela s'aligne avec le principe de transparence de l'AI Act pour les systèmes à risque limité.",
        "point3": "Protection des données comme fondement (RGPD et AI Act) : Bien avant l'adoption de l'AI Act, il était clair pour nous : la protection de vos données est notre priorité absolue. Notre stricte conformité au RGPD – avec un traitement sécurisé, le cryptage et des directives claires – s'aligne parfaitement avec les exigences élevées de protection des données et de sécurité que l'AI Act souligne également.",
        "point4": "Aucune pratique interdite : Diktat AI n'utilise pas de techniques subliminales, n'effectue pas de catégorisation biométrique de caractéristiques sensibles et ne crée pas de reconnaissance des émotions sur le lieu de travail. Nous nous concentrons exclusivement sur une transcription précise et utile."
      }
    },
    "benefits": {
      "title": "Gagner en efficacité, maintenir la tranquillité d'esprit",
      "paragraph": "L'introduction de l'AI Act ne signifie pas que vous devez renoncer aux avantages des outils intelligents. Au contraire : Avec Diktat AI, vous choisissez un partenaire qui prend la conformité au sérieux. Cela vous permet de continuer à vous concentrer sur l'essentiel :",
      "points": {
        "point1": "Gain de temps massif : Transformez des heures de frappe en minutes – en toute sécurité et conformité.",
        "point2": "Productivité accrue : Accélérez vos flux de travail, des comptes-rendus de réunion à la création de contenu, sans préoccupations réglementaires.",
        "point3": "Résultats précis et utilisables : Obtenez des transcriptions précises sur lesquelles vous pouvez travailler en toute confiance.",
        "point4": "Sécurité des données maximale : Comptez sur nos processus éprouvés conformes au RGPD qui s'alignent avec l'AI Act.",
        "point5": "Focus sur vos compétences clés : Laissez-nous la transcription – nous nous occupons de la technologie et du respect des règles."
      }
    },
    "trust": {
      "title": "Votre partenaire de confiance à l'ère de l'IA",
      "paragraph": "Le monde de l'IA et ses réglementations évoluent constamment. En tant que fournisseur de Diktat AI, il est de notre responsabilité de suivre ces développements et de garantir que notre service n'est pas seulement puissant mais aussi responsable et conforme aux exigences légales telles que l'AI Act de l'UE. Nous gérons la complexité technologique et réglementaire en arrière-plan afin que vous puissiez travailler simplement et en toute sécurité."
    },
    "cta": {
      "title": "Prêt pour une transcription sans souci conforme à l'AI Act de l'UE ?",
      "paragraph": "Avez-vous d'autres questions sur la façon dont Diktat AI peut vous aider à travailler efficacement et en conformité ? Souhaitez-vous discuter de la manière dont Diktat AI peut être intégré de manière transparente et sécurisée dans vos processus ? Notre équipe est à votre disposition.",
      "button": "Contactez-nous maintenant et démarrez en toute sécurité"
    }
  },
  "sv": {
    "seo": {
      "description": "EU:s AI-lag förklarad enkelt: Varför Diktat AI är ett säkert, kompatibelt val för transkriptioner."
    },
    "hero": {
      "title": "EU:s AI-lag: Varför Diktat AI är ditt säkra och kompatibla val för transkriptioner",
      "subtitle": "Den nya EU:s AI-lag sätter en viktig ram för användningen av artificiell intelligens. För företag och professionella användare väcker detta frågor: Hur säkerställer jag att de AI-verktyg jag använder är kompatibla? Hur skyddar jag mina data? Diktat AI erbjuder klarhet och säkerhet. Lär dig varför vår transkriptionstjänst inte bara är effektiv utan också ett ansvarsfullt val i linje med de nya reglerna."
    },
    "introduction": {
      "paragraph": "EU:s AI-lag följer en riskbaserad strategi. Den förbjuder vissa \"oacceptabla\" AI-tillämpningar (som social poängsättning) och ställer höga krav på \"högrisk-system\" inom känsliga områden (t.ex. personalresurser, kritisk infrastruktur)."
    },
    "context": {
      "title": "Designad för effektivitet, byggd med ansvar: Diktat AI och AI-lagen",
      "paragraph": "Här är där Diktat AI ger dig poäng:",
      "points": {
        "point1": "Fokus på låg risk: Diktat AI specialiserar sig på att konvertera talat språk till text. Den fattar inte autonoma beslut med långtgående konsekvenser för individer och faller därför tydligt inte under kategorierna förbjudna eller högrisk AI-system enligt AI-lagen. Du använder ett verktyg för att öka din produktivitet, inte AI för kritiska utvärderingar eller beslut.",
        "point2": "Transparens och klarhet: Med Diktat AI är det uppenbart att du använder AI för att stödja ditt arbete. Detta överensstämmer med AI-lagens transparensprincip för system med begränsad risk.",
        "point3": "Dataskydd som grund (GDPR och AI-lagen): Långt innan AI-lagen antogs var det klart för oss: Skyddet av dina data är vår högsta prioritet. Vår strikta efterlevnad av GDPR – med säker behandling, kryptering och tydliga riktlinjer – överensstämmer sömlöst med de höga dataskydds- och säkerhetskraven som AI-lagen också betonar.",
        "point4": "Inga förbjudna metoder: Diktat AI använder inte subliminala tekniker, utför inte biometrisk kategorisering av känsliga egenskaper och skapar inte känslor igenkänning på arbetsplatsen. Vi fokuserar uteslutande på exakt och användbar transkribering."
      }
    },
    "benefits": {
      "title": "Vinn effektivitet, behåll sinnesro",
      "paragraph": "Införandet av AI-lagen betyder inte att du måste avstå från fördelarna med intelligenta verktyg. Tvärtom: Med Diktat AI väljer du en partner som tar efterlevnad på allvar. Detta gör att du kan fortsätta fokusera på det som spelar roll:",
      "points": {
        "point1": "Massiv tidsbesparing: Förvandla timmar av skrivarbete till minuter – säkert och kompatibelt.",
        "point2": "Ökad produktivitet: Påskynda dina arbetsflöden, från mötesprotokoll till innehållsskapande, utan regulatoriska bekymmer.",
        "point3": "Exakta och användbara resultat: Få korrekta transkriptioner som du kan arbeta med med förtroende.",
        "point4": "Högsta datasäkerhet: Förlita dig på våra beprövade GDPR-kompatibla processer som överensstämmer med AI-lagen.",
        "point5": "Fokusera på dina kärnkompetenser: Lämna transkriberingen till oss – vi tar hand om tekniken och efterlevnaden av reglerna."
      }
    },
    "trust": {
      "title": "Din pålitliga partner i AI-eran",
      "paragraph": "AI-världen och dess regleringar utvecklas ständigt. Som leverantör av Diktat AI är det vårt ansvar att följa dessa utvecklingar och säkerställa att vår tjänst inte bara är kraftfull utan också ansvarsfull och i linje med lagkrav som EU:s AI-lag. Vi hanterar den teknologiska och regulatoriska komplexiteten i bakgrunden så att du kan arbeta enkelt och säkert."
    },
    "cta": {
      "title": "Redo för problemfri transkribering i linje med EU:s AI-lag?",
      "paragraph": "Har du fler frågor om hur Diktat AI kan hjälpa dig att arbeta effektivt och kompatibelt? Vill du diskutera hur Diktat AI kan integreras sömlöst och säkert i dina processer? Vårt team finns här för att hjälpa dig.",
      "button": "Kontakta oss nu och starta säkert"
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
