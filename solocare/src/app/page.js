"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const goToSignup = () => {
    route.push("/signup");
  };
  return (
    <main className="flex flex-col min-h-screen min-w-screen w-full items-center">
      <h1 className="font-bold text-4xl bg-blue-700 text-white w-full py-10 text-center">
        PRINCESS BULLOS
      </h1>
      <div className="bg-orange-600 w-full flex items-center justify-center grow">
        <h1>CENTER</h1>
      </div>
    </main>
  );
}
