interface Props {
  children: string;
  className?: React.ComponentProps<"span">["className"];
}

function Tag({ children, className, ...props }: Props) {
  return (
    <span className={`bg-primary uppercase text-black px-3 rounded-full ${className}`} {...props}>
      {children}
    </span>
  );
}

export { Tag };
