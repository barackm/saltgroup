"use client";
import React, { useState, useMemo } from "react";
import { FeaturedEvents } from "./FeaturedEvents";
import { EventCard } from "./EventCard";
import { upcomingEvents, pastEvents } from "../../data/events";
import { EventHeader } from "./EventHeader";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchParams, setSearchParams] = useState({
    query: "",
    category: "Tous",
    location: "Tous",
  });

  const filteredEvents = useMemo(() => {
    const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;
    return events.filter((event) => {
      const matchesQuery = event.title
        .toLowerCase()
        .includes(searchParams.query.toLowerCase());
      const matchesCategory =
        searchParams.category === "Tous" ||
        event.category === searchParams.category;
      const matchesLocation =
        searchParams.location === "Tous" ||
        event.location === searchParams.location;
      return matchesQuery && matchesCategory && matchesLocation;
    });
  }, [activeTab, searchParams]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length
    );
  };

  return (
    <div className="min-h-screen bg-white  pb-16">
      {/* <EventHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={setSearchParams}
      /> */}

      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <FeaturedEvents
          events={upcomingEvents}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {activeTab === "upcoming"
              ? "Prochains événements"
              : "Événements passés"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
