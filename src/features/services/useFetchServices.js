import { useEffect, useState } from "react";

export function useFetchServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/services.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setServices(data.services);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_APP_API_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return { services, loading };
}
