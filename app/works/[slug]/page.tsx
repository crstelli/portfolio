import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  GitHub,
  HardDrive,
  Layers,
  Radio,
} from "react-feather";
import { ColorIcon } from "@/components/IconLabel";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Gallery } from "@/components/gallery/Gallery";
import Image from "next/image";
import { TechStackList } from "@/components/techStack/TechStackList";
import { notFound } from "next/navigation";
import { WorkInfoCard } from "@/components/WorkInfoCard";

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
  const nextProject =
    projectIndex < projects.length ? projects[projectIndex + 1] : null;

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

        <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col gap-4 self-start border-neutral-800 rounded-md p-4">
          <h5 className="text-xl font-bold">Tech Stack</h5>
          <TechStackList stack={project.technologies} />
        </div>

        {nextProject && (
          <div className="bg-neutral-950 min-[940px]:col-span-2 max-[940px]:mx-auto mt-8 p-4 max-w-[600px] rounded-md border gap-x-4 border-neutral-900 grid grid-rows-[auto_auto_auto_auto] grid-cols-1 min-[560px]:grid-cols-[auto_auto]">
            <h5 className="text-neutral-500 uppercase text-sm min-[560px]:col-span-2">
              Next project
            </h5>
            <h4 className="text-xl text-white font-bold">{nextProject.name}</h4>
            <div className="relative max-[560px]:order-1 max-[560px]:mt-4 row-span-3 my-auto w-[200px] aspect-video rounded-md overflow-hidden">
              <Image
                src={nextProject.images[0]}
                alt={`Preview image of ${nextProject.name}.`}
                sizes="200px"
                fill
              />
            </div>
            <p className="text-sm mt-2 text-neutral-400">
              {nextProject.description}
            </p>
            <Link
              href={`/works/${nextProject.slug}`}
              className="self-end mt-4 max-[560px]:order-1"
            >
              <Button className="flex items-center gap-2">
                See more <ArrowRight />
              </Button>
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}
