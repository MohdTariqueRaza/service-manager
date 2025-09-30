export default function TagFilter({ tags, selectedTag, setSelectedTag }) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Filter by Tags
      </label>
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, 8).map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTag === tag
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            #{tag}
          </button>
        ))}
        {tags.length > 8 && (
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">More tags...</option>
            {tags.slice(8).map((tag) => (
              <option key={tag} value={tag}>
                #{tag}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
