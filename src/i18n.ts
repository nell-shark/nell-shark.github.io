import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/assets/translation/en.json";
import translationRU from "@/assets/translation/ru.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

export const i18nInstance = i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
