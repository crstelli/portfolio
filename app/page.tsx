import { Button } from "@/components/Button";
import { ContactInfo } from "@/components/ContactInfo";
import { ScrollBottomChevron } from "@/components/ScrollBottomChevron";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { TechStack } from "@/components/TechStack";
import { TechStackCard } from "@/components/TechStackCard";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workPreviewCard/WorkCard";
import { links } from "@/data/links";
import { projects } from "@/data/projects";
import { techStack } from "@/data/techstack";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, GitHub, MousePointer, User } from "react-feather";

export const metadata: Metadata = {
  title: {
    template: "%s - crescitelli.dev",
    default: "Welcome - crescitelli.dev",
  },

  description:
    "Front-end Developer specializing in Next.js and TypeScript. Explore my projects, tech stack, experience, and background, and get in touch for collaborations.",
};

export default function page() {
  return (
    <>
      <main className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-screen bg-grid absolute top-0 left-0 -z-1"></div>
        <Section className="flex flex-col p-0! max-lg:w-[90%] justify-center lg:grid h-screen items-center grid-cols-2">
          <ScrollBottomChevron section="works" />
          <div className="flex flex-col gap-2 max-lg:max-w-[600px]">
            <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
              Web Developer
            </span>
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              Giuseppe Crescitelli
            </h1>
            <p className="max-sm:text-sm">
              Front-end Developer focused on UX and performance, with experience
              in Next.js and TypeScript. I build fast, accessible, and scalable
              interfaces using modern technologies.
            </p>
            <div className="flex items-stretch gap-4 mt-6 z-1">
              <a href={links.cv} download className="flex">
                <Button className="flex items-center gap-2">
                  <Download />
                  Download my CV
                </Button>
              </a>
              <Link target="blank" href={links.github}>
                <Button variant="icon" size="sm" className="p-2.5">
                  <GitHub size={25} />
                </Button>
              </Link>
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
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-primary/10 lg:bg-primary/20 blur-[120px] rounded-full"></div>
        </Section>
      </main>
      <Section id="works">
        <Title>My Works</Title>
        <Subtitle>
          I showcase a selection of my most significant projects, with a focus
          on performance, UX, and code quality. Each project includes a
          dedicated page detailing technical aspects, design choices, and
          tangible results.
        </Subtitle>

        <div className="flex flex-col relative items-center mt-20 gap-12">
          <div className="absolute top-0 h-full w-0.5 bg-primary -z-1 scale-105">
            <div className="size-5 border-2 border-primary rounded-full absolute -bottom-2 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
          {projects.map((p, i) => (
            <WorkCard key={p.id} invert={i % 2 === 1}>
              <WorkCard.Image
                src={p.images[0]}
                alt={`Preview image of ${p.name}.`}
                className="object-cover object-center"
                quality={50}
                sizes="(max-width: 355px): 100vw, 355px"
                fill
              ></WorkCard.Image>
              <WorkCard.Body link={`/works/${p.slug}`}>
                <WorkCard.Title tag={p.stack}>{p.name}</WorkCard.Title>
                <WorkCard.Description>{p.description}</WorkCard.Description>
              </WorkCard.Body>
            </WorkCard>
          ))}
        </div>
      </Section>
      <Section>
        <Title>Tech Stack</Title>
        <Subtitle>
          The tools I use daily to design and develop robust, high-performance,
          and maintainable interfaces. A selection of technologies I work with
          seamlessly to build scalable and reliable projects.
        </Subtitle>
        <TechStack>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] justify-center gap-4 mt-10">
            {techStack.map((ts) => (
              <TechStackCard
                key={ts.label}
                image={ts.image}
                label={ts.label}
                content={ts.content}
              />
            ))}
          </div>
        </TechStack>
      </Section>
      <Section>
        <Title>About Me</Title>
        <Subtitle>
          Learn more about me, my skills, and my approach to creating impactful
          digital experiences.
        </Subtitle>
        <div className="flex flex-col lg:grid grid-cols-2 items-center mt-10">
          <video
            src="/animation.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[320px] mx-auto"
          />
          <div className="mt-15 flex flex-col max-lg:max-w-[600px]">
            <span className="mt-4 flex items-center gap-3">
              <User className="text-primary" size={30} />
              <h3 className="text-3xl font-bold text-white">Giuseppe</h3>
            </span>
            <p className="mt-4 text-neutral-400">
              Hi! I&apos;m Giuseppe, a 20-year-old self-taught{" "}
              <span className="font-bold text-white">Frontend Developer</span>{" "}
              with a relentless drive to{" "}
              <span className="font-bold text-white">learn</span> and{" "}
              <span className="font-bold text-white">grow</span>.
              <br />
              <br />I thrive on challenges, excel at problem-solving, and am
              fully committed to giving my best in every project. I love working
              in teams, stay focused on delivering results, and approach every
              task with <span className="font-bold text-white">
                dedication
              </span>{" "}
              and <span className="font-bold text-white">discipline</span>.
              <br />
              <br />
              Passionate about web development, I want to contribute to
              real-world projects and grow as a{" "}
              <span className="font-bold text-white">Full-Stack Developer</span>
              .
            </p>
            <Link href={"/about"} className="mt-4 self-end">
              <Button>Keep reading &rarr;</Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col">
        <Title>Contact me</Title>
        <Subtitle>
          Get in touch to discuss projects, collaborations, or opportunities.
        </Subtitle>
        <Link
          href={"/contact"}
          className="self-center hover:scale-120 duration-150 mt-15"
        >
          <button className="glowing-border bg-primary text-black hover:bg-neutral-950 hover:text-primary px-5 py-2.5 uppercase flex items-center gap-3 cursor-pointer text-xl">
            <MousePointer />
            Get in touch
          </button>
        </Link>
        <ContactInfo />
      </Section>
    </>
  );
}
