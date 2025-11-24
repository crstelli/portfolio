import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = NextImageProps & {
  invert?: boolean;
};

function Image({ invert, ...rest }: Props) {
  return (
    <div className={`relative aspect-video ${invert ? "lg:order-1" : null}`}>
      <NextImage {...rest} className="object-cover object-top" />
    </div>
  );
}

export { Image };
