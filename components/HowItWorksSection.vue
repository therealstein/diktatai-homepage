<template>
  <!-- How It Works Section -->
  <div class="silver-bg py-16 my-8">
    <div class="container mx-auto px-4 text-center">
      <h2 class="font-display text-4xl font-bold mb-4 tracking-tight">{{ t('title') }}</h2>
      <p class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto mb-12 leading-relaxed">
        {{ t('description') }}
      </p>
      <ul class="steps steps-vertical lg:steps-horizontal w-full">
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ t('upload') }}</div>
            <div class="text-sm text-base-content/70">{{ t('uploadDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ t('transcription') }}</div>
            <div class="text-sm text-base-content/70">{{ t('transcriptionDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ t('secureProcessing') }}</div>
            <div class="text-sm text-base-content/70">{{ t('secureProcessingDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ t('readyToUse') }}</div>
            <div class="text-sm text-base-content/70">{{ t('readyToUseDescription') }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.silver-bg {
  background: linear-gradient(to right, #f5f5f5, #e0e0e0, #c0c0c0, #a9a9a9);
}
</style>

<i18n lang="json">
{
  "de": {
    "title": "So funktioniert Diktat AI",
    "description": "Unser Prozess ist einfach, schnell und sicher. So funktioniert es:",
    "upload": "1. Aufnahme hochladen",
    "uploadDescription": "Ziehen Sie Ihre Audiodatei einfach per Drag & Drop oder wählen Sie sie von Ihrem Gerät aus. Wir unterstützen alle gängigen Audioformate.",
    "transcription": "2. KI-Transkription",
    "transcriptionDescription": "Unsere fortschrittliche KI verarbeitet Ihre Aufnahme mit hoher Genauigkeit und wandelt Sprache in wenigen Minuten in Text um.",
    "secureProcessing": "3. Sichere Verarbeitung",
    "secureProcessingDescription": "Ihre Daten werden sicher auf EU-Servern verarbeitet, vollständig DSGVO-konform.",
    "readyToUse": "4. Sofort einsatzbereit",
    "readyToUseDescription": "Laden Sie Ihre Transkription herunter oder kopieren Sie sie direkt in die Zwischenablage. Ihr Text ist sofort einsatzbereit."
  },
  "en": {
    "title": "How Dictate AI Works",
    "description": "Our process is simple, fast, and secure. Here's how it works:",
    "upload": "1. Upload Your Recording",
    "uploadDescription": "Simply drag and drop your audio file or select it from your device. We support all common audio formats.",
    "transcription": "2. AI Transcription",
    "transcriptionDescription": "Our advanced AI processes your recording with high accuracy, converting speech to text in minutes.",
    "secureProcessing": "3. Secure Processing",
    "secureProcessingDescription": "Your data is processed securely on EU servers, fully compliant with GDPR regulations.",
    "readyToUse": "4. Ready to Use",
    "readyToUseDescription": "Download your transcription or copy it directly to your clipboard. Your text is ready for immediate use."
  },
  "nl": {
    "title": "Eenvoudig. Snel. Efficiënt.",
    "description": "Bespaar waardevolle tijd met ons ongecompliceerde dicteerproces. In slechts enkele stappen zetten we uw spraakopnames om in perfect geformatteerde teksten.",
    "upload": "Opname uploaden",
    "uploadDescription": "Met één klik starten",
    "transcription": "AI-Transcriptie",
    "transcriptionDescription": "Nauwkeurige spraakherkenning",
    "secureProcessing": "Veilige verwerking",
    "secureProcessingDescription": "GDPR-conform & versleuteld",
    "readyToUse": "Direct inzetbaar",
    "readyToUseDescription": "Geformatteerde tekst om te downloaden"
  },
  "es": {
    "title": "Así funciona Diktat AI",
    "description": "Nuestro proceso es simple, rápido y seguro. Así es como funciona:",
    "upload": "1. Subir grabación",
    "uploadDescription": "Simplemente arrastre y suelte su archivo de audio o selecciónelo desde su dispositivo. Admitimos todos los formatos de audio comunes.",
    "transcription": "2. Transcripción IA",
    "transcriptionDescription": "Nuestra IA avanzada procesa su grabación con alta precisión, convirtiendo el habla en texto en minutos.",
    "secureProcessing": "3. Procesamiento seguro",
    "secureProcessingDescription": "Sus datos se procesan de forma segura en servidores de la UE, totalmente conforme con el RGPD.",
    "readyToUse": "4. Listo para usar",
    "readyToUseDescription": "Descargue su transcripción o cópiela directamente al portapapeles. Su texto está listo para uso inmediato."
  }
}
</i18n>
