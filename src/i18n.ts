import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Carrega traduções de um servidor (ex: /public/locales)
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt',
    debug: false, // Mude para true para ver logs no console
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      crossDomain: false,
    },
    react: {
      useSuspense: true, // Use Suspense para carregar as traduções
    },
  });

export default i18n; 