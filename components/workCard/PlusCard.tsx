interface Props {
  quantity: number;
}

function PlusCard({ quantity }: Props) {
  return (
    <span className="bg-neutral-950 border text-sm border-neutral-800 text-white px-2 rounded-sm py-1">
      +{quantity} more
    </span>
  );
}

export { PlusCard };
