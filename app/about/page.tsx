import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

import Content from "./content.mdx";
import { Button } from "@/components/Button";

export default function page() {
  return (
    <main>
      <Section className="mt-20 min-h-screen">
        <Title>About Me</Title>
        <Subtitle>
          This section offers a clear overview of the mindset, values, and
          working principles that guide my approach to software development. It
          provides context on how I tackle challenges, collaborate within teams,
          and continue growing in a fast-evolving industry.
        </Subtitle>
        <div className="mt-20 grid grid-cols-2 gap-x-20">
          <h1 className="text-4xl ml-4 font-bold text-white">
            Meet <span className="text-primary">Giuseppe</span>
          </h1>
          <div className="row-span-2 w-[80%] justify-self-center rounded-md border border-neutral-800 aspect-square bg-neutral-950">
            Placeholder
            <p className="bg-neutral-950 text-sm p-3 rounded-md border border-neutral-900 italic">
              Self-taught frontend developer driven by modern technologies,{" "}
              <span className="text-primary">clean</span> and{" "}
              <span className="text-primary">maintainable code</span>, and an
              unrelenting hunger to grow,{" "}
              <span className="text-primary">learn</span>, and succeed.
            </p>
          </div>
          <div>
            <Content />
            <Button className="mt-4" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
