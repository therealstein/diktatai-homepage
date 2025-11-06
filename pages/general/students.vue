<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div class="hero min-h-[40vh] relative" style="background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%); background-size: cover; background-position: center;">
      <div class="hero-content text-center">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20">
          <h1 class="font-display text-4xl font-bold text-white mb-2" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">Smarter Studieren & Forschen – Transkripte statt Tippen</h1>
          <p class="text-lg text-white" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">Verwandle Vorlesungen, Seminare und Interviews mühelos in durchsuchbaren Text. Gewinne wertvolle Zeit für Prüfungen, Abschlussarbeiten und Publikationen.</p>
          <NuxtLinkLocale to="auth-register" class="mt-6 inline-block">
            <button class="font-display bg-white text-pink-500 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide">
              Jetzt kostenlos starten & Zeit sparen
            </button>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Für Studium & Forschung Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">Diktat AI: Dein unverzichtbarer Helfer an Uni & Hochschule</h2>
          <p class="text-lg mb-8">
            Entdecke, wie Studierende und Akademiker Diktat AI nutzen, um Lern- und Forschungsprozesse zu optimieren:
          </p>
          
          <!-- Students Card -->
          <div class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300">
            <h3 class="font-display text-2xl font-bold mb-6">Studierende</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Transkribiere Vorlesungen und Seminare, um Inhalte leichter zu wiederholen und zu durchsuchen.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Wandle Interviews für Haus- und Abschlussarbeiten (Bachelor, Master, Doktorarbeit) schnell in Text um.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Erstelle mühelos Mitschriften von Lerngruppen oder Diskussionsrunden.</span>
              </li>
            </ul>
          </div>

          <!-- Academics Card -->
          <div class="card bg-base-200 shadow-xl mb-8 p-8 rounded-3xl border border-base-300">
            <h3 class="font-display text-2xl font-bold mb-6">Akademiker & Forschende</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Transkribiere Forschungsinterviews und qualitative Daten für eine effiziente Analyse.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Wandle Vorträge, Konferenzbeiträge oder diktierte Notizen in Text um.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Archiviere gesprochene Inhalte als durchsuchbare Textdokumente für spätere Referenzen.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Process Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">Einfach. Schnell. Effektiv.</h2>
          <p class="text-lg mb-8">
            Unser unkomplizierter Prozess spart dir wertvolle Stunden, die du besser ins Lernen oder Forschen investieren kannst.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">1. Aufnahme hochladen</h3>
              <p>Vorlesung, Interview, Notiz etc. mit einem Klick starten.</p>
            </div>
            
            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">2. KI-Transkription</h3>
              <p>Präzise Umwandlung durch intelligente Spracherkennung.</p>
            </div>
            
            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">3. Sichere Verarbeitung</h3>
              <p>Deine Daten sind sicher & DSGVO-konform (EU-Server).</p>
            </div>
            
            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <h3 class="font-display text-xl font-bold mb-4">4. Sofort nutzbar</h3>
              <p>Text herunterladen, kopieren, in deine Dokumente einfügen.</p>
            </div>
          </div>
        </div>

        <!-- Advantages Section -->
        <div class="mb-12">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">Dein klarer Vorteil im Studium & in der Forschung mit Diktat AI</h2>
          <p class="text-lg mb-8">
            Nutze die Kraft der Automatisierung, um dich auf das Wesentliche zu konzentrieren: Wissen erwerben und Erkenntnisse gewinnen.
          </p>

          <div class="space-y-6">
            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">Massive Zeitersparnis</h3>
                  <p>Schluss mit stundenlangem Abtippen von Aufnahmen. Gewinne wertvolle Zeit für Lernen, Analyse, Schreiben und Experimente.</p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">Effektiver Lernen & Verstehen</h3>
                  <p>Durchsuche Vorlesungsmitschriften gezielt nach Stichwörtern. Finde wichtige Passagen sofort wieder, ohne stundenlang Audio zu hören.</p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">Beschleunigte Forschung</h3>
                  <p>Verarbeite qualitative Daten (Interviews, Fokusgruppen) deutlich schneller. Konzentriere dich auf die Analyse statt auf die Transkription.</p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">Präzise Grundlage für deine Arbeit</h3>
                  <p>Erhalte genaue Text-Transkripte als verlässliche Basis für Zitate, Analysen, Studienarbeiten und Publikationen.</p>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl p-6 rounded-3xl border border-base-300">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <h3 class="font-display text-xl font-bold mb-2">Fokus auf Inhalte & Erkenntnisse</h3>
                  <p>Reduziere mühsame Routineaufgaben. Investiere deine Energie in das Verstehen komplexer Themen und das Gewinnen neuer wissenschaftlicher Einsichten.</p>
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
const { t } = useI18n()
// SEO Meta Tags
useHead({
  title: t('pages.students.title'),
  meta: [
    { name: 'description', content: t('pages.students.description') }
  ],
})
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
