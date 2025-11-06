<!-- TranscriptProcessed.vue -->
<template>
  <div
    class="a4-paper bg-white shadow-lg mx-auto overflow-auto mb-6 ph-no-capture"
  >
    <div class="p-8">
      <div
        v-if="llmProcessed?.corrected_transcription"
        class="prose max-w-none"
      >
        <h3 v-if="llmProcessed?.title" class="text-lg font-medium mb-3">
          {{
            llmProcessed.title.length > 100
              ? llmProcessed.title.slice(0, 100) + '...'
              : llmProcessed.title
          }}
        </h3>
        <MarkdownRenderer 
          v-if="isMarkdown" 
          :content="llmProcessed.corrected_transcription" 
        />
        <div v-else>
          <p
            v-for="(paragraph, idx) in llmProcessed.corrected_transcription.split('\n')"
            :key="idx"
            class="mb-4"
            :class="{ 'font-bold': paragraph && !paragraph.includes(' ') }"
          >
            {{ paragraph }}
          </p>
        </div>
        <div v-if="llmProcessed?.context" class="mt-4 text-sm text-gray-500">
          {{ $t('transcription.context') }}: {{ llmProcessed.context }}
        </div>
      </div>
      <div v-else-if="transcription" class="prose max-w-none">
        <p
          v-for="(paragraph, idx) in transcription.split('\n\n')"
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MarkdownRenderer from './MarkdownRenderer.vue';

interface LLMProcessed {
  corrected_transcription?: string;
  title?: string;
  context?: string;
}

const props = defineProps<{
  transcription: string | null;
  llmProcessed: LLMProcessed | null;
}>();

const containsMarkdown = (text: string): boolean => {
  // Common markdown patterns to detect
  const markdownPatterns = [
    /^#+ /m,                     // Headers
    /\*\*.*\*\*/,                // Bold
    /\*.*\*/,                    // Italic
    /^\s*[-*+] /m,               // Unordered lists
    /^\s*\d+\. /m,               // Ordered lists
    /\[.*\]\(.*\)/,              // Links
    /`.*`/,                      // Inline code
    /```[\s\S]*```/,             // Code blocks
    /^\s*>/m,                    // Blockquotes
    /\|\s*[-:]+\s*\|/            // Tables
  ];
  
  return markdownPatterns.some(pattern => pattern.test(text));
};

const isMarkdown = computed(() => {
  if (!props.llmProcessed?.corrected_transcription) {
    return false;
  }
  
  return containsMarkdown(props.llmProcessed.corrected_transcription);
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
