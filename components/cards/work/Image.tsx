import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return (
    <div className="w-full aspect-video relative overflow-hidden">
      <NextImage
        src={src}
        alt={alt}
        sizes="(max-width: 450px) 100vw, 500px"
        className="object-cover object-top rounded-t-md"
        fill
      />
    </div>
  );
}

export { Image };
