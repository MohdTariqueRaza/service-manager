import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3 text-gray-300">
        <Mail className="h-5 w-5 text-blue-400" />
        <span>hr@hipster-inc.com</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <Phone className="h-5 w-5 text-green-400" />
        <span>+919044906426</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <MapPin className="h-5 w-5 text-red-400" />
        <span>
          CP-102,Arma R Square, Viraj Khand,Gomti Nagar,Lucknow –226010, India
        </span>
      </div>
    </div>
  );
}
