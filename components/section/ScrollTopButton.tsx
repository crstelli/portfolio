"use client";

import { useEffect, useState } from "react";

import { Button } from "../Button";
import { ChevronUp } from "react-feather";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      variant="secondary"
      onClick={scrollToTop}
      className={`sticky self-end bottom-15 right-15 duration-300 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <ChevronUp />
    </Button>
  );
}

export { ScrollTopButton };
