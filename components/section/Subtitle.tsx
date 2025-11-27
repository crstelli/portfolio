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

function Subtitle({ children }: Props) {
  return (
    <motion.p {...animation} className="text-center max-sm:text-sm mt-6 italic max-w-[800px] text-neutral-500 mx-auto">
      {children}
    </motion.p>
  );
}

export { Subtitle };
