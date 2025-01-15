import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const sansTabouEvent = {
  category: "Conference",
  title: "Sans Tabou Conference",
  description:
    "Une conférence unique sur les relations amoureuses et l'épanouissement personnel des jeunes.",
  date: "16 Fevrier 2025",
  location: "Goma Serena Hotel",
  time: "14h00 - 18h00",
};

export const FeaturedEvents = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] rounded-2xl sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[rgb(226,34,40)]/20 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-30 backdrop-blur-[2px]">
        <div className="w-full max-w-2xl px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[rgb(226,34,40)] text-white text-xs sm:text-sm font-medium rounded-full">
                {sansTabouEvent.category}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4">
                {sansTabouEvent.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed line-clamp-2 sm:line-clamp-none px-4 text-center">
              {sansTabouEvent.description}
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-8 text-white/90 flex-wrap px-4">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md text-sm">
                <FiCalendar className="text-[rgb(226,34,40)]" />
                <span>{sansTabouEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md text-sm">
                <FiMapPin className="text-[rgb(226,34,40)]" />
                <span>{sansTabouEvent.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-8 px-4">
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[rgb(226,34,40)] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[rgb(200,30,35)] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[rgb(226,34,40)]/20">
                Get Tickets
              </button>
              <Link href="/events/sans-tabou-conference">
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-white/20 backdrop-blur-md transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
