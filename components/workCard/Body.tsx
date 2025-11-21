import type { ReactNode } from "react";
import { Button } from "../Button";
import { GitHub } from "react-feather";

interface Props {
  children: ReactNode;
}

function Body({ children }: Props) {
  return (
    <div className="p-4 flex flex-col grow">
      {children}
      <div className="mt-auto flex items-center gap-2">
        <Button>Progect Page</Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <GitHub size={20} />
          Code
        </Button>
      </div>
    </div>
  );
}

export { Body };
