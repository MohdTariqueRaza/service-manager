export default function CTA({
  title,
  subTitle,
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-600",
  children,
}) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-3xl p-12 text-white`}
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8 opacity-90">{subTitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
