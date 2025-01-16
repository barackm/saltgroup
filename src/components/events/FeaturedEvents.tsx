import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { RegistrationFormDialog } from "./RegistrationFormDialog";
import Link from "next/link";

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-10" />

      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgb(226,34,40)]/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Parallax background */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/pattern_1.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-30 scale-110"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl px-4 sm:px-6"
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-center gap-3 sm:gap-5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  variant="primary"
                  className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5 backdrop-blur-sm"
                >
                  {sansTabouEvent.category}
                </Badge>
              </motion.div>
              <Link
                href="/events/sans-tabou-conference"
                className="group transition-all duration-300"
              >
                <h1
                  className="font-display text-3xl sm:text-6xl md:text-7xl font-bold text-white text-center 
                             max-w-2xl [text-shadow:_0_4px_24px_rgba(0,0,0,0.2)] group-hover:text-white/90 
                             transition-colors duration-300"
                >
                  {sansTabouEvent.title}
                </h1>
              </Link>
            </div>

            <p className="text-base sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed text-center px-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.2)]">
              {sansTabouEvent.description}
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
              {/* Event details with enhanced styling */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-full backdrop-blur-md text-sm sm:text-base border border-white/20 hover:border-white/30 transition-colors"
              >
                <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(226,34,40)]" />
                <span className="text-white">{sansTabouEvent.date}</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-full backdrop-blur-md text-sm sm:text-base border border-white/20 hover:border-white/30 transition-colors"
              >
                <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(226,34,40)]" />
                <span className="text-white">{sansTabouEvent.location}</span>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 pt-4">
              <RegistrationFormDialog
                eventDate={sansTabouEvent.date}
                eventLocation={sansTabouEvent.location}
                eventTime={sansTabouEvent.time}
                eventTitle={sansTabouEvent.title}
                className="w-fit"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
