import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Meraki Entertainment | Events, Pageants & Entertainment in Nagaland",
  description:
    "Meraki Entertainment creates events, pageants and entertainment platforms across Nagaland.",
  openGraph: {
    title: "Meraki Entertainment | Events, Pageants & Entertainment in Nagaland",
    description:
      "Meraki Entertainment creates events, pageants and entertainment platforms across Nagaland.",
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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <MotionProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
