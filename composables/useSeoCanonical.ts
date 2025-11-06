/**
 * Composable for generating SEO canonical URLs
 * Ensures consistent canonical URL generation across all pages
 * Always uses diktat.ai as the base domain
 */
export const useSeoCanonical = (path: string) => {
  const { locale } = useI18n();
  const baseUrl = 'https://diktat.ai';

  const canonicalPath = computed(() => {
    // For default locale (de), don't add locale prefix
    if (locale.value === 'de') {
      return path.startsWith('/') ? path : `/${path}`;
    }
    // For other locales (en), add locale prefix
    return `/en${path.startsWith('/') ? path : `/${path}`}`;
  });

  const canonicalUrl = computed(() => `${baseUrl}${canonicalPath.value}`);

  return {
    canonicalUrl,
    canonicalPath,
    baseUrl,
  };
};
