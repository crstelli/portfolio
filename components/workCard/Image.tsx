import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return (
    <div className="w-full aspect-2/1 relative overflow-hidden">
      <NextImage
        src={src}
        alt={alt}
        className="object-cover object-center rounded-t-md"
        fill
      />
    </div>
  );
}

export { Image };
