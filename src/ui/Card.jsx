export default function Card({ data }) {
  return (
    <div
      key={data.label}
      className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300"
    >
      <div className="text-2xl font-bold text-blue-600 mb-1">{data.value}</div>
      <div className="text-sm text-gray-600">{data.label}</div>
    </div>
  );
}
