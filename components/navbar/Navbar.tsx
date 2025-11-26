import Image from "next/image";
import Link from "next/link";

import { Item } from "./Item";

function Navbar() {
  return (
    <nav className="flex max-sm:flex-col gap-4 fixed max-[320px]:text-sm top-0 border border-border lg:rounded-b-md backdrop-blur-sm px-6 z-1 self-center py-5 items-center text-lg justify-between w-full max-w-[1300px]">
      <Link href="/" className="relative aspect-10/1 w-50">
        <Image src="/logo.png" alt="Logo" className="object-cover object-center" sizes="200px" fill />
      </Link>
      <ul className="flex items-center gap-4">
        <Item customRef="/">Home</Item>
        <Item>Works</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { Navbar };
