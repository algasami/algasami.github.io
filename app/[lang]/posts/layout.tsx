import React from "react";
import { Metadata } from "next";
import { i18n } from "i18n-config";

export const metadata: Metadata = {
  title: "Post",
  description: "This is the post gallery of algasami's works.",
};
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
