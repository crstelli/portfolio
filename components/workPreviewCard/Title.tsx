import { Tag } from "../Tag";

interface Props {
  children: string;
  tag: string;
}

function Title({ children, tag }: Props) {
  return (
    <div className="flex max-lg:flex-col items-start lg:items-center justify-between">
      <Tag>{tag}</Tag>
      <h4 className="text-lg max-lg:mt-2 text-white">{children}</h4>
    </div>
  );
}

export { Title };
