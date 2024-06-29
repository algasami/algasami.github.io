import { Roboto, Dosis, Roboto_Serif, Ubuntu_Mono } from "next/font/google";

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

export const ubuntu_mono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu-mono",
});
