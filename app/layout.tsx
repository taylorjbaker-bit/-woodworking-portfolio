import type { Metadata } from "next";
import { Playfair_Display, Lato, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-elegant",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "WoodWorm Design | Handcrafted Furniture",
  description: "Fine handcrafted woodworking pieces. Bespoke furniture designed and built with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/assets/logo/new-logo.png" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
