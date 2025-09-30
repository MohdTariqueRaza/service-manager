import PageHeading from "../../ui/PageHeading";
import ServiceStats from "./ServiceStats";

export default function ServiceHero({ services, categories }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PageHeading
          description=" Discover our comprehensive range of professional services designed
            to help your business thrive in the digital age."
        >
          Our <span className="text-gradient">Services</span>
        </PageHeading>
        <ServiceStats services={services} categories={categories} />
      </div>
    </section>
  );
}
