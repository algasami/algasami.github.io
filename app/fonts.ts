import {
  Roboto,
  Dosis,
  Raleway,
  Noto_Serif,
  IBM_Plex_Mono,
} from "next/font/google";
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

export const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const krypton = localFont({
  src: "./krypton/MonaspaceKryptonVarVF.woff2",
  variable: "--font-krypton",
});
