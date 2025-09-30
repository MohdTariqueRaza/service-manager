export default function ContactCard({ item, index }) {
  return (
    <div
      key={item.title}
      className={`flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-lg ${
        index === 0
          ? "animate-fade-in"
          : index === 1
          ? "animate-fade-in delay-100"
          : "animate-fade-in delay-200"
      }`}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
        <item.icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{item.title}</h3>
        <p className="text-gray-600">{item.content}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </div>
  );
}
