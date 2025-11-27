interface Props {
  children: string;
}

function Title({ children }: Props) {
  return (
    <h2 className="text-center text-xl sm:text-2xl md:text-3xl uppercase">
      <Separator />
      {children}
      <Separator />
    </h2>
  );
}

function Separator() {
  return <span className="text-primary px-2 md:px-4">-</span>;
}

export { Title };
