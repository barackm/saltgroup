import { FiCalendar, FiMapPin, FiClock, FiHeart } from "react-icons/fi";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";

interface EventCardProps {
  event: any;
  index: number;
  isPast?: boolean;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="h-full">
      <div
        className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm 
          transition-all duration-300 ease-out hover:shadow-xl hover:translate-y-[-4px]"
      >
        <div className="aspect-[5/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <Badge variant="primary" withAnimation>
              {event.category}
            </Badge>
            {event.featured && (
              <Badge variant="secondary" withAnimation>
                Featured
              </Badge>
            )}
          </div>
          <button className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/20 backdrop-blur-md hover:bg-white/90 transition-all duration-300 transform hover:scale-110 group/btn">
            <FiHeart className="w-4 h-4 text-white group-hover/btn:text-[rgb(226,34,40)]" />
          </button>
        </div>
        <div className="flex-1 p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="font-display text-xl font-semibold text-gray-900 line-clamp-1">
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 line-clamp-2">
              {event.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <FiCalendar />, value: event.date },
              { icon: <FiClock />, value: event.time },
              { icon: <FiMapPin />, value: event.location, colSpan: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 text-sm text-gray-600 ${
                  item.colSpan ? "col-span-2" : ""
                }`}
              >
                <IconWrapper icon={item.icon} variant="primary" size="sm" />
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-medium">
                Starting from
              </p>
              <p className="font-display text-2xl font-bold text-[rgb(226,34,40)]">
                €{event.price}
              </p>
            </div>
            <Button variant="primary">Get Tickets</Button>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
