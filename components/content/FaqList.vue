<template>
  <div class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300">
    <h2 class="font-display text-3xl font-bold mb-8">{{ heading }}</h2>
    <p v-if="subheading" class="mb-8">{{ subheading }}</p>
    <div class="space-y-8">
      <div v-for="(item, index) in items" :key="index" class="border-b border-base-300 pb-4">
        <button 
          @click="toggleItem(index)"
          class="w-full text-left flex justify-between items-center"
        >
          <h3 class="font-display text-2xl font-bold mb-2">{{ item.question }}</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transform transition-transform duration-200"
            :class="{ 'rotate-180': openItems[index] }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <p v-if="openItems[index]" class="mt-2">{{ item.answer }}</p>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FaqItem {
  question: string;
  answer: string;
}

const props = defineProps<{
  heading: string;
  subheading?: string;
  items: FaqItem[];
}>();

const openItems = ref(props.items.map(() => false));

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};
</script> 