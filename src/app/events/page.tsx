"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiFilter,
  FiX,
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Header */}
          <div className="mb-12">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-6">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />
                <input
                  type="text"
                  placeholder="Rechercher un événement..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 focus:ring-2 focus:ring-[rgb(226,34,40)] focus:outline-none"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white transition-colors"
              >
                <FiFilter
                  className={
                    isFilterOpen ? "text-[rgb(226,34,40)]" : "text-black/60"
                  }
                />
                <span className="text-black/80">Filtres</span>
              </button>
            </div>

            {/* Filter Options */}
            <motion.div
              initial={false}
              animate={{
                height: isFilterOpen ? "auto" : 0,
                opacity: isFilterOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium text-black/60 mb-3">
                    Catégories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-[rgb(226,34,40)] text-white"
                            : "bg-black/5 text-black/60 hover:bg-black/10"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h3 className="text-sm font-medium text-black/60 mb-3">
                    Lieux
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedLocation === location
                            ? "bg-[rgb(226,34,40)] text-white"
                            : "bg-black/5 text-black/60 hover:bg-black/10"
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Filters */}
            {(selectedCategory !== "Tous" ||
              selectedLocation !== "Tous" ||
              searchQuery) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-black/60">Filtres actifs:</span>
                {selectedCategory !== "Tous" && (
                  <button
                    onClick={() => setSelectedCategory("Tous")}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(226,34,40)]/10 text-[rgb(226,34,40)] rounded-full text-sm"
                  >
                    {selectedCategory}
                    <FiX className="w-4 h-4" />
                  </button>
                )}
                {selectedLocation !== "Tous" && (
                  <button
                    onClick={() => setSelectedLocation("Tous")}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(226,34,40)]/10 text-[rgb(226,34,40)] rounded-full text-sm"
                  >
                    {selectedLocation}
                    <FiX className="w-4 h-4" />
                  </button>
                )}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[rgb(226,34,40)]/10 text-[rgb(226,34,40)] rounded-full text-sm"
                  >
                    "{searchQuery}"
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Remove the decorative header and go straight to Featured Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Featured Event Slider - Reduced height */}
            <motion.div
              className="lg:col-span-2 relative bg-white rounded-2xl overflow-hidden shadow-2xl group h-[400px]" // Changed from h-[600px]
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <motion.img
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={upcomingEvents[currentSlide].image}
                  alt={upcomingEvents[currentSlide].title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                  >
                    <FiChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                  >
                    <FiChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Event Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[rgb(226,34,40)] text-white text-sm rounded-full">
                        En vedette
                      </span>
                      <span className="px-3 py-1 bg-white/90 text-[rgb(226,34,40)] text-sm rounded-full">
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
            </motion.div>

            {/* Next Event Card - Matching height */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-[400px] relative group" // Changed from h-[600px]
            >
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
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-sm font-medium text-[rgb(226,34,40)] mb-1">
                    PROCHAIN ÉVÉNEMENT
                  </h3>
                  <h4 className="text-xl font-semibold text-black/80">
                    {
                      upcomingEvents[(currentSlide + 1) % upcomingEvents.length]
                        .title
                    }
                  </h4>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 space-y-3">
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
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {["upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[rgb(226,34,40)] text-white shadow-lg"
                    : "bg-white/50 text-black/60 hover:bg-white/80"
                }`}
              >
                {tab === "upcoming"
                  ? "Événements à Venir"
                  : "Événements Passés"}
              </button>
            ))}
          </div>

          {activeTab === "upcoming" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
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

                    <div className="p-6">
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
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "past" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg group"
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

                  <div className="p-6">
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
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
