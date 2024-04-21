import React from "react";
import type { Metadata } from "next";
import { krypton, roboto } from "../fonts";
import { Locale } from "i18n-config";
import Footer from "app/components/footer";
import Navbar from "app/components/navbar";
import { getDictionary } from "get-dictionary";

const portlink = "https://algasami.github.io/";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const meta_desc = getDictionary(params.lang)["index"].meta_description;

  return {
    title: {
      default: "algasami",
      template: "%s | algasami",
    },

    description: meta_desc,
    openGraph: {
      type: "website",
      url: portlink,
      title: "algasami",
      description: meta_desc,
    },
    twitter: {
      card: "summary",
      site: portlink,
      title: "algasami",
      description: meta_desc,
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = getDictionary(params.lang);
  return (
    <html lang={params.lang} className="dark">
      <body
        className={`overflow-hidden ${krypton.variable} ${roboto.variable} font-sans`}
      >
        <Navbar lang={params.lang} navbardict={dict["navbar"]} />
        <div
          className="w-screen h-screen overflow-x-hidden flex flex-col justify-start z-10"
          id="main-content"
        >
          <div className="relative flex flex-row justify-center z-10">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
