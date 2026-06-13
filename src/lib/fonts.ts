import { Libre_Caslon_Display, Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-libre-caslon",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
});
