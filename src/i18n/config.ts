import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        Im_Krivolapov_Vladislav: `I'm Krivolapov Vladislav`
      }
    },
    ru: {
      translation: {
        Im_Krivolapov_Vladislav: 'Криволапов Владислав'
      }
    }
  }
});

export default i18n;
