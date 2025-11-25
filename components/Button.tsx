import Link from "next/link";
import type { ReactNode } from "react";
import type { Icon } from "react-feather";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;

  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "square";
  className?: React.ComponentProps<"div">["className"];
  icon?: Icon;
  href?: { ref: string; type: "Link" | "a" };

  download?: boolean;
  target?: string;
}

function Button({
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  href,
  children,
  onClick,
  ...rest
}: Props) {
  const base = "cursor-pointer rounded-md duration-150";

  const variants = {
    primary: "text-black bg-primary hover:bg-primary-dark",
    secondary: "text-white border border-neutral-900 hover:bg-neutral-950",
  };

  const sizes = {
    sm: "text-sm",
    md: "px-3 py-1",
    lg: "px-6 py-3 text-lg",
    square: "aspect-square p-3",
  };

  if (href?.type === "a") {
    return (
      <a
        href={href.ref}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center gap-2" : ""}`}
        {...rest}
      >
        {Icon && <Icon />}
        {children}
      </a>
    );
  }

  if (href?.type === "Link") {
    return (
      <Link
        href={href.ref}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center gap-2" : ""}`}
        {...rest}
      >
        {Icon && <Icon />}
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center gap-2" : ""}`}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}

export { Button };
