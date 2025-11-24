import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function Overlay({ children, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-screen h-screen z-2 top-0 left-0 backdrop-brightness-75 backdrop-blur-sm fixed flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export { Overlay };
