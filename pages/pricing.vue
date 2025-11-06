<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white/40"
  >
    <!-- Hero Section -->
    <div class="relative py-20 overflow-hidden">
      <!-- Background Elements -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white/40"
      >
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-xl"
        ></div>
        <div
          class="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-xl"
        ></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-8"
          >
            <svg
              class="h-5 w-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="text-sm font-semibold text-indigo-800">{{
              t('hero.badge')
            }}</span>
          </div>

          <!-- Main Title -->
          <h1
            class="animated-gradient text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            {{ t('hero.title') }}
          </h1>

          <!-- Subtitle -->
          <p
            class="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            {{ t('hero.subtitle') }}
          </p>

          <!-- Hero Stats -->
          <div class="flex flex-wrap justify-center gap-8 mb-12">
            <div class="text-center">
              <div class="text-3xl font-bold text-indigo-600 mb-1">
                {{ t('hero.stats.accuracy') }}
              </div>
              <div class="text-sm text-gray-600">
                {{ t('hero.stats.accuracyLabel') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-1">
                {{ t('hero.stats.users') }}
              </div>
              <div class="text-sm text-gray-600">
                {{ t('hero.stats.usersLabel') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-1">
                {{ t('hero.stats.languages') }}
              </div>
              <div class="text-sm text-gray-600">
                {{ t('hero.stats.languagesLabel') }}
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="registerUrl">
              <button
                class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ t('hero.cta.primary') }}
              </button>
            </a>
            <NuxtLinkLocale to="how-it-works">
              <button
                class="px-8 py-4 bg-white border-2 border-indigo-500 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {{ t('hero.cta.secondary') }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="pb-16 container mx-auto px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <!-- Free Plan -->
        <div
          class="pricing-card glass-card bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl h-full flex flex-col"
        >
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ t('freePlan.title') }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ t('freePlan.subtitle') }}
            </p>
            <div class="text-4xl font-bold text-gray-800">
              €0
              <span class="text-lg font-normal text-gray-600"
                >/{{ t('common.month') }}</span
              >
            </div>
          </div>

          <ul class="space-y-4 flex-grow mb-8">
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('freePlan.features.audioLimit')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('freePlan.features.reliableTranscription')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('freePlan.features.easyHandling')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('freePlan.features.basicSupport')
              }}</span>
            </li>
          </ul>

          <div class="text-center">
            <p class="text-sm text-gray-600 mb-4 font-medium">
              {{ t('freePlan.noCreditCard') }}
            </p>
            <a :href="registerUrl" class="block">
              <button
                class="w-full px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {{ t('freePlan.cta') }}
              </button>
            </a>
          </div>
        </div>

        <!-- Pro Plan (Pioneer Offer) -->
        <div
          class="pricing-card glass-card bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl h-full flex flex-col relative overflow-hidden"
        >
          <!-- Pioneer Offer Badge -->
          <div
            class="early-bird-badge absolute top-4 right-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full transform rotate-12 shadow-lg z-10"
          >
            {{ t('proPlan.earlyBird') }}
          </div>

          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ t('proPlan.title') }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ t('proPlan.subtitle') }}
            </p>

            <!-- Pioneer Offer Pricing -->
            <div class="mb-4">
              <div class="flex items-center justify-center gap-2 mb-2">
                <span class="text-2xl font-bold text-gray-400 line-through"
                  >€24,90</span
                >
                <span class="text-4xl font-bold text-indigo-600">€14,00</span>
                <span class="text-lg font-normal text-gray-600"
                  >/{{ t('common.month') }}</span
                >
              </div>
              <div
                class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full"
              >
                <span class="text-sm font-semibold text-green-800">{{
                  t('proPlan.savings')
                }}</span>
              </div>

              <!-- 7 Day Trial Badge -->
              <div class="mt-3">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full"
                >
                  <svg
                    class="h-4 w-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-blue-800">{{
                    t('proPlan.trial')
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <ul class="space-y-4 flex-grow mb-8">
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0"
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
              <span class="text-gray-700 font-semibold">{{
                t('proPlan.features.unlimited')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('proPlan.features.maxAccuracy')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('proPlan.features.priorityProcessing')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('proPlan.features.premiumSupport')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('proPlan.features.apiAccess')
              }}</span>
            </li>
          </ul>

          <div class="text-center">
            <a :href="registerUrl" class="block">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ t('proPlan.cta') }}
              </button>
            </a>
          </div>
        </div>

        <!-- Business Suite -->
        <div
          class="pricing-card glass-card bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl h-full flex flex-col"
        >
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ t('businessPlan.title') }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ t('businessPlan.subtitle') }}
            </p>
            <div class="text-2xl font-bold text-gray-800">
              {{ t('businessPlan.price') }}
            </div>
          </div>

          <ul class="space-y-4 flex-grow mb-8">
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
              <span class="text-gray-700 font-semibold">{{
                t('businessPlan.features.allProFeatures')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.deployment')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.identityManagement')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.extendedApi')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.compliance')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.support')
              }}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                t('businessPlan.features.aiCustomization')
              }}</span>
            </li>
          </ul>

          <div class="text-center space-y-3">
            <NuxtLinkLocale to="general-business-suite" class="block">
              <button
                class="w-full px-6 py-3 bg-white border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {{ t('businessPlan.learnMore') }}
              </button>
            </NuxtLinkLocale>
            <NuxtLinkLocale to="general-kontakt" class="block">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ t('businessPlan.cta') }}
              </button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>

      <!-- DSGVO and EU Storage Promos -->
      <div class="mt-16 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DsgvoPromo />
          <EuStoragePromo />
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-16 text-center max-w-4xl mx-auto">
        <h3
          class="animated-gradient text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8"
        >
          {{ t('features.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4"
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">
              {{ t('features.upload.title') }}
            </h4>
            <p class="text-gray-600 leading-relaxed">
              {{ t('features.upload.description') }}
            </p>
          </div>

          <div
            class="bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">
              {{ t('features.security.title') }}
            </h4>
            <p class="text-gray-600 leading-relaxed">
              {{ t('features.security.description') }}
            </p>
          </div>

          <div
            class="bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4"
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">
              {{ t('features.processing.title') }}
            </h4>
            <p class="text-gray-600 leading-relaxed">
              {{ t('features.processing.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-16 text-center">
        <p class="text-gray-600 leading-relaxed">
          {{ t('footer.disclaimer') }}
          <NuxtLinkLocale
            to="terms"
            class="text-indigo-600 hover:text-purple-600 underline transition-colors duration-200"
          >
            {{ t('footer.terms') }}
          </NuxtLinkLocale>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local',
});

const { registerUrl } = useAppUrl();

// SEO Meta Tags
useHead({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description'),
    },
  ],
});

// Import components
import DsgvoPromo from '~/components/DsgvoPromo.vue';
import EuStoragePromo from '~/components/EuStoragePromo.vue';
</script>

<style scoped>
/* Pioneer offer badge animation */
@keyframes badge-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(239, 86, 164, 0.5);
  }
  50% {
    box-shadow:
      0 0 20px rgba(239, 86, 164, 0.8),
      0 0 30px rgba(255, 193, 7, 0.6);
  }
}

