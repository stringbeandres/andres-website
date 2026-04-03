import { getContentBySlug, getAllContent } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getAllContent("work");
  return projects.map((p: any) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getContentBySlug("work", slug);
  if (!project) notFound();

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <Link href="/work" className="text-sm text-[#888888] hover:text-[#111111] transition-colors mb-10 block">
        ← Work
      </Link>
      <div className="mb-10">
        <span className="text-sm text-[#888888]">{(project as any).industry} · {(project as any).year}</span>
        <h1 className="font-serif text-4xl text-[#111111] mt-2">{(project as any).title}</h1>
      </div>
      <div className="prose prose-neutral max-w-none">
        <MDXRemote source={(project as any).content} />
      </div>
    </div>
  );
}
