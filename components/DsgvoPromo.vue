<template>
  <div
    class="glass-card bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
  >
    <div class="text-center">
      <div
        class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-3">
        {{ $t('dsgvo.title') }}
      </h3>
      <p class="text-gray-600 mb-4 leading-relaxed text-sm">
        {{ $t('dsgvo.description') }}
      </p>
      <NuxtLinkLocale to="privacy">
        <button
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
        >
          {{ $t('dsgvo.moreAboutPrivacy') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
</style>
