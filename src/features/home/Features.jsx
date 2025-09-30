import { Shield, Star, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import PageHeading from "../../ui/PageHeading";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Blazing fast performance with optimized workflows and real-time updates.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Military-grade encryption and compliance with industry security standards.",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: Star,
    title: "Award Winning",
    description: "Recognized as the best service management platform for 2024.",
    color: "from-purple-400 to-pink-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ServiceManager
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of service management with cutting-edge
            features designed for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
