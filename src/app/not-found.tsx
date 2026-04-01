import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-c-5">
      <h1 className="font-berkshire-swash text-c-35 animate-pulse flex items-center">
        😱<span className="mb-c-10">404</span> 😱
      </h1>
      <h2 className="text-c-9 font-medium text-center">
        Oops! Page Not Found! 😬
      </h2>
      <h3 className="text-c-5 text-card-foreground text-center">
        Looks like you&apos;ve wandered into a black hole. 🌌{" "}
        <span role="img" aria-label="facepalm">
          🤦‍♂️
        </span>
      </h3>
      <Link href="/">
        <Button>
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
