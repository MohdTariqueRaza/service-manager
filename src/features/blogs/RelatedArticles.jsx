import { Link } from "react-router-dom";

export default function RelatedArticles({ relatedBlogs }) {
  if (!relatedBlogs.length) return null;
  return (
    <div className="transition-all duration-500 delay-600">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedBlogs.map((relatedBlog) => (
          <div
            key={relatedBlog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={relatedBlog.image}
              alt={relatedBlog.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                {relatedBlog.title}
              </h4>
              <Link
                to={`/blog/${relatedBlog.id}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
