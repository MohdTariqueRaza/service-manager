// src/components/BlogCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight, Eye } from "lucide-react";

const BlogCard = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {blog.category}
          </span>
        </div>

        {/* View Counter */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 text-white/90">
          <Eye className="h-4 w-4" />
          <span className="text-sm">
            {Math.floor(Math.random() * 1000) + 100}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/blog/${blog.id}`}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            <ArrowRight className="h-6 w-6 text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>
              {blog.author
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
            >
              #{tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
              +{blog.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Read More Link */}
        <div>
          <Link
            to={`/blog/${blog.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
          >
            Read More
            <span
              className={`ml-2 transition-transform duration-200 ${
                isHovered ? "translate-x-1" : "translate-x-0"
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
