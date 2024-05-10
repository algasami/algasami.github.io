import { getDictionary } from "get-dictionary";
import { Locale, i18n } from "i18n-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const metas = getDictionary(params.lang)["graph"];

  return {
    title: metas.title,
    description: metas.meta_description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({
    lang: loc,
  }));
}

export default function GraphLayout({ children }) {
  return children;
}
