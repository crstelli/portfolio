import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FeaturesContainer({ children }: Props) {
  return (
    <div className="my-8 text-white">
      <h4 className="text-lg font-medium">Key Features</h4>
      <ul className="ml-6 font-light list-disc italic">{children}</ul>
    </div>
  );
}

export { FeaturesContainer };
