import { Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";

const shareTypes = [
  { icon: Facebook, color: "bg-blue-600", label: "Facebook" },
  { icon: Twitter, color: "bg-blue-400", label: "Twitter" },
  { icon: Linkedin, color: "bg-blue-700", label: "LinkedIn" },
  { icon: MessageCircle, color: "bg-green-500", label: "WhatsApp" },
];

export default function Share() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-500 delay-500">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Share this article
      </h3>
      <div className="flex space-x-4">
        {shareTypes.map((social) => (
          <button
            key={social.label}
            className={`${social.color} text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95`}
          >
            <social.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
