import { Item } from "./Item";

function Navbar() {
  return (
    <nav className="flex absolute self-center mt-10 items-center text-lg justify-between w-full max-w-[1300px]">
      <span>Logo</span>
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
