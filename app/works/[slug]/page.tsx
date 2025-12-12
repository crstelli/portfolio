import { Button } from "@/components/Button";
import { NextProjectCard } from "@/components/cards/NextProjectCard";
import { Section } from "@/components/section/Section";
import { StackInfoCard } from "@/components/cards/StackInfoCard";
import { Subtitle } from "@/components/section/Subtitle";
import { Title } from "@/components/section/Title";
import { WorkInfoCard } from "@/components/cards/WorkInfoCard";

import { Gallery } from "@/components/gallery/Gallery";
import { ArrowLeft } from "react-feather";
import { getProjectBySlug } from "@/lib/projects";

export { generateMetadata } from "./generateMetadata";
export { generateStaticParams } from "./generateStaticParams";
export const dynamicParams = false;

import { Content } from "@/components/cards/Content";
import { serialize } from "next-mdx-remote/serialize";

export interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: ParamsProps) {
  const { slug } = await params;
  const { data, content } = await getProjectBySlug(slug);
  const mdxSource = await serialize(content);

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

        <Title>{data.name}</Title>
        <Subtitle>{data.description}</Subtitle>
        <Gallery>
          <Gallery.Image key={"preview"} name={data.name} src={`/projects/${data.slug}/images/preview.jpg`} />

          {/* Generates an array [1, 2, 3, 4, 5] */}
          {[...Array(6).keys()].slice(1).map((path) => (
            <Gallery.Image key={path} name={data.name} src={`/projects/${data.slug}/images/image-${path}.png`} />
          ))}
        </Gallery>
      </Section>

      <Section className="grid pt-0! grid-cols-1 min-[940px]:grid-cols-2 min-[1050px]:grid-cols-[5fr_4fr] min-[1150px]:grid-cols-[3fr_2fr] grid-rows-[auto_auto_1fr] gap-8">
        <div className="min-[940px]:max-[1050px]:col-span-2 row-span-3 max-sm:px-4">
          <Content source={mdxSource} />
        </div>
        <WorkInfoCard data={data} />
        <StackInfoCard stack={data.technologies} />

        <NextProjectCard slug={data.next_slug} />
      </Section>
    </main>
  );
}
