const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support" },
  { value: "5.0", label: "Rating" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-white/70">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
