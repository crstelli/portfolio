import { Download, GitHub } from "react-feather";
import { Button } from "./Button";
import { Section } from "./Section";
import Link from "next/link";
import { links } from "@/data/links";
import Image from "next/image";

function Hero() {
  return (
    <Section className="flex flex-col p-0! max-lg:w-[90%] justify-center lg:grid h-screen items-center grid-cols-2">
      <div className="flex flex-col gap-2 max-lg:max-w-[600px]">
        <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
          Web Developer
        </span>
        <h1 className="text-2xl sm:text-4xl text-white font-bold">
          Giuseppe Crescitelli
        </h1>
        <p className="max-sm:text-sm">
          Front-end Developer focused on UX and performance, with experience in
          Next.js and TypeScript. I build fast, accessible, and scalable
          interfaces using modern technologies.
        </p>
        <div className="flex items-stretch gap-4 mt-6 z-1">
          <Button
            icon={Download}
            href={{ ref: links.cv, type: "a" }}
            size="lg"
            download
          >
            Download my CV
          </Button>
          <Button
            variant="secondary"
            size="square"
            href={{ ref: links.github, type: "a" }}
            target="blank"
          >
            <GitHub size={25} />
          </Button>
        </div>
      </div>
      <div className="max-lg:hidden relative justify-self-end lg:max-w-[320px] w-full aspect-square">
        <Image
          src="/hero.svg"
          sizes="(max-width:1024px) 0px, 320px"
          alt="Hero image"
          fill
        />
      </div>
    </Section>
  );
}

export { Hero };
