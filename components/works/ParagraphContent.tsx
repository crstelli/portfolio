import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

function ParagraphContent({ children }: Props) {
  return <p className="text-neutral-400">{children}</p>;
}

export { ParagraphContent };
