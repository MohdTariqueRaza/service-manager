import Card from "../../ui/Card";

export default function BlogStats({ stats }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto transition-all duration-800 delay-200`}
    >
      {stats.map((stat) => (
        <Card key={stat.label} data={stat} />
      ))}
    </div>
  );
}
