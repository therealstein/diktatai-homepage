<template>
  <div class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300">
    <h2 class="font-display text-3xl font-bold mb-8">{{ heading }}</h2>
    <p v-if="subheading" class="mb-6">{{ subheading }}</p>
    <template v-for="(section, index) in sections" :key="index">
      <div class="mb-8">
        <h3 v-if="section.title" class="font-display text-2xl font-bold mb-4">{{ section.title }}</h3>
        <ul class="space-y-4">
          <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Section {
  title?: string;
  items: string[];
}

defineProps({
  heading: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: false
  },
  sections: {
    type: Array as () => Section[],
    required: true
  }
})
</script> 


