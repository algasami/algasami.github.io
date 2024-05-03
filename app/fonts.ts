import { Roboto, Dosis, Roboto_Serif } from "next/font/google";
import localFont from "next/font/local";

export const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
});

export const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export const krypton = localFont({
  src: "./krypton/MonaspaceKryptonVarVF.woff2",
  variable: "--font-krypton",
});
