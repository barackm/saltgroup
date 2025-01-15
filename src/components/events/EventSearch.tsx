import { FiSearch } from "react-icons/fi";
import { categories } from "../../data/events";

interface EventSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

export const EventSearch = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: EventSearchProps) => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 h-12 bg-gray-100 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[rgb(226,34,40)]"
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
