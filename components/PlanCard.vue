<template>
  <div
    class="relative bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-visible"
    :class="[isSelected ? 'border-indigo-500 shadow-indigo-200/50' : '']"
  >
    <!-- 7 Day Free Trial Badge for Monthly Plan -->
    <div
      v-if="plan.identifier === 'monthly'"
      class="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold transform rotate-12 hover:rotate-6 transition-transform duration-300 shadow-lg border-2 border-white z-10"
      style="animation: pulse-glow 2s infinite"
    >
      <div class="flex items-center gap-1">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ t("sevenDaysFree") }}</span>
      </div>
    </div>

    <div class="p-8 flex flex-col h-full">
      <div class="flex-grow">
        <!-- Pioneer Offer Badge -->
        <div
          v-if="plan.badge"
          class="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4"
        >
          {{ plan.badge }}
        </div>

        <div
          v-if="plan.originalPrice"
          class="text-sm line-through text-gray-500 mb-1"
        >
          {{ plan.originalPrice }}
        </div>

        <div
          class="flex items-end gap-1 text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          <span>{{ plan.price }}</span>
          <span class="text-sm text-gray-500" v-if="plan.period">
            /{{ plan.period }}
          </span>
        </div>

        <h2 class="mt-2 text-xl font-semibold text-gray-800">
          {{ plan.displayName }}
        </h2>

        <ul class="mt-6 space-y-3">
          <li
            v-for="(feature, index) in plan.features"
            :key="index"
            class="flex items-start gap-3"
          >
            <div
              class="w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span
              class="text-gray-700 text-sm leading-relaxed"
              v-html="feature"
            ></span>
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <button
          class="w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group"
          :class="[
            isSelected
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-white/80 border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300',
          ]"
          :disabled="processing"
          @click="$emit('select', plan)"
        >
          <div v-if="processing" class="flex items-center justify-center gap-2">
            <div
              class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            ></div>
            <span>{{ t("loading") }}</span>
          </div>
          <div
            v-else-if="isSelected"
            class="flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            <span>{{ t("selected") }}</span>
          </div>
          <span v-else>{{ t("selectPlan") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

interface Plan {
  identifier: string;
  displayName: string;
  price: string;
  period: string;
  description: string;
  originalPrice?: string;
  savings?: string;
  features: string[];
  badge?: string;
}

defineProps<{
  plan: Plan;
  isSelected: boolean;
  processing: boolean;
}>();

defineEmits<{
  (e: "select", plan: Plan): void;
}>();
</script>

<style scoped>
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow:
      0 0 5px rgba(16, 185, 129, 0.5),
      0 0 10px rgba(16, 185, 129, 0.3),
      0 0 15px rgba(16, 185, 129, 0.2);
  }
  50% {
    box-shadow:
      0 0 10px rgba(16, 185, 129, 0.8),
      0 0 20px rgba(16, 185, 129, 0.6),
      0 0 30px rgba(16, 185, 129, 0.4);
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "sevenDaysFree": "7 Days Free",
    "loading": "Loading...",
    "selected": "Selected",
    "selectPlan": "Select Plan"
  },
  "de": {
    "sevenDaysFree": "7 Tage kostenlos",
    "loading": "Wird geladen...",
    "selected": "Ausgewählt",
    "selectPlan": "Plan wählen"
  },
  "nl": {
    "sevenDaysFree": "7 dagen gratis",
    "loading": "Wordt geladen...",
    "selected": "Geselecteerd",
    "selectPlan": "Kies een plan"
  },
  "es": {
    "sevenDaysFree": "7 días gratis",
    "loading": "Cargando...",
    "selected": "Seleccionado",
    "selectPlan": "Seleccionar plan"
  }
}
</i18n>
