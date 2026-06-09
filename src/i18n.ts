import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const namespaces = ['navbar', 'hero', 'about', 'projects', 'contacts'] as const;
const supportedLanguages = ['en', 'fr'] as const;

async function loadLocaleResource(language: string, namespace: string) {
  const response = await fetch(`/locales/${language}/${namespace}.json`);

  if (!response.ok) {
    throw new Error(`Failed to load /locales/${language}/${namespace}.json`);
  }

  return response.json();
}

export const i18nReady = (async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: [...supportedLanguages],
      ns: [...namespaces],
      defaultNS: 'navbar',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
      react: {
        useSuspense: false,
      },
      resources: {},
    });

  const resourceLoads = supportedLanguages.flatMap((language) =>
    namespaces.map(async (namespace) => ({
      language,
      namespace,
      data: await loadLocaleResource(language, namespace),
    }))
  );

  const loadedResources = await Promise.allSettled(resourceLoads);

  loadedResources.forEach((result) => {
    if (result.status === 'fulfilled') {
      const { language, namespace, data } = result.value;
      i18n.addResourceBundle(language, namespace, data, true, true);
    }
  });

  const resolvedLanguage = i18n.resolvedLanguage ?? i18n.language ?? 'en';
  if (!supportedLanguages.includes(resolvedLanguage as (typeof supportedLanguages)[number])) {
    i18n.changeLanguage('en');
  }

  document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language ?? 'en';
  i18n.on('languageChanged', (language) => {
    document.documentElement.lang = language;
  });

  return i18n;
})();

export default i18n;