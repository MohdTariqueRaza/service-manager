import { Link } from "react-router-dom";
import Heading from "./Heading";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function FooterQuickLinks() {
  return (
    <div>
      <Heading>Quick Links</Heading>
      <ul className="space-y-3">
        {quickLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
            >
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-200"></div>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
