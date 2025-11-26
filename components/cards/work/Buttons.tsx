import { Button } from "@/components/Button";
import { GitHub, Map, Radio } from "react-feather";

interface Props {
  page: string;
  github: string;
  live: string;
}

function Buttons({ page, github, live }: Props) {
  return (
    <div className="mt-auto flex max-sm:grid grid-cols-2 items-center gap-2">
      <Button href={{ ref: `/works/${page}`, type: "Link" }} className="max-sm:col-span-2 max-sm:w-full" icon={Map}>
        Project Page
      </Button>

      <Button href={{ ref: github, type: "a" }} target="blank" variant="secondary" icon={GitHub}>
        Code
      </Button>

      <Button href={{ ref: live, type: "a" }} target="blank" variant="secondary" icon={Radio}>
        Live View
      </Button>
    </div>
  );
}

export { Buttons };
