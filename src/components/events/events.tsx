"use client";
import React from "react";
import { FeaturedEvents } from "./FeaturedEvents";
import { EventCard } from "./EventCard";
import { upcomingEvents } from "@/data/events";

const Events = () => {
  return (
    <div className="min-h-screen bg-white  pb-16">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <FeaturedEvents />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Prochains événements
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
