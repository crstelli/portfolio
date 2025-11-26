"use client";

import { ChevronDown } from "react-feather";

interface Props {
  section: string;
}

function ScrollBottomButton({ section }: Props) {
  return (
    <a href={`#${section}`} className="absolute bottom-10 left-1/2 -translate-x-1/2 chevron-down">
      <ChevronDown size={50} />
    </a>
  );
}

export { ScrollBottomButton };
