import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { projects } from "@/data/projects";

import { Image } from "@/components/works/Image";
import { Paragraph } from "@/components/works/Paragraph";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>404 - Project Not Found</div>;

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
      <Section className="grid grid-cols-[2fr_1fr] gap-8">
        <div className="flex flex-col items-start gap-10">
          <Paragraph>
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
              {project.key_features.map((ft) => (
                <div key={ft.title}>
                  <div className="font-bold">{ft.title}</div>
                  <div>{ft.content}</div>
                </div>
              ))}
            </Paragraph.Content>
          </Paragraph>

          <Paragraph>
            <Paragraph.Title>Lessons Learned</Paragraph.Title>
            <Paragraph.Content>
              {project.key_features.map((ft) => (
                <div key={ft.title}>
                  <div className="font-bold">{ft.title}</div>
                  <div>{ft.content}</div>
                </div>
              ))}
            </Paragraph.Content>
          </Paragraph>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 rounded-md p-4"></div>
      </Section>
    </main>
  );
}
