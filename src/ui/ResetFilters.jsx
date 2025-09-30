import { Search } from "lucide-react";

export default function ResetFilters({ onReset, children }) {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{children}</h3>
      <p className="text-gray-600 mb-6">Try adjusting your search filters</p>
      <button
        onClick={onReset}
        className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
}
