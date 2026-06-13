import { Instrument_Serif, Instrument_Sans, Fragment_Mono } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
});
