import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

import { Button } from "@/components/Button";
import { NextProjectCard } from "@/components/cards/NextProjectCard";
import { Section } from "@/components/section/Section";
import { StackInfoCard } from "@/components/cards/StackInfoCard";
import { Subtitle } from "@/components/section/Subtitle";
import { Title } from "@/components/section/Title";
import { WorkInfoCard } from "@/components/cards/WorkInfoCard";

import { Gallery } from "@/components/gallery/Gallery";
import { ArrowLeft } from "react-feather";

export { generateMetadata } from "./generateMetadata";
export { generateStaticParams } from "./generateStaticParams";
export const dynamicParams = false;

export interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: ParamsProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();
  const { default: Content } = await import(`@/projects/${project.slug}.mdx`);

  const projectIndex = projects.indexOf(project);
  const nextProject = projectIndex < projects.length ? projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen">
      <Section className="relative">
        <Button
          href={{ ref: "/works", type: "Link" }}
          className="max-[640px]:hidden absolute max-sm:top-35 top-25 flex items-center gap-2 left-3"
          icon={ArrowLeft}
        >
          Works
        </Button>

        <Title>{project.name}</Title>
        <Subtitle>{project.description}</Subtitle>
        <Gallery>
          {project.images.map((img) => (
            <Gallery.Image key={img} name={project.name} src={img} />
          ))}
        </Gallery>
      </Section>

      <Section className="grid pt-0! grid-cols-1 min-[940px]:grid-cols-2 min-[1050px]:grid-cols-[5fr_4fr] min-[1150px]:grid-cols-[3fr_2fr] grid-rows-[auto_auto_1fr] gap-8">
        <div className="min-[940px]:max-[1050px]:col-span-2 row-span-3 max-sm:px-4">
          <Content />
        </div>
        <WorkInfoCard project={project} />
        <StackInfoCard stack={project.technologies} />

        {nextProject && <NextProjectCard project={project} />}
      </Section>
    </main>
  );
}
