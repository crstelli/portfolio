import AboutContent from "@/data/about_intro.mdx";

import { Button } from "./Button";
import { BookOpen, User } from "react-feather";

function AboutHero() {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 items-center mt-10">
      <video
        src="/animation.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-[320px] mx-auto self-start"
      />
      <div className="mt-15 flex flex-col max-lg:max-w-[600px]">
        <span className="flex items-center gap-3">
          <User className="text-primary" size={30} />
          <h3 className="text-3xl font-bold text-white">Giuseppe</h3>
        </span>
        <AboutContent />
        <Button icon={BookOpen} className="self-end" href={{ ref: "/about", type: "Link" }}>
          Keep reading
        </Button>
      </div>
    </div>
  );
}

export { AboutHero };
