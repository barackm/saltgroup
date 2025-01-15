"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiUsers,
  FiShare2,
  FiArrowLeft,
} from "react-icons/fi";

// Temporary event data - would typically come from an API
const eventData = {
  id: "sans-tabou-conference",
  title: "Sans Tabou Conference",
  category: "Conference",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  longDescription: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes, mais elles sont souvent entourées de malentendus et façonnées par des attentes irréalistes ou des pressions sociales. Ces influences peuvent entrainer des choix précipités ou des compromise nuisibles.`,
  date: "16 Fevrier 2025",
  time: "14h00 - 18h00",
  location: "Goma Serena Hotel",
  capacity: "200 Participants",
  price: "25",
  image: "/images/pattern_1.png", // Add your event image
  context: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes, mais elles sont souvent entourées de malentendus et façonnées par des attentes irréalistes ou des pressions sociales. Ces influences peuvent entrainer des choix précipités ou des compromise nuisibles, comme le renoncement à des ambitions personnelles ou des relations fondées sur des obligations extérieures.

  La Sans Tabou Conférence se donne pour mission de déconstruire ces idées reçues et d'offrir un espace de réflexions pour aider les jeunes à construire des relations sincères, équilibrées et épanouissantes.`,
  mainObjective: `Accompagner les jeunes dans une meilleure compréhension des relations amoureuses en les aidant à réaliser qu'elles sont un aspect précieux de la vie, nécessitant une préparation consciente, une réflexion approfondie et un équilibre entre aspirations personnelles et engagements mutuels.`,
  specificObjectives: [
    "Créer un cadre de dialogue ouvert pour explorer les enjeux et défis des relations modernes.",
    "Aider les jeunes à prendre conscience de leur rôle actif dans la construction de leur épanouissement personnel et de relations harmonieuses.",
    "Inspirer une planification de la vie alignée sur leurs aspirations et leurs valeurs fondamentales.",
  ],
  target: `Les bénéficiaires de cette conférence seront tous les jeunes de la ville de Goma et d'ailleurs. Ainsi, une moyenne de 200 jeunes est l'effectif attendu pour cette activité.`,
};

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgb(226,34,40)]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
        </div>
        <Image
          src={eventData.image}
          alt={eventData.title}
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Back Button */}
        <div className="absolute top-4 left-4 z-30">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full 
                      text-gray-900 hover:bg-gray-100 transition-all border border-gray-200
                      shadow-lg"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20">
          <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-[rgb(226,34,40)] text-white text-sm font-medium rounded-full shadow-lg">
                {eventData.category}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white max-w-3xl shadow-sm">
                {eventData.title}
              </h1>
              <p className="text-lg text-white max-w-2xl leading-relaxed">
                {eventData.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Context Section */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                Contexte
              </h2>
              <div className="prose prose-lg max-w-none">
                {eventData.context.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Objectives Section */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                Objectifs de l'événement
              </h2>
              <div className="pl-4 border-l-4 border-[rgb(226,34,40)] py-4 bg-gray-50/50 rounded-r-lg">
                <h3 className="font-display text-xl font-semibold mb-3 text-gray-900">
                  Objectif principal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {eventData.mainObjective}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-gray-900">
                  Objectifs spécifiques
                </h3>
                <ul className="space-y-3">
                  {eventData.specificObjectives.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[rgb(226,34,40)] mt-1.5 text-lg">
                        •
                      </span>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Audience Section */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                Public Cible
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {eventData.target}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-8">
              {[
                { icon: FiCalendar, label: "Date", value: eventData.date },
                { icon: FiClock, label: "Heure", value: eventData.time },
                { icon: FiMapPin, label: "Lieu", value: eventData.location },
                { icon: FiUsers, label: "Capacité", value: eventData.capacity },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="p-3 rounded-full bg-[rgb(226,34,40)]/10 w-fit">
                    <item.icon className="w-5 h-5 text-[rgb(226,34,40)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      {item.label}
                    </p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-lg">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Prix du ticket</p>
                <p className="font-display text-3xl font-bold text-[rgb(226,34,40)]">
                  €{eventData.price}
                </p>
              </div>

              <button
                className="w-full px-6 py-3 bg-[rgb(226,34,40)] text-white font-medium rounded-full 
                               hover:bg-[rgb(200,30,35)] transition-all transform hover:scale-[1.02] 
                               shadow-lg hover:shadow-xl hover:shadow-[rgb(226,34,40)]/20"
              >
                Réserver ma place
              </button>

              <button
                className="w-full px-6 py-3 bg-gray-50 text-gray-700 font-medium rounded-full 
                               hover:bg-gray-100 transition-all flex items-center justify-center gap-2 
                               border border-gray-100"
              >
                <FiShare2 className="w-4 h-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
