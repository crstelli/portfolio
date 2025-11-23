interface Props {
  children: string;
  color?: string;
}

function ColoredText({ children, color = "text-primary!" }: Props) {
  return <span className={color}>{children}</span>;
}

export { ColoredText };
