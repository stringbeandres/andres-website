import Link from "next/link";

interface Props {
  title: string;
  summary: string;
  outcome: string;
  slug: string;
}

export default function CaseStudyCard({ title, summary, outcome, slug }: Props) {
  return (
    <Link href={`/work/${slug}`} className="block border border-[#E5E4E0] p-8 hover:border-[#1B2A4A] transition-colors">
      <h2 className="font-serif text-2xl text-[#111111] mb-3">{title}</h2>
      <p className="text-[#888888] text-base mb-6">{summary}</p>
      <p className="text-sm text-[#1B2A4A] font-medium">{outcome}</p>
    </Link>
  );
}
