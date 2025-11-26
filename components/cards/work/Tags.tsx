import { TechStackItem } from "@/data/techstack";
import { TECH_TAG_QUANTITY_PER_WORK } from "@/lib/constants";

import { TagsContainer } from "./TagsContainer";
import { TechnologyTag } from "./TechnologyTag";
import { PlusCard } from "./PlusCard";

interface Props {
  stack: TechStackItem[];
}

function Tags({ stack }: Props) {
  return (
    <TagsContainer>
      {stack.map((tech, i) => {
        const othersCount = stack.length - TECH_TAG_QUANTITY_PER_WORK;
        if (i < TECH_TAG_QUANTITY_PER_WORK) return <TechnologyTag key={tech.label}>{tech.label}</TechnologyTag>;

        if (i === stack.length - 1) return <PlusCard key={"others"} quantity={othersCount} />;
      })}
    </TagsContainer>
  );
}

export { Tags };
