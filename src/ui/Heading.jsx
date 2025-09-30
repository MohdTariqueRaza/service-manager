export default function Heading({ children }) {
  return (
    <h3 className="text-lg font-semibold mb-6 relative inline-block">
      {children}
      <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
    </h3>
  );
}
