import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Women's World | Bridal Couture & Luxury Atelier",
  description:
    "Indian Bridal Couture Editorial × Luxury Atelier. Handcrafted bridal lehengas, bespoke zardosi blouses, and bridal beauty styling. Where every stitch tells your story.",
  keywords: [
    "bridal couture",
    "bespoke atelier",
    "bridal tailoring",
    "zardosi embroidery",
    "aari needlework",
    "bridal makeup",
    "custom lehengas",
    "chennai bridal fashion",
  ],
  authors: [{ name: "Women's World Atelier" }],
  creator: "Women's World Atelier",
  openGraph: {
    title: "Women's World | Bridal Couture & Luxury Atelier",
    description:
      "Indian Bridal Couture Editorial × Luxury Atelier. Where every stitch tells your story.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#231120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      style={{ colorScheme: "only light" }}
    >
      <head>
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="only light" />
        <meta name="theme-color" content="#231120" />
      </head>
      <body className="bg-[#231120] text-ivory font-body antialiased overflow-x-hidden selection:bg-gold/30 selection:text-wine" style={{ colorScheme: "only light" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
