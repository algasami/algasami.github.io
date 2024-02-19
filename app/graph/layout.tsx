import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "graph",
  description: "Bipartite graph toolkit.",
};

export default function GraphLayout({ children }) {
  return children;
}
