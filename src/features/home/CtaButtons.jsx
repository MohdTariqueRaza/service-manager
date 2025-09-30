import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-300">
      <Link
        to="/services"
        className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        <span className="relative z-10 flex items-center">
          Explore Services
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>

      <button className="group flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 group-hover:scale-110 cursor-pointer">
          <Play className="h-6 w-6 ml-1" />
        </div>
        <span className="text-lg font-medium">Watch Demo</span>
      </button>
    </div>
  );
}
