interface Props {
  children: string;
}

function Tag({ children }: Props) {
  return (
    <span className="bg-primary uppercase text-black px-2 rounded-full">
      {children}
    </span>
  );
}

export { Tag };
