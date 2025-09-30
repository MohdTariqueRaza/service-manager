import { Star } from "lucide-react";

export default function Badge({ children }) {
  return (
    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
      <Star className="h-4 w-4 text-yellow-300 fill-current" />
      <span className="text-white/90 text-sm font-medium">{children}</span>
    </div>
  );
}
