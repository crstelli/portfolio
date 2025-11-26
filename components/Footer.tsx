import Link from "next/link";
import { links } from "@/data/links";

import { GitHub, Linkedin, Mail } from "react-feather";

function Footer() {
  return (
    <footer className="w-full flex z-1 bg-neutral-950 mt-10 py-7 px-4 text-neutral-600 text-sm">
      <div className="mx-auto w-full max-w-[1400px] flex max-[500px]:flex-col max-[500px]:items-center gap-4 justify-between">
        <div>
          <h6>&copy; All rights reserved 2025 - Giuseppe Crescitelli</h6>
        </div>
        <div className="flex items-center gap-4">
          <Link target="blank" href={links.github}>
            <GitHub size={20} />
          </Link>
          <Link target="blank" href={links.linkedin}>
            <Linkedin size={20} />
          </Link>
          <Link href={`mailto:${links.email}`}>
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
