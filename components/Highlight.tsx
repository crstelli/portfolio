interface Props {
  children: string;
}

function Highlight({ children }: Props) {
  return <span className="text-primary">{children}</span>;
}

export { Highlight };
