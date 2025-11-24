import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

import Content from "./content.mdx";
import { Button } from "@/components/Button";
import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";
import { links } from "@/data/links";
import { Metadata } from "next";
import Image from "next/image";

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
    <main className="max-sm:mt-30 mt-20">
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
            Meet <span className="text-primary">Giuseppe</span>
          </h1>
          <div className="row-span-2 min-[900px]:sticky top-25 max-w-[500px] p-4 justify-self-center rounded-md border border-neutral-800 self-start bg-neutral-950">
            <div className="flex flex-col gap-3 items-center">
              <div className="size-30 rounded-full relative overflow-hidden">
                <Image
                  src="/pfp.jpg"
                  alt="Profile picture of Giuseppe"
                  className="object-center object-cover"
                  fill
                />
              </div>
              <h3 className="font-bold text-xl min-[350px]:text-2xl">
                Giuseppe Crescitelli
              </h3>
            </div>
            <p className="bg-neutral-900 mt-3 text-center text-sm p-3 rounded-md border border-neutral-800 italic">
              Self-taught frontend developer driven by modern technologies,{" "}
              <span className="text-primary">clean</span> and{" "}
              <span className="text-primary">maintainable code</span>, and an
              unrelenting hunger to grow,{" "}
              <span className="text-primary">learn</span>, and succeed.
            </p>
            <Link href={"/contact"}>
              <Button className="w-full mt-10 py-2 text-lg">
                Get in Touch
              </Button>
            </Link>

            <Link target="blank" href={links.github} className="w-full">
              <Button
                variant="secondary"
                className="w-full flex justify-center gap-2 mt-4"
              >
                <GitHub />
                GitHub Profile
              </Button>
            </Link>
            <Link target="blank" href={links.linkedin} className="w-full">
              <Button
                variant="secondary"
                className="w-full flex justify-center gap-2 mt-4"
              >
                <Linkedin />
                Linkedin profile
              </Button>
            </Link>
          </div>
          <div className="max-[900px]:order-1">
            <Content />
            <Link href={"/contact"}>
              <Button className="mt-4" size="lg">
                Get in Touch &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
