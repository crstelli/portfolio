import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workCard/WorkCard";

export default function page() {
  return (
    <main className="max-w-screen h-screen mt-20">
      <Section>
        <Title>Explore My Works</Title>
        <Subtitle>Descrizione in inglese</Subtitle>
        <div className="mt-15 grid grid-cols-2 justify-items-center">
          <WorkCard>
            <WorkCard.Image
              src="/shoppy-website/preview.png"
              alt="Preview image of shoppy website"
            />
            <WorkCard.Body>
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
            <WorkCard.Body>
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
