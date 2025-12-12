import { getProjects } from "@/lib/projects";

export function generateStaticParams() {
  const data = getProjects();
  return data.map((p) => ({
    slug: p.slug,
  }));
}
