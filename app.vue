<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '~/assets/css/main.css';

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Diktat AI',
        url: 'https://diktat.ai/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          category: 'Transcription Service',
        },
        potentialAction: {
          '@type': 'UseAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://diktat.ai/auth/register',
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
        },
      }),
    },
  ],
});
</script>
