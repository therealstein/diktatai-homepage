<template>
  <div v-if="state.isVisible" :class="['toast', getPositionClasses(state.position)]">
    <div :class="[
      'alert',
      {
        'alert-info': state.type === 'info',
        'alert-success': state.type === 'success',
        'alert-warning': state.type === 'warning',
        'alert-error': state.type === 'error'
      }
    ]">
      <span>{{ state.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast'

const { state, getPositionClasses } = useToast()
</script> 