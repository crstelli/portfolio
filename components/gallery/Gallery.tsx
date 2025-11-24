"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface GalleryProps {
  children: ReactNode;
}

interface ContextTypes {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
}

const GalleryContext = createContext<null | ContextTypes>(null);

function Gallery({ children }: GalleryProps) {
  const [open, setOpen] = useState("");

  return (
    <GalleryContext.Provider value={{ open, setOpen }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-15">
        {children}
      </div>
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

export { Gallery, useGallery };
