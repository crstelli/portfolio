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
import { ColorIcon } from "@/components/ColorIcon";
import { Button } from "@/components/Button";
import Link from "next/link";
import { TechStackCard } from "@/components/TechStackCard";
import { Gallery } from "@/components/gallery/Gallery";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import Image from "next/image";

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

export async function generateStaticParams() {
  const slugs = projects.map((p) => ({ slug: p.slug }));
  return slugs;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return (
      <div className="m-auto text-center">
        <h1 className="text-6xl text-primary italic">OPS!</h1>
        <p className="text-3xl mt-4">This project does not exists (yet?)</p>
        <Link href={"/works"}>
          <Button
            size="lg"
            className="mt-10 mx-auto flex gap-2 items-center justify-center"
          >
            <ArrowLeft />
            Go back to my works
          </Button>
        </Link>
      </div>
    );

  const { default: Content } = await import(`@/projects/${project.slug}.mdx`);

  const projectIndex = projects.indexOf(project);
  let nextProject;
  if (projectIndex < projects.length) nextProject = projects[projectIndex + 1];

  return (
    <main className="min-h-screen max-w-screen">
      <Section className="relative">
        <Link href={"/works"} className="max-[640px]:hidden">
          <Button className="absolute max-sm:top-35 top-25 flex items-center gap-2 left-3">
            <ArrowLeft /> Works
          </Button>
        </Link>
        <Title>{project.name}</Title>
        <Subtitle>{project.description}</Subtitle>
        <Gallery>
          {project.images.map((img) => (
            <GalleryImage key={img} name={project.name} src={img} />
          ))}
        </Gallery>
      </Section>
      <Section className="grid pt-0! grid-cols-1 min-[940px]:grid-cols-2 min-[1050px]:grid-cols-[5fr_4fr] min-[1150px]:grid-cols-[3fr_2fr] grid-rows-[auto_auto_1fr] gap-8">
        <div className="min-[940px]:max-[1050px]:col-span-2 row-span-3 max-sm:px-4">
          <Content />
        </div>
        <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col items-start gap-3 self-start border-neutral-800 rounded-md p-4">
          <h5 className="self-center text-center text-xl font-bold">
            {project.name}
          </h5>
          <div className="h-px w-full bg-neutral-700"></div>
          <div className="mt-4 gap-3 px-4 grid grid-cols-1 min-[480px]:grid-cols-2 w-full">
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
