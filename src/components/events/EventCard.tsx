import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiClock, FiHeart } from "react-icons/fi";

interface EventCardProps {
  event: any;
  index: number;
  isPast?: boolean;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm 
          transition-all duration-300 ease-out hover:shadow-xl hover:translate-y-[-4px]"
      >
        {/* Image Container */}
        <div className="aspect-[5/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Enhanced Category Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-2 bg-[rgb(226,34,40)] text-white text-xs font-medium rounded-full shadow-lg"
            >
              {event.category}
            </motion.span>
            {event.featured && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs font-medium rounded-full shadow-lg"
              >
                Featured
              </motion.span>
            )}
          </div>
          {/* Enhanced Like Button */}
          <button className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/20 backdrop-blur-md hover:bg-white/90 transition-all duration-300 transform hover:scale-110 group/btn">
            <FiHeart className="w-4 h-4 text-white group-hover/btn:text-[rgb(226,34,40)]" />
          </button>
        </div>
        {/* Content Container */}
        <div className="flex-1 p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 line-clamp-2">
              {event.description}
            </p>
          </div>
          {/* Enhanced Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2.5 rounded-full bg-gray-50 shadow-sm">
                <FiCalendar className="w-4 h-4 text-[rgb(226,34,40)]" />
              </div>
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2.5 rounded-full bg-gray-50 shadow-sm">
                <FiClock className="w-4 h-4 text-[rgb(226,34,40)]" />
              </div>
              <span className="font-medium">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 col-span-2">
              <div className="p-2.5 rounded-full bg-gray-50 shadow-sm">
                <FiMapPin className="w-4 h-4 text-[rgb(226,34,40)]" />
              </div>
              <span className="font-medium line-clamp-1">{event.location}</span>
            </div>
          </div>
          {/* Enhanced Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-medium">
                Starting from
              </p>
              <p className="text-2xl font-bold text-[rgb(226,34,40)]">
                €{event.price}
              </p>
            </div>
            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-[rgb(226,34,40)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[rgb(226,34,40)]/10">
              Get Tickets
            </button>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
};
