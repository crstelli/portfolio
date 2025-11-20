interface Props {
  children: string;

  variant?: "primary" | "secondary";
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
    primary: "text-black bg-primary font-bold",
    secondary: "text-primary bg-black",
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
