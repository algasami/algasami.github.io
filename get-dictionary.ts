import { en, zh_tw } from "dictionaries";
import type { Locale } from "./i18n-config";

const dictionaries: { [key in Locale]: typeof en } = {
  en,
  "zh-tw": zh_tw,
};

export const getDictionary = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.en;
