import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Signup() {
  return (
    <div className="bg-white dark:bg-background-secondary">
      <div className="content-container grid place-items-center gap-c-10 text-center py-c-34-5 relative">
        <section className="grid gap-c-5 place-items-center relative">
          <h1 className="title-text ">
            Sign up For <span>Exclusive Deals </span>and Updates
          </h1>
          <h2 className="desc-text">
            Get 10% off your next order and stay updated with our latest offers.
          </h2>
          <Image
            src={`/mask/triangle-purple.png`}
            alt="Special"
            width={1000}
            height={1000}
            className="w-c-11-5 object-contain absolute -right-c-15 top-0 hidden md:block"
          />
        </section>
        <section className="flex gap-c-5 justify-center items-center w-full relative">
          <Input
            className="rounded-full text-c-4 w-[60%] px-c-4 py-c-9"
            placeholder="Enter Your Email Address"
          />
          <Button className="gap-c-2 whitespace-nowrap cursor-pointer hover:shadow-xl transform transition-all duration-300 ease-in-out active:scale-95 flex justify-center items-center font-semibold rounded-full text-white">
            Subscribe <ArrowRight className="size-c-5" />
          </Button>
          <Image
            src={`/mask/circle.png`}
            alt="Special"
            width={1000}
            height={1000}
            className="w-c-16 object-contain absolute left-0 top-0 hidden md:block"
          />
        </section>
      </div>
    </div>
  );
}
