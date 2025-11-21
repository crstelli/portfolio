import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FeaturesContainer({ children }: Props) {
  return (
    <div className="my-4">
      <h4 className="text-lg font-medium text-white">Key Features</h4>
      <ul className="ml-6 font-light list-disc text-primary">{children}</ul>
    </div>
  );
}

export { FeaturesContainer };
