import type { ReactNode } from "react";

import { Image } from "./Image";
import { Body } from "./Body";
import { Title } from "./Title";
import { Description } from "./Description";
import React from "react";

interface Props {
  children: ReactNode;
  invert?: boolean;
}

function WorkCard({ children, invert = false }: Props) {
  // Implemented this pattern to inherit 'invert' prop to childrens.
  const enhanced = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(
      child as React.ReactElement<{ invert?: boolean }>,
      { invert }
    );
  });

  return (
    <div
      className={`max-w-[700px] grid border border-neutral-800 rounded-md overflow-hidden ${
        invert ? "grid-cols-[5fr_4fr] ml-10" : "grid-cols-[4fr_5fr] mr-10"
      }`}
    >
      {enhanced}
    </div>
  );
}

WorkCard.Image = Image;
WorkCard.Body = Body;
WorkCard.Title = Title;
WorkCard.Description = Description;

export { WorkCard };
