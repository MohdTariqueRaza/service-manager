import { Mail, MapPin, Phone } from "lucide-react";
import ContactCard from "./ContactCard";

const contacts = [
  {
    icon: Mail,
    title: "Email us",
    content: "hr@hipster-inc.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call us",
    content: "+919044906426",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit us",
    content: "123 Business St, Suite 100",
    description:
      "CP-102,Arma R Square, Viraj Khand,Gomti Nagar,Lucknow –226010, India",
  },
];

export default function Contacts() {
  return (
    <div className="space-y-6">
      {contacts.map((item, index) => (
        <ContactCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
