"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  label: string;
  image: string;
  content: string;
}

function TechStackCard({ label, image, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((op) => !op)}
      className="group hover:scale-115 cursor-pointer overflow-hidden border p-2 rounded-md grid grid-cols-[auto_1fr] items-center border-neutral-900 bg-neutral-950"
    >
      <div className="relative aspect-square w-9">
        <Image src={image} alt={`Logo of ${label}`} fill />
      </div>

      <div
        className="
        ml-0 group-hover:ml-3
        max-w-0 group-hover:max-w-full
        flex flex-col overflow-hidden

        duration-100
      "
      >
        <h5
          className="
          opacity-0 -translate-x-full
          group-hover:opacity-100 group-hover:translate-x-0
          duration-300 whitespace-nowrap
        "
        >
          {label}
        </h5>
      </div>
      {isOpen && <p className="col-span-2 mt-4">{content}</p>}
    </div>
  );
}

export { TechStackCard };
