import { getAllContent } from "@/lib/content";
import PostListItem from "@/components/PostListItem";

export default function WritingPage() {
  const posts = getAllContent("writing");

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl text-[#111111] mb-12">Writing</h1>
      <div>
        {posts.map((post: any) => (
          <PostListItem
            key={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
