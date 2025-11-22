import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workCard/WorkCard";

export default function page() {
  return (
    <main className="max-w-screen min-h-screen mt-20">
      <Section>
        <Title>Explore My Works</Title>
        <Subtitle>
          A selection of projects that reflects my approach to clean design,
          efficient development, and practical problem-solving. Each work
          demonstrates how I turn ideas into functional, purposeful digital
          experiences.
        </Subtitle>
        <div className="mt-15 grid grid-cols-2 gap-y-30 justify-items-center">
          <WorkCard>
            <WorkCard.Image
              src="/shoppy-website/preview.png"
              alt="Preview image of shoppy website"
            />
            <WorkCard.Body page={"shoppy-website"}>
              <WorkCard.Header tag="Full Stack" year={2025} />
              <WorkCard.Title>Shoppy - Website</WorkCard.Title>
              <WorkCard.Description>
                Shoppy is a modern e-commerce platform where users can order a
                variety of digital and physical products, filter them by price
                and status, and track their orders.
              </WorkCard.Description>
              <WorkCard.TagsContainer>
                <WorkCard.TechnologyCard>Next.js</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>React</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>TailwindCSS</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Typescript</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Supabase</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Vercel</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Auth.js</WorkCard.TechnologyCard>
                <WorkCard.PlusCard quantity={2} />
              </WorkCard.TagsContainer>
              <WorkCard.FeaturesContainer>
                <WorkCard.Feature>Responsive Design</WorkCard.Feature>
                <WorkCard.Feature>Login with Google</WorkCard.Feature>
                <WorkCard.Feature>Order Tracking</WorkCard.Feature>
              </WorkCard.FeaturesContainer>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard>
            <WorkCard.Image
              src="/shoppy-dashboard/preview.png"
              alt="Preview image of Shoppy dashboard"
            />
            <WorkCard.Body page={"shoppy-dashboard"}>
              <WorkCard.Header tag="Full Stack" year={2025} />
              <WorkCard.Title>Shoppy - Dashboard</WorkCard.Title>
              <WorkCard.Description>
                A modern dashboard for Shoppy Website owners to manage products,
                orders, and sales metrics efficiently.
              </WorkCard.Description>
              <WorkCard.TagsContainer>
                <WorkCard.TechnologyCard>React</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Typescript</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Supabase</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Vite</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>
                  Tanstack Query
                </WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>React Router</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>recharts</WorkCard.TechnologyCard>
                <WorkCard.PlusCard quantity={4} />
              </WorkCard.TagsContainer>
              <WorkCard.FeaturesContainer>
                <WorkCard.Feature>Authentication</WorkCard.Feature>
                <WorkCard.Feature>Dark and Light mode</WorkCard.Feature>
                <WorkCard.Feature>Dynamic graphs for data</WorkCard.Feature>
              </WorkCard.FeaturesContainer>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard>
            <WorkCard.Image
              src="/lumina-tech/preview.png"
              alt="Preview image of Lumina Tech website"
            />
            <WorkCard.Body page={"lumina-tech"}>
              <WorkCard.Header tag="Frontend" year={2025} />
              <WorkCard.Title>Lumina Tech</WorkCard.Title>
              <WorkCard.Description>
                LuminaTech is a fully fictional company project designed to
                showcase modern web design, clean UI structure, and real-world
                business presentation. I developed the entire website from
                scratch, including branding, layout, and component architecture,
                focusing on a professional and scalable approach.
              </WorkCard.Description>
              <WorkCard.TagsContainer>
                <WorkCard.TechnologyCard>Next.js</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>React</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>TailwindCSS</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Typescript</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Vercel</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>
                  Embla Carousel
                </WorkCard.TechnologyCard>
                <WorkCard.PlusCard quantity={1} />
              </WorkCard.TagsContainer>
              <WorkCard.FeaturesContainer>
                <WorkCard.Feature>Responsive Design</WorkCard.Feature>
                <WorkCard.Feature>Carousel for testimonials</WorkCard.Feature>
                <WorkCard.Feature>Google Maps integration</WorkCard.Feature>
              </WorkCard.FeaturesContainer>
            </WorkCard.Body>
          </WorkCard>

          <WorkCard>
            <WorkCard.Image
              src="/food-truck/preview.png"
              alt="Preview image of Shoppy dashboard"
            />
            <WorkCard.Body page={"food-truck"}>
              <WorkCard.Header tag="Full Stack" year={2025} />
              <WorkCard.Title>Food Truck</WorkCard.Title>
              <WorkCard.Description>
                Web application for tracking food trucks around the world. You
                can add new trucks, view their location and details through
                Google Maps integration, and read other user reviews. The
                interface is fully responsive and includes a native dark mode
                for a consistent experience across all devices. Designed to be
                fast, simple, and easy to use.
              </WorkCard.Description>
              <WorkCard.TagsContainer>
                <WorkCard.TechnologyCard>Next.js</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>React</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Typescript</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Supabase</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>TailwindCSS</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>shadcn/ui</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Leaflet</WorkCard.TechnologyCard>
                <WorkCard.TechnologyCard>Three.js</WorkCard.TechnologyCard>
                <WorkCard.PlusCard quantity={4} />
              </WorkCard.TagsContainer>
              <WorkCard.FeaturesContainer>
                <WorkCard.Feature>Authentication</WorkCard.Feature>
                <WorkCard.Feature>Dark and Light mode</WorkCard.Feature>
                <WorkCard.Feature>Dynamic graphs for data</WorkCard.Feature>
              </WorkCard.FeaturesContainer>
            </WorkCard.Body>
          </WorkCard>
        </div>
      </Section>
    </main>
  );
}
