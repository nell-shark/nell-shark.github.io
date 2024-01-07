import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE_LIST } from "@/constants";

const DEFAULT_LANGUAGE = LANGUAGE_LIST[0] || "en";

const resources: Record<(typeof LANGUAGE_LIST)[number], { translation: any }> = {};
LANGUAGE_LIST.forEach(lang => {
  resources[lang] = {
    translation: require(`@/assets/translation/${lang}.json`)
  };
});

export const i18nInstance = i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false
  }
});

function getLanguage() {
  let language = localStorage.getItem("language");
  if (language === null) localStorage.setItem("language", DEFAULT_LANGUAGE);
  return language!;
}
