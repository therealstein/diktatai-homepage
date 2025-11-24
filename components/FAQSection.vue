<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-4 tracking-tight">
      {{ t('title') }}
    </h2>
    <p
      class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
    >
      {{ t('description') }}
    </p>

    <div class="max-w-4xl mx-auto space-y-6">
      <!-- FAQ Item 1 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item1.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ t('item1.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item2.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed mb-4">
            {{ t('item2.description') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-base-content/80">
            <li>
              <strong>{{ t('item2.professionals') }}</strong>
            </li>
            <li>
              <strong>{{ t('item2.teams') }}</strong>
            </li>
            <li>
              <strong>{{ t('item2.students') }}</strong>
            </li>
            <li>
              <strong>{{ t('item2.journalists') }}</strong>
            </li>
            <li>
              <strong>{{ t('item2.creators') }}</strong>
            </li>
            <li>
              <strong>{{ t('item2.noteTakers') }}</strong>
            </li>
          </ul>
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item3.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ t('item3.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item4.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ t('item4.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item5.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ t('item5.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 6 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item6.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ t('item6.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 7 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ t('item7.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed mb-4">
            {{ t('item7.description') }}
          </p>
          <ul class="list-decimal list-inside space-y-2 text-base-content/80">
            <li>{{ t('item7.step1') }}</li>
            <li>{{ t('item7.step2') }}</li>
            <li>{{ t('item7.step3') }}</li>
          </ul>
          <p class="text-base-content/80 leading-relaxed mt-4">
            {{ t('item7.conclusion') }}
          </p>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <p class="text-lg font-medium text-base-content/80 mb-4">
        {{ t('stillHaveQuestions') }}
      </p>
      <p class="text-base text-base-content/70 max-w-2xl mx-auto mb-6">
        {{ t('reachOutText') }}
      </p>
      <NuxtLinkLocale
        to="questions"
        class="font-display bg-purple-500 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
      >
        {{ t('moreQuestions') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

// Generate FAQ Schema for SEO
const faqSchema = computed(() => {
  const faqItems = [];

  // Add FAQ item 1
  faqItems.push({
    '@type': 'Question',
    name: t('item1.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('item1.description'),
    },
  });

  // Add FAQ item 2 (with list items)
  const item2Professionals = t('item2.professionals');
  const item2Teams = t('item2.teams');
  const item2Students = t('item2.students');
  const item2Journalists = t('item2.journalists');
  const item2Creators = t('item2.creators');
  const item2NoteTakers = t('item2.noteTakers');

  faqItems.push({
    '@type': 'Question',
    name: t('item2.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${t('item2.description')} ${item2Professionals} ${item2Teams} ${item2Students} ${item2Journalists} ${item2Creators} ${item2NoteTakers}`,
    },
  });

  // Add FAQ item 3
  faqItems.push({
    '@type': 'Question',
    name: t('item3.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('item3.description'),
    },
  });

  // Add FAQ item 4
  faqItems.push({
    '@type': 'Question',
    name: t('item4.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('item4.description'),
    },
  });

  // Add FAQ item 5
  faqItems.push({
    '@type': 'Question',
    name: t('item5.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('item5.description'),
    },
  });

  // Add FAQ item 6
  faqItems.push({
    '@type': 'Question',
    name: t('item6.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('item6.description'),
    },
  });

  // Add FAQ item 7 (with steps)
  const item7Step1 = t('item7.step1');
  const item7Step2 = t('item7.step2');
  const item7Step3 = t('item7.step3');
  const item7Conclusion = t('item7.conclusion');

  faqItems.push({
    '@type': 'Question',
    name: t('item7.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${t('item7.description')} 1. ${item7Step1} 2. ${item7Step2} 3. ${item7Step3} ${item7Conclusion}`,
    },
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };
});

// Add schema to page head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema.value),
    },
  ],
});
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>

<i18n lang="json">
{
  "de": {
    "title": "Häufig gestellte Fragen zu Diktat AI",
    "description": "Hier finden Sie Antworten auf die wichtigsten Fragen zu Diktat AI, Ihrem intelligenten Assistenten für die Umwandlung von Sprache in Text.",
    "item1": {
      "title": "Was genau macht Diktat AI?",
      "description": "Diktat AI ist Ihr cleverer Helfer, der gesprochene Worte automatisch in geschriebenen Text umwandelt. Laden Sie einfach Ihre Audioaufnahme hoch (z.B. von Meetings, Interviews, Vorlesungen oder Sprachnotizen) und unsere künstliche Intelligenz erledigt den Rest – schnell und zuverlässig. So erhalten Sie im Handumdrehen ein schriftliches Protokoll oder eine Mitschrift, ohne selbst tippen zu müssen."
    },
    "item2": {
      "title": "Für wen ist Diktat AI geeignet?",
      "description": "Diktat AI ist perfekt für alle, die regelmäßig Audioaufnahmen in Text umwandeln müssen und dabei wertvolle Zeit sparen möchten. Dazu gehören:",
      "professionals": "Vielbeschäftigte Berufstätige: Protokollieren Sie Meetings und Telefonate mühelos.",
      "teams": "Effiziente Teams: Teilen Sie wichtige Gesprächsinhalte schnell und einfach schriftlich.",
      "students": "Studierende: Wandeln Sie Vorlesungen und Lernnotizen in durchsuchbare Texte um.",
      "journalists": "Journalisten & Podcaster: Transkribieren Sie Interviews und Audioinhalte blitzschnell.",
      "creators": "Content Creator: Erstellen Sie Untertitel oder Blogartikel aus Ihren Video- und Audioinhalten.",
      "noteTakers": "Jeder, der Notizen macht: Halten Sie spontane Ideen und Gedanken einfach per Sprache fest."
    },
    "item3": {
      "title": "Wie hilft mir Diktat AI, Zeit zu sparen?",
      "description": "Das manuelle Abtippen von Audioaufnahmen ist mühsam und kostet oft Stunden Ihrer kostbaren Zeit. Diktat AI erledigt diese Aufgabe in einem Bruchteil der Zeit. Statt sich mit dem Tippen aufzuhalten, können Sie sich auf wichtigere Aufgaben konzentrieren, Ihre Inhalte schneller aufbereiten oder Ihre Ergebnisse zügiger analysieren. Das bedeutet: Mehr Produktivität für Sie und weniger lästige Routinearbeit."
    },
    "item4": {
      "title": "Sind meine Daten bei Diktat AI sicher?",
      "description": "Absolut. Der Schutz Ihrer Daten hat für uns höchste Priorität. Wir wissen, wie wichtig Vertraulichkeit ist. Deshalb verarbeiten wir alle Informationen streng nach den Vorgaben der europäischen Datenschutz-Grundverordnung (DSGVO). Ihre Audioaufnahmen und die daraus erstellten Texte sind bei uns sicher und geschützt – darauf können Sie sich verlassen."
    },
    "item5": {
      "title": "Wie genau sind die Transkriptionen?",
      "description": "Unsere künstliche Intelligenz ist darauf trainiert, Sprache sehr präzise zu erkennen und in Text umzuwandeln. Die Genauigkeit ist beeindruckend hoch, besonders bei klar verständlichen Aufnahmen mit guter Tonqualität. Sie erhalten eine solide Textgrundlage, die Sie in den meisten Fällen direkt weiterverwenden oder bei Bedarf nur noch minimal überarbeiten müssen."
    },
    "item6": {
      "title": "Welche Art von Audioaufnahmen kann ich hochladen?",
      "description": "Sie können verschiedenste Audioaufnahmen hochladen. Ob Mitschnitte von Besprechungen, geführte Interviews, aufgezeichnete Telefonate (sofern rechtlich zulässig!), Vorlesungen aus dem Hörsaal, Seminarmitschnitte, Podcast-Episoden oder einfach spontan aufgenommene Sprachnotizen mit dem Handy – Diktat AI kann sie verarbeiten. Wir unterstützen die gängigsten Audioformate."
    },
    "item7": {
      "title": "Ist die Bedienung von Diktat AI kompliziert?",
      "description": "Nein, ganz im Gegenteil! Wir haben Diktat AI bewusst einfach und intuitiv gestaltet. Sie benötigen keine technischen Vorkenntnisse oder komplizierten Einarbeitungszeiten. Der Prozess ist denkbar simpel:",
      "step1": "Audioaufnahme hochladen.",
      "step2": "Kurz warten, während unsere KI arbeitet.",
      "step3": "Fertigen Text herunterladen oder kopieren.",
      "conclusion": "Wir möchten, dass Sie sofort loslegen und von den Vorteilen profitieren können!"
    },
    "stillHaveQuestions": "Haben Sie noch Fragen?",
    "reachOutText": "Falls Sie weitere Fragen haben oder Unterstützung benötigen, helfen wir Ihnen gerne bei allen Anliegen rund um Diktat AI.",
    "moreQuestions": "Haben Sie weitere Fragen?"
  },
  "en": {
    "title": "Frequently Asked Questions about Dictate AI",
    "description": "Here you will find answers to the most important questions about Dictate AI, your intelligent assistant for converting speech to text.",
    "item1": {
      "title": "What exactly does Dictate AI do?",
      "description": "Dictate AI is your clever helper that automatically converts spoken words into written text. Simply upload your audio recording (e.g., from meetings, interviews, lectures, or voice notes) and our artificial intelligence does the rest – quickly and reliably. This way, you get a written protocol or transcript in no time, without having to type yourself."
    },
    "item2": {
      "title": "Who is Dictate AI suitable for?",
      "description": "Dictate AI is perfect for anyone who regularly needs to convert audio recordings into text and wants to save valuable time. This includes:",
      "professionals": "Busy professionals: Effortlessly document meetings and phone calls.",
      "teams": "Efficient teams: Quickly and easily share important conversation content in writing.",
      "students": "Students: Convert lectures and study notes into searchable texts.",
      "journalists": "Journalists & Podcasters: Quickly transcribe interviews and audio content.",
      "creators": "Content Creators: Create subtitles or blog articles from your video and audio content.",
      "noteTakers": "Anyone who takes notes: Easily capture spontaneous ideas and thoughts by voice."
    },
    "item3": {
      "title": "How does Dictate AI help me save time?",
      "description": "Manually typing audio recordings is tedious and often takes hours of your precious time. Dictate AI completes this task in a fraction of the time. Instead of getting caught up in typing, you can focus on more important tasks, prepare your content faster, or analyze your results more quickly. This means: More productivity for you and less tedious routine work."
    },
    "item4": {
      "title": "Are my data safe with Dictate AI?",
      "description": "Absolutely. Protecting your data is our top priority. We know how important confidentiality is. That's why we process all information strictly according to the requirements of the European General Data Protection Regulation (GDPR). Your audio recordings and the texts created from them are safe and secure with us – you can count on that."
    },
    "item5": {
      "title": "How accurate are the transcriptions?",
      "description": "Our artificial intelligence is trained to recognize speech very precisely and convert it into text. The accuracy is impressively high, especially with clearly understandable recordings of good sound quality. You get a solid text base that you can usually use directly or only need to minimally revise if necessary."
    },
    "item6": {
      "title": "What kind of audio recordings can I upload?",
      "description": "You can upload a variety of audio recordings. Whether recordings of meetings, conducted interviews, recorded phone calls (if legally permissible!), lectures from the lecture hall, seminar recordings, podcast episodes, or simply spontaneously recorded voice notes with your phone – Dictate AI can process them. We support the most common audio formats."
    },
    "item7": {
      "title": "Is using Dictate AI complicated?",
      "description": "No, quite the opposite! We have deliberately designed Dictate AI to be simple and intuitive. You don't need any technical knowledge or complicated training times. The process is very simple:",
      "step1": "Upload audio recording.",
      "step2": "Wait a short time while our AI works.",
      "step3": "Download or copy the finished text.",
      "conclusion": "We want you to get started right away and benefit from the advantages!"
    },
    "stillHaveQuestions": "Do you still have questions?",
    "reachOutText": "If you have any other questions or need further assistance, we're happy to help you with anything related to Dictate AI.",
    "moreQuestions": "Any Other Questions?"
  },
  "nl": {
    "title": "Veelgestelde vragen over Diktat AI",
    "description": "Hier vindt u antwoorden op de belangrijkste vragen over Diktat AI, uw intelligente assistent voor de omzetting van spraak naar tekst.",
    "item1": {
      "title": "Wat doet Diktat AI precies?",
      "description": "Diktat AI is uw slimme helper die gesproken woorden automatisch omzet in geschreven tekst. Upload eenvoudig uw audio-opname (bijvoorbeeld van meetings, interviews, colleges of spraaknotities) en onze kunstmatige intelligentie doet de rest – snel en betrouwbaar. Zo krijgt u in een handomdraai een schriftelijk protocol of transcript, zonder zelf te hoeven typen."
    },
    "item2": {
      "title": "Voor wie is Diktat AI geschikt?",
      "description": "Diktat AI is perfect voor iedereen die regelmatig audio-opnames in tekst moet omzetten en daarbij waardevolle tijd wil besparen. Dit omvat:",
      "professionals": "Drukbezette professionals: Notuleer meetings en telefoongesprekken moeiteloos.",
      "teams": "Efficiënte teams: Deel belangrijke gespreksinhoud snel en eenvoudig schriftelijk.",
      "students": "Studenten: Zet colleges en studienotities om in doorzoekbare teksten.",
      "journalists": "Journalisten & Podcasters: Transcribeer interviews en audio-inhoud bliksemsnel.",
      "creators": "Content Creators: Maak ondertitels of blogartikelen uit uw video- en audio-inhoud.",
      "noteTakers": "Iedereen die notities maakt: Leg spontane ideeën en gedachten eenvoudig via spraak vast."
    },
    "item3": {
      "title": "Hoe helpt Diktat AI mij tijd te besparen?",
      "description": "Het handmatig uittypen van audio-opnames is vervelend en kost vaak uren van uw kostbare tijd. Diktat AI doet deze taak in een fractie van de tijd. In plaats van u bezig te houden met typen, kunt u zich concentreren op belangrijkere taken, uw inhoud sneller voorbereiden of uw resultaten vlugger analyseren. Dat betekent: meer productiviteit voor u en minder vervelend routinewerk."
    },
    "item4": {
      "title": "Zijn mijn gegevens veilig bij Diktat AI?",
      "description": "Absoluut. De bescherming van uw gegevens heeft voor ons de hoogste prioriteit. We weten hoe belangrijk vertrouwelijkheid is. Daarom verwerken we alle informatie strikt volgens de richtlijnen van de Europese Algemene Verordening Gegevensbescherming (GDPR). Uw audio-opnames en de daaruit gemaakte teksten zijn bij ons veilig en beschermd – daar kunt u op vertrouwen."
    },
    "item5": {
      "title": "Hoe nauwkeurig zijn de transcripties?",
      "description": "Onze kunstmatige intelligentie is getraind om spraak zeer nauwkeurig te herkennen en om te zetten in tekst. De nauwkeurigheid is indrukwekkend hoog, vooral bij duidelijk verstaanbare opnames met goede geluidskwaliteit. U krijgt een solide tekstbasis die u in de meeste gevallen direct kunt hergebruiken of indien nodig slechts minimaal hoeft aan te passen."
    },
    "item6": {
      "title": "Welk type audio-opnames kan ik uploaden?",
      "description": "U kunt verschillende soorten audio-opnames uploaden. Of het nu gaat om opnames van vergaderingen, gevoerde interviews, opgenomen telefoongesprekken (voor zover wettelijk toegestaan!), colleges uit de collegezaal, seminaropnames, podcast-afleveringen of gewoon spontaan opgenomen spraaknotities met de telefoon – Diktat AI kan ze verwerken. We ondersteunen de meest gangbare audioformaten."
    },
    "item7": {
      "title": "Is de bediening van Diktat AI ingewikkeld?",
      "description": "Nee, integendeel! We hebben Diktat AI bewust eenvoudig en intuïtief ontworpen. U heeft geen technische voorkennis of ingewikkelde inwerkperiodes nodig. Het proces is uiterst simpel:",
      "step1": "Audio-opname uploaden.",
      "step2": "Kort wachten terwijl onze AI werkt.",
      "step3": "Voltooide tekst downloaden of kopiëren.",
      "conclusion": "We willen dat u direct kunt beginnen en van de voordelen kunt profiteren!"
    },
    "stillHaveQuestions": "Heeft u nog vragen?",
    "reachOutText": "Als u nog vragen heeft of ondersteuning nodig heeft, helpen we u graag bij alle zaken rondom Diktat AI.",
    "moreQuestions": "Heeft u nog meer vragen?"
  }
}
</i18n>
