"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface ContextTypes {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode;
}

const GalleryContext = createContext<null | ContextTypes>(null);

function Provider({ children }: Props) {
  const [open, setOpen] = useState("");

  return (
    <GalleryContext.Provider value={{ open, setOpen }}>
      {children}
    </GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);

  if (!context)
    throw new Error(
      "You are trying to access GalleryContext outside his provider."
    );

  return context;
}

export { useGallery, Provider };
