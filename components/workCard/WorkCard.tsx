import { Image } from "./Image";
import type { ReactNode } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Title } from "./Title";
import { Description } from "./Description";
import { TagsContainer } from "./TagsContainer";
import { TechnologyTag } from "./TechnologyTag";
import { FeaturesContainer } from "./FeaturesContainer";
import { Feature } from "./Feature";
import { PlusCard } from "./PlusCard";
import { Buttons } from "./Buttons";

interface Props {
  children: ReactNode;
}

function WorkCard({ children }: Props) {
  return (
    <div className="w-[500px] grid grid-rows-[auto_1fr] border border-neutral-700 overflow-hidden rounded-md">
      {children}
    </div>
  );
}

WorkCard.Image = Image;
WorkCard.Body = Body;
WorkCard.Header = Header;
WorkCard.Title = Title;
WorkCard.Description = Description;
WorkCard.TagsContainer = TagsContainer;
WorkCard.TechnologyCard = TechnologyTag;
WorkCard.PlusCard = PlusCard;
WorkCard.FeaturesContainer = FeaturesContainer;
WorkCard.Feature = Feature;
WorkCard.Buttons = Buttons;

export { WorkCard };
