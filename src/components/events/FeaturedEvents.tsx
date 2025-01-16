"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { RegistrationFormDialog } from "./RegistrationFormDialog";

const sansTabouEvent = {
  category: "Conférence",
  title: "Sans Tabou Conférence",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  date: "16 Février 2025",
  location: "Hôtel Linda Goma",
  time: "14h00 - 18h00",
};

export const FeaturedEvents = () => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[rgb(226,34,40)]/10 rounded-full blur-[60px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[120px]" />
      </div>

      {!imageError && (
        <div className="absolute inset-0">
          <Image
            src="/images/pattern_1.png"
            alt="Background Pattern"
            fill
            className={`object-cover transition-opacity duration-300 ${
              isImageLoaded ? "opacity-20" : "opacity-0"
            }`}
            sizes="100vw"
            quality={30}
            priority={false}
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-full max-w-3xl px-4 sm:px-6">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-center gap-3 sm:gap-5">
              <div data-aos="fade-down">
                <Badge
                  variant="primary"
                  className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5 backdrop-blur-sm"
                >
                  {sansTabouEvent.category}
                </Badge>
              </div>
              <Link
                href="/events/sans-tabou-conference"
                className="group transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1 className="font-gramatica text-3xl sm:text-6xl md:text-7xl font-bold text-white text-center max-w-2xl [text-shadow:_0_4px_24px_rgba(0,0,0,0.2)] group-hover:text-white/90 transition-colors duration-300">
                  {sansTabouEvent.title}
                </h1>
              </Link>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-base sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed text-center px-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.2)]"
            >
              {sansTabouEvent.description}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center justify-center flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-full backdrop-blur-md text-sm sm:text-base border border-white/20 hover:border-white/30 transition-colors hover:scale-105">
                <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(226,34,40)]" />
                <span className="text-white">{sansTabouEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-full backdrop-blur-md text-sm sm:text-base border border-white/20 hover:border-white/30 transition-colors hover:scale-105">
                <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(226,34,40)]" />
                <span className="text-white">{sansTabouEvent.location}</span>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex items-center justify-center gap-3 sm:gap-4 pt-4"
            >
              <RegistrationFormDialog
                eventDate={sansTabouEvent.date}
                eventLocation={sansTabouEvent.location}
                eventTime={sansTabouEvent.time}
                eventTitle={sansTabouEvent.title}
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
