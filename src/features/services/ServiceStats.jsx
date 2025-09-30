import Card from "../../ui/Card";

export default function ServiceStats({ services, categories }) {
  const uniqueServices = services.length;

  const stats = [
    { value: uniqueServices, label: "Total Services" },
    {
      value: Math.max(...services.map((s) => s.price)),
      label: "Highest Price",
    },
    { value: Math.min(...services.map((s) => s.price)), label: "Lowest Price" },
    { value: categories.length - 1, label: "Categories" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
      {stats.map((stat) => (
        <Card key={stat.label} data={stat} />
      ))}
    </div>
  );
}
