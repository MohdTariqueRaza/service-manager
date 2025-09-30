import { ArrowLeft } from "lucide-react";

export default function BackButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium group transition-colors duration-300"
    >
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
      {children}
    </Link>
  );
}
