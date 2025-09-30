import { Bookmark, Calendar, Clock, Eye, Share2, User } from "lucide-react";
import { useState } from "react";

export default function BlogHeader({ blog }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 md:h-96 object-cover"
      />

      <div className="p-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>
              By{" "}
              {blog.author
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-100 transition-all duration-300 hover:scale-105"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
              isBookmarked
                ? "bg-yellow-50 text-yellow-600 border border-yellow-200"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Bookmark
              className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
            />
            <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </button>

          <button className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
