import { Search } from "lucide-react";
export default function SearchBar({ value, onSearch, placeholderText }) {
  return (
    <>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={onSearch}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
    </>
  );
}
