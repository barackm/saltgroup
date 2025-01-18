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
  metadataBase: new URL("https://saltgroup.vercel.app"),
  title: "SALT Events | Premium Event Planning",
  description: "Transform your events into unforgettable experiences",
  openGraph: {
    title: "SALT Events | Premium Event Planning",
    description: "Transform your events into unforgettable experiences",
    type: "website",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "SALT Events Banner",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
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
