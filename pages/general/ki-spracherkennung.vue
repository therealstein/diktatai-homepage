<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div
      class="hero min-h-[40vh] relative"
      style="
        background: linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%);
        background-size: cover;
        background-position: center;
      "
    >
      <div class="hero-content text-center">
        <div
          class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          <h1
            class="font-display text-4xl font-bold text-white mb-2"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.title") }}
          </h1>
          <p
            class="text-lg text-white"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Introduction -->
        <div class="mb-12">
          <p class="text-lg">
            {{ t("introduction.paragraph") }}
          </p>
        </div>

        <!-- What is AI Speech Recognition Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("whatIsSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("whatIsSection.paragraph") }}
          </p>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whatIsSection.models.acoustic.title") }}
                </h3>
                <p>{{ t("whatIsSection.models.acoustic.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whatIsSection.models.language.title") }}
                </h3>
                <p>{{ t("whatIsSection.models.language.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whatIsSection.models.machine.title") }}
                </h3>
                <p>{{ t("whatIsSection.models.machine.description") }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- How it Works Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("howItWorksSection.title") }}
          </h2>
          <p class="mb-6">
            {{ t("howItWorksSection.paragraph") }}
          </p>
          <div class="space-y-6">
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <h3 class="font-bold mb-2">
                {{ t("howItWorksSection.steps.upload.title") }}
              </h3>
              <p>{{ t("howItWorksSection.steps.upload.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <h3 class="font-bold mb-2">
                {{ t("howItWorksSection.steps.preprocessing.title") }}
              </h3>
              <p>
                {{ t("howItWorksSection.steps.preprocessing.description") }}
              </p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <h3 class="font-bold mb-2">
                {{ t("howItWorksSection.steps.analysis.title") }}
              </h3>
              <p>{{ t("howItWorksSection.steps.analysis.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <h3 class="font-bold mb-2">
                {{ t("howItWorksSection.steps.postprocessing.title") }}
              </h3>
              <p>
                {{ t("howItWorksSection.steps.postprocessing.description") }}
              </p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <h3 class="font-bold mb-2">
                {{ t("howItWorksSection.steps.delivery.title") }}
              </h3>
              <p>{{ t("howItWorksSection.steps.delivery.description") }}</p>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("benefitsSection.title") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
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
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.time.title") }}
                </h3>
                <p>{{ t("benefitsSection.benefits.time.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.precision.title") }}
                </h3>
                <p>{{ t("benefitsSection.benefits.precision.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
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
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.productivity.title") }}
                </h3>
                <p>
                  {{ t("benefitsSection.benefits.productivity.description") }}
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
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
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.security.title") }}
                </h3>
                <p>{{ t("benefitsSection.benefits.security.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.focus.title") }}
                </h3>
                <p>{{ t("benefitsSection.benefits.focus.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.searchable.title") }}
                </h3>
                <p>
                  {{ t("benefitsSection.benefits.searchable.description") }}
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("benefitsSection.benefits.accessibility.title") }}
                </h3>
                <p>
                  {{ t("benefitsSection.benefits.accessibility.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Use Cases Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("useCasesSection.title") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.journalists.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.journalists.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.lawyers.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.lawyers.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.content.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.content.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.students.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.students.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.business.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.business.description") }}</p>
            </div>
            <div
              class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
            >
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 class="font-bold">
                  {{ t("useCasesSection.cases.consultants.title") }}
                </h3>
              </div>
              <p>{{ t("useCasesSection.cases.consultants.description") }}</p>
            </div>
          </div>
        </div>

        <!-- Why Diktat AI Section -->
        <div
          class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300"
        >
          <h2 class="font-display text-2xl font-bold mb-6">
            {{ t("whyDiktatSection.title") }}
          </h2>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.models.title") }}
                </h3>
                <p>{{ t("whyDiktatSection.features.models.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.ease.title") }}
                </h3>
                <p>{{ t("whyDiktatSection.features.ease.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.integration.title") }}
                </h3>
                <p>
                  {{ t("whyDiktatSection.features.integration.description") }}
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.pricing.title") }}
                </h3>
                <p>{{ t("whyDiktatSection.features.pricing.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.security.title") }}
                </h3>
                <p>{{ t("whyDiktatSection.features.security.description") }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold mb-2">
                  {{ t("whyDiktatSection.features.eu.title") }}
                </h3>
                <p>{{ t("whyDiktatSection.features.eu.description") }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="card bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl p-8 rounded-3xl border border-accent/20"
        >
          <h3 class="font-display text-2xl font-bold mb-4 text-center">
            {{ t("cta.title") }}
          </h3>
          <p class="text-lg text-center mb-8">
            {{ t("cta.paragraph") }}
          </p>
          <div class="text-center">
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLinkLocale to="general-kontakt">
                <button
                  class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
                >
                  {{ t("cta.button") }}
                </button>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="general-preise">
                <button
                  class="font-display bg-white text-pink-500 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg tracking-wide border-2 border-pink-500"
                >
                  {{ t("cta.button2") }}
                </button>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});

const baseUrl = "https://diktat.ai";
const canonicalPath = computed(() =>
  locale.value === "en" ? "/en/ai-speech-recognition" : "/ki-spracherkennung",
);
const canonicalUrl = computed(() => `${baseUrl}${canonicalPath.value}`);

// SEO Meta Tags (localized)
useHead(() => ({
  title: t("hero.title"),
  meta: [
    {
      name: "description",
      content: t("seo.description"),
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl.value },
    { property: "og:title", content: t("hero.title") },
    { property: "og:description", content: t("seo.description") },
    {
      property: "og:image",
      content: "https://diktat.ai/images/ki-spracherkennung-og.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl.value },
    { name: "twitter:title", content: t("hero.title") },
    { name: "twitter:description", content: t("seo.description") },
    {
      name: "twitter:image",
      content: "https://diktat.ai/images/ki-spracherkennung-og.jpg",
    },
  ],
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
</script>

<i18n lang="json">
{
  "de": {
    "seo": {
      "description": "KI‑Spracherkennung einfach erklärt: So verwandelt Diktat AI Sprache schnell und präzise in Text – sicher und DSGVO‑konform."
    },
    "hero": {
      "title": "KI Spracherkennung: Die intelligente Technologie hinter Diktat AI",
      "subtitle": "Entdecken Sie die faszinierende Welt der Künstlichen Intelligenz (KI), die es Diktat AI ermöglicht, gesprochene Worte präzise und blitzschnell in geschriebenen Text zu verwandeln."
    },
    "introduction": {
      "paragraph": "Verstehen Sie, wie diese fortschrittliche Technologie Ihren Arbeitsalltag revolutionieren kann, indem sie mühsame Tipparbeit überflüssig macht und Ihnen wertvolle Zeit zurückgibt."
    },
    "whatIsSection": {
      "title": "Das Gehirn hinter den Worten: Ein Einblick in die KI-Spracherkennung",
      "paragraph": "KI-Spracherkennung, oft auch als Automatische Spracherkennung (ASR - Automatic Speech Recognition) bezeichnet, ist ein hochentwickeltes Feld der Künstlichen Intelligenz. Im Kern geht es darum, Software so zu trainieren, dass sie menschliche Sprache verstehen und in ein maschinenlesbares Format – meist Text – umwandeln kann.",
      "models": {
        "acoustic": {
          "title": "Akustische Modelle",
          "description": "Diese Modelle analysieren die rohen Audiodaten (Schallwellen) und zerlegen sie in kleinste lautliche Einheiten (Phoneme)."
        },
        "language": {
          "title": "Sprachmodelle",
          "description": "Diese Modelle verstehen den Kontext, die Grammatik und die Wahrscheinlichkeit von Wortfolgen in einer bestimmten Sprache. Sie helfen der KI, zwischen ähnlich klingenden Wörtern zu unterscheiden (z.B. \"Meer\" vs. \"mehr\")."
        },
        "machine": {
          "title": "Machine Learning & Neuronale Netze",
          "description": "Moderne KI-Spracherkennungssysteme, wie das Herzstück von Diktat AI, nutzen komplexe Algorithmen des maschinellen Lernens, insbesondere tiefe neuronale Netze (Deep Learning). Diese Netze werden mit riesigen Mengen an Sprachdaten trainiert, um Muster zu erkennen und ihre Genauigkeit kontinuierlich zu verbessern."
        }
      }
    },
    "howItWorksSection": {
      "title": "Von Ihrer Stimme zum fertigen Text: Der Prozess bei Diktat AI",
      "paragraph": "Bei Diktat AI haben wir diesen komplexen Prozess für Sie maximal vereinfacht. Unsere KI-gestützte Spracherkennung arbeitet im Hintergrund, um Ihnen schnelle und zuverlässige Transkriptionen zu liefern:",
      "steps": {
        "upload": {
          "title": "Audio-Upload",
          "description": "Sie laden Ihre Audiodatei hoch (z.B. Meeting-Aufzeichnung, Interview, Diktat) oder senden sie uns per E-Mail."
        },
        "preprocessing": {
          "title": "Vorverarbeitung",
          "description": "Unsere Systeme bereiten die Audiodatei optimal für die Analyse vor (z.B. Rauschunterdrückung, Formatkonvertierung)."
        },
        "analysis": {
          "title": "KI-Analyse & Transkription",
          "description": "Das akustische Modell zerlegt Ihre Sprache in Phoneme. Das Sprachmodell analysiert diese Phoneme im Kontext, erkennt Wörter, Satzstrukturen und sogar Sprecherwechsel (falls unterstützt)."
        },
        "postprocessing": {
          "title": "Nachbearbeitung & Formatierung",
          "description": "Der rohe Text wird automatisch formatiert (z.B. Absätze, Satzzeichen – je nach Einstellung und Audioqualität) und für Sie aufbereitet."
        },
        "delivery": {
          "title": "Bereitstellung",
          "description": "Sie erhalten den fertigen, bearbeitbaren Text – sicher, schnell und DSGVO-konform."
        }
      }
    },
    "benefitsSection": {
      "title": "Ihr Mehrwert: Warum KI-Spracherkennung mit Diktat AI unschlagbar ist",
      "benefits": {
        "time": {
          "title": "Enorme Zeitersparnis",
          "description": "Die KI transkribiert in einem Bruchteil der Zeit, die Sie für manuelles Abtippen benötigen würden. Stunden werden zu Minuten."
        },
        "precision": {
          "title": "Überragende Präzision",
          "description": "Unsere speziell trainierten Modelle liefern hochgenaue Transkripte, die eine solide Grundlage für Ihre weitere Arbeit bilden."
        },
        "productivity": {
          "title": "Gesteigerte Produktivität",
          "description": "Konzentrieren Sie sich auf inhaltliche Arbeit, Analyse oder kreative Prozesse, statt auf das Abtippen. Erledigen Sie mehr in kürzerer Zeit."
        },
        "security": {
          "title": "Höchste Datensicherheit",
          "description": "Wir verbinden die Power der KI mit strengsten Datenschutzrichtlinien. Ihre Daten sind bei uns sicher und werden gemäß DSGVO verarbeitet."
        },
        "focus": {
          "title": "Fokus auf das Wesentliche",
          "description": "Reduzieren Sie monotone Routineaufgaben und gewinnen Sie mentale Kapazitäten für Ihre Kernkompetenzen."
        },
        "searchable": {
          "title": "Durchsuchbarkeit & Archivierung",
          "description": "Verwandeln Sie wertvolles Audiowissen in leicht durchsuchbare und archivierbare Textdokumente."
        },
        "accessibility": {
          "title": "Barrierefreiheit",
          "description": "Erstellen Sie Textversionen von Audioinhalten und machen Sie diese einem breiteren Publikum zugänglich (z.B. Untertitel)."
        }
      }
    },
    "useCasesSection": {
      "title": "So profitieren Sie branchenübergreifend von KI-Spracherkennung",
      "cases": {
        "journalists": {
          "title": "Journalisten & Redakteure",
          "description": "Interviews und Pressekonferenzen werden durch KI-Transkription blitzschnell zu verwertbarem Text."
        },
        "lawyers": {
          "title": "Juristen & Anwälte",
          "description": "Diktate und Mandantengespräche sicher und präzise per KI in Schriftform bringen."
        },
        "content": {
          "title": "Content Creator",
          "description": "Podcast-Transkripte oder Video-Untertitel mühelos mit KI-Unterstützung erstellen."
        },
        "students": {
          "title": "Studierende & Akademiker",
          "description": "Vorlesungen und Forschungsinterviews effizient durch KI transkribieren lassen."
        },
        "business": {
          "title": "Geschäftsleute & Führungskräfte",
          "description": "Meeting-Protokolle und Ideen per KI-Diktat schnell festhalten."
        },
        "consultants": {
          "title": "Berater & Coaches",
          "description": "Klientengespräche dank KI-Transkription optimal nachbereiten."
        }
      }
    },
    "whyDiktatSection": {
      "title": "Diktat AI: Ihre erste Wahl für intelligente Spracherkennung",
      "features": {
        "models": {
          "title": "Spezialisierte KI-Modelle",
          "description": "Optimiert für hohe Genauigkeit und deutschsprachige Inhalte."
        },
        "ease": {
          "title": "Einfachste Bedienung",
          "description": "Keine technischen Hürden, intuitiver Prozess."
        },
        "integration": {
          "title": "Flexible Integration",
          "description": "Von E-Mail-Upload bis zu Software-Anbindungen (zukünftig)."
        },
        "pricing": {
          "title": "Faire und transparente Preise",
          "description": "Klare Kostenstruktur für planbare Ausgaben."
        },
        "security": {
          "title": "Verpflichtung zu Datenschutz & Sicherheit",
          "description": "DSGVO-konform und mit Fokus auf Vertraulichkeit."
        },
        "eu": {
          "title": "Made in Germany / EU-Fokus",
          "description": "Ein europäischer Anbieter, dem Sie vertrauen können."
        }
      }
    },
    "cta": {
      "title": "Erleben Sie die Zukunft der Textverarbeitung – angetrieben von KI!",
      "paragraph": "Schluss mit mühsamem Tippen. Lassen Sie die Künstliche Intelligenz von Diktat AI für sich arbeiten und verwandeln Sie Ihre Sprachaufnahmen mühelos in präzisen Text.",
      "button": "Kostenlos starten",
      "button2": "Preise ansehen"
    }
  },
  "en": {
    "seo": {
      "description": "AI speech recognition explained: How Diktat AI turns speech into accurate text – fast, secure and GDPR‑compliant."
    },
    "hero": {
      "title": "AI Speech Recognition: The Intelligent Technology Behind Diktat AI",
      "subtitle": "Discover the fascinating world of Artificial Intelligence (AI) that enables Diktat AI to transform spoken words into precise written text in the blink of an eye."
    },
    "introduction": {
      "paragraph": "Understand how this advanced technology can revolutionize your daily work by eliminating tedious typing and giving you valuable time back."
    },
    "whatIsSection": {
      "title": "The Brain Behind the Words: An Insight into AI Speech Recognition",
      "paragraph": "AI speech recognition, often also called Automatic Speech Recognition (ASR), is a highly developed field of artificial intelligence. At its core, it's about training software to understand human language and convert it into a machine-readable format – usually text.",
      "models": {
        "acoustic": {
          "title": "Acoustic Models",
          "description": "These models analyze raw audio data (sound waves) and break them down into the smallest phonetic units (phonemes)."
        },
        "language": {
          "title": "Language Models",
          "description": "These models understand context, grammar, and the probability of word sequences in a particular language. They help the AI distinguish between similarly sounding words (e.g., \"sea\" vs. \"see\")."
        },
        "machine": {
          "title": "Machine Learning & Neural Networks",
          "description": "Modern AI speech recognition systems, like the core of Diktat AI, use complex machine learning algorithms, particularly deep neural networks (Deep Learning). These networks are trained with huge amounts of speech data to recognize patterns and continuously improve their accuracy."
        }
      }
    },
    "howItWorksSection": {
      "title": "From Your Voice to Finished Text: The Process at Diktat AI",
      "paragraph": "At Diktat AI, we've maximally simplified this complex process for you. Our AI-powered speech recognition works in the background to provide you with fast and reliable transcriptions:",
      "steps": {
        "upload": {
          "title": "Audio Upload",
          "description": "You upload your audio file (e.g., meeting recording, interview, dictation) or send it to us via email."
        },
        "preprocessing": {
          "title": "Preprocessing",
          "description": "Our systems optimally prepare the audio file for analysis (e.g., noise reduction, format conversion)."
        },
        "analysis": {
          "title": "AI Analysis & Transcription",
          "description": "The acoustic model breaks down your speech into phonemes. The language model analyzes these phonemes in context, recognizes words, sentence structures, and even speaker changes (if supported)."
        },
        "postprocessing": {
          "title": "Post-processing & Formatting",
          "description": "The raw text is automatically formatted (e.g., paragraphs, punctuation – depending on settings and audio quality) and prepared for you."
        },
        "delivery": {
          "title": "Delivery",
          "description": "You receive the finished, editable text – secure, fast, and GDPR-compliant."
        }
      }
    },
    "benefitsSection": {
      "title": "Your Added Value: Why AI Speech Recognition with Diktat AI is Unbeatable",
      "benefits": {
        "time": {
          "title": "Enormous Time Savings",
          "description": "The AI transcribes in a fraction of the time you would need for manual typing. Hours become minutes."
        },
        "precision": {
          "title": "Outstanding Precision",
          "description": "Our specially trained models deliver highly accurate transcripts that form a solid foundation for your further work."
        },
        "productivity": {
          "title": "Increased Productivity",
          "description": "Focus on content work, analysis, or creative processes instead of typing. Get more done in less time."
        },
        "security": {
          "title": "Highest Data Security",
          "description": "We combine the power of AI with strictest data protection guidelines. Your data is safe with us and processed in accordance with GDPR."
        },
        "focus": {
          "title": "Focus on Content",
          "description": "Diktat AI focuses on the analysis and transcription of speech to extract and understand relevant information."
        },
        "searchable": {
          "title": "Searchability",
          "description": "Diktat AI allows you to search and find text quickly and efficiently."
        },
        "accessibility": {
          "title": "Accessible Speech Recognition",
          "description": "Diktat AI is designed to be accessible to people with disabilities, allowing them to use and understand spoken language."
        }
      }
    },
    "useCasesSection": {
      "title": "How You Can Benefit from AI Speech Recognition Across Industries",
      "cases": {
        "journalists": {
          "title": "Journalists & Editors",
          "description": "Interviews and press conferences are quickly converted into usable text through AI transcription."
        },
        "lawyers": {
          "title": "Lawyers & Attorneys",
          "description": "Safely and precisely convert dictations and client conversations into written form using AI."
        },
        "content": {
          "title": "Content Creators",
          "description": "Easily create podcast transcripts or video subtitles with AI support."
        },
        "students": {
          "title": "Students & Academics",
          "description": "Efficiently transcribe lectures and research interviews using AI."
        },
        "business": {
          "title": "Business",
          "description": "Diktat AI helps you work faster and more efficiently by helping you understand and analyze text."
        },
        "consultants": {
          "title": "Consultants",
          "description": "Diktat AI helps you work faster and more efficiently by helping you understand and analyze text."
        }
      }
    },
    "whyDiktatSection": {
      "title": "Diktat AI: Your First Choice for Intelligent Speech Recognition",
      "features": {
        "models": {
          "title": "Specialized AI Models",
          "description": "Optimized for high accuracy and German-language content."
        },
        "ease": {
          "title": "Simplest Operation",
          "description": "No technical hurdles, intuitive process."
        },
        "integration": {
          "title": "Flexible Integration",
          "description": "From email upload to software connections (future)."
        },
        "pricing": {
          "title": "Fair and Transparent Pricing",
          "description": "Clear cost structure for predictable expenses."
        },
        "security": {
          "title": "Commitment to Data Protection & Security",
          "description": "GDPR-compliant with a focus on confidentiality."
        },
        "eu": {
          "title": "EU-compliant Data Protection Regulations",
          "description": "Diktat AI is designed to comply with EU data protection regulations and processes your data securely and confidentially."
        }
      }
    },
    "cta": {
      "title": "Experience the Future of Text Processing – Powered by AI!",
      "paragraph": "No more tedious typing. Let Diktat AI's artificial intelligence work for you and effortlessly transform your audio recordings into precise text.",
      "button": "Start for free",
      "button2": "View prices"
    }
  },
  "nl": {
    "seo": {
      "description": "AI-spraakherkenning eenvoudig uitgelegd: Zo zet DiktatAI spraak snel en nauwkeurig om in tekst – veilig en AVG-conform."
    },
    "hero": {
      "title": "AI Spraakherkenning: De intelligente technologie achter DiktatAI",
      "subtitle": "Ontdek de fascinerende wereld van Kunstmatige Intelligentie (AI) die het DiktatAI mogelijk maakt om gesproken woorden nauwkeurig en bliksemsnel om te zetten in geschreven tekst."
    },
    "introduction": {
      "paragraph": "Begrijp hoe deze geavanceerde technologie uw werkdag kan revolutioneren door vervelend typewerk overbodig te maken en u waardevolle tijd teruggeeft."
    },
    "whatIsSection": {
      "title": "Het brein achter de woorden: Een kijkje in AI-spraakherkenning",
      "paragraph": "AI-spraakherkenning, vaak ook Automatische Spraakherkenning (ASR - Automatic Speech Recognition) genoemd, is een hoogontwikkeld gebied van Kunstmatige Intelligentie. In de kern gaat het erom software zo te trainen dat deze menselijke spraak kan begrijpen en omzetten in een machineleesbaar formaat – meestal tekst.",
      "models": {
        "acoustic": {
          "title": "Akoestische modellen",
          "description": "Deze modellen analyseren de ruwe audiodata (geluidsgolven) en splitsen deze op in kleinste klankeenheden (fonemen)."
        },
        "language": {
          "title": "Taalmodellen",
          "description": "Deze modellen begrijpen de context, grammatica en waarschijnlijkheid van woordvolgordes in een bepaalde taal. Ze helpen de AI om onderscheid te maken tussen gelijkluidende woorden (bijv. \"meer\" vs. \"meer\")."
        },
        "machine": {
          "title": "Machine Learning & Neurale netwerken",
          "description": "Moderne AI-spraakherkenningssystemen, zoals het hart van DiktatAI, gebruiken complexe algoritmen van machinaal leren, vooral diepe neurale netwerken (Deep Learning). Deze netwerken worden getraind met enorme hoeveelheden spraakdata om patronen te herkennen en hun nauwkeurigheid continu te verbeteren."
        }
      }
    },
    "howItWorksSection": {
      "title": "Van uw stem naar de voltooide tekst: Het proces bij DiktatAI",
      "paragraph": "Bij DiktatAI hebben we dit complexe proces maximaal voor u vereenvoudigd. Onze AI-gestuurde spraakherkenning werkt op de achtergrond om u snelle en betrouwbare transcripties te leveren:",
      "steps": {
        "upload": {
          "title": "Audio-upload",
          "description": "U uploadt uw audiobestand (bijv. meeting-opname, interview, dictaat) of stuurt het naar ons per e-mail."
        },
        "preprocessing": {
          "title": "Voorbewerking",
          "description": "Onze systemen bereiden het audiobestand optimaal voor op analyse (bijv. ruisonderdrukking, formaatconversie)."
        },
        "analysis": {
          "title": "AI-analyse & transcriptie",
          "description": "Het akoestische model splitst uw spraak op in fonemen. Het taalmodel analyseert deze fonemen in context, herkent woorden, zinsstructuren en zelfs sprekerwisselingen (indien ondersteund)."
        },
        "postprocessing": {
          "title": "Nabewerking & opmaak",
          "description": "De ruwe tekst wordt automatisch opgemaakt (bijv. alinea's, leestekens – afhankelijk van instelling en audiokwaliteit) en voor u voorbereid."
        },
        "delivery": {
          "title": "Levering",
          "description": "U ontvangt de voltooide, bewerkbare tekst – veilig, snel en AVG-conform."
        }
      }
    },
    "benefitsSection": {
      "title": "Uw meerwaarde: Waarom AI-spraakherkenning met DiktatAI onverslaanbaar is",
      "benefits": {
        "time": {
          "title": "Enorme tijdsbesparing",
          "description": "De AI transcribeert in een fractie van de tijd die u nodig zou hebben voor handmatig typen. Uren worden minuten."
        },
        "precision": {
          "title": "Uitstekende precisie",
          "description": "Onze speciaal getrainde modellen leveren zeer nauwkeurige transcripties die een solide basis vormen voor uw verdere werk."
        },
        "productivity": {
          "title": "Verhoogde productiviteit",
          "description": "Concentreer u op inhoudelijk werk, analyse of creatieve processen in plaats van typen. Doe meer in kortere tijd."
        },
        "security": {
          "title": "Hoogste dataveiligheid",
          "description": "We combineren de kracht van AI met de strengste privacyrichtlijnen. Uw data is bij ons veilig en wordt conform de AVG verwerkt."
        },
        "focus": {
          "title": "Focus op het wezenlijke",
          "description": "Verminder monotone routinetaken en win mentale capaciteit voor uw kerncompetenties."
        },
        "searchable": {
          "title": "Doorzoekbaarheid & archivering",
          "description": "Zet waardevolle audiokennis om in gemakkelijk doorzoekbare en archiveerbare tekstdocumenten."
        },
        "accessibility": {
          "title": "Toegankelijkheid",
          "description": "Maak tekstversies van audio-inhoud en maak deze toegankelijk voor een breder publiek (bijv. ondertitels)."
        }
      }
    },
    "useCasesSection": {
      "title": "Zo profiteert u brancheover­schrijdend van AI-spraakherkenning",
      "cases": {
        "journalists": {
          "title": "Journalisten & redacteuren",
          "description": "Interviews en persconferenties worden door AI-transcriptie bliksemsnel bruikbare tekst."
        },
        "lawyers": {
          "title": "Juristen & advocaten",
          "description": "Dictaten en cliëntgesprekken veilig en nauwkeurig via AI in schriftelijke vorm brengen."
        },
        "content": {
          "title": "Content creators",
          "description": "Podcast-transcripties of video-ondertitels moeiteloos met AI-ondersteuning maken."
        },
        "students": {
          "title": "Studenten & academici",
          "description": "Colleges en onderzoeksinterviews efficiënt door AI laten transcriberen."
        },
        "business": {
          "title": "Zakenmensen & leidinggevenden",
          "description": "Vergadernotulen en ideeën via AI-dictaat snel vastleggen."
        },
        "consultants": {
          "title": "Adviseurs & coaches",
          "description": "Cliëntgesprekken dankzij AI-transcriptie optimaal uitwerken."
        }
      }
    },
    "whyDiktatSection": {
      "title": "DiktatAI: Uw eerste keuze voor intelligente spraakherkenning",
      "features": {
        "models": {
          "title": "Gespecialiseerde AI-modellen",
          "description": "Geoptimaliseerd voor hoge nauwkeurigheid en Nederlandstalige inhoud."
        },
        "ease": {
          "title": "Eenvoudigste bediening",
          "description": "Geen technische drempels, intuïtief proces."
        },
        "integration": {
          "title": "Flexibele integratie",
          "description": "Van e-mail upload tot software-koppelingen (toekomstig)."
        },
        "pricing": {
          "title": "Eerlijke en transparante prijzen",
          "description": "Heldere kostenstructuur voor planbare uitgaven."
        },
        "security": {
          "title": "Verplichting tot privacy & veiligheid",
          "description": "AVG-conform en met focus op vertrouwelijkheid."
        },
        "eu": {
          "title": "Made in Germany / EU-focus",
          "description": "Een Europese aanbieder die u kunt vertrouwen."
        }
      }
    },
    "cta": {
      "title": "Ervaar de toekomst van tekstverwerking – aangedreven door AI!",
      "paragraph": "Sluss met moeizaam typen. Laat de Kunstmatige Intelligentie van DiktatAI voor u werken en zet uw spraakopnamen moeiteloos om in nauwkeurige tekst.",
      "button": "Gratis starten",
      "button2": "Prijzen bekijken"
    }
  }
}
</i18n>

<style scoped>
/* Override accent and secondary colors with pink */
:deep(.text-accent) {
  color: #ef56a4 !important;
}

:deep(.text-secondary) {
  color: #ef56a4 !important;
}

:deep(.bg-accent) {
  background-color: #ef56a4 !important;
}

:deep(.bg-secondary) {
  background-color: #ef56a4 !important;
}

:deep(.from-accent\/10) {
  --tw-gradient-from: rgba(239, 86, 164, 0.1) !important;
}

:deep(.to-secondary\/10) {
  --tw-gradient-to: rgba(239, 86, 164, 0.1) !important;
}

:deep(.border-accent\/20) {
  border-color: rgba(239, 86, 164, 0.2) !important;
}

.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
