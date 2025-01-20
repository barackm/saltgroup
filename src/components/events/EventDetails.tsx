"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiMapPin, FiClock, FiTag } from "react-icons/fi";
import { RegistrationFormDialog } from "@/components/events/RegistrationFormDialog";
import ShareButton from "@/components/events/ShareButton";
import { CiMicrophoneOn } from "react-icons/ci";

const eventData = {
  id: "sans-tabou-conference",
  title: "La Sans Tabou Conférence",
  category: "Conférence",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  longDescription: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes, mais elles sont souvent entourées de malentendus et façonnées par des attentes irréalistes ou des pressions sociales. Ces influences peuvent entraîner des choix précipités ou des compromis nuisibles.`,
  date: "16 Février 2025",
  time: "14h00 - 18h00",
  location: "Hôtel Linda Goma",
  capacity: "400 participants",
  price: "20",
  image: "/images/pattern1.png",
  context: `Les relations amoureuses occupent une place centrale dans la vie de nombreux jeunes. Cependant, elles sont souvent façonnées par des attentes irréalistes, des pressions sociales et des malentendus qui peuvent entraîner des choix précipités ou des compromis nuisibles. Ces influences se manifestent parfois par le renoncement à des ambitions personnelles ou l'établissement de relations dictées par des normes extérieures plutôt que par des valeurs authentiques.

  Depuis près de quatre ans, Sans Tabou s'est imposé comme un espace digital unique, offrant une plateforme hebdomadaire de discussions enrichissantes sur Instagram. Cet espace rassemble une communauté de jeunes engagés et dynamiques, désireux d'aborder sans détour les défis et réalités des relations amoureuses de notre génération.
  
  Ces échanges hebdomadaires ont permis à une audience fidèle de déconstruire les idées reçues, d'explorer des perspectives nouvelles et de réfléchir ensemble à la construction de relations plus équilibrées et épanouissantes.`,
  mainObjective: `Créer un espace de rencontre et de réflexion unique pour permettre aux jeunes de déconstruire les idées reçues, d'explorer des solutions concrètes et de s'outiller pour construire des relations harmonieuses et épanouissantes dans un cadre interactif et inclusif.`,
  specificObjectives: [
    "Fournir un cadre interactif et inclusif : Offrir un espace bienveillant et participatif, propice à l'exploration des défis et des opportunités liés aux relations amoureuses de notre génération.",
    "Sensibiliser aux influences culturelles et sociales : Mettre en lumière les pressions extérieures et les attentes irréalistes qui façonnent les comportements amoureux des jeunes.",
    "Promouvoir l'épanouissement personnel et relationnel : Proposer des outils pratiques et des réflexions profondes pour favoriser des relations équilibrées, basées sur l'authenticité et le respect mutuel.",
    "Encourager l'échange d'expériences et de perspectives : Faciliter des discussions ouvertes et constructives pour renforcer la compréhension mutuelle et inspirer des approches innovantes.",
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
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="relative h-[55vh] sm:h-[60vh] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
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
          quality={10}
          sizes="100vw"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 z-20 pt-16">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="space-y-4 sm:space-y-6 flex-1">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[rgb(226,34,40)] text-white text-xs sm:text-sm font-medium rounded-full shadow-lg">
                {eventData.category}
              </span>
              <h1 className="font-gramatica text-4xl sm:text-4xl md:text-8xl font-bold text-white max-w-3xl leading-tight">
                {eventData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/80 mb-16 sm:mb-0">
                <div className="w-full flex items-center gap-2 mb-2">
                  <CiMicrophoneOn className="w-8 h-8 text-[rgb(226,34,40)]" />
                  <span className="text-md">Speaker: </span>
                  <Link
                    href="https://www.instagram.com/donjuan_masudi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="text-[rgb(226,34,40)] font-bold hover:text-[rgb(200,30,35)] transition-colors duration-300"
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

            <div className="hidden lg:block w-96">
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
      <div className="lg:hidden -mt-12 sm:-mt-16 px-4 sm:px-6 relative z-30">
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4 sm:space-y-6 shadow-lg">
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
      <div className="relative bg-white py-16">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/pattern1.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Context Column */}
            <div className="space-y-6">
              <div className="bg-[rgb(226,34,40)] p-8 rounded-2xl text-white">
                <h2 className="font-gramatica text-2xl font-bold mb-4">
                  Contexte
                </h2>
                <div className="prose prose-invert">
                  {eventData.context.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gray-50">
                <h2 className="font-gramatica text-2xl font-bold mb-4 text-gray-900">
                  Objectif Global
                </h2>
                <p className="text-gray-700">{eventData.mainObjective}</p>
              </div>

              <div className="bg-[rgb(226,34,40)] p-8 rounded-2xl text-white">
                <h2 className="font-gramatica text-2xl font-bold mb-4">
                  Objectifs Spécifiques
                </h2>
                <ul className="space-y-4">
                  {eventData.specificObjectives.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-white mt-1.5">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen bg-gradient-to-br from-[rgb(226,34,40)] to-[rgb(200,30,35)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />

        {/* Pattern background */}
        {!imageError && (
          <div className="absolute inset-0">
            <Image
              src="/images/pattern1.png"
              alt="Background Pattern"
              fill
              className={`object-cover transition-opacity duration-300 ${
                isImageLoaded ? "opacity-30" : "opacity-0"
              }`}
              sizes="100vw"
              priority={false}
              loading="lazy"
              onError={() => setImageError(true)}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        )}

        <div className="relative z-20 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Reduced margin-bottom from mb-20 to mb-12 */}
            <div className="text-white space-y-6 text-center mb-12">
              <h2 className="font-gramatica text-7xl sm:text-8xl lg:text-9xl font-bold">
                Débat
              </h2>
              <p className="text-2xl sm:text-3xl font-light leading-relaxed">
                Moment d&apos;échange sur les défis liés aux relations de notre
                générations.
              </p>
            </div>

            {/* Reduced margin-bottom from mb-32 to mb-16 */}
            <figure className="space-y-4 mb-16">
              <div className="relative h-[400px] sm:h-[500px]">
                <Image
                  src="/images/illustration3.png"
                  alt="Débat illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="text-white/90 text-center text-lg">
                Pour participer au débat écrivez-nous sur WhatsApp « DEBAT » au{" "}
                <span className="font-bold">+243 997 219 984</span>
              </figcaption>
            </figure>

            <div className="text-white flex items-baseline justify-center gap-6">
              <h2 className="font-gramatica text-7xl sm:text-8xl lg:text-9xl font-bold">
                Panel
              </h2>
              <div className="text-2xl sm:text-3xl opacity-90">
                Partage du parcours relationnel
              </div>
            </div>

            <div className="text-white text-center mt-32">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light">
                La présentation de nos panelistes arrive bientôt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white py-24 h-screen">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 text-center font-light">
            La présentation de nos panelistes arrive bientôt
          </p>
        </div>
      </div>{" "}
      <div className="relative bg-gradient-to-br from-[rgb(226,34,40)] to-[rgb(200,30,35)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-gramatica text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8">
            Jeux Tombola
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] sm:h-[500px]">
              <Image
                src="/images/illustration2.png"
                alt="Tombola illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-white space-y-12">
              <p className="text-2xl sm:text-3xl font-light">
                Gagnez un ticket shopping chez Champion&apos;s choice et bien
                d&apos;autres surprises
              </p>

              <div className="text-xl sm:text-2xl font-light">
                L&apos;achat du billet te donnera automatiquement l&apos;accès à
                la tombola
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Updated After Party section with vertical layout */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/illustration1.png"
            alt="After Party"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(226,34,40)]/80 to-[rgb(200,30,35)]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="font-gramatica text-6xl sm:text-7xl lg:text-8xl font-bold text-white text-center">
              After Party
            </h2>
            <p className="text-2xl sm:text-3xl text-white/90 font-light">
              Cocktail + Networking + DJ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
