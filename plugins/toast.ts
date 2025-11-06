import { defineNuxtPlugin } from '#app'
import Toast from '@/components/ui/Toast.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Toast', Toast)
}) 