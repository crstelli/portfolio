interface Props {
  children: string;
}

function Description({ children }: Props) {
  return <p className="text-neutral-400 text-sm mt-2 min-h-[80]">{children}</p>;
}

export { Description };
