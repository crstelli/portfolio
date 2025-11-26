import Link from "next/link";
import type { ReactNode } from "react";
import type { Icon } from "react-feather";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;

  variant?: "primary" | "secondary" | "special";
  size?: "sm" | "md" | "lg" | "square";
  className?: React.ComponentProps<"div">["className"];
  icon?: Icon;
  invertIcon?: boolean;
  href?: { ref: string; type: "Link" | "a" };

  download?: boolean;
  target?: string;
}

function Button({
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  invertIcon = false,
  href,
  children,
  onClick,
  ...rest
}: Props) {
  const base = "cursor-pointer rounded-md duration-150";

  const variants = {
    primary: "text-black bg-primary hover:bg-primary-dark",
    secondary: "text-white border border-neutral-900 hover:bg-neutral-950",
    special:
      "glowing-border bg-primary text-black hover:bg-neutral-950 hover:text-primary uppercase hover:scale-120 py-2.5! text-lg",
  };

  const sizes = {
    sm: "text-sm",
    md: "px-3 py-1",
    lg: "px-6 py-3 text-lg",
    square: "aspect-square p-3",
  };

  const iconSizes = {
    sm: 15,
    md: 20,
    lg: 25,
    square: 30,
  };

  if (href?.type === "a") {
    return (
      <a
        href={href.ref}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center justify-center gap-2" : ""}`}
        {...rest}
      >
        {invertIcon ? (
          <>
            {Icon && <Icon size={iconSizes[size]} />}
            {children}
          </>
        ) : (
          <>
            {Icon && <Icon size={iconSizes[size]} />}
            {children}
          </>
        )}
      </a>
    );
  }

  if (href?.type === "Link") {
    if (variant === "special")
      return (
        <Link
          href={href.ref}
          className={`${base} glowing-border bg-primary text-black hover:bg-neutral-950 hover:text-primary px-5 py-2.5 uppercase text-xl ${className}`}
        >
          <span className="flex items-center gap-3">
            {Icon && <Icon size={25} />}
            {children}
          </span>
        </Link>
      );
    return (
      <Link
        href={href.ref}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center justify-center gap-2" : ""}`}
        {...rest}
      >
        {invertIcon ? (
          <>
            {children}
            {Icon && <Icon size={iconSizes[size]} />}
          </>
        ) : (
          <>
            {Icon && <Icon size={iconSizes[size]} />}
            {children}
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? "flex items-center justify-center gap-2" : ""}`}
      {...rest}
    >
      {invertIcon ? (
        <>
          {children}
          {Icon && <Icon size={iconSizes[size]} />}
        </>
      ) : (
        <>
          {Icon && <Icon size={iconSizes[size]} />}
          {children}
        </>
      )}
    </button>
  );
}

export { Button };
