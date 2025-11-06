<template>
  <div class="container mx-auto py-8 px-4">
    <div v-if="pending" class="py-10 text-center">
      <p class="text-gray-500">Loading question...</p>
    </div>
    <div v-else-if="data" class="question-detail">
      <h1 class="text-3xl font-bold mb-6">{{ data.title }}</h1>

      <!-- Render all blocks -->
      <BlockRenderer :blocks="data.editorBlocks" :loading="pending" />
    </div>
    <div v-else class="text-center py-12">
      <h1 class="text-3xl font-bold text-gray-700">Question Not Found</h1>
      <p class="mt-4 text-gray-500">
        The question you're looking for doesn't exist or has been removed.
      </p>
      <NuxtLinkLocale
        to="/questions"
        class="mt-6 inline-block bg-primary text-white px-4 py-2 rounded"
      >
        Browse All Questions
      </NuxtLinkLocale>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlockRenderer from '~/blocks/BlockRenderer.vue';

const route = useRoute();
const slug = route.params.slug as string;

// You can still use your composable
const { getItemBySlug } = useWp();

// Call it inside asyncData() for SSR
const { data, pending, error } = await getItemBySlug('questions', slug);

useHead(() => ({
  title: data.value?.title || 'Question Not Found',
  meta: [
    {
      name: 'description',
      content: `Question: ${data.value?.title || ''}`,
    },
    // Add noindex when not found
    ...(data.value
      ? []
      : [
          { name: 'robots', content: 'noindex, nofollow' },
          { name: 'googlebot', content: 'noindex, nofollow' },
        ]),
  ],
}));
</script>
<style>
.question-detail {
  /* Add proper styling for question content */
  max-width: 800px;
  margin: 0 auto;
}
</style>
