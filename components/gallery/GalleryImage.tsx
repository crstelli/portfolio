"use client";

import NextImage from "next/image";
import { useGallery } from "./Gallery";
import { Modal } from "../modal/Modal";

interface ImageProps {
  src: string;
  name: string;
}

function GalleryImage({ src, name }: ImageProps) {
  const { open, setOpen } = useGallery();

  return (
    <>
      {open === src && (
        <Modal onClose={() => setOpen("")}>
          <div className="relative w-[75vw] aspect-video border rounded-md">
            <NextImage
              src={src}
              alt={`Image of ${name}.`}
              className="object-cover object-center rounded-md"
              fill
            />
          </div>
        </Modal>
      )}
      <div
        onClick={() => setOpen(src)}
        className={
          "relative w-full aspect-video duration-200 hover:scale-110 hover:z-1 border border-neutral-800 hover:border-white rounded-md"
        }
      >
        <NextImage
          src={src}
          alt={`Image of ${name}.`}
          className="object-cover object-center rounded-md"
          fill
        />
      </div>
    </>
  );
}

export { GalleryImage };
