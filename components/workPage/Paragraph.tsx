import type { ReactNode } from "react";
import { ParagraphTitle } from "./ParagraphTitle";
import { ParagraphContent } from "./ParagraphContent";

interface Props {
  children: ReactNode;
}

function Paragraph({ children }: Props) {
  return <div>{children}</div>;
}

Paragraph.Title = ParagraphTitle;
Paragraph.Content = ParagraphContent;

export { Paragraph };
