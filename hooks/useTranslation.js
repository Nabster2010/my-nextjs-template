import { useRouter } from "next/router";
import { useEffect } from "react";
import arTranslation from "../locales/ar/translation.json";
import enTranslation from "../locales/en/translation.json";

export const useTranslation = () => {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : "en";
  const translation = locale === "ar" ? arTranslation : enTranslation;

  return {
    locale,
    dir,
    lang,
    translation,
  };
};
