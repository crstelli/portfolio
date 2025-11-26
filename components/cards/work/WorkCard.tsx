import type { ReactNode } from "react";

import { Image } from "./Image";
import { Body } from "./Body";
import { Header } from "./Header";
import { Title } from "./Title";
import { Description } from "./Description";
import { Buttons } from "./Buttons";
import { Tags } from "./Tags";
import { Features } from "./Features";

interface Props {
  children: ReactNode;
}

function WorkCard({ children }: Props) {
  return (
    <div className="max-w-[500px] grid grid-rows-[auto_1fr] border border-neutral-700 overflow-hidden rounded-md">
      {children}
    </div>
  );
}

WorkCard.Image = Image;
WorkCard.Body = Body;
WorkCard.Header = Header;
WorkCard.Title = Title;
WorkCard.Description = Description;
WorkCard.Tags = Tags;
WorkCard.Buttons = Buttons;
WorkCard.Features = Features;

export { WorkCard };
