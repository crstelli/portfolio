import type { TechStackItem } from "@/data/techstack";

import { Card } from "./Card";
import { Provider } from "./Provider";

interface Props {
  stack: TechStackItem[];
}

function TechStackGrid({ stack }: Props) {
  return (
    <Provider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] justify-center gap-4 mt-10">
        {stack.map((ts) => (
          <Card key={ts.label} image={ts.image} label={ts.label} content={ts.content} />
        ))}
      </div>
    </Provider>
  );
}

export { TechStackGrid };
