import { Archivo, Berkshire_Swash } from "next/font/google";

export const berkshire_swash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-berkshire-swash",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});
