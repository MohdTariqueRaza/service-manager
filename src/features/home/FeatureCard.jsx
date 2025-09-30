export default function FeatureCard({ feature, index }) {
  return (
    <div
      key={feature.title}
      className={`group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:scale-102 ${
        index === 0
          ? "animate-slide-in-left"
          : index === 1
          ? "animate-slide-in-left animation-delay-200"
          : "animate-slide-in-left animation-delay-400"
      }`}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <feature.icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}
