import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales/resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pl",
    supportedLngs: ["en", "pl"],
    detection: { order: ["localStorage", "navigator"] },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
