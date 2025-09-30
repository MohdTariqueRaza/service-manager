import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    url: "#",
    icon: Facebook,
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    url: "#",
    icon: Twitter,
    color: "hover:bg-blue-400",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: Linkedin,
    color: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram,
    color: "hover:bg-pink-600",
  },
  {
    name: "YouTube",
    url: "#",
    icon: Youtube,
    color: "hover:bg-red-600",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110`}
          aria-label={social.name}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
