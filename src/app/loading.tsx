import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex gap-2 m-auto text-2xl font-black tracking-wides text-pink-500">
        <Loader className=" animate-spin" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
