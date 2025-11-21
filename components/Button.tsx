import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;

  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
  className?: React.ComponentProps<"div">["className"];
}

function Button({
  variant = "primary",
  size = "md",
  className,
  children,
}: Props) {
  const base = "cursor-pointer rounded-md";

  const variants = {
    primary: "text-black bg-primary hover:bg-primary-dark",
    secondary: "text-white border border-neutral-400",
    icon: "aspect-square flex items-center justify-center border border-neutral-800",
  };

  const sizes = {
    sm: "text-sm",
    md: "px-3 py-1",
    lg: "px-6 py-2 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export { Button };
