import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
  id?: string;
}

function Section({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={`w-full px-4 max-w-[1200px] mx-auto max-sm:pt-35 py-25 ${className}`}
    >
      {children}
    </section>
  );
}

export { Section };
