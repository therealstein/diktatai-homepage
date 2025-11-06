import { ArrowLeftIcon, TrashIcon } from '@heroicons/vue/24/solid'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ArrowLeftIcon', ArrowLeftIcon)
  nuxtApp.vueApp.component('TrashIcon', TrashIcon)
}) 