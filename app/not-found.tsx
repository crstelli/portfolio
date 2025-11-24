import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function page() {
  return (
    <div className="m-auto text-center">
      <h1 className="text-6xl text-primary italic">OPS!</h1>
      <p className="text-3xl mt-4">This page does not exists (yet?)</p>
      <Link href={"/"}>
        <Button
          size="lg"
          className="mt-10 mx-auto flex gap-2 items-center justify-center"
        >
          <ArrowLeft />
          Go back to Home
        </Button>
      </Link>
    </div>
  );
}
