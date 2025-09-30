export default function PageHeading({ description, children }) {
  return (
    <div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        {children}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {description}
      </p>
    </div>
  );
}