.early-bird-badge {
  animation: badge-glow 2s ease-in-out infinite;
}

/* Card hover effects */
.pricing-card {
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
}

/* Glass morphism enhancements */
.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Gradient text animations */
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
  animation: gradient-shift 3s ease infinite;
}
</style>

<i18n lang="json">
{
  "de": {
    "meta": {
      "title": "Preise - Transkription Software - Diktat AI",
      "description": "Wählen Sie den passenden Diktat AI Plan für Ihre Bedürfnisse. Von Kostenlos bis Pro Version - wir haben die perfekte Lösung für Sie."
    },
    "hero": {
      "title": "Preise, die zu Ihrem Workflow passen",
      "subtitle": "Finden Sie den perfekten Plan, um mit Diktat AI wertvolle Zeit zu gewinnen und Ihre Produktivität zu steigern. Starten Sie noch heute – ganz unverbindlich!",
      "badge": "KI-gestützte Transkription",
      "stats": {
        "accuracy": "95%",
        "accuracyLabel": "Genauigkeit",
        "users": "1.000+",
        "usersLabel": "Nutzer",
        "languages": "2",
        "languagesLabel": "Sprachen"
      },
      "cta": {
        "primary": "Kostenlos starten",
        "secondary": "Wie es funktioniert"
      }
    },
    "common": {
      "month": "Monat"
    },
    "freePlan": {
      "title": "Kostenlos probieren",
      "subtitle": "Ideal, um Diktat AI kennenzulernen und sofort Zeit zu sparen",
      "features": {
        "audioLimit": "Bis zu 60 Minuten Audio pro Monat. Das sind bis zu 30 DIN A4 Seiten Text.",
        "reliableTranscription": "Zuverlässige Transkription",
        "easyHandling": "Einfache Handhabung",
        "basicSupport": "Basis-Support per E-Mail"
      },
      "cta": "Jetzt kostenlos testen",
      "noCreditCard": "Keine Kreditkarte erforderlich"
    },
    "proPlan": {
      "earlyBird": "PIONEER ANGEBOT",
      "title": "Pro Plan",
      "subtitle": "Für professionelle Anwender und alle, die regelmäßig und ohne Limits transkribieren wollen",
      "savings": "Sie sparen 44%",
      "trial": "7 Tage kostenlos testen",
      "features": {
        "unlimited": "Unbegrenzte Transkriptionsminuten*",
        "maxAccuracy": "Maximale Genauigkeit durch beste KI",
        "priorityProcessing": "Priorisierte Verarbeitung",
        "premiumSupport": "Premium Support (E-Mail)",
        "apiAccess": "API-Zugang für Integration"
      },
      "cta": "Pro Plan wählen"
    },
    "businessPlan": {
      "title": "Business Suite",
      "subtitle": "Maßgeschneiderte Lösung für höchste Anforderungen an Kontrolle, Sicherheit & Integration",
      "price": "Preis auf Anfrage",
      "features": {
        "allProFeatures": "Alle Pro-Plan Vorteile plus:",
        "deployment": "On-Premise oder Private Cloud Bereitstellung",
        "identityManagement": "Integration in Ihr Identitätsmanagement (SSO, z.B. Microsoft Azure AD)",
        "extendedApi": "Erweiterte API für tiefe Systemintegration",
        "compliance": "Individuelle Anpassung an Compliance- & Sicherheitsvorgaben",
        "support": "Dedizierter Support & Account Management",
        "aiCustomization": "Optional: Unterstützung bei der KI-Modellanpassung auf Unternehmensdaten"
      },
      "cta": "Kontakt aufnehmen",
      "learnMore": "Mehr erfahren"
    },
    "features": {
      "title": "Immer inklusive: Ihr Fundament für effizientes Arbeiten",
      "upload": {
        "title": "Einfacher Upload & intuitive Bedienung",
        "description": "Starten Sie sofort durch, ohne technische Hürden"
      },
      "security": {
        "title": "Höchste Datensicherheit",
        "description": "DSGVO-konform mit Verschlüsselung"
      },
      "processing": {
        "title": "Zuverlässige Verarbeitung",
        "description": "Stabile Technologie für Ihre Aufnahmen"
      }
    },
    "footer": {
      "disclaimer": "*Fair-Use-Policy kann gelten. Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Mit Ihrer Anmeldung stimmen Sie unseren",
      "terms": "Allgemeinen Geschäftsbedingungen (AGB)"
    }
  },
  "en": {
    "meta": {
      "title": "Pricing - Transcription Software - Diktat AI",
      "description": "Choose the right Diktat AI plan for your needs. From Free to Pro version - we have the perfect solution for you."
    },
    "hero": {
      "title": "Pricing that fits your workflow",
      "subtitle": "Find the perfect plan to save valuable time with Diktat AI and increase your productivity. Start today - no commitment!",
      "badge": "AI-powered transcription",
      "stats": {
        "accuracy": "95%",
        "accuracyLabel": "Accuracy",
        "users": "1.000+",
        "usersLabel": "Users",
        "languages": "2",
        "languagesLabel": "Languages"
      },
      "cta": {
        "primary": "Start for free",
        "secondary": "How it works"
      }
    },
    "common": {
      "month": "month"
    },
    "freePlan": {
      "title": "Try for Free",
      "subtitle": "Perfect for getting to know Diktat AI and saving time immediately",
      "features": {
        "audioLimit": "Up to 60 minutes of audio per month. That's up to 30 A4 pages of text.",
        "reliableTranscription": "Reliable transcription",
        "easyHandling": "Easy handling",
        "basicSupport": "Basic email support"
      },
      "cta": "Try for free now",
      "noCreditCard": "No credit card required"
    },
    "proPlan": {
      "earlyBird": "PIONEER OFFER",
      "title": "Pro Plan",
      "subtitle": "For professional users and anyone who wants to transcribe regularly without limits",
      "savings": "You save 44%",
      "trial": "7 day free trial",
      "features": {
        "unlimited": "Unlimited transcription minutes*",
        "maxAccuracy": "Maximum accuracy with best AI",
        "priorityProcessing": "Priority processing",
        "premiumSupport": "Premium support (Email)",
        "apiAccess": "API access for integration"
      },
      "cta": "Choose Pro Plan"
    },
    "businessPlan": {
      "title": "Business Suite",
      "subtitle": "Tailored solutions for the highest requirements for control, security & integration",
      "price": "Price on request",
      "features": {
        "allProFeatures": "All Pro Plan benefits plus:",
        "deployment": "On-Premise or Private Cloud deployment",
        "identityManagement": "Integration with your identity management (SSO, e.g. Azure AD, Okta)",
        "extendedApi": "Extended API for deep system integration",
        "compliance": "Custom adaptation to compliance & security requirements",
        "support": "Dedicated support & account management",
        "aiCustomization": "Optional: AI model customization on company data"
      },
      "cta": "Contact us",
      "learnMore": "Learn More"
    },
    "features": {
      "title": "Always included: Your foundation for efficient work",
      "upload": {
        "title": "Easy upload & intuitive handling",
        "description": "Get started immediately, without technical hurdles"
      },
      "security": {
        "title": "Highest data security",
        "description": "GDPR compliant with encryption"
      },
      "processing": {
        "title": "Reliable processing",
        "description": "Stable technology for your recordings"
      }
    },
    "footer": {
      "disclaimer": "*Fair use policy may apply. All prices are exclusive of VAT. By registering, you agree to our",
      "terms": "Terms and Conditions"
    }
  }
}
</i18n>
