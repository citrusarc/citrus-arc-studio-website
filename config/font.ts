import {
  Merriweather,
  Spectral,
  Schoolbell,
  Oi,
  Modak,
} from "next/font/google";

export const merriweather = Merriweather({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const spectral = Spectral({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const schoolBell = Schoolbell({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const oi = Oi({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const modak = Modak({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});
