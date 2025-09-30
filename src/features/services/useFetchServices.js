import { useEffect, useState } from "react";

export function useFetchServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url =
      import.meta.env.VITE_APP_ENV === "wp"
        ? `${import.meta.env.VITE_APP_API_URL}/services`
        : "/services.json";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch services");
        return response.json();
      })
      .then((data) => {
        setServices(
          import.meta.env.VITE_APP_ENV === "wp" ? data : data.services
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  return { services, loading };
}
