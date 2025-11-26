import type { ReactNode } from "react";

import { ParagraphContent } from "./ParagraphContent";
import { ParagraphTitle } from "./ParagraphTitle";

interface Props {
  children: ReactNode;
}

function Paragraph({ children }: Props) {
  return <div>{children}</div>;
}

Paragraph.Title = ParagraphTitle;
Paragraph.Content = ParagraphContent;

export { Paragraph };
