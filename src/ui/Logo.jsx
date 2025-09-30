import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">SM</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ServiceManager
        </span>
      </Link>
    </div>
  );
}
