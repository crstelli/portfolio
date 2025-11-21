import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TagsContainer({ children }: Props) {
  return <div className="mt-4 flex flex-wrap gap-2">{children}</div>;
}

export { TagsContainer };
