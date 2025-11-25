import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = NextImageProps & {
  invert?: boolean;
};

function Image({ invert, ...rest }: Props) {
  return (
    <div className={`relative aspect-video ${invert ? "lg:order-1" : null}`}>
      <NextImage
        {...rest}
        className="object-cover object-top"
        quality={50}
        sizes="(max-width: 355px): 100vw, 355px"
        fill
      />
    </div>
  );
}

export { Image };
