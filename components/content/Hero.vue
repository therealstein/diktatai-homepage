<template>
  <div
    class="hero min-h-[40vh] relative"
    :class="[
      { 'min-h-[60vh]': size === 'large' },
      { 'min-h-[80vh]': size === 'full' }
    ]"
    :style="[
      backgroundStyle,
      overlayStyle
    ]"
  >
    <!-- Background Pattern (optional) -->
    <div v-if="pattern" class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" :class="pattern"></div>
    </div>

    <!-- Content -->
    <div class="hero-content text-center relative z-10">
      <div
        :class="[
          'p-8 rounded-3xl shadow-2xl border',
          {
            'backdrop-blur-sm bg-white/10 border-white/20': variant === 'glass',
            'bg-base-100 border-base-300': variant === 'solid',
            'max-w-2xl': size === 'default',
            'max-w-3xl': size === 'large',
            'max-w-4xl': size === 'full'
          }
        ]"
      >
        <!-- Title -->
        <h1
          class="font-display text-4xl font-bold mb-2"
          :class="[
            { 'text-white': variant === 'glass' },
            { 'text-shadow': variant === 'glass' }
          ]"
        >
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p
          v-if="subtitle"
          class="text-lg mb-6"
          :class="[
            { 'text-white': variant === 'glass' },
            { 'text-shadow': variant === 'glass' }
          ]"
        >
          {{ subtitle }}
        </p>

        <!-- Description -->
        <p
          v-if="description"
          class="text-base-content/80 mb-8"
          :class="[
            { 'text-white': variant === 'glass' },
            { 'text-shadow': variant === 'glass' }
          ]"
        >
          {{ description }}
        </p>

        <!-- Features -->
        <div v-if="features?.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-center"
            :class="{ 'text-white': variant === 'glass' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              :class="{ 'text-accent': variant === 'solid' }"
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

        <!-- CTA Buttons -->
        <div v-if="cta || secondaryCta" class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLinkLocale v-if="cta" :to="cta.to">
            <button
              class="font-display bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide w-full sm:w-auto"
            >
              {{ cta.text }}
            </button>
          </NuxtLinkLocale>
          <NuxtLinkLocale v-if="secondaryCta" :to="secondaryCta.to">
            <button
              class="font-display bg-white/10 text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-all shadow-lg tracking-wide border-2 border-white/70 w-full sm:w-auto"
            >
              {{ secondaryCta.text }}
            </button>
          </NuxtLinkLocale>
        </div>

        <!-- Additional Info -->
        <div v-if="additionalInfo" class="mt-8 text-sm opacity-80">
          {{ additionalInfo }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Cta {
  to: string;
  text: string;
}

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  cta?: Cta;
  secondaryCta?: Cta;
  additionalInfo?: string;
  variant?: 'glass' | 'solid';
  size?: 'default' | 'large' | 'full';
  background?: {
    type: 'gradient' | 'image' | 'color';
    value: string;
  };
  overlay?: {
    color: string;
    opacity: number;
  };
  pattern?: 'dots' | 'grid' | 'waves';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'glass',
  size: 'default'
});

const backgroundStyle = computed(() => {
  if (!props.background) return {};
  
  switch (props.background.type) {
    case 'gradient':
      return { background: props.background.value };
    case 'image':
      return {
        backgroundImage: `url(${props.background.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    case 'color':
      return { backgroundColor: props.background.value };
    default:
      return {};
  }
});

const overlayStyle = computed(() => {
  if (!props.overlay) return {};
  
  return {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: props.overlay.color,
      opacity: props.overlay.opacity
    }
  };
});
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}

.dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

.grid {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(90deg, currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

.waves {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style> 