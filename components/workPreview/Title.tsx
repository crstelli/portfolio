import { Tag } from "../Tag";

interface Props {
  children: string;
  tag: string;
}

function Title({ children, tag }: Props) {
  return (
    <div className="flex max-lg:flex-col items-start lg:items-center justify-between">
      <h4 className="max-lg:order-1 text-lg max-lg:mt-2 text-white">
        {children}
      </h4>
      <Tag>{tag}</Tag>
    </div>
  );
}

export { Title };
