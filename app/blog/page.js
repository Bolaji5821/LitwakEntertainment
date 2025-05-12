import Banner from "@/components/Banner";
import BlogPostGrid from "@/components/blog/BlogPostGrid";

export default function BlogPage() {
  return (
    <div>
      <Banner 
        title="Our Blog" 
        subtitle="Latest news, stories, and insights" 
        image="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"
      />
      <BlogPostGrid />
    </div>
  );
}