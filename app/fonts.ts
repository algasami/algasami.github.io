import { Roboto, Dosis, Roboto_Serif, Victor_Mono } from "next/font/google";

export const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export const victor_mono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono",
});
