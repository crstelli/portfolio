import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Body({ children }: Props) {
  return <div className="p-4 flex flex-col grow">{children}</div>;
}

export { Body };
