import type { Project } from "@/data/projects/type";

import { Calendar, Clock, GitHub, HardDrive, Layers, Radio } from "react-feather";
import { Button } from "../Button";
import { IconLabel } from "../IconLabel";

interface Props {
  project: Project;
}

function WorkInfoCard({ project }: Props) {
  return (
    <div className="bg-neutral-950 max-w-[550px] w-full mx-auto border flex flex-col items-start gap-3 self-start border-border rounded-md p-4">
      <h5 className="self-center text-center text-xl font-bold">{project.name}</h5>
      <div className="h-px w-full bg-neutral-700"></div>
      <div className="my-4 gap-3 px-4 grid grid-cols-1 min-[480px]:grid-cols-2 w-full">
        <IconLabel icon={Calendar} label="Built in" content={`${project.date.month}, ${project.date.year}`} />

        <IconLabel icon={Layers} label="Stack role" content={project.stack} />
        <IconLabel icon={Clock} label="Worked on for" content={project.worked_for} />
        <IconLabel icon={HardDrive} label="Hosted on" content={project.hosted_on} />
      </div>
      <Button href={{ ref: project.github, type: "a" }} target="blank" className="w-full" icon={GitHub}>
        View GitHub Repository
      </Button>

      <Button
        href={{ ref: project.github, type: "a" }}
        target="blank"
        className="w-full"
        icon={Radio}
        variant="secondary"
      >
        Live View
      </Button>
    </div>
  );
}

export { WorkInfoCard };
