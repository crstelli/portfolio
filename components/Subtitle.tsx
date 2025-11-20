interface Props {
  children: string;
}

function Subtitle({ children }: Props) {
  return (
    <p className="text-center mt-6 italic max-w-[800px] text-neutral-500 mx-auto">
      {children}
    </p>
  );
}

export { Subtitle };
