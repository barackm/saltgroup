"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EventSearch } from "./EventSearch";
import { debounce } from "lodash";

interface EventHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (params: SearchParams) => void;
}

interface SearchParams {
  query: string;
  category: string;
  location: string;
}

export const EventHeader = ({
  activeTab,
  setActiveTab,
  onSearch,
}: EventHeaderProps) => {
  const [showSearch, setShowSearch] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedLocation, setSelectedLocation] = useState("Tous");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    onSearch({
      query: searchQuery,
      category: selectedCategory,
      location: selectedLocation,
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      if (Math.abs(scrollDelta) < 20) return;

      const isScrollingUp = currentScrollY < lastScrollY;
      const isNearTop = currentScrollY < 100;
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 100;

      setShowSearch(isScrollingUp || isNearTop || isAtBottom);
      setLastScrollY(currentScrollY);
    }, 50),
    [lastScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="sticky top-0 z-40 bg-white border-b">
      <div className="max-w-7xl mx-auto">
        {showSearch && (
          <div className="px-6 py-4">
            <EventSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
        )}

        <div className="px-6 flex gap-6">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-medium relative ${
                activeTab === tab
                  ? "text-[rgb(226,34,40)]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab === "upcoming" ? "À venir" : "Passés"}
              {activeTab === tab && (
                <div className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-[rgb(226,34,40)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
