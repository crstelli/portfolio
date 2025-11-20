import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
}

function Section({ children, className }: Props) {
  return (
    <section className={`w-full max-w-[1200px] mx-auto px-6 py-8 ${className}`}>
      {children}
    </section>
  );
}

export { Section };
