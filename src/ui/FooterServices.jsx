import Heading from "./Heading";

const services = [
  { name: "Web Development", path: "/services?category=development" },
  { name: "UI/UX Design", path: "/services?category=design" },
  { name: "Digital Marketing", path: "/services?category=marketing" },
  { name: "SEO Optimization", path: "/services?category=seo" },
];

export default function FooterServices() {
  return (
    <div>
      <Heading>Our Services</Heading>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service.name}>
            <a
              href={service.path}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
            >
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors duration-200"></div>
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
