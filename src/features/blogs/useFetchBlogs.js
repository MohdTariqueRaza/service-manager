import { useEffect, useState } from "react";

export function useFetchBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const isWP = import.meta.env.VITE_APP_ENV === "wp";

    const fetchURL = isWP
      ? `${import.meta.env.VITE_APP_API_URL}/posts`
      : "/blogs.json";

    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(isWP ? data : data.blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return { blogs, loading };
}
