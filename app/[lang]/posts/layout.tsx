import React from "react";
import { Metadata } from "next";
import { Locale, i18n } from "i18n-config";
import { getDictionary } from "get-dictionary";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const metas = getDictionary(params.lang)["posts"];

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
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
