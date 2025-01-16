"use client";
import React, { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

const upcomingEvents = [
  {
    id: 1,
    title: "Gala de Charité Annuel",
    date: "15 Juin 2024",
    time: "19:00",
    location: "Palais des Congrès, Paris",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",
    category: "Soirée de Gala",
    description:
      "Une soirée exclusive au profit des œuvres caritatives avec dîner gastronomique et vente aux enchères.",
    spots: "150 places restantes",
  },
  {
    id: 2,
    title: "Festival des Arts & Culture",
    date: "22-24 Juillet 2024",
    time: "10:00-22:00",
    location: "Jardins des Tuileries",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200",
    category: "Festival",
    description:
      "Trois jours de célébration artistique avec performances live, expositions et ateliers créatifs.",
    spots: "Accès libre",
  },
  {
    id: 3,
    title: "Conférence Tech Innovation",
    date: "5 Septembre 2024",
    time: "09:00-18:00",
    location: "Centre des Congrès",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    category: "Conférence",
    description:
      "Rencontrez les leaders de l'industrie et découvrez les dernières innovations technologiques.",
    spots: "200 places restantes",
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Mariage Royal",
    date: "12 Mai 2023",
    location: "Château de Versailles",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
    category: "Mariage",
    highlights: [
      "500 invités",
      "Décoration florale spectaculaire",
      "Menu étoilé",
    ],
  },
  // ...more past events
];

const categories = [
  "Tous",
  "Gala",
  "Festival",
  "Conférence",
  "Mariage",
  "Corporatif",
];
const locations = ["Tous", "Paris", "Lyon", "Marseille", "Bordeaux"];

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedLocation, setSelectedLocation] = useState("Tous");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200">
      <div className="sticky top-16 z-40 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="p-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 z-10" />
                <input
                  type="text"
                  placeholder="Rechercher un événement..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-2xl bg-white/50 backdrop-blur-md border border-white/20 shadow-sm focus:ring-2 focus:ring-[rgb(226,34,40)] focus:border-transparent text-base hover:bg-white/70 transition-colors"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="h-12 px-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:bg-white/70 transition-colors flex items-center gap-2"
              >
                <FiFilter
                  className={isFilterOpen ? "text-[rgb(226,34,40)]" : ""}
                />
                <span className="text-sm font-medium hidden sm:block">
                  Filtres
                </span>
              </button>
            </div>

            {/* Filter Panel */}
            <div
              className={`overflow-hidden backdrop-blur-md ${
                isFilterOpen ? "h-auto opacity-100" : "h-0 opacity-0"
              } transition-all duration-200`}
            >
              <div className="pt-4 space-y-4">
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all backdrop-blur-md ${
                        selectedCategory === category
                          ? "bg-[rgb(226,34,40)]/90 text-white shadow-sm"
                          : "bg-white/40 text-black/60 hover:bg-white/60 border border-white/20"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all backdrop-blur-md ${
                        selectedLocation === location
                          ? "bg-[rgb(226,34,40)]/90 text-white shadow-sm"
                          : "bg-white/40 text-black/60 hover:bg-white/60 border border-white/20"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="px-4 flex gap-6 border-t border-gray-100">
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
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">À la une</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 h-[450px] group hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                key={currentSlide}
                src={upcomingEvents[currentSlide].image}
                alt={upcomingEvents[currentSlide].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors"
                >
                  <FiChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors"
                >
                  <FiChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[rgb(226,34,40)] text-white text-sm rounded-full font-medium">
                      En vedette
                    </span>
                    <span className="px-3 py-1 bg-black/20 backdrop-blur text-white text-sm rounded-full">
                      {upcomingEvents[currentSlide].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {upcomingEvents[currentSlide].title}
                  </h2>
                  <p className="text-white/80 max-w-xl">
                    {upcomingEvents[currentSlide].description}
                  </p>
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      <span>{upcomingEvents[currentSlide].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      <span>{upcomingEvents[currentSlide].time}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-[rgb(226,34,40)] hover:text-white transition-colors">
                    <span>Réserver maintenant</span>
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 h-[450px] hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/60" />
              <img
                src={
                  upcomingEvents[(currentSlide + 1) % upcomingEvents.length]
                    .image
                }
                alt="Next Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="bg-white/70 backdrop-blur-xl rounded-xl p-4 shadow-sm border border-white/20">
                  <h3 className="text-sm font-medium text-[rgb(226,34,40)] mb-1">
                    PROCHAIN ÉVÉNÉNEMENT
                  </h3>
                  <h4 className="text-xl font-semibold text-black/80">
                    {
                      upcomingEvents[(currentSlide + 1) % upcomingEvents.length]
                        .title
                    }
                  </h4>
                </div>
                <div className="bg-white/70 backdrop-blur-xl rounded-xl p-4 shadow-sm border border-white/20 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-black/60">
                    <FiCalendar className="text-[rgb(226,34,40)]" />
                    <span>
                      {
                        upcomingEvents[
                          (currentSlide + 1) % upcomingEvents.length
                        ].date
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/60">
                    <FiMapPin className="text-[rgb(226,34,40)]" />
                    <span>
                      {
                        upcomingEvents[
                          (currentSlide + 1) % upcomingEvents.length
                        ].location
                      }
                    </span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-black/10 rounded-full text-sm text-black/70 hover:bg-[rgb(226,34,40)] hover:text-white transition-colors">
                    <span>Voir les détails</span>
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid - Fixed Layout */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {activeTab === "upcoming"
              ? "Prochains événements"
              : "Événements passés"}
          </h2>

          {activeTab === "upcoming" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {" "}
              {/* Remove nested grid */}
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group cursor-pointer">
                  <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all">
                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full z-20">
                        <span className="text-xs font-medium text-[rgb(226,34,40)]">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 backdrop-blur-sm bg-white/50">
                      <h3 className="text-xl font-semibold text-black/90 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm text-black/60 mb-4">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-black/60">
                          <FiCalendar className="text-[rgb(226,34,40)]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-black/60">
                          <FiClock className="text-[rgb(226,34,40)]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-black/60">
                          <FiMapPin className="text-[rgb(226,34,40)]" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[rgb(226,34,40)]">
                          {event.spots}
                        </span>
                        <button className="inline-flex items-center gap-2 text-sm text-black/80 hover:text-[rgb(226,34,40)] transition-colors group">
                          <span>Réserver</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "past" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {" "}
              {/* Remove nested grid */}
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all group" // Updated background class
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full z-20">
                      <span className="text-xs font-medium text-white">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 backdrop-blur-sm bg-white/50">
                    <h3 className="text-xl font-semibold text-black/90 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-black/60 mb-4">
                      <FiCalendar className="text-[rgb(226,34,40)]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="space-y-2">
                      {event.highlights.map((highlight, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1 h-1 rounded-full bg-[rgb(226,34,40)]" />
                          <span className="text-black/60">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
