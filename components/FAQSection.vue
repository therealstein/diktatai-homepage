<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-4 tracking-tight">
      {{ $t('faq.title') }}
    </h2>
    <p
      class="text-lg font-medium text-base-content/80 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
    >
      {{ $t('faq.description') }}
    </p>

    <div class="max-w-4xl mx-auto space-y-6">
      <!-- FAQ Item 1 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item1.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ $t('faq.item1.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item2.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed mb-4">
            {{ $t('faq.item2.description') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-base-content/80">
            <li>
              <strong>{{ $t('faq.item2.professionals') }}</strong>
            </li>
            <li>
              <strong>{{ $t('faq.item2.teams') }}</strong>
            </li>
            <li>
              <strong>{{ $t('faq.item2.students') }}</strong>
            </li>
            <li>
              <strong>{{ $t('faq.item2.journalists') }}</strong>
            </li>
            <li>
              <strong>{{ $t('faq.item2.creators') }}</strong>
            </li>
            <li>
              <strong>{{ $t('faq.item2.noteTakers') }}</strong>
            </li>
          </ul>
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item3.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ $t('faq.item3.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item4.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ $t('faq.item4.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item5.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ $t('faq.item5.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 6 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item6.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed">
            {{ $t('faq.item6.description') }}
          </p>
        </div>
      </div>

      <!-- FAQ Item 7 -->
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h3 class="card-title font-display text-xl font-bold">
            {{ $t('faq.item7.title') }}
          </h3>
          <p class="text-base-content/80 leading-relaxed mb-4">
            {{ $t('faq.item7.description') }}
          </p>
          <ul class="list-decimal list-inside space-y-2 text-base-content/80">
            <li>{{ $t('faq.item7.step1') }}</li>
            <li>{{ $t('faq.item7.step2') }}</li>
            <li>{{ $t('faq.item7.step3') }}</li>
          </ul>
          <p class="text-base-content/80 leading-relaxed mt-4">
            {{ $t('faq.item7.conclusion') }}
          </p>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <p class="text-lg font-medium text-base-content/80 mb-4">
        {{ $t('faq.stillHaveQuestions') }}
      </p>
      <p class="text-base text-base-content/70 max-w-2xl mx-auto mb-6">
        {{ $t('faq.reachOutText') }}
      </p>
      <NuxtLinkLocale
        to="questions"
        class="font-display bg-purple-500 text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-pink-600 transition-all shadow-lg tracking-wide"
      >
        {{ $t('faq.moreQuestions') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

// Generate FAQ Schema for SEO
const faqSchema = computed(() => {
  const faqItems = [];

  // Add FAQ item 1
  faqItems.push({
    '@type': 'Question',
    name: t('faq.item1.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('faq.item1.description'),
    },
  });

  // Add FAQ item 2 (with list items)
  const item2Professionals = t('faq.item2.professionals');
  const item2Teams = t('faq.item2.teams');
  const item2Students = t('faq.item2.students');
  const item2Journalists = t('faq.item2.journalists');
  const item2Creators = t('faq.item2.creators');
  const item2NoteTakers = t('faq.item2.noteTakers');

  faqItems.push({
    '@type': 'Question',
    name: t('faq.item2.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${t('faq.item2.description')} ${item2Professionals} ${item2Teams} ${item2Students} ${item2Journalists} ${item2Creators} ${item2NoteTakers}`,
    },
  });

  // Add FAQ item 3
  faqItems.push({
    '@type': 'Question',
    name: t('faq.item3.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('faq.item3.description'),
    },
  });

  // Add FAQ item 4
  faqItems.push({
    '@type': 'Question',
    name: t('faq.item4.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('faq.item4.description'),
    },
  });

  // Add FAQ item 5
  faqItems.push({
    '@type': 'Question',
    name: t('faq.item5.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('faq.item5.description'),
    },
  });

  // Add FAQ item 6
  faqItems.push({
    '@type': 'Question',
    name: t('faq.item6.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: t('faq.item6.description'),
    },
  });

  // Add FAQ item 7 (with steps)
  const item7Step1 = t('faq.item7.step1');
  const item7Step2 = t('faq.item7.step2');
  const item7Step3 = t('faq.item7.step3');
  const item7Conclusion = t('faq.item7.conclusion');

  faqItems.push({
    '@type': 'Question',
    name: t('faq.item7.title'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${t('faq.item7.description')} 1. ${item7Step1} 2. ${item7Step2} 3. ${item7Step3} ${item7Conclusion}`,
    },
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };
});

// Add schema to page head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema.value),
    },
  ],
});
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
