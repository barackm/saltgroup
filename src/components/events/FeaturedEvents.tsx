import Link from "next/link";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const sansTabouEvent = {
  category: "Conference",
  title: "Sans Tabou Conference",
  description:
    "Une conférence unique sur les relations amoureuses et l&apos;épanouissement personnel des jeunes.",
  date: "16 Fevrier 2025",
  location: "Goma Serena Hotel",
  time: "14h00 - 18h00",
};

export const FeaturedEvents = () => {
  return (
    <div className="relative h-[500px] sm:h-[500px] rounded-xl sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgb(226,34,40)]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>
      <Image
        src="/images/pattern_1.png"
        alt="Background Pattern"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-full max-w-2xl px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              <Badge
                variant="primary"
                className="text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
              >
                {sansTabouEvent.category}
              </Badge>
              <h1 className="font-display text-2xl sm:text-5xl md:text-6xl font-bold text-white text-center max-w-xl">
                {sansTabouEvent.title}
              </h1>
            </div>

            <p className="text-sm sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed text-center line-clamp-3 sm:line-clamp-none px-2">
              {sansTabouEvent.description}
            </p>

            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm border border-white/10">
                <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(226,34,40)]" />
                <span className="text-white/90">{sansTabouEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm border border-white/10">
                <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(226,34,40)]" />
                <span className="text-white/90">{sansTabouEvent.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2">
              <Button variant="primary" className="text-xs sm:text-sm">
                Get Tickets
              </Button>
              <Link href="/events/sans-tabou-conference">
                <Button variant="secondary" className="text-xs sm:text-sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
