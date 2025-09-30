import { Send } from "lucide-react";

export default function Subscribe() {
  return (
    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center transition-all duration-300">
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
        <Send className="h-4 w-4 text-white" />
      </div>
      <p className="text-green-400 text-sm">Thank you for subscribing!</p>
    </div>
  );
}
