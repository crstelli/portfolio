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

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>404 - Project Not Found</div>;

  const { default: Content } = await import(`@/projects/${project.slug}.mdx`);

  return (
    <main className="mt-20 min-h-screen max-w-screen">
      <Section>
        <Title>{project.name}</Title>
        <Subtitle>{project.description}</Subtitle>
        <div className="grid grid-cols-3 gap-2 mt-15">
          {project.images.map((img) => (
            <Image
              src={img}
              alt={`Showcase image of ${project.name}.`}
              key={img}
            />
          ))}
        </div>
      </Section>
      <Section className="grid grid-cols-[5fr_3fr] gap-8">
        <div>
          <Content />
          {/* <Paragraph>
            <Paragraph.Title>Project Overview</Paragraph.Title>
            <Paragraph.Content>{project.overview}</Paragraph.Content>
          </Paragraph>
          <Paragraph>
            <Paragraph.Title>Technical Decisions</Paragraph.Title>
            <Paragraph.Content>{project.technical_decisions}</Paragraph.Content>
          </Paragraph>
          <Paragraph>
            <Paragraph.Title>Challenges</Paragraph.Title>
            <Paragraph.Content>{project.challenges}</Paragraph.Content>
          </Paragraph>

          <Paragraph>
            <Paragraph.Title>Key Features</Paragraph.Title>
            <Paragraph.Content>
              {project.key_features.map((ft) => (
                <div key={ft.title}>
                  <div className="font-bold">{ft.title}</div>
                  <div>{ft.content}</div>
                </div>
              ))}
            </Paragraph.Content>
          </Paragraph>
          <Paragraph>
            <Paragraph.Title>Future Improvements</Paragraph.Title>
            <Paragraph.Content>
              {project.future_improvements.map((ft) => (
                <div key={ft.title}>
                  <div className="font-bold">{ft.title}</div>
                  <div>{ft.content}</div>
                </div>
              ))}
            </Paragraph.Content>
          </Paragraph>

          <Paragraph>
            <Paragraph.Title>Lessons Learned & Considerations</Paragraph.Title>
            <Paragraph.Content>{project.lessons}</Paragraph.Content>
          </Paragraph> */}
        </div>
        <div className="bg-neutral-950 border flex flex-col items-start gap-4 self-start border-neutral-800 rounded-md p-4">
          <h5 className="self-center text-center text-xl font-bold">
            {project.name}
          </h5>
          <div className="h-px w-full bg-neutral-700"></div>
          <div className="mt-4 gap-3 grid grid-cols-2 w-full">
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
            <Button className="flex items-center gap-2 w-full mt-10 justify-center">
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
      </Section>
    </main>
  );
}
