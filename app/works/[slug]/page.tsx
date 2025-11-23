import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { projects } from "@/data/projects";

import { Image } from "@/components/works/Image";
import {
  Calendar,
  Clock,
  GitHub,
  HardDrive,
  Layers,
  Radio,
} from "react-feather";
import { ColorIcon } from "@/components/ColorIcon";
import { Button } from "@/components/Button";
import Link from "next/link";
import { TechStackCard } from "@/components/TechStackCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.name} | Projects`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.images[0] ? [project.images[0]] : [],
    },
  };
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>404 - Project Not Found</div>;

  const { default: Content } = await import(`@/projects/${project.slug}.mdx`);

  return (
    <main className="min-h-screen max-w-screen lg:mt-5">
      <Section>
        <Title>{project.name}</Title>
        <Subtitle>{project.description}</Subtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-15">
          {project.images.map((img) => (
            <Image
              src={img}
              alt={`Showcase image of ${project.name}.`}
              key={img}
            />
          ))}
        </div>
      </Section>
      <Section className="grid grid-cols-1 min-[880px]:grid-cols-2 min-[970px]:grid-cols-[5fr_4fr] min-[1135px]:grid-cols-[5fr_3fr] grid-rows-[auto_auto_1fr] gap-8">
        <div className="min-[880px]:max-[970px]:col-span-2 row-span-3 p-2">
          <Content />
        </div>
        <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col items-start gap-3 self-start border-neutral-800 rounded-md p-4">
          <h5 className="self-center text-center text-xl font-bold">
            {project.name}
          </h5>
          <div className="h-px w-full bg-neutral-700"></div>
          <div className="mt-4 gap-3 px-4 grid grid-cols-1 min-[450px]:grid-cols-2 w-full">
            <ColorIcon
              icon={Calendar}
              label="Built in"
              content={`${project.date.month}, ${project.date.year}`}
            />

            <ColorIcon
              icon={Layers}
              label="Stack used"
              content={project.stack}
            />
            <ColorIcon
              icon={Clock}
              label="Worked on for"
              content={project.worked_for}
            />
            <ColorIcon
              icon={HardDrive}
              label="Hosted on"
              content={project.hosted_on}
            />
          </div>
          <Link target="blank" href={project.github} className="w-full">
            <Button className="flex items-center py-2 gap-2 w-full mt-10 justify-center">
              <GitHub />
              View GitHub Repository
            </Button>
          </Link>
          <Link target="blank" href={project.live_view} className="w-full">
            <Button
              variant="secondary"
              className="flex items-center gap-2 w-full justify-center"
            >
              <Radio />
              Live View
            </Button>
          </Link>
        </div>

        <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col gap-4 self-start border-neutral-800 rounded-md p-4">
          <h5 className="text-xl font-bold">Tech Stack</h5>
          {project.technologies.map((tech) => (
            <TechStackCard
              key={tech.name}
              image={tech.icon}
              label={tech.name}
              content={tech.description}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
