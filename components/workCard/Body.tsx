import type { ReactNode } from "react";
import { Button } from "../Button";
import { GitHub, Radio } from "react-feather";

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
          <span>Code</span>
        </Button>
        <Button
          className="ml-auto flex items-center gap-2 text-sm"
          variant="secondary"
        >
          <Radio />
          <span>Live View</span>
        </Button>
      </div>
    </div>
  );
}

export { Body };
