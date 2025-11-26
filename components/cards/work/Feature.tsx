interface Props {
  children: string;
}

function Feature({ children }: Props) {
  return (
    <li>
      <span className="text-neutral-400">{children}</span>
    </li>
  );
}

export { Feature };
