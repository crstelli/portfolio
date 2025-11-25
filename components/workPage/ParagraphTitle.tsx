interface Props {
  children: string;
}

function ParagraphTitle({ children }: Props) {
  return <h3 className="text-xl font-medium ml-3 text-white">{children}</h3>;
}

export { ParagraphTitle };
