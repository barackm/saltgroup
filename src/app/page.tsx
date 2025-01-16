import Events from "@/components/events/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SALT Events | Premium Events & Experiences",
  description:
    "Discover and book premium events curated by SALT Events. From corporate gatherings to luxury celebrations, experience excellence in event planning.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Events />
    </main>
  );
}
