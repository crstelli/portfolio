interface Props {
  children: string;
}

function Title({ children }: Props) {
  return (
    <h2 className="text-center text-3xl uppercase">
      <span className="text-primary px-4">-</span>
      {children}
      <span className="text-primary px-4">-</span>
    </h2>
  );
}

export { Title };
