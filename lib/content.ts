import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getAllContent(type: "work" | "writing") {
  const dir = path.join(contentDir, type);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf8");
      const { data } = matter(raw);
      return { ...data, slug: data.slug || filename.replace(".md", "") };
    })
    .sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export function getContentBySlug(type: "work" | "writing", slug: string) {
  const dir = path.join(contentDir, type);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const filename = files.find((f) => {
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const { data } = matter(raw);
    return data.slug === slug || f.replace(".md", "") === slug;
  });

  if (!filename) return null;

  const raw = fs.readFileSync(path.join(dir, filename), "utf8");
  const { data, content } = matter(raw);
  return { ...data, content, slug };
}
