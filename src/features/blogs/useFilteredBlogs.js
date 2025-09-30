import { useEffect, useState } from "react";

export function useFilteredBlogs(
  blogs,
  searchTerm,
  selectedCategory,
  selectedTag,
  sortBy
) {
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    let filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (selectedTag !== "all") {
      filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory, selectedTag, sortBy]);

  return filteredBlogs;
}
