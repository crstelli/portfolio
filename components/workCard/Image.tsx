import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = NextImageProps & {
  invert?: boolean;
};

function Image({ invert, ...rest }: Props) {
  return (
    <div className={`relative aspect-3/2 ${invert ? "order-1" : null}`}>
      <NextImage {...rest} />
    </div>
  );
}

export { Image };
