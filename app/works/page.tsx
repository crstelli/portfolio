// import { projects } from "@/data/projects";
import type { Metadata } from "next";

import { Section } from "@/components/section/Section";
import { Subtitle } from "@/components/section/Subtitle";
import { Title } from "@/components/section/Title";

import { WorkCard } from "@/components/cards/work/WorkCard";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Works",
  description:
    "A curated selection of front-end projects built with Next.js, TypeScript, and modern web technologies. Explore real-world examples showcasing UX, performance, and clean code.",
  openGraph: {
    title: "Works",
    description:
      "A curated selection of front-end projects built with Next.js, TypeScript, and modern web technologies. Explore real-world examples showcasing UX, performance, and clean code.",
  },
};

export default function page() {
  const projects = getProjects();

  return (
    <main className="min-h-screen">
      <Section>
        <Title>Explore My Works</Title>
        <Subtitle>
          A selection of projects that reflects my approach to clean design, efficient development, and practical
          problem-solving. Each work demonstrates how I turn ideas into functional, purposeful digital experiences.
        </Subtitle>
        <div className="mt-15 grid max-[1100px]:grid-cols-1 grid-cols-2 gap-y-20 justify-items-center">
          {projects.map((p) => (
            <WorkCard key={p.id}>
              <WorkCard.Image src={`/projects/${p.slug}/images/preview.jpg`} alt={`Preview image of ${p.name}`} />
              <WorkCard.Body>
                <WorkCard.Header tag={p.stack} year={p.date.year} />
                <WorkCard.Title>{p.name}</WorkCard.Title>
                <WorkCard.Description>{p.description}</WorkCard.Description>
                <WorkCard.Tags stack={p.technologies} />
                <WorkCard.Features features={p.features} />
                <WorkCard.Buttons page={p.slug} github={p.github} live={p.live_view} />
              </WorkCard.Body>
            </WorkCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
