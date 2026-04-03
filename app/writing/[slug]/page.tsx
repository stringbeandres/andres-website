import { getContentBySlug, getAllContent } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllContent("writing");
  return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getContentBySlug("writing", slug);
  if (!post) notFound();

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <Link href="/writing" className="text-sm text-[#888888] hover:text-[#111111] transition-colors mb-10 block">
        ← Writing
      </Link>
      <div className="mb-10">
        <span className="text-sm text-[#888888]">{(post as any).date}</span>
        <h1 className="font-serif text-4xl text-[#111111] mt-2">{(post as any).title}</h1>
      </div>
      <div className="prose prose-neutral max-w-none">
        <MDXRemote source={(post as any).content} />
      </div>
    </div>
  );
}
