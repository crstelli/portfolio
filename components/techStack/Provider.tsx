"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
}

const TechStackContext = createContext<null | ContextProps>(null);

function Provider({ children }: Props) {
  const [open, setOpen] = useState("");

  return <TechStackContext.Provider value={{ open, setOpen }}>{children}</TechStackContext.Provider>;
}

function useTechStack() {
  const context = useContext(TechStackContext);

  if (!context) throw new Error("You cannot access TechContext outside his provider.");
  return context;
}

export { Provider, useTechStack };
