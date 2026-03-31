import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Relive() {
  return (
    <div className="bg-white dark:bg-background-secondary pt-c-20 relative">
      <div className="content-container flex flex-col justify-center items-center gap-c-10 text-center lg:flex-row">
        <section className="grid place-items-center lg:place-items-start text-center lg:text-start lg:order-2 gap-c-5 relative">
          <h1 className="title-text">
            Relive the Sweet Memories of Classic <span>Ice Creams</span>
          </h1>
          <h2 className="desc-text">
            From rich chocolate fudge to creamy vanilla sundaes, discover our
            menu of classic ice cream creations.
          </h2>
          <Button className="text-white">
            Explore Our Menu <ArrowRight />
          </Button>
          <Image
            src={"/mask/triangle-purple.png"}
            alt="Relive"
            width={1000}
            height={1000}
            className="object-contain absolute w-c-13 top-0 right-0"
          />
        </section>
        <section className="pt-c-20 lg:pt-0 relative">
          <div className="bg-[#F6F3F9] dark:bg-[#2D2A3A] rounded-full size-c-144-5 relative">
            <Image
              src={"/home/relive/relive-image.png"}
              alt="Relive"
              width={1000}
              height={1000}
              className="object-contain absolute w-c-155 -top-1/6"
            />
            <Image
              src={"/mask/doted-purple.png"}
              alt="Relive"
              width={1000}
              height={1000}
              className="object-contain absolute w-c-21 top-1/10 right-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
