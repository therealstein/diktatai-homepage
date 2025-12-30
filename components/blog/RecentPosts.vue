<template>
  <div class="card bg-base-200 rounded-2xl border border-base-300 p-8">
    <h2 class="text-2xl font-display font-bold mb-6">{{ t('title') }}</h2>
    <div class="space-y-6">
      <NuxtLink
        v-for="post in recentPosts"
        :key="post.path"
        :to="post.path"
        class="block group"
      >
        <div class="flex gap-4 items-start">
          <div v-if="post.image" class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 class="text-lg font-medium group-hover:text-primary-600 transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-sm text-base-content/70 mt-1">
              {{ formatDate(post.date) }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const path = route.path || ''
const { data: recentPosts } = await useAsyncData('recent-posts', async () => {
  try {
    return await queryCollection('blog')
      .where({ _path: { $ne: path } })
      .sort({ date: -1 })
      .limit(3)
      .find()
  } catch {
    return []
  }
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<i18n lang="json">
{
  "de": {
    "title": "Neueste Beiträge"
  },
  "en": {
    "title": "Recent Posts"
  },
  "nl": {
    "title": "Recente berichten"
  },
  "es": {
    "title": "Publicaciones recientes"
  },
  "fr": {
    "title": "Articles récents"
  },
  "sv": {
    "title": "Senaste inläggen"
  }
}
</i18n> 