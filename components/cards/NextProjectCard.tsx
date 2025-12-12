import Image from "next/image";

import { Button } from "../Button";
import { ArrowRight } from "react-feather";
import { getProjectBySlug } from "@/lib/projects";

interface Props {
  slug: string;
}

async function NextProjectCard({ slug }: Props) {
  const { data } = await getProjectBySlug(slug);

  return (
    <div className="bg-neutral-950 min-[940px]:col-span-2 max-[940px]:mx-auto mt-8 p-4 max-w-[600px] rounded-md border gap-x-4 border-border grid grid-rows-[auto_auto_auto_auto] grid-cols-1 min-[560px]:grid-cols-[auto_auto]">
      <h5 className="text-neutral-500 font-medium uppercase text-sm min-[560px]:col-span-2">Next project</h5>
      <h4 className="text-xl text-white font-bold mt-1">{data.name}</h4>
      <div className="relative max-[560px]:order-1 max-[560px]:mt-4 row-span-3 my-auto w-[200px] aspect-video rounded-md overflow-hidden">
        <Image
          src={`/projects/${data.slug}/images/preview.jpg`}
          alt={`Preview image of ${data.name}.`}
          sizes="200px"
          fill
        />
      </div>
      <p className="text-sm mt-2 text-neutral-400">{data.description}</p>
      <Button
        href={{ ref: `/works/${data.slug}`, type: "Link" }}
        className="justify-self-start mt-4 max-[560px]:order-1"
        icon={ArrowRight}
        invertIcon
      >
        See more
      </Button>
    </div>
  );
}

export { NextProjectCard };
