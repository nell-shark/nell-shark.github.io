import translationEN from "@/assets/translation/en.json";
import translationRU from "@/assets/translation/ru.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

export const i18nInstance = i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
