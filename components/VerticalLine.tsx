function VerticalLine() {
  return (
    <div className="absolute top-0 h-full w-0.5 bg-primary -z-1 scale-105">
      <div className="size-5 border-2 border-primary rounded-full absolute -bottom-2 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
    </div>
  );
}

export { VerticalLine };
