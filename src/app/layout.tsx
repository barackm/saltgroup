import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastProvider } from "@/providers/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        url: "/salt.png",
        width: 1200,
        height: 630,
        alt: "SALT Events Banner",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
