<template>
  <div class="card bg-base-200 shadow-xl mb-12 p-8 rounded-3xl border border-base-300">
    <h2 class="font-display text-2xl font-bold mb-6">{{ title }}</h2>
    <p v-if="description" class="mb-6">{{ description }}</p>
    <div :class="[
      'grid gap-6',
      {
        'grid-cols-1 md:grid-cols-2': layout === 'default',
        'grid-cols-1': layout === 'single',
        'grid-cols-1 md:grid-cols-3': layout === 'triple'
      }
    ]">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="p-4 bg-base-100 rounded-xl shadow border border-base-300"
        :class="{
          'md:col-span-2': card.spanFull
        }"
      >
        <div class="flex items-center mb-3">
          <svg
            v-if="card.icon"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-accent mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-html="card.icon"
          />
          <h3 class="font-bold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Card {
  title: string;
  description: string;
  icon?: string;
  spanFull?: boolean;
}

interface Props {
  title: string;
  description?: string;
  cards: Card[];
  layout?: 'default' | 'single' | 'triple';
}

withDefaults(defineProps<Props>(), {
  layout: 'default'
});
</script> 