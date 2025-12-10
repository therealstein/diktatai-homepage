<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  useScope: 'local'
})

// Initialize as false and check localStorage in onMounted
const showBanner = ref(false)

const sendPositiveSignal = () => {
  // Consent Mode Signal für Google
  console.log('sendPositiveSignal')
}

const handleConsent = (accepted: boolean) => {
  // Always hide the banner
  showBanner.value = false
  // Store that consent was given (regardless of accept/decline)
  localStorage.setItem('consent_shown', 'true')
  // Only send positive signal if accepted
  if (accepted) {
    sendPositiveSignal()
  }
}

onMounted(() => {
  // Only show banner if consent hasn't been given
  if (!localStorage.getItem('consent_shown')) {
    showBanner.value = true
    
 
  } else {
    // If consent was already given, send positive signal
    sendPositiveSignal()
  }
})
</script>

<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-50">
    <div class="bg-white/90 p-4 text-sm shadow-lg">
      <div class="container mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col gap-1">
          <span>{{ t('message') }}</span>
          <NuxtLinkLocale to="privacy" class="link link-primary text-xs">
            {{ t('readMore') }}
          </NuxtLinkLocale>
        </div>
        <div class="flex gap-2">
          <button 
            @click="handleConsent(false)"
            class="btn btn-sm btn-ghost"
          >
            {{ t('decline') }}
          </button>
          <button 
            @click="handleConsent(true)"
            class="btn btn-sm btn-primary"
          >
            {{ t('accept') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "message": "We use cookies.",
    "readMore": "Read more in our Privacy Policy",
    "accept": "Accept",
    "decline": "Decline"
  },
  "de": {
    "message": "Wir nutzen Cookies.",
    "readMore": "Lesen Sie mehr in unserer Datenschutzerklärung",
    "accept": "Akzeptieren",
    "decline": "Ablehnen"
  },
  "nl": {
    "message": "Wij gebruiken cookies.",
    "readMore": "Lees meer in ons Privacybeleid",
    "accept": "Accepteren",
    "decline": "Weigeren"
  },
  "es": {
    "message": "Utilizamos cookies.",
    "readMore": "Lea más en nuestra Política de Privacidad",
    "accept": "Aceptar",
    "decline": "Rechazar"
  }
}
</i18n> 