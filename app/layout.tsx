import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  
  metadataBase: new URL("https://leclerc-imounga-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },

  title: {
    default: "Leclerc Imounga | Développeur Web & Créateur Digital",
    template: "%s | Leclerc Imounga",
  },
  description:
    "Découvrez le portfolio de Leclerc Imounga : développement web, création de sites internet, e-commerce, design digital et entrepreneuriat.",
  applicationName: "Leclerc Imounga Portfolio",
  keywords: [
    "Leclerc Imounga",
    "développeur web",
    "création de sites web",
    "développement web",
    "WordPress",
    "WooCommerce",
    "Next.js",
    "entrepreneuriat",
    "portfolio digital",
    "Dakar",
    "Sénégal",
  ],
  authors: [{ name: "Leclerc Imounga" }],
  creator: "Leclerc Imounga",
  openGraph: {
    title: "Leclerc Imounga | Développeur Web & Créateur Digital",
    description:
      "Des idées transformées en expériences digitales. Découvrez mes projets, compétences et réalisations.",
    siteName: "Leclerc Imounga",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leclerc Imounga | Portfolio",
    description:
      "Développement web, création digitale et entrepreneuriat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
