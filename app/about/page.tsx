import type { Metadata } from "next";

import { Section } from "@/components/section/Section";
import { Subtitle } from "@/components/section/Subtitle";
import { Title } from "@/components/section/Title";

import { Button } from "@/components/Button";
import { Highlight } from "@/components/Highlight";
import { ProfileCard } from "@/components/cards/ProfileCard";

import { Send } from "react-feather";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my journey as a self-taught front-end developer, my skills, mindset, and experience.",
  openGraph: {
    title: "About",
    description:
      "Learn more about my journey as a self-taught front-end developer, my skills, mindset, and experience.",
  },
};

export default function page() {
  return (
    <main>
      <Section className="min-h-screen">
        <Title>About Me</Title>
        <Subtitle>
          This section offers a clear overview of the mindset, values, and working principles that guide my approach to
          software development. It provides context on how I tackle challenges, collaborate within teams, and continue
          growing in a fast-evolving industry.
        </Subtitle>

        <div className="mt-20 grid grid-cols-1 min-[900px]:grid-cols-2 gap-x-10">
          <h1 className="text-4xl max-[900px]:order-1 ml-4 max-[900px]:mt-15 font-bold text-white">
            Meet <Highlight>Giuseppe</Highlight>
          </h1>
          <ProfileCard />
          <div className="max-[900px]:order-1">
            <Content />
            <Button href={{ ref: "/contact", type: "Link" }} className="mt-8" icon={Send} size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
