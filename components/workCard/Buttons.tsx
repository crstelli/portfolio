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
    <div className="mt-auto flex max-sm:grid grid-cols-2 items-center gap-2">
      <Link href={`/works/${page}`} className="max-sm:col-span-2">
        <Button className="max-sm:w-full">Progect Page</Button>
      </Link>
      <Link target="blank" href={github}>
        <Button
          variant="secondary"
          className="flex items-center gap-2 max-sm:w-full max-sm:justify-center"
        >
          <GitHub size={20} />
          <span>Code</span>
        </Button>
      </Link>
      <Link target="blank" href={live} className="sm:ml-auto">
        <Button
          className="flex items-center gap-2 max-sm:w-full max-sm:justify-center "
          variant="secondary"
        >
          <Radio />
          <span>Live View</span>
        </Button>
      </Link>
    </div>
  );
}

export { Buttons };
