<template>
  <!-- How It Works Section -->
  <div class="silver-bg py-16 my-8">
    <div class="container mx-auto px-4 text-center">
      <h2 class="font-display text-4xl font-bold mb-4 tracking-tight">{{ $t('howItWorks.title') }}</h2>
      <p class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto mb-12 leading-relaxed">
        {{ $t('howItWorks.description') }}
      </p>
      <ul class="steps steps-vertical lg:steps-horizontal w-full">
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ $t('howItWorks.upload') }}</div>
            <div class="text-sm text-base-content/70">{{ $t('howItWorks.uploadDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ $t('howItWorks.transcription') }}</div>
            <div class="text-sm text-base-content/70">{{ $t('howItWorks.transcriptionDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ $t('howItWorks.secureProcessing') }}</div>
            <div class="text-sm text-base-content/70">{{ $t('howItWorks.secureProcessingDescription') }}</div>
          </div>
        </li>
        <li class="step step-primary">
          <div class="mt-4 lg:mt-8">
            <div class="font-display font-semibold text-lg">{{ $t('howItWorks.readyToUse') }}</div>
            <div class="text-sm text-base-content/70">{{ $t('howItWorks.readyToUseDescription') }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// No props or custom logic needed yet
</script>

<style scoped>
.silver-bg {
  background: linear-gradient(to right, #f5f5f5, #e0e0e0, #c0c0c0, #a9a9a9);
}
</style> 