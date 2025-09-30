import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];
export default function DesktopNavigation() {
  const location = useLocation();
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item, index) => (
        <div key={item.path} style={{ transitionDelay: `${index * 100}ms` }}>
          <Link
            to={item.path}
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
              location.pathname === item.path
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.label}
            <span
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                location.pathname === item.path ? "opacity-10" : ""
              }`}
            ></span>
          </Link>
        </div>
      ))}
    </nav>
  );
}
