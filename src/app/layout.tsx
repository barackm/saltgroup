import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastProvider } from "@/providers/ToastProvider";
import AosWrapper from "@/components/aos-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gramatica = localFont({
  src: "../fonts/gramatika/GramatikaTrial-Bold-BF65dea4c5530e5.ttf",
  variable: "--font-gramatica",
});

const neueHaas = localFont({
  src: "../fonts/neue-haas/NeueHaasDisplayLight.ttf",
  variable: "--font-neue-haas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saltgrp.org"),
  title: "SALT GRP",
  description:
    "Transform your events into unforgettable experiences with SALT EVENTS",
  keywords: [
    "event planning",
    "corporate events",
    "wedding planning",
    "special occasions",
    "premium events",
    "event management",
  ],
  authors: [{ name: "SALT GROUP" }],
  creator: "SALT GROUP",
  publisher: "SALT GROUP",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.saltgrp.org",
  },
  openGraph: {
    title:
      "SALT GROUP | Transform your events into unforgettable experiences with SALT EVENTS",
    description:
      "Transform your events into unforgettable experiences with SALT GROUP",
    url: "https://www.saltgrp.org",
    siteName: "SALT GROUP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://saltgrp.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "SALT GROUP - Transform your events into unforgettable experiences with SALT EVENTS",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SALT GROUP | Transform your events into unforgettable experiences with SALT EVENTS",
    description: "Transform your events into unforgettable experiences",
    images: ["https://saltgrp.org/og-image.jpg"],
    creator: "@saltevents",
  },
  icons: {
    icon: "/logo.png",
    shortcut: ["/logo.png"],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#5bbad5",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  other: {
    "theme-color": "#ffffff",
    "x-ua-compatible": "IE=edge",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${neueHaas.variable} ${gramatica.variable}  antialiased`}
      >
        <AosWrapper>
          <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastProvider />
          </div>
        </AosWrapper>
      </body>
    </html>
  );
}
