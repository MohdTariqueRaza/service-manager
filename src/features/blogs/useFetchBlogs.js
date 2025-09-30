import { useEffect, useState } from "react";
import { REACT_APP_API_URL } from "../../utils/contants";
export function useFetchBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/blogs.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogs(data.blogs);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${REACT_APP_API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return { blogs, loading };
}
