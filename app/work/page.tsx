import { getAllContent } from "@/lib/content";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function WorkPage() {
  const projects = getAllContent("work");

  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl text-[#111111] mb-12">Work</h1>
      <div className="space-y-6">
        {projects.map((project: any) => (
          <CaseStudyCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            outcome={project.outcome}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}
