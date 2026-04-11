import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="content-container w-full flex-1 flex flex-col justify-center items-center text-center">
      <h1 className="text-c-20 font-bold text-pink-500 mb-c-2">
        🍦 THANK YOU 🍦
      </h1>
      <p className="text-c-6 ">Your sweet treat is on the way! 🚚💨</p>

      <Link href="/" className="mt-c-20">
        <Button>
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
