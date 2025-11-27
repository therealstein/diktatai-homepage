<template>
  <div class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300">
    <div class="flex flex-col md:flex-row gap-8 items-center" :class="{ 'md:flex-row-reverse': imageRight }">
      <!-- Image Section -->
      <div class="w-full md:w-1/2">
        <img
          :src="image"
          :alt="imageAlt"
          class="w-full h-auto rounded-xl shadow-lg"
          :class="{ 'object-cover aspect-video': imageCover }"
        />
      </div>

      <!-- Content Section -->
      <div class="w-full md:w-1/2">
        <h2 class="font-display text-3xl font-bold mb-4">{{ title }}</h2>
        <p v-if="subtitle" class="text-xl text-base-content/80 mb-6">{{ subtitle }}</p>
        <p class="text-base-content/70 mb-6">{{ description }}</p>
        <div v-if="features?.length" class="space-y-4">
          <div v-for="(feature, index) in features" :key="index" class="flex items-start">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{{ feature }}</span>
          </div>
        </div>
        <div v-if="cta" class="mt-8">
          <component
            :is="isAuthLink(cta.to) ? 'a' : NuxtLinkLocale"
            :href="isAuthLink(cta.to) ? getAuthUrl(cta.to) : undefined"
            :to="isAuthLink(cta.to) ? undefined : cta.to"
          >
            <button
              class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
            >
              {{ cta.text }}
            </button>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const NuxtLinkLocale = resolveComponent('NuxtLinkLocale');
const { getAppUrl } = useAppUrl();

interface Cta {
  to: string;
  text: string;
}

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageRight?: boolean;
  imageCover?: boolean;
  features?: string[];
  cta?: Cta;
}

withDefaults(defineProps<Props>(), {
  imageRight: false,
  imageCover: false
});

const isAuthLink = (to: string): boolean => to.startsWith('auth-');

const getAuthUrl = (to: string): string => {
  const path = '/' + to.replace('-', '/');
  return getAppUrl(path);
};
</script> 