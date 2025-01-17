"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiTag } from "react-icons/fi";
import { RegistrationFormDialog } from "@/components/events/RegistrationFormDialog";
import ShareButton from "@/components/events/ShareButton";
import { CiMicrophoneOn } from "react-icons/ci";

const eventData = {
  id: "sans-tabou-conference",
  title: "Sans Tabou Conférence",
  category: "Conférence",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  longDescription: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes, mais elles sont souvent entourées de malentendus et façonnées par des attentes irréalistes ou des pressions sociales. Ces influences peuvent entraîner des choix précipités ou des compromis nuisibles.`,
  date: "16 Février 2025",
  time: "14h00 - 18h00",
  location: "Hôtel Linda Goma",
  capacity: "200 participants",
  price: "20",
  image: "/images/pattern_1-min.png",
  context: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes, mais elles sont souvent entourées de malentendus et façonnées par des attentes irréalistes ou des pressions sociales. Ces influences peuvent entraîner des choix précipités ou des compromis nuisibles, comme le renoncement à des ambitions personnelles ou des relations fondées sur des obligations extérieures.

  La Sans Tabou Conférence se donne pour mission de déconstruire ces idées reçues et d'offrir un espace de réflexion pour aider les jeunes à construire des relations sincères, équilibrées et épanouissantes.`,
  mainObjective: `Accompagner les jeunes dans une meilleure compréhension des relations amoureuses en les aidant à réaliser qu'elles sont un aspect précieux de la vie, nécessitant une préparation consciente, une réflexion approfondie et un équilibre entre aspirations personnelles et engagements mutuels.`,
  specificObjectives: [
    "Créer un cadre de dialogue ouvert pour explorer les enjeux et défis des relations modernes",
    "Aider les jeunes à prendre conscience de leur rôle actif dans la construction de leur épanouissement personnel et de relations harmonieuses",
    "Inspirer une planification de vie alignée sur leurs aspirations et leurs valeurs fondamentales",
  ],
  target: `Les bénéficiaires de cette conférence seront tous les jeunes de la ville de Goma et d'ailleurs. Ainsi, une moyenne de 200 jeunes est l'effectif attendu pour cette activité.`,
};

export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  price: string;
  image: string;
  context: string;
  mainObjective: string;
  specificObjectives: string[];
  target: string;
}

export default function EventDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
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
          priority={false}
          loading="lazy"
          quality={30}
        />

        <div className="absolute inset-0 z-20 pt-16">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="space-y-4 sm:space-y-6 flex-1">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[rgb(226,34,40)] text-white text-xs sm:text-sm font-medium rounded-full shadow-lg">
                {eventData.category}
              </span>
              <h1 className="font-gramatica text-2xl sm:text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
                {eventData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/80 mb-12 sm:mb-0">
                <div className="w-full flex items-center gap-2 mb-2">
                  <CiMicrophoneOn className="w-8 h-8 text-[rgb(226,34,40)]" />
                  <span className="text-md">Speaker: </span>
                  <Link
                    href="https://www.instagram.com/donjuan_masudi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="text-[rgb(226,34,40)] hover:text-[rgb(200,30,35)] transition-colors duration-300"
                  >
                    Don Juan
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-[rgb(226,34,40)]" />
                  <span className="text-sm">{eventData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4 text-[rgb(226,34,40)]" />
                  <span className="text-sm">{eventData.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-[rgb(226,34,40)]" />
                  <span className="text-sm">{eventData.location}</span>
                </div>
              </div>
            </div>

            {/* Desktop ticket section */}
            <div data-aos="fade-left" className="hidden lg:block w-96">
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-lg">
                <div className="relative">
                  <div className="inline-flex items-center bg-[rgb(226,34,40)] text-white px-6 py-3 rounded-lg">
                    <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-3 h-6 bg-white rounded-r-full" />
                    <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-3 h-6 bg-white rounded-l-full" />
                    <FiTag className="w-5 h-5 mr-3 rotate-90" />
                    <div>
                      <span className="text-xs text-white/80">
                        Prix du ticket
                      </span>
                      <div className="text-4xl font-bold">
                        ${eventData.price}
                      </div>
                    </div>
                  </div>
                </div>

                <RegistrationFormDialog
                  eventDate={eventData.date}
                  eventLocation={eventData.location}
                  eventTime={eventData.time}
                  eventTitle={eventData.title}
                  textClassName="text-sm"
                  title="Book Now"
                />

                <ShareButton eventData={eventData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile ticket section */}
      <div className="lg:hidden -mt-12 sm:-mt-16 px-4 sm:px-6 relative z-30">
        <div
          data-aos="fade-up"
          className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4 sm:space-y-6 shadow-lg"
        >
          <div className="relative">
            <div className="inline-flex items-center bg-[rgb(226,34,40)] text-white px-6 py-3 rounded-lg">
              <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-3 h-6 bg-white rounded-r-full" />
              <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-3 h-6 bg-white rounded-l-full" />
              <FiTag className="w-5 h-5 mr-3 rotate-90" />
              <div>
                <span className="text-xs text-white/80">Prix du ticket</span>
                <div className="text-4xl font-bold">${eventData.price}</div>
              </div>
            </div>
          </div>

          <RegistrationFormDialog
            eventDate={eventData.date}
            eventLocation={eventData.location}
            eventTime={eventData.time}
            eventTitle={eventData.title}
            textClassName="text-sm"
            title="Book Now"
          />

          <ShareButton eventData={eventData} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            <div data-aos="fade-up" className="space-y-4">
              <h2 className="font-gramatica text-xl sm:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                Contexte
              </h2>
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                {eventData.context.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" className="space-y-4 sm:space-y-6">
              <h2 className="font-gramatica text-xl sm:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                Objectifs de l&apos;événement
              </h2>
              <div className="pl-3 sm:pl-4 border-l-4 border-[rgb(226,34,40)] py-3 sm:py-4 bg-gray-50/50 rounded-r-lg">
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                  Objectif principal
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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

            <div
              data-aos="fade-up"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-6 sm:my-8"
            >
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
        </div>
      </div>
    </div>
  );
}
