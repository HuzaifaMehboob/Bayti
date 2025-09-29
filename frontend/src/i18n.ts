import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      // Order of detection: look in querystring -> localStorage -> navigator
      order: ['querystring', 'localStorage', 'navigator'],
      // Where to store the user language
      caches: ['localStorage'], // or ['cookie'] if you prefer
      lookupQuerystring: 'lng', // allow ?lng=en in URLs
    },
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
  });

export default i18n;
