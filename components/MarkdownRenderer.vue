<template>
  <div v-html="parsedContent" class="markdown-content"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
  content: string;
}>();

const parsedContent = computed(() => {
  if (!props.content) {
    return '';
  }
  // Ensure newlines are respected before parsing markdown
  const processedContent = props.content.replace(/\n/g, '\n\n').trim();
  return marked(processedContent);
});
</script>

<style scoped>
.markdown-content :deep(p) {
  margin-bottom: 1rem;
}
.markdown-content :deep(pre) {
  white-space: pre-wrap;
}
</style> 