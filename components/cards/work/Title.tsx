interface Props {
  children: string;
}

function Title({ children }: Props) {
  return <h3 className="text-2xl font-semibold mt-2 text-white">{children}</h3>;
}

export { Title };
