<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div v-if="post" class="hero min-h-[40vh] relative">
      <!-- Full width gradient overlay -->
      <div class="absolute inset-0" :style="post?.image ? 'background: linear-gradient(135deg, rgba(239, 86, 164, 0.4) 0%, rgba(74, 144, 226, 0.4) 100%)' : 'background: linear-gradient(135deg, #EF56A4 0%, #4A90E2 100%)'"></div>
      <!-- Container-constrained background image -->
      <div v-if="post?.image" class="absolute inset-0 container mx-auto">
        <div class="h-full" :style="`background: url('${post.image}'); background-size: cover; background-position: center;`"></div>
      </div>
      <div class="hero-content text-center relative z-10">
        <div class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl">
          <h1 class="font-display text-4xl font-bold text-white mb-4" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ post?.title }}
          </h1>
          <div class="text-xl text-white" style="text-shadow: 0 0 5px rgba(0,0,0,0.7);">
            {{ formatDate(post?.date) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <article v-if="post" class="card bg-base-200 rounded-2xl border border-base-300 p-8 mb-8">
        <div class="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-strong:text-primary-600 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic">
          <ContentRenderer :value="post" />
        </div>

        <!-- Back to Blog Link -->
        <div class="mt-12 text-center">
          <NuxtLinkLocale to="/blog" class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            ← Zurück zum Blog
          </NuxtLinkLocale>
        </div>
      </article>
      
      <div v-else class="text-center mb-8">
        <div class="card bg-base-200 rounded-2xl border border-base-300 p-8">
          <div class="flex flex-col items-center gap-6">
            <div class="text-6xl">🔍</div>
            <h2 class="text-2xl font-display font-bold">Post nicht gefunden</h2>
            <p class="text-lg text-base-content/80">Der gesuchte Blogbeitrag konnte leider nicht gefunden werden.</p>
            <NuxtLinkLocale to="/blog" class="btn btn-primary">
              ← Zurück zum Blog
            </NuxtLinkLocale>
          </div>
        </div>
      </div>

      <!-- Recent Posts Section -->
      <div class="mt-8">
        <BlogRecentPosts />
      </div>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`post-${path}`, () => 
  queryCollection('blog')
    .path(path)
    .first()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 