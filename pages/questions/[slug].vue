<template>
  <div class="container mx-auto py-8 px-4">
    <div v-if="pending" class="py-10 text-center">
      <p class="text-gray-500">Loading question...</p>
    </div>
    <div v-else-if="question" class="question-detail">
      <h1 class="text-3xl font-bold mb-6">{{ question.title }}</h1>

      <!-- Render content -->
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="question" />
      </div>
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
const route = useRoute();
const slug = route.params.slug as string;
const { locale } = useI18n();

// Questions only exist for 'de' and 'en' locales
// Return 404 for all other locales
const supportedLocales = ["de", "en"];
if (!supportedLocales.includes(locale.value)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

// Fetch all questions and find the matching one
const { data: allQuestions, pending } = await useAsyncData(`question-${locale.value}-${slug}`, () =>
  queryCollection('questions').all()
);

// Find the question that matches both locale and slug
const question = computed(() => {
  if (!allQuestions.value) return null;

  // The path will be like /de/slug or /en/slug, so we need to match both locale and slug
  return allQuestions.value.find(q => {
    const pathParts = q.path.split('/').filter(Boolean);
    const questionSlug = pathParts[pathParts.length - 1]; // Get the last part of the path
    return q.locale === locale.value && questionSlug === slug;
  });
});

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();
useHead(() => ({
  title: question.value?.title || 'Question Not Found',
  meta: [
    {
      name: 'description',
      content: question.value?.description || `Question: ${question.value?.title || ''}`,
    },
    // Add noindex when not found
    ...(question.value
      ? []
      : [
          { name: 'robots', content: 'noindex, nofollow' },
          { name: 'googlebot', content: 'noindex, nofollow' },
        ]),
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>
<style>
.question-detail {
  /* Add proper styling for question content */
  max-width: 800px;
  margin: 0 auto;
}
</style>
