import type { ReactNode } from "react";
import { Overlay } from "./Overlay";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <Overlay onClick={onClose}>
      <div className="z-3">{children}</div>
    </Overlay>
  );
}

export { Modal };
