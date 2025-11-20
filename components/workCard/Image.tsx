interface Props {
  invert?: boolean;
}

function Image({ invert }: Props) {
  console.log(invert);
  {
    /* <Image
                src="/shoppy-dashboard/screen.png"
                alt="Image of shoppy website"
                className="object-cover"
                fill
              /> */
  }

  return (
    <div className={`relative aspect-3/2 ${invert ? "order-1" : null}`}>
      {/* <Image
                src="/shoppy-dashboard/screen.png"
                alt="Image of shoppy website"
                className="object-cover"
                fill
              /> */}
      <div className="absolute w-full h-full bg-neutral-500 flex items-center justify-center">
        Placeholder
      </div>
    </div>
  );
}

export { Image };
