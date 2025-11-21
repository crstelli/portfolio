import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { TechStackCard } from "@/components/TechStackCard";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workCard/WorkCard";
import Image from "next/image";
import { Download, GitHub, User } from "react-feather";

export default function page() {
  return (
    <>
      <main className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-screen bg-grid absolute top-0 left-0 -z-1"></div>
        <Section className="grid h-screen items-center grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
              Web Developer
            </span>
            <h1 className="text-4xl text-white font-bold">
              Giuseppe Crescitelli
            </h1>
            <p>
              Front-end Developer focalizzato su UX e performance, con
              esperienza in Next.js e Typescript, sviluppo interfacce veloci,
              accessibili e scalabili utilizzando tecnologie moderne.
            </p>
            <div className="flex items-stretch gap-4 mt-6">
              <Button className="flex items-center gap-2">
                <Download />
                Download my CV
              </Button>
              <Button variant="icon" size="sm" className="p-2.5">
                <GitHub size={25} />
              </Button>
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
          Mostro una selezione dei miei progetti più significativi, con
          particolare attenzione a performance, UX e qualità del codice. Ogni
          lavoro è accompagnato da una pagina dedicata con dettagli tecnici,
          scelte progettuali e risultati concreti.
        </Subtitle>

        <div className="flex flex-col relative items-center mt-15 gap-12">
          <div className="absolute top-0 h-full w-0.5 bg-primary -z-1 scale-105">
            <div className="size-5 border-2 border-primary rounded-full absolute -bottom-2 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
          <WorkCard>
            <WorkCard.Image
              src="/shoppy-website/preview.png"
              alt="Preview image of shoppy website app"
              className="object-cover object-center"
              fill
            />
            <WorkCard.Body>
              <WorkCard.Title tag="Full Stack">Shoppy Website</WorkCard.Title>
              <WorkCard.Description>
                Shoppy is a modern e-commerce platform where users can order a
                variety of digital and physical products, filter them by price
                and status, and track their orders.
              </WorkCard.Description>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard invert>
            <WorkCard.Image
              src="/shoppy-dashboard/preview.png"
              alt="Preview image of shoppy dashboard app"
              className="object-cover object-center"
              fill
            />
            <WorkCard.Body>
              <WorkCard.Title tag="Backend">Shoppy Dashboard</WorkCard.Title>
              <WorkCard.Description>
                A modern dashboard for Shoppy Website owners to manage products,
                orders, and sales metrics efficiently.
              </WorkCard.Description>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard>
            <WorkCard.Image
              src="/food-truck/preview.png"
              alt="Preview image of Food Truck app"
              className="object-cover object-center"
              fill
            />
            <WorkCard.Body>
              <WorkCard.Title tag="Full Stack">Food Truck</WorkCard.Title>
              <WorkCard.Description>
                Web application for tracking food trucks around the world. You
                can add new trucks, view their location and details through
                Google Maps integration, and read other user reviews.
              </WorkCard.Description>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard invert>
            <WorkCard.Image
              src="/lumina-tech/preview.png"
              alt="Preview image of Food Truck app"
              className="object-cover object-center"
              fill
            />
            <WorkCard.Body>
              <WorkCard.Title tag="Frontend">Lumina Tech</WorkCard.Title>
              <WorkCard.Description>
                Web application for tracking food trucks around the world. You
                can add new trucks, view their location and details through
                Google Maps integration, and read other user reviews.
              </WorkCard.Description>
            </WorkCard.Body>
          </WorkCard>
        </div>
      </Section>
      <Section className="mt-20">
        <Title>Tech Stack</Title>
        <Subtitle>
          Gli strumenti che utilizzo ogni giorno per progettare e sviluppare
          interfacce solide, performanti e mantenibili. Una selezione delle
          tecnologie con cui lavoro in modo fluido e che uso per costruire
          progetti scalabili e affidabili.
        </Subtitle>
        <div className="grid grid-cols-3 auto-rows-[1fr] justify-center gap-4 mt-10">
          <TechStackCard
            image={"/techstack-logos/tailwindcss.svg"}
            label="TailwindCSS"
            content="Utility-first CSS framework I use to build modern, responsive interfaces efficiently."
          />
          <TechStackCard
            image={"/techstack-logos/nextjs.svg"}
            label="NextJS"
            content="My go-to full-stack framework for building fast, scalable web applications."
          />
          <TechStackCard
            image={"/techstack-logos/react.svg"}
            label="React"
            content="The core library I rely on to create dynamic, component-driven UIs."
          />
          <TechStackCard
            image={"/techstack-logos/vscode.svg"}
            label="Visual Studio Code"
            content="My primary development environment, customized for a fast and focused workflow."
          />
          <TechStackCard
            image={"/techstack-logos/supabase.svg"}
            label="Supabase"
            content="Backend platform I use for authentication, databases, and real-time features."
          />
          <TechStackCard
            image={"/techstack-logos/typescript.svg"}
            label="TypeScript"
            content="My preferred way to write safer, predictable JavaScript at scale."
          />
          <TechStackCard
            image={"/techstack-logos/git.svg"}
            label="Git"
            content="Version control system I use to track changes and collaborate effectively."
          />
          <TechStackCard
            image={"/techstack-logos/github.svg"}
            label="GitHub"
            content="The platform where I manage repositories, issues, and project workflows."
          />
          <TechStackCard
            image={"/techstack-logos/vercel.svg"}
            label="Vercel"
            content="My deployment platform for fast, reliable builds and previews."
          />
          <TechStackCard
            image={"/techstack-logos/netlify.svg"}
            label="Netlify"
            content="A flexible hosting platform I use for static deployments and quick prototypes."
          />
          <TechStackCard
            image={"/techstack-logos/prettier.svg"}
            label="Prettier"
            content="Formatter I use to enforce consistent code style across all projects."
          />
          <TechStackCard
            image={"/techstack-logos/eslint.svg"}
            label="ESLint"
            content="Tooling I use to detect issues early and maintain clean, reliable code."
          />
          <TechStackCard
            image={"/techstack-logos/npm.svg"}
            label="NPM"
            content="Package manager I rely on to install and manage project dependencies."
          />
          <TechStackCard
            image={"/techstack-logos/shadcn.svg"}
            label="Shadcn/UI"
            content="Component system I use to build accessible, customizable interfaces."
          />
          <TechStackCard
            image={"/techstack-logos/nodejs.svg"}
            label="NodeJS"
            content="Runtime I use to build server-side logic and run JavaScript outside the browser."
          />
        </div>
      </Section>
      <Section className="mt-20 mb-100">
        <Title>About Me</Title>
        <Subtitle>Descrizione in inglese</Subtitle>
        <div className="grid grid-cols-2 items-center mt-10">
          <video
            src="/animation.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[320px] mx-auto"
          />
          <div className="mt-20 flex flex-col">
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
            </p>
            <Button className="mt-4 self-end">Keep reading &rarr;</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
