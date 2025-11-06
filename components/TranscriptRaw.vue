<!-- TranscriptRaw.vue -->
<template>
  <div
    class="a4-paper bg-white shadow-lg mx-auto overflow-auto mb-6 ph-no-capture"
  >
    <div class="p-8">
      <div v-if="transcriptionJobs && transcriptionJobs.length > 0">
        <div v-for="job in transcriptionJobs" :key="job.id" class="mb-8 ph-no-capture">
          <div class="text-lg font-medium mb-4">
            {{ job.originalAudioFilename }}
          </div>

          <div v-if="job.transcription" class="prose max-w-none ph-no-capture">
            <p
              v-for="(paragraph, idx) in job.transcription.split('\n\n')"
              :key="idx"
              class="mb-4"
            >
              {{ paragraph }}
            </p>
          </div>
          <div v-else class="text-gray-500 italic">
            {{ $t('transcription.noTranscriptionAvailable') }}
          </div>
        </div>
      </div>
      <div v-else class="text-gray-500 italic">
        {{ $t('transcription.noTranscriptionsAvailable') }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transcriptionJobs: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
/* A4 paper dimensions: 210mm × 297mm */
.a4-paper {
  width: 210mm;
  min-height: 297mm;
  background-color: white;
  position: relative;
  margin: 0 auto;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .a4-paper {
    width: 100%;
  }
}
</style>
