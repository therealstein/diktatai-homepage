/**
 * Composable for generating SEO canonical URLs
 * Uses i18n route localization for correct URLs across all locales
 * Always uses diktat.ai as the base domain
 */
export const useSeoCanonical = () => {
  const route = useRoute();
  const localePath = useLocalePath();
  const baseUrl = 'https://diktat.ai';

  const canonicalUrl = computed(() => {
    // Get the localized path for current route using i18n
    // This handles all locales (de, en, nl, es, fr, sv, etc.) and translated slugs
    const path = localePath(route.path);
    return `${baseUrl}${path}`;
  });

  return {
    canonicalUrl,
    baseUrl,
  };
};
