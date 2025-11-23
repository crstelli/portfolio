import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { TechStackCard } from "@/components/TechStackCard";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workPreviewCard/WorkCard";
import { links } from "@/data/links";
import { projects } from "@/data/projects";
import { techStack } from "@/data/techstack";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Download,
  GitHub,
  Linkedin,
  Mail,
  MapPin,
  Navigation,
  User,
} from "react-feather";

export default function page() {
  return (
    <>
      <main className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-screen bg-grid absolute top-0 left-0 -z-1"></div>
        <Section className="grid h-screen items-center grid-cols-2">
          <ChevronDown
            className="absolute bottom-10 left-1/2 -translate-x-1/2 chevron-down"
            size={50}
          />
          <div className="flex flex-col gap-2">
            <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
              Web Developer
            </span>
            <h1 className="text-4xl text-white font-bold">
              Giuseppe Crescitelli
            </h1>
            <p>
              Front-end Developer focused on UX and performance, with experience
              in Next.js and TypeScript. I build fast, accessible, and scalable
              interfaces using modern technologies.
            </p>
            <div className="flex items-stretch gap-4 mt-6">
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
          <div className="flex justify-end">
            <div className="relative max-w-[320px] w-full aspect-square">
              <Image src="/hero.svg" alt="Hero image" fill />
            </div>
          </div>
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full"></div>
        </Section>
      </main>
      <Section>
        <Title>My Works</Title>
        <Subtitle>
          I showcase a selection of my most significant projects, with a focus
          on performance, UX, and code quality. Each project includes a
          dedicated page detailing technical aspects, design choices, and
          tangible results.
        </Subtitle>

        <div className="flex flex-col relative items-center mt-15 gap-12">
          <div className="absolute top-0 h-full w-0.5 bg-primary -z-1 scale-105">
            <div className="size-5 border-2 border-primary rounded-full absolute -bottom-2 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
          {projects.map((p, i) => (
            <WorkCard key={p.id} invert={i % 2 === 1}>
              <WorkCard.Image
                src={p.images[0]}
                alt={`Preview image of ${p.name}.`}
                className="object-cover object-center"
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
      <Section className="mt-20">
        <Title>Tech Stack</Title>
        <Subtitle>
          The tools I use daily to design and develop robust, high-performance,
          and maintainable interfaces. A selection of technologies I work with
          seamlessly to build scalable and reliable projects.
        </Subtitle>
        <div className="grid grid-cols-3 auto-rows-[1fr] justify-center gap-4 mt-10">
          {techStack.map((ts) => (
            <TechStackCard
              key={ts.label}
              image={ts.image}
              label={ts.label}
              content={ts.content}
            />
          ))}
        </div>
      </Section>
      <Section className="mt-20">
        <Title>About Me</Title>
        <Subtitle>
          Learn more about me, my skills, and my approach to creating impactful
          digital experiences.
        </Subtitle>
        <div className="grid grid-cols-2 items-center mt-10">
          <video
            src="/animation.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[320px] mx-auto"
          />
          <div className="mt-15 flex flex-col">
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
      <Section className="mt-20 flex flex-col">
        <Title>Contact me</Title>
        <Subtitle>
          Get in touch to discuss projects, collaborations, or opportunities.
        </Subtitle>
        <Link
          href={"/contact"}
          className="self-center hover:scale-120 duration-150 mt-15"
        >
          <button className="glowing-border bg-primary text-black hover:bg-neutral-950 hover:text-primary px-5 py-2.5 uppercase flex items-center gap-3 cursor-pointer text-xl">
            <Navigation strokeWidth={2.5} />
            Get in touch
          </button>
        </Link>
        <div className="grid grid-cols-[3fr_2fr] grid-rows-[1fr-auto] mt-10 gap-10">
          <form className="bg-neutral-950 row-span-2 border border-neutral-800 rounded-md p-4">
            <h4 className="text-lg font-medium text-white">Send a message</h4>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-neutral-900 col-span-2 px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-neutral-900 px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number (optional)"
                className="bg-neutral-900 px-4 py-2 rounded-md"
              />

              <textarea
                className="bg-neutral-900 px-4 py-2 rounded-md col-span-2 resize-none"
                placeholder="Message"
                rows={5}
              />
            </div>
            <button className="mt-4 px-4 py-1 border border-primary rounded-md cursor-pointer">
              Send Message
            </button>
          </form>
          <div className="bg-neutral-950 border border-neutral-800 flex flex-col items-start rounded-md p-4">
            <h4 className="text-lg font-medium text-white">
              Contact Information
            </h4>

            <span className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 mt-4">
              <span className="bg-primary/10 p-2 row-span-2 rounded-md text-primary">
                <Mail size={25} />
              </span>
              <h5 className="text-sm text-neutral-500 font-medium">Email</h5>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </span>

            <span className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 mt-4">
              <span className="bg-primary/10 p-2 row-span-2 rounded-md text-primary">
                <MapPin size={25} />
              </span>
              <h5 className="text-sm text-neutral-500 font-medium">Location</h5>
              <span>Naples, Italy IT</span>
            </span>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 flex flex-col items-start rounded-md p-4">
            <h4 className="text-lg font-medium text-white">Connect with me</h4>
            <div className="flex mt-auto gap-4">
              <a
                target="blank"
                href={links.github}
                className="p-2 bg-neutral-900 rounded-md"
              >
                <GitHub size={22} />
              </a>
              <a
                target="blank"
                href={links.linkedin}
                className="p-2 bg-neutral-900 rounded-md"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
