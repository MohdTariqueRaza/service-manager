import { useEffect, useState } from "react";
import { REACT_APP_API_URL } from "../../utils/contants";
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
    fetch(`${REACT_APP_API_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return { services, loading };
}
