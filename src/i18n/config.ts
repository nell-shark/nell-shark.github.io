import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        Im_Krivolapov_Vladislav: `I'm Krivolapov Vladislav`
      }
    },
    ru: {
      translation: {
        home: 'Главная',
        about: 'Обо мне',
        skills: 'Навыки',
        projects: 'Проекты',
        contact: 'Связь',
        Im_Krivolapov_Vladislav: 'Криволапов Владислав'
      }
    }
  }
});

export default i18n;
