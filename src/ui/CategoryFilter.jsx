export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category === "all"
            ? "All Categories"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
}
