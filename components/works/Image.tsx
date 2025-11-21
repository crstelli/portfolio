import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return (
    <div className="relative w-full aspect-video duration-200 hover:scale-110 hover:z-1 border border-neutral-800 hover:border-white rounded-md">
      <NextImage
        src={src}
        alt={alt}
        className="object-cover object-center rounded-md"
        fill
      />
    </div>
  );
}

export { Image };
