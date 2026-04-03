"use client";

import { useQuery } from "@tanstack/react-query";
import Carousel from "../carousel/carousel";
import CardProduct from "../card-product";
import CardProductSkeleton from "../card-product-skeleton";
import { getRecomendations } from "@/services/recomendations-api";

export default function OffersSection() {
  const { data: specialOffer, isLoading } = useQuery({
    queryKey: ["offers-recomendations"],
    queryFn: getRecomendations.offers,
  });

  return (
    <div className="grid gap-c-10 place-items-center overflow-hidden ">
      <section className="grid gap-c-5 text-center">
        <h1 className="title-text">
          Upto <span>30%</span> Discount
        </h1>
        <h2 className="desc-text">
          Discover the favorites that keep our customers coming back for more.
        </h2>
      </section>
      <section className="grid place-items-center">
        {isLoading ? (
          <Carousel
            options={{ loop: true }}
            size={280}
            spacing={20}
            visibleSlides={5}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <article className="mx-2 lg:mx-auto" key={index}>
                <CardProductSkeleton />
              </article>
            ))}
          </Carousel>
        ) : (
          <Carousel
            options={{ loop: true }}
            size={280}
            spacing={20}
            visibleSlides={specialOffer?.length}
          >
            {specialOffer?.map((item) => (
              <article className="mx-2 lg:mx-auto" key={item.id}>
                <CardProduct {...item} />
              </article>
            ))}
          </Carousel>
        )}
      </section>
    </div>
  );
}
