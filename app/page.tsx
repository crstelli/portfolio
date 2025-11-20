import { Button } from "@/components/Button";

export default function page() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full h-full bg-grid absolute top-0 left-0 -z-1"></div>
      <span className="uppercase bg-primary text-black px-4 rounded-full">
        Web Developer
      </span>
      <h1 className="text-4xl text-white font-bold">Giuseppe Crescitelli</h1>
      <Button size="lg">Download my CV</Button>
    </main>
  );
}
