import type { Project } from "@/data/projects/type";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRight } from "react-feather";

interface Props {
  project: Project;
}

function NextProjectCard({ project }: Props) {
  return (
    <div className="bg-neutral-950 min-[940px]:col-span-2 max-[940px]:mx-auto mt-8 p-4 max-w-[600px] rounded-md border gap-x-4 border-neutral-900 grid grid-rows-[auto_auto_auto_auto] grid-cols-1 min-[560px]:grid-cols-[auto_auto]">
      <h5 className="text-neutral-500 font-medium uppercase text-sm min-[560px]:col-span-2">
        Next project
      </h5>
      <h4 className="text-xl text-white font-bold mt-1">{project.name}</h4>
      <div className="relative max-[560px]:order-1 max-[560px]:mt-4 row-span-3 my-auto w-[200px] aspect-video rounded-md overflow-hidden">
        <Image
          src={project.images[0]}
          alt={`Preview image of ${project.name}.`}
          sizes="200px"
          fill
        />
      </div>
      <p className="text-sm mt-2 text-neutral-400">{project.description}</p>
      <Button
        href={{ ref: `/works/${project.slug}`, type: "Link" }}
        className="justify-self-start mt-4 max-[560px]:order-1"
        icon={ArrowRight}
      >
        See more
      </Button>
    </div>
  );
}

export { NextProjectCard };
