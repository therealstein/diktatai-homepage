<template>
  <div
    class="fliesstext"
    :class="[
      `text-${size}`,
      { 'max-w-prose': maxWidth === 'prose' },
      { 'max-w-2xl': maxWidth === 'medium' },
      { 'max-w-4xl': maxWidth === 'large' },
      { 'mx-auto': centered }
    ]"
  >
    <!-- Title -->
    <h2
      v-if="title"
      class="font-display font-bold mb-4"
      :class="[
        { 'text-3xl': size === 'base' },
        { 'text-4xl': size === 'lg' },
        { 'text-5xl': size === 'xl' }
      ]"
    >
      {{ title }}
    </h2>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="text-lg mb-6 text-base-content/80"
    >
      {{ subtitle }}
    </p>

    <!-- Content -->
    <div
      class="space-y-4"
      :class="{ 'columns-1 md:columns-2 gap-8': columns === 2 }"
    >
      <slot></slot>
    </div>

    <!-- Additional Info -->
    <div
      v-if="additionalInfo"
      class="mt-8 text-sm text-base-content/60"
    >
      {{ additionalInfo }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  additionalInfo?: string;
  size?: 'base' | 'lg' | 'xl';
  maxWidth?: 'prose' | 'medium' | 'large';
  columns?: 1 | 2;
  centered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  maxWidth: 'prose',
  columns: 1,
  centered: true
});
</script>

<style scoped>
.fliesstext {
  @apply leading-relaxed;
}

.fliesstext :deep(p) {
  @apply mb-4;
}

.fliesstext :deep(h3) {
  @apply font-display font-bold text-xl mt-8 mb-4;
}

.fliesstext :deep(h4) {
  @apply font-display font-bold text-lg mt-6 mb-3;
}

.fliesstext :deep(ul),
.fliesstext :deep(ol) {
  @apply list-inside mb-4 space-y-2;
}

.fliesstext :deep(ul) {
  @apply list-disc;
}

.fliesstext :deep(ol) {
  @apply list-decimal;
}

.fliesstext :deep(blockquote) {
  @apply border-l-4 border-base-300 pl-4 italic my-6;
}

.fliesstext :deep(a) {
  @apply text-primary hover:text-primary-focus underline;
}

.fliesstext :deep(code) {
  @apply bg-base-200 px-1.5 py-0.5 rounded text-sm font-mono;
}

.fliesstext :deep(pre) {
  @apply bg-base-200 p-4 rounded-lg my-4 overflow-x-auto;
}

.fliesstext :deep(pre code) {
  @apply bg-transparent p-0;
}
</style> 