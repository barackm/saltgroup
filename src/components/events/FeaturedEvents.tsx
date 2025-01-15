import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";

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
      {/* Background Pattern */}
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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <span className="px-4 py-2 bg-[rgb(226,34,40)] text-white text-sm font-medium rounded-full shadow-lg">
                {sansTabouEvent.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4 shadow-sm">
                {sansTabouEvent.title}
              </h1>
            </div>

            <p className="text-lg text-white max-w-2xl leading-relaxed text-center">
              {sansTabouEvent.description}
            </p>

            <div className="flex items-center justify-center gap-6 text-white flex-wrap">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-sm border border-white/10">
                <FiCalendar className="text-[rgb(226,34,40)]" />
                <span className="text-white/90">{sansTabouEvent.date}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-sm border border-white/10">
                <FiMapPin className="text-[rgb(226,34,40)]" />
                <span className="text-white/90">{sansTabouEvent.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[rgb(226,34,40)] text-white text-sm font-medium rounded-full 
                          hover:bg-[rgb(200,30,35)] transition-all shadow-lg hover:shadow-xl 
                          hover:shadow-[rgb(226,34,40)]/20"
              >
                Get Tickets
              </motion.button>
              <Link href="/events/sans-tabou-conference">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-full 
                            hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
