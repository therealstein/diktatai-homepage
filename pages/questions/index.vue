<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t("title") }}</h1>
          <p class="text-xl text-gray-600 mb-8">{{ t("heroSubtitle") }}</p>
          <div class="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto py-12 px-4">
      <div v-if="pending" class="py-12 text-center">
        <div class="inline-block">
          <div
            class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
          ></div>
          <p class="text-gray-500">{{ t("loading") }}</p>
        </div>
      </div>

      <div v-else-if="questions.length === 0" class="py-12 text-center">
        <div
          class="max-w-md mx-auto p-8 bg-gray-50 rounded-lg border border-gray-200"
        >
          <p class="text-gray-500">{{ t("noQuestions") }}</p>
        </div>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="question in questions"
          :key="question.path"
          :to="getQuestionPath(question)"
          class="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary transition-all duration-200"
        >
          <h2 class="text-xl font-semibold mb-3">{{ question.title }}</h2>
          <div class="flex justify-between items-center mt-4">
            <span class="inline-block text-primary font-medium">{{
              t("readMore")
            }}</span>
            <span class="text-primary">→</span>
          </div>
        </NuxtLink>
      </div>

      <div v-if="error" class="mt-8 p-4 bg-red-50 text-red-600 rounded-lg">
        {{ t("errorMessage") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from "@nuxt/content";

// Restrict this page to only de and en locales
defineI18nRoute({
  locales: ["de", "en"],
});

const { t, locale } = useI18n({ useScope: "local" });

// Questions only exist for 'de' and 'en' locales
// Return 404 for all other locales
const supportedLocales = ["de", "en"];
const currentLocale = locale.value || "de";

if (!supportedLocales.includes(currentLocale)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

// Helper function to get the correct localized question path
const getQuestionPath = (question: any) => {
  const slug = question.path?.split("/").pop() || "";
  if (currentLocale === "de") {
    return `/fragen/${slug}`;
  } else {
    return `/en/questions/${slug}`;
  }
};

// Query the locale-specific collection
const collectionName = `questions_${currentLocale}` as keyof Collections;
const { data: questionsData, pending, error } = await useAsyncData(
  `questions-${currentLocale}`,
  async () => {
    try {
      return await queryCollection(collectionName).all();
    } catch {
      return [];
    }
  },
);

const questions = computed(() => questionsData.value || []);

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();
useHead({
  title: t("title"),
  meta: [{ name: "description", content: t("metaDescription") }],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
});
</script>

<i18n lang="json">
{
  "en": {
    "title": "Questions",
    "heroSubtitle": "Explore our frequently asked questions and find the answers you need",
    "loading": "Loading questions...",
    "noQuestions": "No questions found.",
    "readMore": "Read more",
    "errorMessage": "An error occurred while loading questions. Please try again later.",
    "metaDescription": "Explore our collection of questions and answers."
  },
  "de": {
    "title": "Fragen",
    "heroSubtitle": "Entdecken Sie unsere häufig gestellten Fragen und finden Sie die Antworten, die Ihnen helfen",
    "loading": "Fragen werden geladen...",
    "noQuestions": "Keine Fragen gefunden.",
    "readMore": "Weiterlesen",
    "errorMessage": "Beim Laden der Fragen ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    "metaDescription": "Entdecken Sie unsere Sammlung von Fragen und Antworten."
  }
}
</i18n>
