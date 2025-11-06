<template>
  <!-- Final CTA Section - Enhanced -->
  <div class="w-full py-16   bg-cover bg-center" style="background-image: url('/cta-web.webp');">
    <div class="flex justify-center items-center text-center">
      <div class="max-w-2xl backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 class="font-display text-4xl font-bold leading-tight tracking-tight mb-2">{{ $t('components.cta.title') }}</h2>
        <p class="py-6 text-lg font-medium leading-relaxed">
          {{ $t('components.cta.description') }}
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <NuxtLinkLocale to="auth-register">
            <button class="font-display bg-pink-500 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide">{{ $t('components.cta.startFree') }}</button>
          </NuxtLinkLocale>
          <NuxtLinkLocale to="pricing">
            <button class="font-display border-2 border-white/70 bg-white/10 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-white/20 transition-all shadow-lg tracking-wide">{{ $t('components.cta.viewPricing') }}</button>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or custom logic needed yet
</script>

<style scoped>
/* Component-specific styles if needed */
</style> 