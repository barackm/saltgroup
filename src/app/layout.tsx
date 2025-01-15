import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { gramatika, neueHaas } from "@/config/fonts";

export const metadata: Metadata = {
  title: "SALT Events | Premium Event Planning",
  description: "Transform your events into unforgettable experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gramatika.variable} ${neueHaas.variable}`}>
      <body className="font-sans antialiased text-base">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
