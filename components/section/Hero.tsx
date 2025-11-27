"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { links } from "@/data/links";

import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";

import { Section } from "./Section";
import { Download, GitHub } from "react-feather";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const childrenVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const AnimatedTag = motion.create(Tag);

function Hero() {
  return (
    <Section className="flex flex-col p-0! max-lg:w-[90%] justify-center lg:grid h-screen items-center grid-cols-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-2 max-lg:max-w-[600px]"
      >
        <AnimatedTag variants={childrenVariants}>Web Developer</AnimatedTag>
        <motion.h1 variants={childrenVariants} className="text-2xl sm:text-4xl text-white font-bold">
          Giuseppe Crescitelli
        </motion.h1>
        <motion.p variants={childrenVariants} className="max-sm:text-sm">
          Front-end Developer focused on UX and performance, with experience in Next.js and TypeScript. I build fast,
          accessible, and scalable interfaces using modern technologies.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
          className="flex items-stretch gap-4 mt-6 z-1"
        >
          <Button icon={Download} href={{ ref: links.cv, type: "a" }} size="lg" download>
            Download my CV
          </Button>
          <Button
            ariaLabel="GitHub Profile"
            variant="secondary"
            size="square"
            href={{ ref: links.github, type: "a" }}
            target="blank"
          >
            <GitHub size={25} />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.2, delay: 0.5 } }}
        className="max-lg:hidden relative justify-self-end lg:max-w-[320px] w-full aspect-square"
      >
        <Image src="/hero.svg" sizes="(max-width:1024px) 0px, 320px" alt="Hero image" fill />
      </motion.div>
    </Section>
  );
}

export { Hero };
