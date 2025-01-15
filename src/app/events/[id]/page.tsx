import EventDetails from "@/components/events/EventDetails";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Event Details | SALT Events",
  description:
    "View detailed information about this premium event, including dates, venue, and booking options.",
};

export default function EventDetailsPage() {
  return <EventDetails />;
}
