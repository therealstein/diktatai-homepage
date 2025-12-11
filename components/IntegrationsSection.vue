<template>
  <div class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="font-display text-4xl font-bold tracking-tight mb-5">{{ t('title') }}</h2>
      <p class="text-lg max-w-2xl mx-auto text-base-content/80">
        {{ t('description') }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Email Integration Card -->
      <div class="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-90"></div>
        <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
        <div class="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
        
        <div class="relative p-8 md:p-12 flex flex-col h-full z-10">
          <div class="flex items-start justify-between mb-8">
            <div class="p-3 bg-white rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#21759b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
              {{ t('available') }}
            </div>
          </div>

          <h3 class="text-3xl font-display font-bold text-white mb-4">{{ t('emailTitle') }}</h3>
          <p class="text-white/90 text-lg mb-6 flex-grow">
            {{ t('emailDescription') }}
          </p>

          <div class="mt-auto">
            <NuxtLinkLocale to="general-help" class="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              {{ t('howItWorks') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
      
      <!-- Software Integration Card -->
      <div class="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 opacity-90"></div>
        <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl"></div>
        <div class="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl"></div>
        
        <div class="relative p-8 md:p-12 flex flex-col h-full z-10">
          <div class="flex items-start justify-between mb-8">
            <div class="p-3 bg-white rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#003976" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div class="inline-flex items-center px-4 py-1 rounded-full bg-[#003976]/30 text-white text-sm font-medium">
              {{ t('available') }}
            </div>
          </div>

          <h3 class="text-3xl font-display font-bold text-white mb-4">{{ t('softwareTitle') }}</h3>
          <p class="text-white/90 text-lg mb-6 flex-grow">
            {{ t('softwareDescription') }}
          </p>

          <div class="mt-auto">
            <NuxtLinkLocale
              to="general-kontakt"
              class="inline-flex items-center gap-2 bg-[#003976] text-white hover:bg-[#00457d] px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              {{ t('requestSolution') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h3 class="text-2xl font-bold mb-6">{{ t('whyValuable') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <h4 class="font-bold mb-2">{{ t('flexibility') }}</h4>
          <p class="text-base-content/80">{{ t('flexibilityDescription') }}</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">{{ t('timeSaving') }}</h4>
          <p class="text-base-content/80">{{ t('timeSavingDescription') }}</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">{{ t('seamlessProcesses') }}</h4>
          <p class="text-base-content/80">{{ t('seamlessProcessesDescription') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>

<i18n lang="json">
{
  "de": {
    "title": "Nahtlose Integrationen",
    "description": "Diktat AI fügt sich nahtlos in Ihre bevorzugten Tools und Workflows ein",
    "available": "Verfügbar",
    "emailTitle": "E-Mail-Integration",
    "emailDescription": "Leiten Sie Audioaufnahmen direkt an Ihre Diktat AI E-Mail-Adresse weiter für sofortige Transkription.",
    "howItWorks": "So funktioniert's:",
    "softwareTitle": "Software-Integration",
    "softwareDescription": "Verbinden Sie Diktat AI über unsere API oder Webhooks mit Ihrem bestehenden Software-Stack.",
    "requestSolution": "Individuelle Lösung anfragen",
    "whyValuable": "Warum Integrationen wertvoll sind:",
    "flexibility": "Flexibilität",
    "flexibilityDescription": "Wählen Sie, wie Sie Diktat AI nutzen möchten – über unsere Web-Oberfläche, E-Mail oder API.",
    "timeSaving": "Zeitersparnis",
    "timeSavingDescription": "Automatisieren Sie Ihren Workflow durch die direkte Integration von Diktat AI in Ihre bestehenden Tools.",
    "seamlessProcesses": "Nahtlose Prozesse",
    "seamlessProcessesDescription": "Behalten Sie Ihren aktuellen Workflow bei und fügen Sie leistungsstarke Transkriptionsfunktionen hinzu."
  },
  "en": {
    "title": "Seamless Integrations",
    "description": "Dictate AI integrates with your favorite tools and workflows",
    "available": "Available",
    "emailTitle": "Email Integration",
    "emailDescription": "Forward audio recordings directly to your Dictate AI email address for instant transcription.",
    "howItWorks": "How it works:",
    "softwareTitle": "Software Integration",
    "softwareDescription": "Connect Dictate AI with your existing software stack through our API or webhooks.",
    "requestSolution": "Request a custom solution",
    "whyValuable": "Why integrations are valuable:",
    "flexibility": "Flexibility",
    "flexibilityDescription": "Choose how you want to use Dictate AI - through our web interface, email, or API.",
    "timeSaving": "Time Saving",
    "timeSavingDescription": "Automate your workflow by integrating Dictate AI directly into your existing tools.",
    "seamlessProcesses": "Seamless Processes",
    "seamlessProcessesDescription": "Maintain your current workflow while adding powerful transcription capabilities."
  },
  "nl": {
    "title": "Diktat AI past zich aan uw workflow aan",
    "description": "We maken het u gemakkelijk om transcripties precies daar te ontvangen waar u ze nodig heeft. Ontdek onze flexibele mogelijkheden om Diktat AI naadloos in uw dagelijkse werk te integreren.",
    "available": "Beschikbaar",
    "emailTitle": "Eenvoudig per e-mail transcriberen",
    "emailDescription": "De snelste weg naar het voltooide transcript – helemaal zonder login. Stuur ons uw audiobestand direct als bijlage per e-mail. Diktat AI neemt de omzetting naar tekst over en levert u het resultaat comfortabel terug.",
    "howItWorks": "Zo werkt het:",
    "softwareTitle": "Automatische koppeling met uw software",
    "softwareDescription": "Naadloze integratie voor maximale efficiëntie. Uw transcripties landen automatisch precies daar waar u ze verder verwerkt – of het nu in uw CRM-systeem, uw projectmanagementsoftware of een ander belangrijk hulpmiddel is.",
    "requestSolution": "Individuele oplossing aanvragen",
    "whyValuable": "Waarom integraties waardevol zijn:",
    "flexibility": "Flexibiliteit",
    "flexibilityDescription": "Kies hoe u Diktat AI wilt gebruiken - via onze webinterface, e-mail of API.",
    "timeSaving": "Tijdsbesparing",
    "timeSavingDescription": "Automatiseer uw workflow door directe integratie van Diktat AI in uw bestaande tools.",
    "seamlessProcesses": "Naadloze processen",
    "seamlessProcessesDescription": "Behoud uw huidige workflow en voeg krachtige transcriptiefuncties toe."
  },
  "es": {
    "title": "Integraciones fluidas",
    "description": "Diktat AI se integra perfectamente con sus herramientas y flujos de trabajo favoritos",
    "available": "Disponible",
    "emailTitle": "Integración por correo electrónico",
    "emailDescription": "Reenvíe grabaciones de audio directamente a su dirección de correo de Diktat AI para transcripción instantánea.",
    "howItWorks": "Cómo funciona:",
    "softwareTitle": "Integración de software",
    "softwareDescription": "Conecte Diktat AI con su stack de software existente a través de nuestra API o webhooks.",
    "requestSolution": "Solicitar una solución personalizada",
    "whyValuable": "Por qué las integraciones son valiosas:",
    "flexibility": "Flexibilidad",
    "flexibilityDescription": "Elija cómo desea usar Diktat AI - a través de nuestra interfaz web, correo electrónico o API.",
    "timeSaving": "Ahorro de tiempo",
    "timeSavingDescription": "Automatice su flujo de trabajo integrando Diktat AI directamente en sus herramientas existentes.",
    "seamlessProcesses": "Procesos fluidos",
    "seamlessProcessesDescription": "Mantenga su flujo de trabajo actual mientras agrega potentes capacidades de transcripción."
  },
  "fr": {
    "title": "Intégrations transparentes",
    "description": "Diktat AI s'intègre parfaitement à vos outils et flux de travail préférés",
    "available": "Disponible",
    "emailTitle": "Intégration par e-mail",
    "emailDescription": "Transférez les enregistrements audio directement à votre adresse e-mail Diktat AI pour une transcription instantanée.",
    "howItWorks": "Comment ça marche :",
    "softwareTitle": "Intégration logicielle",
    "softwareDescription": "Connectez Diktat AI à votre infrastructure logicielle existante via notre API ou webhooks.",
    "requestSolution": "Demander une solution personnalisée",
    "whyValuable": "Pourquoi les intégrations sont précieuses :",
    "flexibility": "Flexibilité",
    "flexibilityDescription": "Choisissez comment vous souhaitez utiliser Diktat AI - via notre interface web, e-mail ou API.",
    "timeSaving": "Gain de temps",
    "timeSavingDescription": "Automatisez votre flux de travail en intégrant Diktat AI directement dans vos outils existants.",
    "seamlessProcesses": "Processus fluides",
    "seamlessProcessesDescription": "Conservez votre flux de travail actuel tout en ajoutant de puissantes fonctionnalités de transcription."
  },
  "sv": {
    "title": "Sömlösa integrationer",
    "description": "Diktat AI integreras med dina favoritverktyg och arbetsflöden",
    "available": "Tillgänglig",
    "emailTitle": "E-postintegration",
    "emailDescription": "Vidarebefordra ljudinspelningar direkt till din Diktat AI e-postadress för omedelbar transkribering.",
    "howItWorks": "Så här fungerar det:",
    "softwareTitle": "Programvaruintegration",
    "softwareDescription": "Anslut Diktat AI med din befintliga programvarustack via vårt API eller webhooks.",
    "requestSolution": "Begär en anpassad lösning",
    "whyValuable": "Varför integrationer är värdefulla:",
    "flexibility": "Flexibilitet",
    "flexibilityDescription": "Välj hur du vill använda Diktat AI - via vårt webbgränssnitt, e-post eller API.",
    "timeSaving": "Tidsbesparing",
    "timeSavingDescription": "Automatisera ditt arbetsflöde genom att integrera Diktat AI direkt i dina befintliga verktyg.",
    "seamlessProcesses": "Sömlösa processer",
    "seamlessProcessesDescription": "Behåll ditt nuvarande arbetsflöde medan du lägger till kraftfulla transkriberingsfunktioner."
  }
}
</i18n> 