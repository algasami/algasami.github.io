import { i18n } from "i18n-config";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "graph",
  description: "Bipartite graph toolkit.",
};

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({
    lang: loc,
  }));
}

export default function GraphLayout({ children }) {
  return children;
}
