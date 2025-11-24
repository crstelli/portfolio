"use client";

import Image from "next/image";
import { useTechStack } from "./TechStack";

interface Props {
  label: string;
  image: string;
  content: string;
}

function TechStackCard({ label, image, content }: Props) {
  const { open, setOpen } = useTechStack();

  return (
    <div
      onClick={() => setOpen(label)}
      className={`group min-h-[50px] relative duration-150 overflow-hidden border-neutral-900 hover:scale-105 border p-2 rounded-md grid grid-cols-[auto_1fr] items-center bg-neutral-950 ${content ? "cursor-pointer" : ""}`}
    >
      <div
        className={`left-4 flex items-center gap-4 absolute duration-300 ${
          content
            ? `${open === label ? "-translate-y-[200%] opacity-0" : "group-hover:-translate-y-[200%] group-hover:opacity-0"}`
            : null
        }`}
      >
        <div className="relative aspect-square w-9">
          <Image
            src={image || "/techstack-logos/placeholder.svg"}
            alt={`Logo of ${label}`}
            className="object-contain object-center"
            sizes="36px"
            fill
          />
        </div>
        <h5>{label}</h5>
      </div>
      {content && (
        <div className="overflow-hidden col-span-2">
          <div
            className={`flex flex-col duration-300 mx-2 -translate-y-full opacity-0 ${open === label ? "translate-y-0 opacity-100" : "group-hover:translate-y-0 group-hover:opacity-100"}`}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export { TechStackCard };
