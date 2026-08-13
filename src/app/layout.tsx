import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meraki Entertainment | Events, Pageants & Entertainment in Nagaland",
  description:
    "Meraki Entertainment creates events, pageants and entertainment platforms across Nagaland, bringing together talent, fashion, creativity and unforgettable experiences.",
  openGraph: {
    title: "Meraki Entertainment | Events, Pageants & Entertainment in Nagaland",
    description:
      "Meraki Entertainment creates events, pageants and entertainment platforms across Nagaland, bringing together talent, fashion, creativity and unforgettable experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "Meraki Entertainment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meraki Entertainment | Events, Pageants & Entertainment in Nagaland",
    description:
      "Creating platforms for talent, confidence, fashion and entertainment across Nagaland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#f8f6f1] text-[#0f0f0f] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
