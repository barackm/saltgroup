"use client";
import React from "react";
import { FeaturedEvents } from "./FeaturedEvents";
import { SponsorsSection } from "./SponsorsSection";

const Events = () => {
  return (
    <div className="min-h-screen">
      <FeaturedEvents />
      <SponsorsSection />
    </div>
  );
};

export default Events;
