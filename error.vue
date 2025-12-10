<template>
  <!-- App Error Page (PostHog style - clean & minimal) -->
  <div
    v-if="isAppError"
    class="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4"
  >
    <div class="w-full max-w-lg text-center">
      <div class="mb-8 flex justify-center">
        <Logo class="w-48" />
      </div>

      <!-- Clean error message without 404 -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-3">
          {{ t("error.somethingWentWrong") }}
        </h1>
        <p class="text-lg text-gray-600">
          {{ t("error.somethingWentWrongMessage") }}
        </p>
      </div>

      <!-- Action buttons -->
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <NuxtLinkLocale
          to="/app"
          class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          {{ t("error.backToApp") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          to="/kontakt"
          class="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
        >
          {{ t("error.getSupport") }}
        </NuxtLinkLocale>
      </div>

      <div class="mt-12 text-sm text-gray-500">
        <p>
          {{ t("error.needHelp") }}
          <a
            href="mailto:support@diktat.ai"
            class="text-purple-600 hover:text-purple-800 transition-colors"
            >support@diktat.ai</a
          >
        </p>
      </div>
    </div>
  </div>

  <!-- General Error Page (original style with 404) -->
  <div
    v-else
    class="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-4"
  >
    <div class="w-full max-w-xl text-center">
      <div class="mb-8 flex justify-center">
        <Logo class="w-60" />
      </div>

      <div class="relative">
        <h1 class="text-9xl font-bold text-purple-900 opacity-20">404</h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-4xl font-bold text-purple-900">
            {{ t("error.pageNotFound") }}
          </h2>
        </div>
      </div>

      <p class="mt-6 text-lg text-gray-600">
        {{ t("error.pageNotFoundMessage") }}
      </p>

      <div class="mt-10 flex justify-center space-x-4">
        <NuxtLinkLocale
          to="/"
          class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {{ t("error.backHome") }}
        </NuxtLinkLocale>
        <button
          @click="handleError"
          class="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-700 font-medium hover:bg-purple-50 transition-all duration-300"
        >
          {{ t("error.tryAgain") }}
        </button>
      </div>

      <div class="mt-16 text-sm text-gray-500">
        <p>
          {{ t("error.needHelp") }}
          <a
            href="mailto:support@diktat.ai"
            class="text-purple-600 underline hover:text-purple-800"
            >support@diktat.ai</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const { t } = useI18n();
const route = useRoute();

// Check if the error occurred in the /app path
const isAppError = computed(() => {
  const path = route?.path || props.error?.url || "";
  return (
    path.startsWith("/app") ||
    path.startsWith("/en/app") ||
    path.startsWith("/de/app")
  );
});

function handleError() {
  clearError({ redirect: "/" });
}
</script>

<i18n lang="json">
{
  "en": {
    "error": {
      "pageNotFound": "Page Not Found",
      "pageNotFoundMessage": "Sorry, the page you are looking for doesn't exist or has been moved.",
      "somethingWentWrong": "Something went wrong",
      "somethingWentWrongMessage": "We couldn't find the page you're looking for. It might have been moved or doesn't exist.",
      "backHome": "Back to Home",
      "backToApp": "Back to App",
      "getSupport": "Get Support",
      "tryAgain": "Try Again",
      "needHelp": "Need help? Contact us at"
    }
  },
  "de": {
    "error": {
      "pageNotFound": "Seite nicht gefunden",
      "pageNotFoundMessage": "Entschuldigung, die gesuchte Seite existiert nicht oder wurde verschoben.",
      "somethingWentWrong": "Etwas ist schiefgelaufen",
      "somethingWentWrongMessage": "Wir konnten die gesuchte Seite nicht finden. Sie wurde möglicherweise verschoben oder existiert nicht.",
      "backHome": "Zurück zur Startseite",
      "backToApp": "Zurück zur App",
      "getSupport": "Support erhalten",
      "tryAgain": "Erneut versuchen",
      "needHelp": "Benötigen Sie Hilfe? Kontaktieren Sie uns unter"
    }
  },
  "nl": {
    "error": {
      "pageNotFound": "Pagina niet gevonden",
      "pageNotFoundMessage": "Sorry, de gezochte pagina bestaat niet of is verplaatst.",
      "somethingWentWrong": "Er is iets misgegaan",
      "somethingWentWrongMessage": "We konden de gezochte pagina niet vinden. Deze is mogelijk verplaatst of bestaat niet.",
      "backHome": "Terug naar de startpagina",
      "backToApp": "Terug naar de app",
      "getSupport": "Ondersteuning krijgen",
      "tryAgain": "Opnieuw proberen",
      "needHelp": "Hulp nodig? Neem contact met ons op via"
    }
  },
  "es": {
    "error": {
      "pageNotFound": "Página no encontrada",
      "pageNotFoundMessage": "Lo sentimos, la página que busca no existe o ha sido movida.",
      "somethingWentWrong": "Algo salió mal",
      "somethingWentWrongMessage": "No pudimos encontrar la página que busca. Puede haber sido movida o no existe.",
      "backHome": "Volver al inicio",
      "backToApp": "Volver a la aplicación",
      "getSupport": "Obtener soporte",
      "tryAgain": "Intentar de nuevo",
      "needHelp": "¿Necesita ayuda? Contáctenos en"
    }
  }
}
</i18n>
