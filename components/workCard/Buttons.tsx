import { GitHub, Radio } from "react-feather";
import { Button } from "../Button";
import Link from "next/link";

interface Props {
  page: string;
  github: string;
  live: string;
}

function Buttons({ page, github, live }: Props) {
  return (
    <div className="mt-auto flex items-center gap-2">
      <Link href={`/works/${page}`}>
        <Button>Progect Page</Button>
      </Link>
      <Link target="blank" href={github}>
        <Button variant="secondary" className="flex items-center gap-2">
          <GitHub size={20} />
          <span>Code</span>
        </Button>
      </Link>
      <Link target="blank" href={live} className="ml-auto">
        <Button className="flex items-center gap-2 text-sm" variant="secondary">
          <Radio />
          <span>Live View</span>
        </Button>
      </Link>
    </div>
  );
}

export { Buttons };
