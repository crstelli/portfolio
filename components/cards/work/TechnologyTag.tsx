interface Props {
  children: string;
}

function TechnologyTag({ children }: Props) {
  if (children === "React")
    return (
      <span className="bg-neutral-900 text-sky-400 border text-sm border-sky-400 px-2 rounded-sm py-1">{children}</span>
    );

  if (children === "Supabase")
    return (
      <span className="bg-neutral-900 text-green-400 border text-sm border-green-400 px-2 rounded-sm py-1">
        {children}
      </span>
    );

  if (children === "Next.js")
    return (
      <span className="bg-neutral-900 text-white-400 border text-sm border-white-400 px-2 rounded-sm py-1">
        {children}
      </span>
    );

  return <span className="bg-neutral-900 border text-sm border-border px-2 rounded-sm py-1">{children}</span>;
}

export { TechnologyTag };
