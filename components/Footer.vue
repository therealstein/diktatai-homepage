<template>
  <footer class="bg-base-100 border-t">
    <!-- Hauptinhalt des Fußzeile -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <!-- Markenabschnitt -->
        <div class="space-y-4 mb-10 lg:mb-0 lg:max-w-xs">
          <h2 class="font-display text-2xl font-bold">{{ t('title') }}</h2>
          <p class="text-sm text-gray-500">
            {{ t('description') }}
          </p>
        </div>

        <!-- Linkabschnitte -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ t('professions') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="general-coaches" class="text-sm hover:text-primary transition-colors">
                  {{ t('consultants') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-contentcreators" class="text-sm hover:text-primary transition-colors">
                  {{ t('contentCreators') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-lawyers" class="text-sm hover:text-primary transition-colors">
                  {{ t('lawyers') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-media" class="text-sm hover:text-primary transition-colors">
                  {{ t('journalists') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-students" class="text-sm hover:text-primary transition-colors">
                  {{ t('students') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-sales" class="text-sm hover:text-primary transition-colors">
                  {{ t('businessLeaders') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ t('legal') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="terms" class="text-sm hover:text-primary transition-colors">
                  {{ t('terms') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="privacy" class="text-sm hover:text-primary transition-colors">
                  {{ t('privacy') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-datasafety" class="text-sm hover:text-primary transition-colors">
                  {{ t('aiSecurity') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="imprint" class="text-sm hover:text-primary transition-colors">
                  {{ t('imprint') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ t('company') }}</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLinkLocale to="pricing" class="text-sm hover:text-primary transition-colors">
                  {{ t('pricing') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-about" class="text-sm hover:text-primary transition-colors">
                  {{ t('about') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-help" class="text-sm hover:text-primary transition-colors">
                  {{ t('help') }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="general-kontakt" class="text-sm hover:text-primary transition-colors">
                  {{ t('contact') }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider">{{ t('compliance') }}</h3>
            <ul class="mt-4 space-y-3">
              <li class="text-sm">
                <div class="flex items-center gap-2 mb-1">
                  <img src="/EU.svg" alt="EU Flag" class="w-4 h-4" />
                  <img src="/DE.svg" alt="German Flag" class="w-4 h-4" />
                  <span>{{ t('gdpr') }}</span>
                </div>
                <div>{{ t('aiDataProcessing') }}</div>
              </li>
              <li class="text-sm flex items-center gap-2">
                <img src="/UA.svg" alt="Ukraine Flag" class="w-4 h-4" /> {{ t('standWithUkraine') }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Unterer Abschnitt mit Urheberrecht -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">{{ t('copyright', { year: new Date().getFullYear() }) }}</p>
          <div class="mt-4 md:mt-0 flex items-center space-x-3">
            <div class="flex items-center gap-2">
              <img v-if="locale === 'de'" src="/DE.svg" alt="German Flag" class="w-4 h-4" />
              <img v-else-if="locale === 'en'" src="/GB.svg" alt="British Flag" class="w-4 h-4" />
              <img v-else-if="locale === 'nl'" src="/NL.svg" alt="Dutch Flag" class="w-4 h-4" />
              <img v-else-if="locale === 'es'" src="/ES.svg" alt="Spanish Flag" class="w-4 h-4" />
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
              <img v-else-if="l.code === 'nl'" src="/NL.svg" alt="Dutch Flag" class="w-4 h-4" />
              <img v-else-if="l.code === 'es'" src="/ES.svg" alt="Spanish Flag" class="w-4 h-4" />
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
  return localeName || t('language');
});
</script>

<i18n lang="json">
{
  "de": {
    "title": "Diktat AI",
    "help": "Hilfe",
    "description": "Diktate schnell und einfach in Briefe verwandeln.",
    "professions": "Berufsgruppen",
    "consultants": "Berater & Coaches",
    "contentCreators": "Content Creator",
    "lawyers": "Juristen & Anwälte",
    "journalists": "Journalisten & Redakteure",
    "students": "Studierende & Akademiker",
    "businessLeaders": "Geschäftsleute & Führungskräfte",
    "legal": "Rechtliches",
    "terms": "Bedingungen",
    "privacy": "Datenschutz",
    "aiSecurity": "KI - Datensicherheit",
    "imprint": "Impressum",
    "company": "Unternehmen",
    "pricing": "Preise",
    "about": "Über uns",
    "contact": "Kontakt",
    "compliance": "Compliance & Support",
    "gdpr": "DSGVO & GDPR",
    "aiDataProcessing": "KI Datenverarbeitung",
    "standWithUkraine": "Stand with Ukraine",
    "copyright": "© {year} DiktatAI",
    "language": "Sprache"
  },
  "en": {
    "title": "Dictate AI",
    "help": "Help",
    "description": "Quickly and easily transform dictations into letters.",
    "professions": "Professions",
    "consultants": "Consultants & Coaches",
    "contentCreators": "Content Creators",
    "lawyers": "Lawyers & Attorneys",
    "journalists": "Journalists & Editors",
    "students": "Students & Academics",
    "businessLeaders": "Business Leaders & Executives",
    "legal": "Legal",
    "terms": "Terms",
    "privacy": "Privacy",
    "aiSecurity": "AI - Data Security",
    "imprint": "Imprint",
    "company": "Company",
    "pricing": "Pricing",
    "about": "About Us",
    "contact": "Contact",
    "compliance": "Compliance & Support",
    "gdpr": "GDPR & GDPR",
    "aiDataProcessing": "AI Data Processing",
    "standWithUkraine": "Stand with Ukraine",
    "copyright": "© {year} DictateAI",
    "language": "Language"
  },
  "nl": {
    "title": "Diktat AI",
    "help": "Hulp",
    "description": "Dictaten snel en eenvoudig in brieven verwandelen.",
    "professions": "Beroepsgroepen",
    "consultants": "Adviseurs & Coaches",
    "contentCreators": "Content Creators",
    "lawyers": "Juristen & Advocaten",
    "journalists": "Journalisten & Redacteuren",
    "students": "Studenten & Academici",
    "businessLeaders": "Zakenmensen & Leidinggevenden",
    "legal": "Juridisch",
    "terms": "Voorwaarden",
    "privacy": "Gegevensbescherming",
    "aiSecurity": "AI - Gegevensbeveiliging",
    "imprint": "Colofon",
    "company": "Bedrijf",
    "pricing": "Prijzen",
    "about": "Over ons",
    "contact": "Contact",
    "compliance": "Compliance & Ondersteuning",
    "gdpr": "GDPR",
    "aiDataProcessing": "AI Gegevensverwerking",
    "standWithUkraine": "Stand with Ukraine",
    "copyright": "© {year} DiktatAI",
    "language": "Taal"
  },
  "es": {
    "title": "Diktat AI",
    "help": "Ayuda",
    "description": "Convierte dictados en cartas de forma rápida y sencilla.",
    "professions": "Profesiones",
    "consultants": "Consultores y coaches",
    "contentCreators": "Creadores de contenido",
    "lawyers": "Abogados y juristas",
    "journalists": "Periodistas y editores",
    "students": "Estudiantes y académicos",
    "businessLeaders": "Líderes empresariales y ejecutivos",
    "legal": "Legal",
    "terms": "Términos",
    "privacy": "Privacidad",
    "aiSecurity": "IA - Seguridad de datos",
    "imprint": "Aviso legal",
    "company": "Empresa",
    "pricing": "Precios",
    "about": "Sobre nosotros",
    "contact": "Contacto",
    "compliance": "Cumplimiento y soporte",
    "gdpr": "RGPD",
    "aiDataProcessing": "Procesamiento de datos con IA",
    "standWithUkraine": "Stand with Ukraine",
    "copyright": "© {year} DiktatAI",
    "language": "Idioma"
  }
}
</i18n>
