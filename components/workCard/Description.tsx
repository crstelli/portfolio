interface Props {
  children: string;
}

function Description({ children }: Props) {
  return <p className="text-neutral-400 text-sm mt-2">{children}</p>;
}

export { Description };
