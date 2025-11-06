<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white/40 py-12"
  >
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Main Content Card -->
      <div
        class="bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <section v-if="data && data.title" class="space-y-6">
          <!-- Title with gradient -->
          <div class="text-center pb-6 border-b border-indigo-200/30">
            <h1 class="text-4xl font-bold bg-gradient-to-r text-black mb-2">
              {{ data.title }}
            </h1>
            <div
              class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"
            ></div>
          </div>

          <!-- Content -->
          <div class="prose-custom">
            <div v-nuxt-html="renderedContent"></div>
          </div>
        </section>

        <!-- Loading State -->
        <div v-else-if="pending" class="flex items-center justify-center py-16">
          <div class="flex flex-col items-center space-y-4">
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"
            ></div>
            <p class="text-gray-600 font-medium">Loading content...</p>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex items-center justify-center py-16">
          <div
            class="bg-red-100 border border-red-300 rounded-xl p-6 text-center"
          >
            <div
              class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-red-800 mb-2">
              Error loading content
            </h3>
            <p class="text-red-600">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const { getItemBySlug } = useWp();

// SEO Meta Tags
useHead({
  title:
    locale.value === 'de' ? 'Impressum - Diktat AI' : 'Imprint - Diktat AI',
  meta: [
    {
      name: 'description',
      content:
        locale.value === 'de'
          ? 'Rechtliche Informationen und Impressum für den Diktat AI Transkriptionsdienst.'
          : 'Legal information and imprint for Diktat AI transcription service.',
    },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
});

const pageSlug = computed(() =>
  locale.value === 'de' ? 'impressum' : 'imprint'
);

// Use our SSR-compatible composable
const { data, pending, error } = getItemBySlug(
  'pages',
  pageSlug.value,
  locale.value
);

// Compute the rendered content from blocks
const renderedContent = computed(() => {
  if (!data.value || !data.value.editorBlocks) return '';
  return data.value.editorBlocks.map((block) => block.renderedHtml).join('');
});
</script>

<style scoped>
.prose-custom {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(h1) {
  @apply text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0;
}

.prose-custom :deep(h2) {
  @apply text-2xl font-semibold text-gray-800 mb-4 mt-8 first:mt-0;
  @apply border-b border-indigo-200/30 pb-2;
}

.prose-custom :deep(h3) {
  @apply text-xl font-semibold text-gray-800 mb-3 mt-6 first:mt-0;
}

.prose-custom :deep(h4) {
  @apply text-lg font-medium text-gray-800 mb-2 mt-4 first:mt-0;
}

.prose-custom :deep(p) {
  @apply text-gray-700 mb-4 leading-relaxed;
}

.prose-custom :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(ol) {
  @apply list-decimal list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(li) {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(strong) {
  @apply font-semibold text-gray-800;
}

.prose-custom :deep(em) {
  @apply italic text-gray-700;
}

.prose-custom :deep(a) {
  @apply text-indigo-600 hover:text-purple-600 underline transition-colors duration-200;
}

.prose-custom :deep(blockquote) {
  @apply border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-4;
}

.prose-custom :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.prose-custom :deep(pre) {
  @apply bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm;
}

.prose-custom :deep(table) {
  @apply w-full border-collapse border border-gray-300 my-4;
}

.prose-custom :deep(th) {
  @apply bg-indigo-50 border border-gray-300 px-4 py-2 font-semibold text-gray-800;
}

.prose-custom :deep(td) {
  @apply border border-gray-300 px-4 py-2 text-gray-700;
}

.prose-custom :deep(hr) {
  @apply border-t border-indigo-200/50 my-8;
}
</style>
