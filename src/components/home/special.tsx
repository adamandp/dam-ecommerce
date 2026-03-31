import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Special() {
  return (
    <div className="bg-[#683292] dark:bg-[#3f1f5a] relative">
      <div className="content-container flex flex-col gap-c-10 justify-center items-center lg:flex-row text-center lg:text-start text-white py-c-28">
        <section className="grid gap-c-5 place-items-center relative">
          <h1 className="title-text text-c-28! leading-c-28! text-secondary-foreground!">
            Summer Special
          </h1>
          <h2 className="text-c-7-5">Buy One Sundae, Get One 50% Off!</h2>
          <div className="flex flex-col gap-c-3 items-center lg:flex-row">
            <Button>
              Get This Deal <ArrowRight />
            </Button>
            <h3>Use code: SUMMER50 at checkout.</h3>
          </div>
          <Image
            src={`/mask/doted-white.png`}
            alt="Special"
            width={1000}
            height={1000}
            className="w-c-21 object-contain absolute -left-[20%] top-[50%] hidden lg:block"
          />
          <Image
            src={`/mask/triangle-white.png`}
            alt="Special"
            width={1000}
            height={1000}
            className="w-c-11-5 object-contain absolute -left-[10%] top-0 hidden lg:block"
          />
        </section>
        <section className="grid place-items-center">
          <Image
            src={`/home/special/special-image.png`}
            alt="Special"
            width={1000}
            height={1000}
            className="w-c-141 object-contain"
          />
        </section>
      </div>
      <Image
        src={`/home/special/special-rightimage.png`}
        alt="Special"
        width={1000}
        height={1000}
        className="w-c-55-5 object-contain absolute right-0 top-0 bottom-0 translate-y-1/2"
      />
    </div>
  );
}
