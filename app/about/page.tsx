import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

import Content from "./content.mdx";
import { Button } from "@/components/Button";
import Link from "next/link";
import { GitHub, Linkedin, MousePointer } from "react-feather";
import { links } from "@/data/links";
import { Metadata } from "next";
import Image from "next/image";
import { ProfileCard } from "@/components/ProfileCard";
import { Highlight } from "@/components/Highlight";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my journey as a self-taught front-end developer, my skills, mindset, and experience.",
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
          This section offers a clear overview of the mindset, values, and
          working principles that guide my approach to software development. It
          provides context on how I tackle challenges, collaborate within teams,
          and continue growing in a fast-evolving industry.
        </Subtitle>

        <div className="mt-20 grid grid-cols-1 min-[900px]:grid-cols-2 gap-x-10">
          <h1 className="text-4xl max-[900px]:order-1 ml-4 max-[900px]:mt-15 font-bold text-white">
            Meet <Highlight>Giuseppe</Highlight>
          </h1>
          <ProfileCard />
          <div className="max-[900px]:order-1">
            <Content />
            <Link href={"/contact"}>
              <Button className="mt-4 flex items-center gap-2" size="lg">
                <MousePointer />
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
