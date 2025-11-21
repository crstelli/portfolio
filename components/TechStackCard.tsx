import Image from "next/image";

interface Props {
  label: string;
  image: string;
}

function TechStackCard({ label, image }: Props) {
  return (
    <div className="group overflow-hidden border p-2 rounded-md flex items-center border-neutral-900 bg-neutral-950">
      <div className="relative aspect-square w-9">
        <Image src={image} alt={`Logo of ${label}`} fill />
      </div>

      <div
        className="
        ml-0 group-hover:ml-3
        max-w-0 group-hover:max-w-[152px]
        
        transition-[max-width,margin-left]
        duration-[500ms,0ms]
        ease-in-out
        delay-[0ms,140ms]
        flex flex-col overflow-hidden
      "
      >
        <h5
          className="
          opacity-0 translate-x-full
          group-hover:opacity-100 group-hover:translate-x-0
          duration-300 whitespace-nowrap
        "
        >
          {label}
        </h5>
      </div>
    </div>
  );
}

export { TechStackCard };
