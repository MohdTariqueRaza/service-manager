import { useEffect, useState } from "react";

export function useBlogDetails(id) {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (import.meta.env.VITE_APP_ENV === "wp") {
          const response = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/posts/${id}`
          );
          if (!response.ok) throw new Error("Failed to fetch blog");
          const data = await response.json();
          setBlog(data);

          const relatedResponse = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/posts?per_page=3&exclude=${id}`
          );
          const relatedData = await relatedResponse.json();
          setRelatedBlogs(relatedData);
        } else {
          // Local JSON
          const response = await fetch("/blogs.json");
          const data = await response.json();
          const foundBlog = data.blogs.find((b) => b.id === parseInt(id));
          setBlog(foundBlog);

          setRelatedBlogs(
            data.blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3)
          );
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { blog, relatedBlogs, loading, error };
}
