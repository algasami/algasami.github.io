import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "graph",
};

export default function GraphLayout({ children }) {
  return children;
}
