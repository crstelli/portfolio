import type { ProjectType } from "@/types/ProjectType";

import { WorkCard } from "./WorkCard";
import { VerticalLine } from "@/components/VerticalLine";

interface Props {
  projects: ProjectType[];
}

function WorksPreviews({ projects }: Props) {
  return (
    <div className="flex flex-col relative items-center mt-20 gap-12">
      <VerticalLine />
      {projects.map((p, i) => (
        <WorkCard key={p.id} invert={i % 2 === 1}>
          <WorkCard.Image
            src={`/projects/${p.slug}/images/preview.jpg`}
            alt={`Preview image of ${p.name}.`}
          ></WorkCard.Image>
          <WorkCard.Body link={`/works/${p.slug}`}>
            <WorkCard.Title tag={p.stack}>{p.name}</WorkCard.Title>
            <WorkCard.Description>{p.description}</WorkCard.Description>
          </WorkCard.Body>
        </WorkCard>
      ))}
    </div>
  );
}

export { WorksPreviews };
