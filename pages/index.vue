<template>
  <div class="bg-base-100 text-base-content">
    <!-- HeroSection2 is now the default (formerly the test variant) -->
    <HeroSection2 />

    <UserGroupsSection />
    <HowItWorksSection />
    <BenefitsSection />
    <IntegrationsSection />
    <BusinessSolutionsSection />
    <FAQSection />
    <CTASection />
  </div>
</template>

<script setup>
import HeroSection2 from '~/components/HeroSection2.vue';
import HowItWorksSection from '~/components/HowItWorksSection.vue';
import BenefitsSection from '~/components/BenefitsSection.vue';
import CTASection from '~/components/CTASection.vue';
import IntegrationsSection from '~/components/IntegrationsSection.vue';
import BusinessSolutionsSection from '~/components/BusinessSolutionsSection.vue';
import FAQSection from '~/components/FAQSection.vue';

const { t } = useI18n({
  useScope: 'local',
});

// SEO Meta Tags with Canonical URL
const { canonicalUrl } = useSeoCanonical();

useHead({
  title: t('title'),
  meta: [{ name: 'description', content: t('description') }],
  link: [{ rel: 'canonical', href: canonicalUrl }],
});
</script>

<style scoped>
/* Page-level styles if needed */
</style>

<i18n lang="json">
{
  "en": {
    "title": "AI-powered Transcription Software - Diktat AI",
    "description": "Speech to Text – fast, precise and privacy-first. Easy to use and made for professionals. 💜"
  },
  "de": {
    "title": "KI-unterstützte Transkription Software - Diktat AI",
    "description": "Sprache in Text – fix, präzise und datenschutz-first. Einfach zu bedienen und made for professionals. 💜"
  },
  "nl": {
    "title": "AI-aangedreven Transcriptie Software - Diktat AI",
    "description": "Spraak naar tekst – snel, nauwkeurig en privacy-first. Eenvoudig te gebruiken en gemaakt voor professionals. 💜"
  },
  "es": {
    "title": "Software de Transcripción con IA - Diktat AI",
    "description": "Voz a texto – rápido, preciso y privacidad primero. Fácil de usar y hecho para profesionales. 💜"
  },
  "fr": {
    "title": "Logiciel de Transcription IA - Diktat AI",
    "description": "Voix en texte – rapide, précis et confidentialité d'abord. Facile à utiliser et conçu pour les professionnels. 💜"
  },
  "sv": {
    "title": "AI-driven Transkriptionsprogramvara - Diktat AI",
    "description": "Tal till text – snabbt, exakt och integritet först. Enkel att använda och skapad för professionella. 💜"
  }
}
</i18n>
