import type { TechStackItem } from "@/data/techstack";
import { TechStackList } from "../techStack/TechStackList";

interface Props {
  stack: TechStackItem[];
}

function StackInfoCard({ stack }: Props) {
  return (
    <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col gap-4 self-start border-neutral-800 rounded-md p-4">
      <h5 className="text-xl font-bold">Tech Stack</h5>
      <TechStackList stack={stack} />
    </div>
  );
}

export { StackInfoCard };
