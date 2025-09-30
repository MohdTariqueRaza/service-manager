import PageHeading from "../../ui/PageHeading";
import BlogStats from "./BlogStats";

export default function BlogHero({ stats }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PageHeading
          description="Discover insightful articles, tutorials, and industry news to help
            you stay ahead in the world of technology and business."
        >
          Our <span className="text-gradient">Blog</span>
        </PageHeading>
        <BlogStats stats={stats} />
      </div>
    </section>
  );
}
