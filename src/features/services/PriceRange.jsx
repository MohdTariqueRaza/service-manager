import { formatCurrency } from "../../utils/helpers";

export default function PriceRange({ priceRange, setPriceRange }) {
  return (
    <div className="hidden lg:block mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Price Range: {formatCurrency(priceRange[0])} -
        {formatCurrency(priceRange[1])}
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
