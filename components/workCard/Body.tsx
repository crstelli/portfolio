import type { ReactNode } from "react";
import { Button } from "../Button";

interface Props {
  children: ReactNode;
  invert?: boolean;
}

function Body({ children }: Props) {
  return (
    <div className="bg-neutral-950 p-4 flex flex-col gap-2">
      {children}
      <Button className="mt-auto self-start">Explore</Button>
    </div>
  );
}

export { Body };
