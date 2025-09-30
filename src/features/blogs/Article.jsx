export default function Article({ blog }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
      <div className="prose prose-lg max-w-none">
        <div className="transition-all duration-500 delay-300">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to our comprehensive guide on {blog.title.toLowerCase()}. In
            this article, we'll explore the latest trends and best practices
            that can help you achieve outstanding results in your projects.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The first step in mastering {blog.category} is understanding the
            fundamental principles that govern this field. Whether you're a
            beginner or an experienced professional, there's always something
            new to learn.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
            "The only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle."
          </blockquote>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Advanced performance optimization techniques
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Scalable architecture patterns
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Security best practices
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            As we continue to explore the world of {blog.category}, remember
            that continuous learning and adaptation are key to staying ahead in
            this rapidly evolving field.
          </p>
        </div>
      </div>
    </div>
  );
}
