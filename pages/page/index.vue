<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div class="hero min-h-[30vh] relative" style="background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%); background-size: cover; background-position: center;">
      <div class="hero-content text-center">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl">
          <h1 class="font-display text-4xl font-bold text-white mb-4" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('page.title') }}
          </h1>
          <p class="text-xl text-white" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ t('page.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pages Grid -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div v-if="pages && pages.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="page in pages" :key="page.path" class="card bg-base-200 rounded-2xl border border-base-300 overflow-hidden">
          <img v-if="page.image" :src="page.image" :alt="page.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <NuxtLink :to="page.path" class="font-display text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 block">
              {{ page.title }}
            </NuxtLink>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ page.description }}</p>
            <div class="flex items-center justify-between">
              <div v-if="page.category" class="text-sm text-gray-500 dark:text-gray-400">
                {{ t(`page.categories.${page.category}`) }}
              </div>
              <NuxtLink :to="page.path" class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                {{ t('page.readMore') }}
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
      <div v-else class="text-center">
        <p class="text-lg mb-4">{{ t('page.noPagesFound') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const { locale } = useI18n()

const { data: pages } = await useAsyncData('pages', async () => {
  const result = await queryCollection('page')
    .where('id', 'LIKE', `%${locale.value}.md`)
    .all()
  return result
})


const { getCollection } = useDirectusCollections();
const router = useRouter();
const fetchCollection = async () => {
  const collectionParams = { collection: "Fragen" };
  const collection = await getCollection(collectionParams);
};

await fetchCollection();


</script>

<i18n lang="json">
{
  "en": {
    "page": {
      "title": "Pages",
      "subtitle": "Discover our information pages",
      "readMore": "Read more...",
      "noPagesFound": "No pages found",
      "categories": {
        "company": "Company",
        "product": "Product",
        "support": "Support"
      }
    }
  },
  "de": {
    "page": {
      "title": "Seiten",
      "subtitle": "Entdecken Sie unsere Informationsseiten",
      "readMore": "Weiterlesen...",
      "noPagesFound": "Keine Seiten gefunden",
      "categories": {
        "company": "Unternehmen",
        "product": "Produkt",
        "support": "Support"
      }
    }
  }
}
</i18n> 