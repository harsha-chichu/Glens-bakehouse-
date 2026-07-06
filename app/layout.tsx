import type { Metadata } from "next";
import { Playfair_Display, Caveat, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Glen's Bakehouse — Baked with love in Bengaluru",
    template: "%s · Glen's Bakehouse",
  },
  description:
    "Glen's Bakehouse is a neighbourhood bakery in Bengaluru serving handcrafted cheesecakes, celebration cakes, breads, croissants and desserts — baked fresh every morning.",
  openGraph: {
    title: "Glen's Bakehouse",
    description:
      "Handcrafted cheesecakes, cakes, breads and desserts — baked fresh every morning in Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${caveat.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
