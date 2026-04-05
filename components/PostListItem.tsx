import Link from "next/link";

interface Props {
  title: string;
  date: string;
  description: string;
  slug: string;
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostListItem({ title, date, description, slug }: Props) {
  return (
    <Link href={`/writing/${slug}`} className="flex justify-between items-start py-6 border-b border-[#E5E4E0] hover:opacity-70 transition-opacity group">
      <div>
        <h2 className="font-serif text-xl text-[#111111] mb-1">{title}</h2>
        <p className="text-sm text-[#888888]">{description}</p>
      </div>
      <span className="text-sm text-[#888888] ml-8 shrink-0 pt-1">{formatDate(date)}</span>
    </Link>
  );
}
