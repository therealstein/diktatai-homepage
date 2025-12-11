<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div v-if="page" class="hero min-h-[40vh] relative">
      <!-- Full width gradient overlay -->
      <div
        class="absolute inset-0"
        :style="
          page?.image
            ? 'background: linear-gradient(135deg, rgba(239, 86, 164, 0.4) 0%, rgba(74, 144, 226, 0.4) 100%)'
            : 'background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%)'
        "
      ></div>
      <!-- Container-constrained background image -->
      <div v-if="page?.image" class="absolute inset-0 container mx-auto">
        <div
          class="h-full"
          :style="`background: url('${page.image}'); background-size: cover; background-position: center;`"
        ></div>
      </div>
      <div class="hero-content text-center relative z-10">
        <div
          class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl"
        >
          <h1
            class="font-display text-4xl font-bold text-white mb-4"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ page?.title }}
          </h1>
          <div
            v-if="page?.subtitle"
            class="text-xl text-white"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ page.subtitle }}
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <article
        v-if="page"
        class="card bg-base-200 rounded-2xl border border-base-300 p-8 mb-8"
      >
        <div
          class="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-strong:text-primary-600 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic"
        >
          <ContentRenderer :value="page" />
        </div>
      </article>

      <div v-else class="text-center mb-8">
        <div class="card bg-base-200 rounded-2xl border border-base-300 p-8">
          <div class="flex flex-col items-center gap-6">
            <div class="text-6xl">🔍</div>
            <h2 class="text-2xl font-display font-bold">
              {{ t("page.notFound") }}
            </h2>
            <p class="text-lg text-base-content/80">
              {{ t("page.notFoundDescription") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "local",
});
const { locale } = useI18n();

const { path } = useRoute();
const { data: page } = await useAsyncData(`page-${path}`, async () => {
  const result = await queryCollection("page")
    .where("id", "LIKE", `%${locale.value}.md`)
    .path(path)
    .first();
  return result;
});
</script>

<i18n lang="json">
{
  "en": {
    "page": {
      "backToPages": "← Back to Pages",
      "notFound": "Page Not Found",
      "notFoundDescription": "The requested page could not be found."
    }
  },
  "de": {
    "page": {
      "backToPages": "← Zurück zu den Seiten",
      "notFound": "Seite nicht gefunden",
      "notFoundDescription": "Die gesuchte Seite konnte leider nicht gefunden werden."
    }
  },
  "nl": {
    "page": {
      "backToPages": "← Terug naar de pagina's",
      "notFound": "Pagina niet gevonden",
      "notFoundDescription": "De gezochte pagina kon helaas niet worden gevonden."
    }
  },
  "es": {
    "page": {
      "backToPages": "← Volver a las páginas",
      "notFound": "Página no encontrada",
      "notFoundDescription": "La página solicitada no pudo ser encontrada."
    }
  },
  "fr": {
    "page": {
      "backToPages": "← Retour aux pages",
      "notFound": "Page non trouvée",
      "notFoundDescription": "La page demandée n'a pas pu être trouvée."
    }
  },
  "sv": {
    "page": {
      "backToPages": "← Tillbaka till sidorna",
      "notFound": "Sidan hittades inte",
      "notFoundDescription": "Den begärda sidan kunde inte hittas."
    }
  }
}
</i18n>
