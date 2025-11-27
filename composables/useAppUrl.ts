export const useAppUrl = () => {
  const { locale } = useI18n();

  const getAppUrl = (path: string) => {
    const prefix = locale.value === 'de' ? '' : `/${locale.value}`;
    return `${prefix}${path}`;
  };

  return {
    loginUrl: computed(() => getAppUrl('/auth/login')),
    registerUrl: computed(() => getAppUrl('/auth/register')),
    getAppUrl,
  };
};
