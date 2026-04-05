import { getContentBySlug, getAllContent } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import BucketChart from "@/components/BucketChart";

export async function generateStaticParams() {
  const posts = getAllContent("writing");
  return posts.map((p: any) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getContentBySlug("writing", slug);
  if (!post) notFound();

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-20">
      <Link href="/writing" className="text-sm text-[#888888] hover:text-[#111111] transition-colors mb-10 block">
        ← Writing
      </Link>
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-[#111111] mt-2 mb-4">{(post as any).title}</h1>
        <span className="text-sm text-[#888888]">
          {formatDate((post as any).date)} · {readingTime((post as any).content)}
        </span>
      </div>
      <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-[#111111] prose-a:text-[#1B2A4A] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={(post as any).content} components={{ BucketChart }} />
      </div>
    </div>
  );
}
