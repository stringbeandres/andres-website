import Link from "next/link";
import { workData } from "@/lib/workData";

export default function WorkPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl text-[#111111] mb-16 max-w-[720px]">Work</h1>

      <div className="space-y-24">
        {workData.map((section) => (
          <div key={section.company}>
            {/* Section header */}
            <div className="mb-8 max-w-[720px]">
              <h2 className="font-serif text-2xl font-normal text-[#111111] mb-1">{section.company}</h2>
              <p className="text-sm text-[#888888]">{section.role} · {section.years}</p>
            </div>

            {/* Initiative tiles */}
            <div className="space-y-4">
              {workData && section.initiatives.map((item) => (
                <div key={item.title} className="w-full border border-[#E5E4E0] px-10 py-8 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#111111] mb-3">{item.title}</h3>
                    <p className="text-[#888888] leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 border border-[#E5E4E0] text-[#888888]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.href && (
                      <Link href={item.href} target="_blank" className="text-sm text-[#1B2A4A] hover:underline underline-offset-4 shrink-0 ml-6">
                        Read thesis →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
