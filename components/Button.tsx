import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;

  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
  className?: React.ComponentProps<"div">["className"];
}

function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: Props) {
  const base = "cursor-pointer rounded-md duration-150";

  const variants = {
    primary: "text-black bg-primary hover:bg-primary-dark",
    secondary: "text-white border border-neutral-900 hover:bg-neutral-950",
    icon: "aspect-square flex items-center justify-center border border-neutral-800",
  };

  const sizes = {
    sm: "text-sm",
    md: "px-3 py-1",
    lg: "px-6 py-2 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export { Button };
