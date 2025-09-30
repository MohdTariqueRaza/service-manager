import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function MobileNavigation({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  return (
    <div
      className={`md:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4 space-y-2">
        {navItems.map((item, index) => (
          <div key={item.path} style={{ transitionDelay: `${index * 100}ms` }}>
            <Link
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-6 py-3 text-lg font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}
        <div className="px-6 py-3">
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
