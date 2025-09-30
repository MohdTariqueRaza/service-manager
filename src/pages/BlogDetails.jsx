import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Loader from "../ui/Loader";
import EmptyBlog from "../features/blogs/EmptyBlog";
import BlogHeader from "../features/blogs/BlogHeader";
import Article from "../features/blogs/Article";
import Share from "../features/blogs/Share";
import RelatedArticles from "../features/blogs/RelatedArticles";
import { useBlogDetails } from "../features/blogs/useBlogDetails";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();

  const { blog, relatedBlogs, loading } = useBlogDetails(id);

  useEffect(() => {
    if (blog) document.title = `Service Manager - ${blog.title}`;
    return () => {
      document.title = "Service Manager – Services & Blog Portal";
    };
  }, [blog]);

  if (loading) {
    return <Loader>Loading article...</Loader>;
  }

  if (!blog) {
    return <EmptyBlog />;
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`transition-all duration-500`}>
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium group transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 transition-all duration-700`}
      >
        <BlogHeader blog={blog} />
        <Article blog={blog} />
        <Share />

        <RelatedArticles relatedBlogs={relatedBlogs} />
      </article>
    </div>
  );
};

export default BlogDetails;
