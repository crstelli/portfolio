import { ContactInfo } from "@/components/ContactInfo";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for collaborations, job opportunities, or project inquiries. Simple and fast contact options.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch for collaborations, job opportunities, or project inquiries. Simple and fast contact options.",
  },
};

export default function page() {
  return (
    <main className="min-h-screen lg:mt-5">
      <Section>
        <Title>Contact</Title>
        <Subtitle>
          If you&apos;re interested in collaborating or discussing new
          opportunities, I&apos;d be glad to hear from you.
        </Subtitle>

        <h1 className="text-center mt-15 mb-10 text-3xl font-bold">
          Ready to build
          <br />
          <span className="text-6xl text-primary">something great?</span>
        </h1>
        <ContactInfo />

        <h4 className="mt-20 italic text-lg text-center text-neutral-400">
          &ldquo;Work with purpose, and your goals move closer every day.&ldquo;
        </h4>
      </Section>
    </main>
  );
}
