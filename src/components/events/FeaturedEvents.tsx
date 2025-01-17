"use client";
import { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { RegistrationFormDialog } from "./RegistrationFormDialog";

const sansTabouEvent = {
  category: "Conférence",
  title: "La Sans Tabou Conférence",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  date: "16 Février 2025",
  location: "Hôtel Linda Goma",
  time: "14h00 - 18h00",
};

export const FeaturedEvents = () => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[rgb(226,34,40)] to-[rgb(200,30,35)]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[rgb(226,34,40)]/10 rounded-full blur-[60px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[120px]" />
      </div>

      {!imageError && (
        <div className="absolute inset-0">
          <Image
            src="/images/pattern1.png"
            alt="Background Pattern"
            fill
            className={`object-cover transition-opacity duration-300 ${
              isImageLoaded ? "opacity-30" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={false}
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-8">
            <div className="flex flex-col items-center gap-3 sm:gap-5">
              <Link
                href="/events/sans-tabou-conference"
                className="group transition-all duration-300"
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center max-w-4xl [text-shadow:_0_4px_24px_rgba(0,0,0,0.2)] group-hover:text-white/90 transition-colors duration-300 font-gramatica">
                  LA Sans Tabou <br />
                  Conférence
                </h1>
              </Link>
            </div>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed text-center px-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.2)]">
              {sansTabouEvent.description}
            </p>

            <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5 sm:w-5 sm:h-5 text-white/60" />
                <span className="text-base sm:text-base text-white">
                  {sansTabouEvent.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-5 h-5 sm:w-5 sm:h-5 text-white/60" />
                <span className="text-base sm:text-base text-white">
                  {sansTabouEvent.location}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4 pt-4">
              <RegistrationFormDialog
                eventDate={sansTabouEvent.date}
                eventLocation={sansTabouEvent.location}
                eventTime={sansTabouEvent.time}
                eventTitle={sansTabouEvent.title}
                className="w-fit min-w-[280px] sm:min-w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
