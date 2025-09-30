import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { formatCurrency } from "../../utils/helpers";

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
          isHovered
            ? "bg-gradient-to-br from-[#ff6b6b] to-[#ee5a24]"
            : "bg-gradient-to-br from-[#667eea] to-[#764ba2]"
        }`}
      />

      <div className="relative z-10">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              {formatCurrency(service.price)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {service.category}
            </span>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          {/* <ul className="space-y-2 mb-6">
            {service.features?.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-gray-600 transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
