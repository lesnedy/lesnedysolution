import { useTranslation as useReactI18nextTranslation } from "react-i18next";
import i18n from ".";

export function useTranslation() {
  return useReactI18nextTranslation("translation", { i18n });
}
