<template>
  <footer class="bg-base-100 border-t">
    <!-- Hauptinhalt des Fußzeile -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <!-- Markenabschnitt -->
        <div class="space-y-4 mb-10 lg:mb-0 lg:max-w-xs">
          <h2 class="font-display text-2xl font-bold">{{ $t('app.footer.title') }}</h2>
          <p class="text-sm text-gray-500">
            {{ $t('app.footer.description') }}
          </p>
        </div>
        
        <!-- Linkabschnitte -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ $t('app.footer.professions') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="general-coaches" class="text-sm hover:text-primary transition-colors">

                  {{ $t('app.footer.consultants') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-contentcreators" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.contentCreators') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-lawyers" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.lawyers') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-media" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.journalists') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-students" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.students') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-sales" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.businessLeaders') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ $t('app.footer.legal') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="terms" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.terms') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="privacy" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.privacy') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-datasafety" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.aiSecurity') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="imprint" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.imprint') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ $t('app.footer.company') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="pricing" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.pricing') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-about" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.about') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-help" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.help') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-kontakt" class="text-sm hover:text-primary transition-colors">
                  {{ $t('app.footer.contact') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ $t('app.footer.compliance') }}</h3>
            <ul class="mt-4 space-y-3">
              <li class="text-sm">
                <div class="flex items-center gap-2 mb-1">
                  <img src="/EU.svg" alt="EU Flag" class="w-4 h-4" />
                  <img src="/DE.svg" alt="German Flag" class="w-4 h-4" />
                  <span>{{ $t('app.footer.gdpr') }}</span>
                </div>
                <div>{{ $t('app.footer.aiDataProcessing') }}</div>
              </li>
              <li class="text-sm flex items-center gap-2">
                <img src="/UA.svg" alt="Ukraine Flag" class="w-4 h-4" /> {{ $t('app.footer.standWithUkraine') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Unterer Abschnitt mit Urheberrecht -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">{{ $t('app.footer.copyright', { year: new Date().getFullYear() }) }}</p>
          <div class="mt-4 md:mt-0 flex items-center space-x-3">
            <div class="flex items-center gap-2">
              <img v-if="locale === 'de'" src="/DE.svg" alt="German Flag" class="w-4 h-4" />
              <img v-else-if="locale === 'en'" src="/GB.svg" alt="British Flag" class="w-4 h-4" />
              <span class="text-sm text-gray-500">{{ getCurrentLocaleName }}</span>
            </div>
            <a 
              href="#" 
              v-for="l in availableLocales" 
              :key="l.code" 
              @click.prevent.stop="setLocale(l.code)"
              class="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <img v-if="l.code === 'de'" src="/DE.svg" alt="German Flag" class="w-4 h-4" />
              <img v-else-if="l.code === 'en'" src="/GB.svg" alt="British Flag" class="w-4 h-4" />
              {{ l.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const getCurrentLocaleName = computed(() => {
  const localeName = locales.value.find(l => l.code === locale.value)?.name;
  return localeName || t('app.footer.language');
});
</script>
