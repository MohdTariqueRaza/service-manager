import { Filter } from "lucide-react";

export default function MobileFilterButton({ setIsFilterOpen }) {
  return (
    <button
      onClick={() => setIsFilterOpen(true)}
      className="lg:hidden bg-blue-500 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
    >
      <Filter className="h-4 w-4 mr-2" />
      Filters
    </button>
  );
}
