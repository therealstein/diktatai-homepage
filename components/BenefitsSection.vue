<template>
  <!-- Benefits Section - Enhanced with Cards -->
  <div class="container mx-auto px-4 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-4 tracking-tight">
      {{ $t('app.benefitsSection.title') }}
    </h2>
    <p
      class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
    >
      {{ $t('app.benefitsSection.description') }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div
        class="card glass bg-base-100 shadow-xl rounded-3xl border border-base-300 p-6"
      >
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{
                  $t('app.benefitsSection.benefits.timeSaving.title')
                }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ $t('app.benefitsSection.benefits.timeSaving.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{
                  $t('app.benefitsSection.benefits.productivity.title')
                }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{
                  $t('app.benefitsSection.benefits.productivity.description')
                }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{
                  $t('app.benefitsSection.benefits.precision.title')
                }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ $t('app.benefitsSection.benefits.precision.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ $t('app.benefitsSection.benefits.security.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ $t('app.benefitsSection.benefits.security.description') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full bg-[#EE56A4] flex items-center justify-center text-white shrink-0 mt-1"
            >
              ✓
            </div>
            <div>
              <strong
                class="font-display text-lg font-semibold tracking-tight"
                >{{ $t('app.benefitsSection.benefits.focus.title') }}</strong
              >
              <p class="text-base-content/80 leading-relaxed">
                {{ $t('app.benefitsSection.benefits.focus.description') }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <!-- Placeholder for an image or illustration -->
        <img
          src="/diktatai-transkribieren.jpg"
          :alt="$t('app.benefitsSection.title')"
          class="rounded-3xl shadow-xl"
        />
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
