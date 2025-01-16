import EventDetails from "@/components/events/EventDetails";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Event Details | SALT Events",
  description:
    "View detailed information about this premium event, including dates, venue, and booking options.",
  openGraph: {
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
    icon: "/grp.jpg",
  },
};

export default function EventDetailsPage() {
  return <EventDetails />;
}
