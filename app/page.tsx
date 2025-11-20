import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workCard/WorkCard";
import Image from "next/image";
import { Download, GitHub } from "react-feather";

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
              <Button variant="icon">
                <GitHub size={20} />
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

        <div className="flex flex-col relative items-center mt-15 mb-50 gap-20">
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
    </>
  );
}
