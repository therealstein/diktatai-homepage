<template>
  <div
    :class="[
      'card shadow-xl p-8 rounded-3xl',
      {
        'bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20': variant === 'gradient',
        'bg-cover bg-center': variant === 'image',
      }
    ]"
    :style="variant === 'image' ? { backgroundImage: `url(${backgroundImage})` } : {}"
  >
    <div
      :class="[
        'text-center',
        { 'backdrop-blur-sm bg-white/10 border border-white/20': variant === 'image' }
      ]"
    >
      <h2 class="font-display text-3xl font-bold mb-4" :class="{ 'text-4xl': variant === 'image' }">
        {{ title }}
      </h2>
      <p class="text-lg mb-8" :class="{ 'py-6 font-medium leading-relaxed': variant === 'image' }">
        {{ description }}
      </p>

      <div :class="[
        'flex justify-center space-x-4',
        { 'flex-col md:flex-row items-center gap-4': variant === 'image' }
      ]">
        <component
          :is="isAuthLink(primaryLink.to) ? 'a' : NuxtLinkLocale"
          :href="isAuthLink(primaryLink.to) ? getAuthUrl(primaryLink.to) : undefined"
          :to="isAuthLink(primaryLink.to) ? undefined : primaryLink.to"
        >
          <button
            class="font-display text-xl font-bold py-3 px-8 rounded-full transition-all shadow-lg tracking-wide"
            :class="[
              primaryLink.variant === 'filled' ? 'bg-pink-500 text-white hover:bg-pink-600' :
              primaryLink.variant === 'outline' ? 'bg-white text-pink-500 hover:bg-gray-50 border-2 border-pink-500' :
              'border-2 border-white/70 bg-white/10 text-white hover:bg-white/20'
            ]"
          >
            {{ primaryLink.text }}
          </button>
        </component>

        <component
          v-if="secondaryLink"
          :is="isAuthLink(secondaryLink.to) ? 'a' : NuxtLinkLocale"
          :href="isAuthLink(secondaryLink.to) ? getAuthUrl(secondaryLink.to) : undefined"
          :to="isAuthLink(secondaryLink.to) ? undefined : secondaryLink.to"
        >
          <button
            class="font-display text-xl font-bold py-3 px-8 rounded-full transition-all shadow-lg tracking-wide"
            :class="[
              secondaryLink.variant === 'filled' ? 'bg-pink-500 text-white hover:bg-pink-600' :
              secondaryLink.variant === 'outline' ? 'bg-white text-pink-500 hover:bg-gray-50 border-2 border-pink-500' :
              'border-2 border-white/70 bg-white/10 text-white hover:bg-white/20'
            ]"
          >
            {{ secondaryLink.text }}
          </button>
        </component>
      </div>

      <div v-if="footerLinks?.length" class="text-center mt-8 space-x-4">
        <template v-for="(link, index) in footerLinks" :key="index">
          <component
            :is="isAuthLink(link.to) ? 'a' : NuxtLinkLocale"
            :href="isAuthLink(link.to) ? getAuthUrl(link.to) : undefined"
            :to="isAuthLink(link.to) ? undefined : link.to"
            class="text-accent hover:underline"
          >
            {{ link.text }}
          </component>
          <span v-if="index < footerLinks.length - 1" class="text-gray-400">|</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const NuxtLinkLocale = resolveComponent('NuxtLinkLocale');
const { getAppUrl } = useAppUrl();

interface Link {
  to: string;
  text: string;
  variant?: 'filled' | 'outline' | 'transparent';
}

interface Props {
  variant?: 'gradient' | 'image';
  backgroundImage?: string;
  title: string;
  description: string;
  primaryLink: Link;
  secondaryLink?: Link;
  footerLinks?: Link[];
}

defineProps<Props>();

const isAuthLink = (to: string): boolean => to.startsWith('auth-');

const getAuthUrl = (to: string): string => {
  const path = '/' + to.replace('-', '/');
  return getAppUrl(path);
};
</script> 