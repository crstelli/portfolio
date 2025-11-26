import Image from "next/image";
import { links } from "@/data/links";

import { Button } from "../Button";
import { Highlight } from "../Highlight";

import { GitHub, Linkedin, Send } from "react-feather";

function ProfileCard() {
  return (
    <div className="row-span-2 min-[900px]:sticky top-25 max-w-[500px] p-4 justify-self-center rounded-md border border-border self-start bg-neutral-950">
      <div className="flex flex-col gap-3 items-center">
        <div className="size-30 rounded-full relative overflow-hidden">
          <Image
            src="/pfp.jpg"
            alt="Profile picture of Giuseppe"
            className="object-center object-cover"
            sizes="120px"
            fill
          />
        </div>
        <h3 className="font-bold text-xl min-[350px]:text-2xl">Giuseppe Crescitelli</h3>
      </div>
      <p className="bg-neutral-900 mt-3 text-center text-sm p-3 rounded-md border border-border italic">
        Self-taught frontend developer driven by modern technologies, <Highlight>clean</Highlight> and{" "}
        <Highlight>maintainable code</Highlight>, and an unrelenting hunger to grow, <Highlight>learn</Highlight>, and
        succeed.
      </p>

      <div className="flex flex-col gap-2">
        <Button href={{ ref: "/contact", type: "Link" }} className="mt-10" icon={Send} size="lg">
          Get in Touch
        </Button>

        <Button
          href={{ ref: links.github, type: "a" }}
          target="blank"
          variant="secondary"
          icon={GitHub}
          className="mt-2"
        >
          GitHub
        </Button>

        <Button href={{ ref: links.linkedin, type: "a" }} target="blank" variant="secondary" icon={Linkedin}>
          Linkedin
        </Button>
      </div>
    </div>
  );
}

export { ProfileCard };
