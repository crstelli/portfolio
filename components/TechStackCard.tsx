import Image from "next/image";

interface Props {
  label: string;
  image: string;
  content: string;
}

function TechStackCard({ label, image, content }: Props) {
  return (
    <div className="group min-h-[50px] relative duration-150 overflow-hidden border-neutral-900 hover:scale-105 border p-2 rounded-md grid grid-cols-[auto_1fr] items-center bg-neutral-950">
      <div
        className={`left-4 flex items-center gap-4 absolute ${
          content
            ? "group-hover:-translate-y-[200%] group-hover:opacity-0 duration-300"
            : null
        }`}
      >
        <div className="relative aspect-square w-9">
          <Image
            src={image || "/techstack-logos/placeholder.svg"}
            alt={`Logo of ${label}`}
            className="object-contain object-center"
            fill
          />
        </div>
        <h5>{label}</h5>
      </div>
      {content && (
        <div className="overflow-hidden col-span-2">
          <div className="flex flex-col duration-300 mx-2 -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export { TechStackCard };
