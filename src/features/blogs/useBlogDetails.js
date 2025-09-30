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
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/posts/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch blog");

        const data = await response.json();

        setBlog(data);

        // If you want related blogs, fetch /posts separately
        const relatedResponse = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/posts?per_page=3&exclude=${id}`
        );
        const relatedData = await relatedResponse.json();
        setRelatedBlogs(relatedData);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
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
