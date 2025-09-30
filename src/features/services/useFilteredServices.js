import { useEffect, useState } from "react";

export function useFilteredServices(
  services,
  searchTerm,
  priceRange,
  selectedCategory,
  sortBy
) {
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    let filtered = services.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered = filtered.filter(
      (service) =>
        service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (service) => service.category === selectedCategory
      );
    }

    // Sorting logic
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredServices(filtered);
  }, [services, searchTerm, priceRange, selectedCategory, sortBy]);

  return filteredServices;
}
