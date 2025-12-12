import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { ProjectType } from "@/types/ProjectType";

const projectDirectory = path.join(process.cwd(), "projects");

export function getProjects(): ProjectType[] {
  const fileNames = fs.readdirSync(projectDirectory);

  const fileDatas = fileNames.map((file) => {
    const fullPath = path.join(projectDirectory, file, "content.mdx");
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContent);
    return data as ProjectType;
  });

  return fileDatas;
}

export async function getProjectBySlug(slug: string) {
  const contentPath = path.join(projectDirectory, slug, "content.mdx");
  const fileContent = fs.readFileSync(contentPath, "utf-8");

  const { data, content } = matter(fileContent);
  return { data, content } as { data: ProjectType; content: string };
}
