"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
}

const animation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: "-100px", once: true },
};

function Title({ children }: Props) {
  return (
    <motion.h2 {...animation} className="text-center text-xl sm:text-2xl md:text-3xl uppercase">
      <Separator />
      {children}
      <Separator />
    </motion.h2>
  );
}

function Separator() {
  return <span className="text-primary px-2 md:px-4">-</span>;
}

export { Title };
