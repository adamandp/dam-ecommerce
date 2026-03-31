"use client";

import Carousel from "../carousel/carousel";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "../card-product";
import { getClassicRecomendation } from "@/services/get-classic-recomendations";
import { ProductRes } from "@/types/product-res";
import CardProductSkeleton from "../card-product-skeleton";

export default function Classic() {
  const { data: favorites, isLoading } = useQuery<ProductRes[]>({
    queryKey: ["classic-recomendations"],
    queryFn: getClassicRecomendation,
  });

  return (
    <section
      className="grid gap-c-10 place-items-center py-c-34 overflow-hidden relative"
      aria-labelledby="classic-title"
    >
      <header className="grid gap-c-5 text-center lg:text-start relative z-10 ">
        <h2 id="classic-title" className="title-text">
          Our <span>Classic</span> Favorites
        </h2>
        <p className="desc-text text-center">
          Check out our top products that our customers love.
        </p>
      </header>

      <div className="grid place-items-center relative z-10 w-full">
        {isLoading ? (
          <Carousel
            options={{ loop: true }}
            size={260}
            spacing={20}
            visibleSlides={4}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <article className="mx-2 lg:mx-auto" key={index}>
                <CardProductSkeleton />
              </article>
            ))}
          </Carousel>
        ) : (
          <Carousel
            options={{ loop: true }}
            size={260}
            spacing={20}
            visibleSlides={favorites?.length}
          >
            {favorites?.map((item) => (
              <article className="mx-2 lg:mx-auto" key={item.id}>
                <CardProduct {...item} />
              </article>
            ))}
          </Carousel>
        )}
      </div>

      <Image
        src="/home/classic/classic-leftimage.png"
        alt=""
        width={1000}
        height={1000}
        className="w-c-70-5 absolute left-0 top-[5%] pointer-events-none"
      />
      <Image
        src="/home/classic/classic-rightimage.png"
        alt=""
        width={1000}
        height={1000}
        className="w-c-53 absolute right-0 bottom-[5%] pointer-events-none"
      />
    </section>
  );
}
