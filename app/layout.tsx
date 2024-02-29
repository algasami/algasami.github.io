import type { Metadata } from "next";
import { krypton, roboto } from "./fonts";

const portlink = "https://algasami.github.io/";
export const metadata: Metadata = {
  title: {
    default: "algasami",
    template: "%s | algasami",
  },

  description:
    "Hello there. I'm Algasami, a programmer, game developer and web developer",
  openGraph: {
    type: "website",
    url: portlink,
    title: "algasami",
    description:
      "Hello there. I'm Algasami, a programmer, game developer and web developer",
  },
  twitter: {
    card: "summary",
    site: portlink,
    title: "algasami",
    description:
      "Hello there. I'm Algasami, a programmer, game developer and web developer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`overflow-hidden ${krypton.variable} ${roboto.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
