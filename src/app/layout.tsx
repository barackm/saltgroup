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
    "Transform your events into unforgettable experiences with SALT Events. Professional event planning and management services for corporate events, weddings, and special occasions.",
  keywords: [
    "event planning",
    "corporate events",
    "wedding planning",
    "special occasions",
    "premium events",
    "event management",
  ],
  authors: [{ name: "SALT Events" }],
  creator: "SALT Events",
  publisher: "SALT Events",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.saltgrp.org",
  },
  openGraph: {
    title: "SALT Events | Premium Event Planning",
    description:
      "Transform your events into unforgettable experiences with SALT Events",
    url: "https://www.saltgrp.org",
    siteName: "SALT Events",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SALT Events - Premium Event Planning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SALT Events | Premium Event Planning",
    description: "Transform your events into unforgettable experiences",
    images: ["/og-image.jpg"],
    creator: "@saltevents",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification-code",
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
