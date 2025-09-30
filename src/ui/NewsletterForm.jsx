import { Send } from "lucide-react";
import { useState } from "react";

export default function NewsletterForm({ setIsSubscribed }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="transition-all duration-300">
      <div className="flex space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
