import type { Icon } from "react-feather";

interface Props {
  icon: Icon;

  label: string;
  content: string;
}

function IconLabel({ label, content, icon: Icon }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 items-center">
      <div className="bg-primary/10 p-2 rounded-md row-span-2">
        <Icon size={25} className="text-primary" />
      </div>
      <h4 className="text-neutral-400 font-semibold text-sm">{label}</h4>
      <span>{content}</span>
    </div>
  );
}

export { IconLabel };
