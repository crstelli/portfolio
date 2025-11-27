"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
}

const parentVariants = {
  show: {
    transition: { staggerChildren: 0.025 },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function TypeWriter({ children }: Props) {
  return (
    <motion.span variants={parentVariants} initial="hidden" animate="show">
      {children.split("").map((el, i) => (
        <motion.span key={i} variants={childrenVariants}>
          {el}
        </motion.span>
      ))}
    </motion.span>
  );
}

export { TypeWriter };
