import { useEffect, useState } from "react";
import BlogCard from "../features/blogs/BlogCard";
import BlogHero from "../features/blogs/BlogHero";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";
import Sort from "../ui/Sort";
import TagFilter from "../features/blogs/TagFilter";
import ResetFilters from "../ui/ResetFilters";
import { useFetchBlogs } from "../features/blogs/useFetchBlogs";
import { useFilteredBlogs } from "../features/blogs/useFilteredBlogs";
import Loader from "../ui/Loader";

const Blog = () => {
  const { blogs, loading } = useFetchBlogs();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredBlogs = useFilteredBlogs(
    blogs,
    searchTerm,
    selectedCategory,
    selectedTag,
    sortBy
  );

  const categories = ["all", ...new Set(blogs.map((blog) => blog.category))];
  const tags = ["all", ...new Set(blogs.flatMap((blog) => blog.tags))];

  const stats = [
    { value: blogs.length, label: "Total Articles" },
    { value: categories.length - 1, label: "Categories" },
    { value: tags.length - 1, label: "Tags" },
    { value: Math.floor(blogs.length * 8.5), label: "Total Read Time (min)" },
  ];

  useEffect(() => {
    document.title = "Service Manager - Blogs";
    return () => {
      document.title = "Service Manager – Services & Blog Portal";
    };
  }, []);

  if (loading) return <Loader>Loading Articles...</Loader>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <BlogHero stats={stats} />

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-2 relative">
                <SearchBar
                  value={searchTerm}
                  onSearch={(e) => setSearchTerm(e.target.value)}
                  placeholderText="Search articles..."
                />
              </div>
              <div>
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categories={categories}
                />
              </div>
              <div>
                <Sort
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  options={[
                    { value: "newest", name: "Newest First" },
                    { value: "oldest", name: "Oldest First" },
                    { value: "title", name: "Sort by Title" },
                  ]}
                />
              </div>
            </div>

            <TagFilter
              tags={tags}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          </div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <ResetFilters
              onReset={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedTag("all");
                setSortBy("newest");
              }}
            >
              No articles found
            </ResetFilters>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
