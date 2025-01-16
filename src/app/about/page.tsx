import About from "@/components/about/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SALT Events",
  description:
    "Notre vision et mission pour rendre le monde meilleur à travers des événements exceptionnels.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  );
}
