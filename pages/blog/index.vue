<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div class="hero min-h-[30vh] relative" style="background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%); background-size: cover; background-position: center;">
      <div class="hero-content text-center">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl">
          <h1 class="font-display text-4xl font-bold text-white mb-4" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            Blog
          </h1>
          <p class="text-xl text-white" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            Entdecken Sie unsere neuesten Artikel und Insights
          </p>
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="post in posts" :key="post.path" class="card bg-base-200 rounded-2xl border border-base-300 overflow-hidden">
          <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <NuxtLink :to="post.path" class="font-display text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 block">
              {{ post.title }}
            </NuxtLink>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.description }}</p>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(post.date) }}
              </div>
              <NuxtLink :to="post.path" class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                Weiterlesen...
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
      <div v-else class="text-center">
        <p class="text-lg mb-4">No posts found</p>
        <pre class="mt-4 p-4 bg-base-200 rounded-2xl border border-base-300">{{ posts }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryCollection('blog').all()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 