import { links } from "@/data/links";
import { getProjectBySlug } from "@/lib/projects";

import type { ParamsProps } from "./page";

export async function generateMetadata({ params }: ParamsProps) {
  const { slug } = await params;
  const { data } = await getProjectBySlug(slug);

  if (!data) {
    return {
      title: "Project not found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${data.name}`,
    description: data.description,
    metadataBase: new URL(links.portfolio),
    openGraph: {
      title: data.name,
      description: data.description,
      images: [
        `/projects/${data.slug}/images/preview.jpg`,
        `/projects/${data.slug}/images/image-1.png`,
        `/projects/${data.slug}/images/image-2.png`,
        `/projects/${data.slug}/images/image-3.png`,
        `/projects/${data.slug}/images/image-4.png`,
        `/projects/${data.slug}/images/image-5.png`,
      ],
    },
  };
}
