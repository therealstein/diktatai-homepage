<template>
  <div class="bg-base-100 text-base-content">
    <!-- Modern Hero Section with Background Image and Glass Effect -->
    <div
      class="hero min-h-[85vh] relative bg-cover bg-center flex items-center justify-center"
      style="background-image: url(&quot;/herobg.webp&quot;)"
    >
      <!-- Background overlay for better contrast -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/25 to-indigo-900/20"
      ></div>

      <!-- Floating decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
        ></div>
        <div
          class="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div
        class="hero-content text-center w-full px-4 py-8 md:py-16 flex justify-center items-center relative z-10"
      >
        <!-- Main content card with glass effect -->
        <div
          class="bg-white/90 backdrop-blur-lg border border-pink-200/60 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 w-full max-w-5xl"
        >
          <!-- Badge for legal professionals -->
          <div class="mb-6">
            <span
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-300/50 rounded-full text-sm font-semibold text-pink-700"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ t("badge.euServer") }}
            </span>
          </div>

          <!-- Title with gradient text -->
          <div class="relative mb-6">
            <h1
              class="animated-gradient text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight"
            >
              {{ t("hero.title") }}
            </h1>
            <!-- Glow effect behind title -->
            <div
              class="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-2xl rounded-2xl -z-10"
            ></div>
          </div>

          <!-- Value proposition -->
          <div class="mb-8">
            <p
              class="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed max-w-4xl mx-auto"
            >
              {{ t("hero.subtitle") }}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex justify-center mb-8">
            <a :href="registerUrl">
              <button
                class="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide overflow-hidden"
              >
                <!-- Button glow effect -->
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"
                ></div>
                <span class="relative flex items-center justify-center gap-2">
                  {{ t("cta.start") }}
                  <svg
                    class="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>

          <!-- Trust signals / Social proof -->
          <div class="mt-8 pt-6 border-t border-gray-200/50">
            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600"
            >
              <div class="flex items-center gap-2">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium">Keine Kreditkarte nötig</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium"
                  >In 2 Minuten startbereit</span
                >
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium">{{ t("badge.euServer") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-6xl">
      <!-- For Lawyers Section - Enhanced with Cards -->
      <div class="mb-20">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t("sections.indispensable.title") }}
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Speziell entwickelt für die Anforderungen moderner Kanzleien
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Lawyers Card -->
          <div
            class="card bg-gradient-to-br from-pink-50 to-purple-50 shadow-xl p-4 md:p-8 rounded-3xl border border-pink-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="h-5 w-5 md:h-7 md:w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                class="font-display text-lg md:text-2xl font-bold text-gray-800 break-words"
              >
                {{ t("sections.indispensable.lawyers.title") }}
              </h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.lawyers.points.0")
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.lawyers.points.1")
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.lawyers.points.2")
                }}</span>
              </li>
            </ul>
          </div>

          <!-- ReFas Card -->
          <div
            class="card bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl p-4 md:p-8 rounded-3xl border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="h-5 w-5 md:h-7 md:w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3
                class="font-display text-lg md:text-2xl font-bold text-gray-800 break-words"
              >
                {{ t("sections.indispensable.refas.title") }}
              </h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.refas.points.0")
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.refas.points.1")
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{
                  t("sections.indispensable.refas.points.2")
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Process Section - Visual Timeline -->
      <div class="mb-20">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t("sections.process.title") }}
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {{ t("sections.process.description") }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, index) in 4" :key="index" class="relative group">
            <div
              class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
            >
              <div
                class="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-white font-bold text-xl">{{
                  index + 1
                }}</span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                {{ t(`sections.process.steps.${index}`) }}
              </p>
            </div>
            <!-- Connector arrow (hidden on mobile, visible on larger screens) -->
            <div
              v-if="index < 3"
              class="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
            >
              <svg
                class="h-6 w-6 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Mid-page CTA -->
      <div
        class="mb-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
      >
        <!-- Decorative background -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
          ></div>
        </div>
        <div class="relative z-10">
          <h3
            class="font-display text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {{ t("cta.optimize") }}
          </h3>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Über 1.000 Nutzer vertrauen bereits auf Diktat AI
          </p>
          <a :href="registerUrl">
            <button
              class="px-10 py-5 bg-white text-pink-600 font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide"
            >
              {{ t("cta.start") }}
            </button>
          </a>
        </div>
      </div>

      <!-- Advantages Section - Icon Grid -->
      <div class="mb-20">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t("sections.advantages.title") }}
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {{ t("sections.advantages.description") }}
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(point, index) in 5"
            :key="index"
            class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            :class="{ 'md:col-span-2': index === 4 }"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p class="text-gray-700 leading-relaxed">
                  {{ t(`sections.advantages.points.${index}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Workflow Integration Section -->
      <div class="mb-20">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t("sections.workflow.title") }}
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {{ t("sections.workflow.description") }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Email Integration -->
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="font-display text-2xl font-bold text-gray-800">
                {{ t("sections.workflow.email.title") }}
              </h3>
            </div>
            <p class="text-gray-700 mb-4">
              {{ t("sections.workflow.email.description") }}
            </p>
            <NuxtLinkLocale
              to="how-it-works"
              class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              {{ t("sections.workflow.email.link") }}
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NuxtLinkLocale>
          </div>

          <!-- Software Integration -->
          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center"
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 class="font-display text-2xl font-bold text-gray-800">
                {{ t("sections.workflow.integration.title") }}
              </h3>
            </div>
            <p class="text-gray-700 mb-4">
              {{ t("sections.workflow.integration.description") }}
            </p>
            <NuxtLinkLocale to="general-kontakt">
              <button
                class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                {{ t("sections.workflow.integration.button") }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>

        <!-- Workflow Benefits -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
          <h3 class="font-display text-2xl font-bold mb-6 text-gray-800">
            {{ t("sections.workflow.benefits.title") }}
          </h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="(benefit, index) in 3"
              :key="index"
              class="flex items-start gap-3"
            >
              <svg
                class="h-6 w-6 text-pink-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-700">{{
                t(`sections.workflow.benefits.points.${index}`)
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section - Accordion Style -->
      <div class="mb-20">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t("sections.faq.title") }}
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {{ t("sections.faq.description") }}
        </p>

        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(question, index) in 7"
            :key="index"
            class="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <details class="group">
              <summary
                class="cursor-pointer p-6 flex justify-between items-center font-display text-lg font-semibold text-gray-800 hover:text-pink-600 transition-colors"
              >
                <span>{{ t(`sections.faq.questions.${index}.title`) }}</span>
                <svg
                  class="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div class="px-6 pb-6 text-gray-700 leading-relaxed">
                {{ t(`sections.faq.questions.${index}.answer`) }}
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- Final CTA Section - Enhanced -->
      <div
        class="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl overflow-hidden"
      >
        <!-- Decorative background elements -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          ></div>
        </div>

        <div class="relative z-10">
          <h2
            class="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {{ t("sections.final.title") }}
          </h2>
          <p class="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            {{ t("sections.final.description") }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a :href="registerUrl">
              <button
                class="px-10 py-5 bg-white text-pink-600 font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide w-full sm:w-auto"
              >
                {{ t("sections.final.links.start") }}
              </button>
            </a>
            <NuxtLinkLocale to="pricing">
              <button
                class="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-xl rounded-2xl hover:bg-white hover:text-pink-600 transition-all duration-300 tracking-wide w-full sm:w-auto"
              >
                {{ t("sections.final.links.pricing") }}
              </button>
            </NuxtLinkLocale>
          </div>

          <div class="flex flex-wrap justify-center gap-6 text-white/80">
            <NuxtLinkLocale
              to="pricing"
              class="hover:text-white transition-colors font-medium"
              >{{ t("sections.final.links.pricing") }}</NuxtLinkLocale
            >
            <span>•</span>
            <NuxtLinkLocale
              to="general-datasafety"
              class="hover:text-white transition-colors font-medium"
              >{{ t("sections.final.links.security") }}</NuxtLinkLocale
            >
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
const { registerUrl } = useAppUrl();

// SEO Meta Tags
useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
  ],
});
</script>

<i18n lang="json">
{
  "de": {
    "badge": {
      "euServer": "Server in der EU"
    },
    "meta": {
      "title": "Diktat AI für Kanzleien = Effiziente Transkription für Kanzleien",
      "description": "Diktat AI für Kanzleien: Effiziente Transkription von juristischen Diktaten, Mandantengesprächen und Vermerken. DSGVO-konform & sicher."
    },
    "hero": {
      "title": "Diktate DSGVO-konform transkribieren mit KI",
      "subtitle": "Verwandeln Sie Ihre juristischen Diktate in Sekunden in präzise Schriftsätze - sicher und schnell"
    },
    "cta": {
      "optimize": "Jetzt Kanzleialltag optimieren",
      "start": "Kostenlos testen – mit AV-Vertrag",
      "pricing": "Preise ansehen"
    },
    "sections": {
      "indispensable": {
        "title": "Diktat AI: Unverzichtbar für den modernen Kanzleialltag",
        "lawyers": {
          "title": "Anwälte & Juristen:",
          "points": [
            "Diktieren Sie Schriftsätze, Vermerke, Gutachten und Korrespondenz direkt.",
            "Erfassen Sie Mandantengespräche und Besprechungsergebnisse mühelos als Text.",
            "Beschleunigen Sie die Fallbearbeitung durch schnelle Verfügbarkeit von Mitschriften."
          ]
        },
        "refas": {
          "title": "Rechtsanwaltsfachangestellte (ReFas):",
          "points": [
            "Verarbeiten Sie Anwaltsdiktate in Rekordzeit und erstellen Sie Dokumente schneller.",
            "Reduzieren Sie Tippfehler und erhöhen Sie die Genauigkeit bei der Texterstellung.",
            "Gewinnen Sie Zeit für anspruchsvollere Aufgaben in der Kanzleiorganisation und Mandantenbetreuung."
          ]
        }
      },
      "process": {
        "title": "Einfach. Schnell. Vertraulich.",
        "description": "Unser unkomplizierter Prozess spart Ihnen wertvolle Stunden. Verwandeln Sie Sprachaufnahmen in wenigen Schritten sicher in bearbeitbare, juristisch nutzbare Texte.",
        "steps": [
          "Aufnahme hochladen: Diktate, Gesprächsmitschnitte etc. mit einem Klick starten.",
          "KI-Transkription: Präzise Umwandlung durch spezialisierte Spracherkennung.",
          "Sichere Verarbeitung: Streng DSGVO-konform & Ende-zu-Ende verschlüsselt.",
          "Sofort einsatzbereit: Formatierter Text zum Download für Ihre Akten & Software."
        ]
      },
      "advantages": {
        "title": "Ihr klarer Vorteil im Kanzleibetrieb mit Diktat AI",
        "description": "Diktat AI bringt messbaren Mehrwert durch clevere Automatisierung – speziell für die Anforderungen im Rechtswesen.",
        "points": [
          "Massive Zeitersparnis: Schluss mit stundenlangem Abtippen von Diktaten oder Mitschriften. Gewinnen Sie Zeit für juristische Kernaufgaben und Mandantenbetreuung.",
          "Gesteigerte Kanzleieffizienz: Erledigen Sie mehr in weniger Zeit. Beschleunigen Sie die Erstellung von Schriftsätzen, Protokollen und Vermerken spürbar.",
          "Präzise & Verwertbare Ergebnisse: Erhalten Sie genaue Text-Transkripte Ihrer Aufnahmen als zuverlässige Grundlage für Ihre juristische Arbeit und Dokumentation.",
          "Höchste Datensicherheit & Verschwiegenheit: Verlassen Sie sich auf strenge Vertraulichkeit gemäß DSGVO und Berufsgeheimnis. Ihre sensiblen Mandantendaten sind bei uns sicher.",
          "Fokus auf Rechtsberatung & Strategie: Reduzieren Sie administrative Routine. Konzentrieren Sie Ihre Expertise auf die Fallbearbeitung, Mandantengespräche und strategische Entscheidungen."
        ]
      },
      "workflow": {
        "title": "Diktat AI passt sich Ihrem Kanzlei-Workflow an",
        "description": "Wir machen es Ihnen leicht, Transkriptionen nahtlos in Ihre juristischen Arbeitsprozesse zu integrieren.",
        "email": {
          "title": "Verfügbar: Einfach per E-Mail transkribieren",
          "description": "Der schnellste Weg zur fertigen Mitschrift – ganz ohne Login. Senden Sie Ihre Audiodatei (Diktat, Meeting-Aufnahme) direkt als Anhang per E-Mail. Diktat AI liefert den Text sicher zurück.",
          "link": "So funktioniert's"
        },
        "integration": {
          "title": "Verfügbar: Direkte Anbindung an Ihre Kanzleisoftware",
          "description": "Nahtlose Integration für maximale Effizienz. Stellen Sie sich vor: Ihre Transkripte landen automatisch dort, wo Sie sie benötigen – direkt in Ihrer Aktenverwaltung oder Kanzleisoftware.",
          "button": "Individuelle Lösung anfragen"
        },
        "benefits": {
          "title": "Warum diese Optionen für Ihre Kanzlei wertvoll sind:",
          "points": [
            "Flexibilität: Wählen Sie die Methode, die am besten zu Ihrer Arbeitsweise passt.",
            "Zeitersparnis: Reduzieren Sie manuelle Schritte und Bearbeitungszeiten drastisch.",
            "Nahtlose Abläufe: Integrieren Sie Transkriptionen direkt in Ihre etablierten Kanzleiprozesse."
          ]
        }
      },
      "faq": {
        "title": "Häufig gestellte Fragen zu Diktat AI für Kanzleien",
        "description": "Antworten auf die wichtigsten Fragen für Anwälte und ReFas.",
        "questions": [
          {
            "title": "Was genau macht Diktat AI für Juristen?",
            "answer": "Diktat AI wandelt Ihre gesprochenen Worte – ob Diktate für Schriftsätze, Mandantengespräche, interne Vermerke oder Verhandlungsnotizen – automatisch in geschriebenen Text um. Sie laden die Audioaufnahme hoch, unsere KI erledigt die Transkription."
          },
          {
            "title": "Ist Diktat AI für meine Kanzlei geeignet?",
            "answer": "Absolut. Diktat AI ist ideal für Anwälte, Notare, Rechtsanwaltsfachangestellte und ganze Kanzleien oder Rechtsabteilungen, die regelmäßig Diktate oder Gesprächsmitschnitte verschriftlichen und dabei Zeit und Ressourcen sparen möchten."
          },
          {
            "title": "Wie hilft Diktat AI, im Kanzleialltag Zeit zu sparen?",
            "answer": "Das manuelle Transkribieren ist extrem zeitaufwendig. Diktat AI erledigt dies in einem Bruchteil der Zeit. Diese gewonnene Zeit können Sie direkt in Mandatsarbeit, Akquise oder strategische Planung investieren."
          },
          {
            "title": "Sind meine Mandantendaten bei Diktat AI sicher?",
            "answer": "Ja. Datensicherheit und Vertraulichkeit sind unser höchstes Gebot. Wir verarbeiten alle Daten streng nach DSGVO auf Servern ausschließlich innerhalb der EU. Ihre sensiblen Informationen sind durch technische und organisatorische Maßnahmen geschützt."
          },
          {
            "title": "Wie genau sind die Transkriptionen juristischer Inhalte?",
            "answer": "Unsere KI liefert eine hohe Genauigkeit, besonders bei guter Audioqualität. Sie erhalten eine solide Textgrundlage, die Sie schnell überprüfen und ggf. fachspezifisch anpassen können. Der Zeitaufwand ist deutlich geringer als beim kompletten Abtippen."
          },
          {
            "title": "Welche Audioaufnahmen kann ich nutzen?",
            "answer": "Nutzen Sie Aufnahmen von Diktiergeräten, Smartphones, Online-Meetings (z.B. Teams, Zoom – Einverständnis vorausgesetzt), Mandantengesprächen (Einverständnis vorausgesetzt) und mehr. Gängige Audioformate werden unterstützt."
          },
          {
            "title": "Ist die Bedienung kompliziert? Brauche ich IT-Support?",
            "answer": "Nein. Diktat AI ist bewusst einfach gehalten: Aufnahme hochladen, kurz warten, fertigen Text erhalten. Keine komplizierte Installation oder Einarbeitung nötig. Sie können sofort starten."
          }
        ]
      },
      "final": {
        "title": "Schluss mit mühsamem Tippen: Konzentrieren Sie sich auf Ihre Mandate.",
        "description": "Diktat AI ist Ihr zuverlässiger Partner für die schnelle und sichere Umwandlung von Sprache in Text im Kanzleiumfeld. Optimieren Sie Ihre Arbeitsabläufe, steigern Sie die Effizienz und gewinnen Sie wertvolle Zeit zurück.",
        "links": {
          "start": "Jetzt starten",
          "pricing": "Preismodelle",
          "security": "Sicherheitsstandards"
        }
      }
    }
  },
  "en": {
    "badge": {
      "euServer": "Server in the EU"
    },
    "meta": {
      "title": "Diktat AI for Law Firms = Efficient Transcription for Law Firms",
      "description": "Diktat AI for Law Firms: Efficient transcription of legal dictations, client meetings, and memos. GDPR-compliant & secure."
    },
    "hero": {
      "title": "Securely dictate client meetings – GDPR-compliant with AI",
      "subtitle": "For law firms that save time and take data protection seriously."
    },
    "cta": {
      "optimize": "Optimize Your Law Practice Now",
      "start": "Try for free – with DPA",
      "pricing": "View Pricing"
    },
    "sections": {
      "indispensable": {
        "title": "Diktat AI: Essential for Modern Law Practice",
        "lawyers": {
          "title": "Lawyers & Legal Professionals:",
          "points": [
            "Dictate legal briefs, memos, expert opinions, and correspondence directly.",
            "Effortlessly capture client meetings and discussion results as text.",
            "Accelerate case processing through quick availability of transcripts."
          ]
        },
        "refas": {
          "title": "Legal Assistants & Paralegals:",
          "points": [
            "Process attorney dictations in record time and create documents faster.",
            "Reduce typing errors and increase accuracy in text creation.",
            "Gain time for more demanding tasks in law firm organization and client support."
          ]
        }
      },
      "process": {
        "title": "Simple. Fast. Confidential.",
        "description": "Our straightforward process saves you valuable hours. Transform voice recordings into usable, legally sound texts in just a few steps.",
        "steps": [
          "Upload recording: Start dictations, conversation recordings, etc. with one click.",
          "AI Transcription: Precise conversion through specialized speech recognition.",
          "Secure Processing: Strictly GDPR-compliant & end-to-end encrypted.",
          "Instantly Ready: Formatted text for download to your files & software."
        ]
      },
      "advantages": {
        "title": "Your Clear Advantage in Law Practice with Diktat AI",
        "description": "Diktat AI brings measurable value through clever automation – specifically for legal requirements.",
        "points": [
          "Massive Time Savings: No more hours spent typing dictations or transcripts. Gain time for core legal tasks and client care.",
          "Increased Law Firm Efficiency: Get more done in less time. Noticeably accelerate the creation of legal documents, protocols, and memos.",
          "Precise & Usable Results: Receive accurate text transcripts of your recordings as a reliable basis for your legal work and documentation.",
          "Highest Data Security & Confidentiality: Rely on strict confidentiality according to GDPR and professional secrecy. Your sensitive client data is safe with us.",
          "Focus on Legal Advice & Strategy: Reduce administrative routine. Focus your expertise on case processing, client meetings, and strategic decisions."
        ]
      },
      "workflow": {
        "title": "Diktat AI Adapts to Your Law Firm Workflow",
        "description": "We make it easy to seamlessly integrate transcriptions into your legal work processes.",
        "email": {
          "title": "Available: Transcribe Simply via Email",
          "description": "The fastest way to get your finished transcript – no login required. Send your audio file (dictation, meeting recording) directly as an email attachment. Diktat AI securely delivers the text back.",
          "link": "How it works"
        },
        "integration": {
          "title": "Available: Direct Connection to Your Law Practice Software",
          "description": "Seamless integration for maximum efficiency. Imagine: Your transcripts automatically land where you need them – directly in your case management or law firm software.",
          "button": "Request Custom Solution"
        },
        "benefits": {
          "title": "Why these options are valuable for your law firm:",
          "points": [
            "Flexibility: Choose the method that best suits your way of working.",
            "Time Savings: Drastically reduce manual steps and processing times.",
            "Seamless Processes: Integrate transcriptions directly into your established law firm processes."
          ]
        }
      },
      "faq": {
        "title": "Frequently Asked Questions about Diktat AI for Law Firms",
        "description": "Answers to the most important questions for lawyers and legal staff.",
        "questions": [
          {
            "title": "What exactly does Diktat AI do for legal professionals?",
            "answer": "Diktat AI automatically converts your spoken words – whether dictations for legal briefs, client meetings, internal memos, or negotiation notes – into written text. You upload the audio recording, our AI handles the transcription."
          },
          {
            "title": "Is Diktat AI suitable for my law firm?",
            "answer": "Absolutely. Diktat AI is ideal for lawyers, notaries, legal assistants, and entire law firms or legal departments who regularly need to transcribe dictations or conversation recordings and want to save time and resources."
          },
          {
            "title": "How does Diktat AI help save time in daily law practice?",
            "answer": "Manual transcription is extremely time-consuming. Diktat AI does this in a fraction of the time. You can invest this saved time directly in client work, acquisition, or strategic planning."
          },
          {
            "title": "Is my client data safe with Diktat AI?",
            "answer": "Yes. Data security and confidentiality are our highest priority. We process all data strictly according to GDPR on servers exclusively within the EU. Your sensitive information is protected through technical and organizational measures."
          },
          {
            "title": "How accurate are the transcriptions of legal content?",
            "answer": "Our AI delivers high accuracy, especially with good audio quality. You receive a solid text foundation that you can quickly review and adjust for specific legal terminology if needed. The time investment is significantly less than complete manual typing."
          },
          {
            "title": "What audio recordings can I use?",
            "answer": "Use recordings from dictation devices, smartphones, online meetings (e.g., Teams, Zoom – consent required), client meetings (consent required), and more. Common audio formats are supported."
          },
          {
            "title": "Is it complicated to use? Do I need IT support?",
            "answer": "No. Diktat AI is intentionally kept simple: upload recording, wait briefly, receive finished text. No complicated installation or training needed. You can start immediately."
          }
        ]
      },
      "final": {
        "title": "End tedious typing: Focus on your cases.",
        "description": "Diktat AI is your reliable partner for fast and secure conversion of speech to text in the law firm environment. Optimize your workflows, increase efficiency, and reclaim valuable time.",
        "links": {
          "start": "Start Now",
          "pricing": "Pricing Models",
          "security": "Security Standards"
        }
      }
    }
  },
  "nl": {
    "badge": {
      "euServer": "Server in de EU"
    },
    "meta": {
      "title": "DiktatAI voor advocatenkantoren = Efficiënte transcriptie voor kantoren",
      "description": "DiktatAI voor advocatenkantoren: Efficiënte transcriptie van juridische dictaten, cliëntgesprekken en aantekeningen. AVG-conform & veilig."
    },
    "hero": {
      "title": "Dictaten AVG-conform transcriberen met AI",
      "subtitle": "Zet uw juridische dictaten in seconden om in nauwkeurige processtukken - veilig en snel"
    },
    "cta": {
      "optimize": "Optimaliseer nu uw kantoorpraktijk",
      "start": "Gratis testen – met verwerkersovereenkomst",
      "pricing": "Prijzen bekijken"
    },
    "sections": {
      "indispensable": {
        "title": "DiktatAI: Onmisbaar voor de moderne kantoorpraktijk",
        "lawyers": {
          "title": "Advocaten & juristen:",
          "points": [
            "Dicteer processtukken, aantekeningen, adviezen en correspondentie direct.",
            "Leg cliëntgesprekken en besprekingsresultaten moeiteloos vast als tekst.",
            "Versnel de dossierbehandeling door snelle beschikbaarheid van verslagen."
          ]
        },
        "refas": {
          "title": "Juridisch medewerkers & secretaresses:",
          "points": [
            "Verwerk advocatendictaten in recordtijd en maak documenten sneller.",
            "Verminder typefouten en verhoog de nauwkeurigheid bij tekstcreatie.",
            "Win tijd voor meer uitdagende taken in kantoororganisatie en cliëntbegeleiding."
          ]
        }
      },
      "process": {
        "title": "Eenvoudig. Snel. Vertrouwelijk.",
        "description": "Ons ongecompliceerde proces bespaart u waardevolle uren. Zet spraakopnames in enkele stappen veilig om in bewerkbare, juridisch bruikbare teksten.",
        "steps": [
          "Opname uploaden: Dictaten, gespreksopnames etc. met één klik starten.",
          "AI-transcriptie: Nauwkeurige omzetting door gespecialiseerde spraakherkenning.",
          "Veilige verwerking: Strikt AVG-conform & end-to-end versleuteld.",
          "Direct inzetbaar: Geformatteerde tekst om te downloaden voor uw dossiers & software."
        ]
      },
      "advantages": {
        "title": "Uw duidelijke voordeel in de kantoorpraktijk met DiktatAI",
        "description": "DiktatAI brengt meetbare meerwaarde door slimme automatisering – speciaal voor de eisen in de juridische sector.",
        "points": [
          "Enorme tijdsbesparing: Gedaan met urenlang uittypen van dictaten of verslagen. Win tijd voor juridische kerntaken en cliëntbegeleiding.",
          "Verhoogde kantoorefficiëntie: Doe meer in minder tijd. Versnel merkbaar het opstellen van processtukken, protocollen en aantekeningen.",
          "Nauwkeurige & bruikbare resultaten: Ontvang precieze teksttranscripties van uw opnames als betrouwbare basis voor uw juridisch werk en documentatie.",
          "Hoogste gegevensbeveiliging & geheimhouding: Vertrouw op strikte vertrouwelijkheid conform AVG en beroepsgeheim. Uw gevoelige cliëntgegevens zijn bij ons veilig.",
          "Focus op juridisch advies & strategie: Verminder administratieve routine. Concentreer uw expertise op dossierbehandeling, cliëntgesprekken en strategische beslissingen."
        ]
      },
      "workflow": {
        "title": "DiktatAI past zich aan uw kantoorworkflow aan",
        "description": "We maken het u gemakkelijk om transcripties naadloos in uw juridische werkprocessen te integreren.",
        "email": {
          "title": "Beschikbaar: Eenvoudig transcriberen via e-mail",
          "description": "De snelste weg naar het afgewerkte verslag – helemaal zonder inloggen. Stuur uw audiobestand (dictaat, meeting-opname) direct als bijlage per e-mail. DiktatAI levert de tekst veilig terug.",
          "link": "Zo werkt het"
        },
        "integration": {
          "title": "Beschikbaar: Directe koppeling met uw kantoorsoftware",
          "description": "Naadloze integratie voor maximale efficiëntie. Stel u voor: uw transcripties komen automatisch waar u ze nodig heeft – direct in uw dossierbeheer of kantoorsoftware.",
          "button": "Individuele oplossing aanvragen"
        },
        "benefits": {
          "title": "Waarom deze opties waardevol zijn voor uw kantoor:",
          "points": [
            "Flexibiliteit: Kies de methode die het beste past bij uw werkwijze.",
            "Tijdsbesparing: Verminder handmatige stappen en verwerkingstijden drastisch.",
            "Naadloze processen: Integreer transcripties direct in uw gevestigde kantoorprocessen."
          ]
        }
      },
      "faq": {
        "title": "Veelgestelde vragen over DiktatAI voor advocatenkantoren",
        "description": "Antwoorden op de belangrijkste vragen voor advocaten en juridisch medewerkers.",
        "questions": [
          {
            "title": "Wat doet DiktatAI precies voor juristen?",
            "answer": "DiktatAI zet uw gesproken woorden – of het nu dictaten voor processtukken, cliëntgesprekken, interne aantekeningen of onderhandelingsnotities zijn – automatisch om in geschreven tekst. U uploadt de audio-opname, onze AI verzorgt de transcriptie."
          },
          {
            "title": "Is DiktatAI geschikt voor mijn kantoor?",
            "answer": "Absoluut. DiktatAI is ideaal voor advocaten, notarissen, juridisch medewerkers en complete kantoren of juridische afdelingen die regelmatig dictaten of gespreksopnames uitschrijven en daarbij tijd en middelen willen besparen."
          },
          {
            "title": "Hoe helpt DiktatAI tijd te besparen in de kantoorpraktijk?",
            "answer": "Handmatig transcriberen is extreem tijdrovend. DiktatAI doet dit in een fractie van de tijd. Deze gewonnen tijd kunt u direct investeren in cliëntwerk, acquisitie of strategische planning."
          },
          {
            "title": "Zijn mijn cliëntgegevens veilig bij DiktatAI?",
            "answer": "Ja. Gegevensbeveiliging en vertrouwelijkheid zijn ons hoogste gebod. We verwerken alle gegevens strikt volgens AVG op servers uitsluitend binnen de EU. Uw gevoelige informatie is beschermd door technische en organisatorische maatregelen."
          },
          {
            "title": "Hoe nauwkeurig zijn de transcripties van juridische inhoud?",
            "answer": "Onze AI levert hoge nauwkeurigheid, vooral bij goede audiokwaliteit. U krijgt een solide tekstbasis die u snel kunt controleren en indien nodig vakspecifiek kunt aanpassen. De tijdsinvestering is aanzienlijk minder dan bij volledig uittypen."
          },
          {
            "title": "Welke audio-opnames kan ik gebruiken?",
            "answer": "Gebruik opnames van dicteerrecorders, smartphones, online meetings (bijv. Teams, Zoom – met toestemming), cliëntgesprekken (met toestemming) en meer. Gangbare audioformaten worden ondersteund."
          },
          {
            "title": "Is de bediening ingewikkeld? Heb ik IT-support nodig?",
            "answer": "Nee. DiktatAI is bewust eenvoudig gehouden: opname uploaden, even wachten, afgewerkte tekst ontvangen. Geen ingewikkelde installatie of inwerkperiode nodig. U kunt direct beginnen."
          }
        ]
      },
      "final": {
        "title": "Klaar met moeizaam typen: Concentreer u op uw cliënten.",
        "description": "DiktatAI is uw betrouwbare partner voor de snelle en veilige omzetting van spraak naar tekst in de kantooromgeving. Optimaliseer uw werkprocessen, verhoog de efficiëntie en win waardevolle tijd terug.",
        "links": {
          "start": "Nu beginnen",
          "pricing": "Prijsmodellen",
          "security": "Beveiligingsstandaarden"
        }
      }
    }
  },
  "es": {
    "badge": {
      "euServer": "Servidor en la UE"
    },
    "meta": {
      "title": "Diktat AI para bufetes de abogados = Transcripción eficiente para despachos",
      "description": "Diktat AI para bufetes: Transcripción eficiente de dictados legales, reuniones con clientes y notas. Cumple con RGPD y es seguro."
    },
    "hero": {
      "title": "Transcribir dictados con IA cumpliendo el RGPD",
      "subtitle": "Convierta sus dictados legales en segundos en escritos precisos - de forma segura y rápida"
    },
    "cta": {
      "optimize": "Optimice ahora su práctica legal",
      "start": "Probar gratis – con contrato de procesamiento",
      "pricing": "Ver precios"
    },
    "sections": {
      "indispensable": {
        "title": "Diktat AI: Indispensable para la práctica legal moderna",
        "lawyers": {
          "title": "Abogados y juristas:",
          "points": [
            "Dicte escritos legales, notas, informes y correspondencia directamente.",
            "Capture reuniones con clientes y resultados de discusiones fácilmente como texto.",
            "Acelere el procesamiento de casos mediante la rápida disponibilidad de transcripciones."
          ]
        },
        "refas": {
          "title": "Asistentes legales y secretarios:",
          "points": [
            "Procese dictados de abogados en tiempo récord y cree documentos más rápido.",
            "Reduzca errores de escritura y aumente la precisión en la creación de textos.",
            "Gane tiempo para tareas más exigentes en la organización del despacho y atención al cliente."
          ]
        }
      },
      "process": {
        "title": "Simple. Rápido. Confidencial.",
        "description": "Nuestro proceso sencillo le ahorra horas valiosas. Transforme grabaciones de voz en textos editables y legalmente utilizables en pocos pasos.",
        "steps": [
          "Subir grabación: Inicie dictados, grabaciones de conversaciones, etc. con un clic.",
          "Transcripción con IA: Conversión precisa mediante reconocimiento de voz especializado.",
          "Procesamiento seguro: Estrictamente conforme al RGPD y cifrado de extremo a extremo.",
          "Listo al instante: Texto formateado para descargar a sus archivos y software."
        ]
      },
      "advantages": {
        "title": "Su clara ventaja en la práctica legal con Diktat AI",
        "description": "Diktat AI aporta valor medible a través de la automatización inteligente – específicamente para los requisitos del sector legal.",
        "points": [
          "Ahorro de tiempo masivo: Olvídese de horas escribiendo dictados o transcripciones. Gane tiempo para tareas legales principales y atención al cliente.",
          "Mayor eficiencia del despacho: Haga más en menos tiempo. Acelere notablemente la creación de documentos legales, actas y notas.",
          "Resultados precisos y utilizables: Reciba transcripciones de texto precisas de sus grabaciones como base confiable para su trabajo legal y documentación.",
          "Máxima seguridad de datos y confidencialidad: Confíe en la estricta confidencialidad conforme al RGPD y el secreto profesional. Sus datos sensibles de clientes están seguros con nosotros.",
          "Enfoque en asesoría legal y estrategia: Reduzca la rutina administrativa. Concentre su experiencia en el procesamiento de casos, reuniones con clientes y decisiones estratégicas."
        ]
      },
      "workflow": {
        "title": "Diktat AI se adapta al flujo de trabajo de su despacho",
        "description": "Le facilitamos integrar transcripciones sin problemas en sus procesos de trabajo legal.",
        "email": {
          "title": "Disponible: Transcribir fácilmente por correo electrónico",
          "description": "El camino más rápido a la transcripción terminada – sin necesidad de iniciar sesión. Envíe su archivo de audio (dictado, grabación de reunión) directamente como archivo adjunto por correo. Diktat AI entrega el texto de forma segura.",
          "link": "Cómo funciona"
        },
        "integration": {
          "title": "Disponible: Conexión directa con su software legal",
          "description": "Integración perfecta para máxima eficiencia. Imagine: sus transcripciones llegan automáticamente donde las necesita – directamente en su gestión de casos o software del despacho.",
          "button": "Solicitar solución personalizada"
        },
        "benefits": {
          "title": "Por qué estas opciones son valiosas para su despacho:",
          "points": [
            "Flexibilidad: Elija el método que mejor se adapte a su forma de trabajar.",
            "Ahorro de tiempo: Reduzca drásticamente los pasos manuales y tiempos de procesamiento.",
            "Procesos fluidos: Integre transcripciones directamente en sus procesos establecidos del despacho."
          ]
        }
      },
      "faq": {
        "title": "Preguntas frecuentes sobre Diktat AI para bufetes de abogados",
        "description": "Respuestas a las preguntas más importantes para abogados y personal legal.",
        "questions": [
          {
            "title": "¿Qué hace exactamente Diktat AI para profesionales legales?",
            "answer": "Diktat AI convierte automáticamente sus palabras habladas – ya sean dictados para escritos legales, reuniones con clientes, notas internas o notas de negociación – en texto escrito. Usted sube la grabación de audio, nuestra IA se encarga de la transcripción."
          },
          {
            "title": "¿Es Diktat AI adecuado para mi bufete?",
            "answer": "Absolutamente. Diktat AI es ideal para abogados, notarios, asistentes legales y bufetes completos o departamentos legales que regularmente necesitan transcribir dictados o grabaciones de conversaciones y quieren ahorrar tiempo y recursos."
          },
          {
            "title": "¿Cómo ayuda Diktat AI a ahorrar tiempo en la práctica legal diaria?",
            "answer": "La transcripción manual consume muchísimo tiempo. Diktat AI lo hace en una fracción del tiempo. Este tiempo ahorrado puede invertirlo directamente en trabajo con clientes, adquisición o planificación estratégica."
          },
          {
            "title": "¿Están seguros mis datos de clientes con Diktat AI?",
            "answer": "Sí. La seguridad de datos y la confidencialidad son nuestra máxima prioridad. Procesamos todos los datos estrictamente según el RGPD en servidores exclusivamente dentro de la UE. Su información sensible está protegida por medidas técnicas y organizativas."
          },
          {
            "title": "¿Qué tan precisas son las transcripciones de contenido legal?",
            "answer": "Nuestra IA ofrece alta precisión, especialmente con buena calidad de audio. Obtiene una base de texto sólida que puede revisar rápidamente y ajustar a terminología específica si es necesario. La inversión de tiempo es significativamente menor que escribir todo manualmente."
          },
          {
            "title": "¿Qué grabaciones de audio puedo usar?",
            "answer": "Use grabaciones de dictáfonos, smartphones, reuniones online (ej. Teams, Zoom – con consentimiento), reuniones con clientes (con consentimiento) y más. Se admiten formatos de audio comunes."
          },
          {
            "title": "¿Es complicado de usar? ¿Necesito soporte de TI?",
            "answer": "No. Diktat AI está diseñado intencionalmente para ser simple: suba la grabación, espere un momento, reciba el texto terminado. No se necesita instalación complicada ni capacitación. Puede empezar inmediatamente."
          }
        ]
      },
      "final": {
        "title": "Basta de escribir tediosamente: Concéntrese en sus clientes.",
        "description": "Diktat AI es su socio confiable para la conversión rápida y segura de voz a texto en el entorno del bufete. Optimice sus flujos de trabajo, aumente la eficiencia y recupere tiempo valioso.",
        "links": {
          "start": "Comenzar ahora",
          "pricing": "Modelos de precios",
          "security": "Estándares de seguridad"
        }
      }
    }
  }
}
</i18n>

<style scoped>
/* Gradient text animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Enhanced hover effects */
.card:hover {
  transform: translateY(-4px);
}

/* Custom shadow */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
}

/* Improved glass effect */
.bg-white\/90 {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Smooth transitions for details/summary */
details summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-content > div {
    margin: 1rem;
    padding: 2rem 1.5rem;
  }
}
</style>
