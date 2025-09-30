import { useEffect, useState } from "react";
import ServiceCard from "../features/services/ServiceCard";
import ServiceHero from "../features/services/ServiceHero";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";
import Sort from "../ui/Sort";
import MobileFilterButton from "../features/services/MobileFilterButton";
import PriceRange from "../features/services/PriceRange";
import ResetFilters from "../ui/ResetFilters";
import MobileFilterModal from "../features/services/MobileFilterModal";
import { useFetchServices } from "../features/services/useFetchServices";
import { useFilteredServices } from "../features/services/useFilteredServices";
import Loader from "../ui/Loader";

const Services = () => {
  const { services, loading } = useFetchServices();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredServices = useFilteredServices(
    services,
    searchTerm,
    priceRange,
    selectedCategory,
    sortBy
  );

  const categories = [
    "all",
    ...new Set(services.map((service) => service.category)),
  ];

  useEffect(() => {
    document.title = "Service Manager - Services";
    return () => {
      document.title = "Service Manager – Services & Blog Portal";
    };
  }, []);

  if (loading) return <Loader>Loading services...</Loader>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <ServiceHero services={services} categories={categories} />

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <SearchBar
                  value={searchTerm}
                  onSearch={(e) => setSearchTerm(e.target.value)}
                  placeholderText="Search services..."
                />
              </div>
              <div className="flex-1">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categories={categories}
                />
              </div>
              <div className="flex-1">
                <Sort
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  options={[
                    { value: "name", name: "Sort by Name" },
                    { value: "price-low", name: "Price: Low to High" },
                    { value: "price-high", name: "Price: High to Low" },
                  ]}
                />
              </div>
              <MobileFilterButton setIsFilterOpen={setIsFilterOpen} />
            </div>
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <ResetFilters
              onReset={() => {
                setSearchTerm("");
                setPriceRange([0, 5000]);
                setSelectedCategory("all");
                setSortBy("name");
              }}
            >
              No services found
            </ResetFilters>
          )}
        </div>
      </section>
      {isFilterOpen && (
        <MobileFilterModal
          setIsFilterOpen={setIsFilterOpen}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
};

export default Services;
