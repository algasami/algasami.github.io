import { Roboto, Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const fraunces = Fraunces({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
});

export const iosevka = localFont({
  src: [
    {
      path: "./iosevka/IosevkaFixedSS01-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./iosevka/IosevkaFixedSS01-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./iosevka/IosevkaFixedSS01-Regular.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./iosevka/IosevkaFixedSS01-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./iosevka/IosevkaFixedSS01-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});
