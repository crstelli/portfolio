import { Calendar } from "react-feather";

interface Props {
  tag: string;
  year: number;
}

function Header({ tag, year }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="bg-primary text-sm py-0.5 uppercase text-black px-2 rounded-full">
        {tag}
      </span>
      <span className="flex items-center gap-2 bg-neutral-950 border border-neutral-900 text-neutral-400 px-2 rounded-md py-1">
        <Calendar size={20} />
        <span>{year}</span>
      </span>
    </div>
  );
}

export { Header };
