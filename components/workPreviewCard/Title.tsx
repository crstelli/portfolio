import { Tag } from "../Tag";

interface Props {
  children: string;
  tag: string;
}

function Title({ children, tag }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-lg text-white">{children}</h4>
      <Tag>{tag}</Tag>
    </div>
  );
}

export { Title };
