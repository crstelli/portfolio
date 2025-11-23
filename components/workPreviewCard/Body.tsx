import type { ReactNode } from "react";
import { Button } from "../Button";
import Link from "next/link";

interface Props {
  children: ReactNode;
  link: string;

  invert?: boolean;
}

function Body({ children, link }: Props) {
  return (
    <div className="bg-neutral-950 p-4 flex flex-col gap-2">
      {children}
      <Link href={link} className="max-lg:mt-4 mt-auto self-start">
        <Button>Explore</Button>
      </Link>
    </div>
  );
}

export { Body };
