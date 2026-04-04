import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { WebResponse } from "@/types/common-interface";
import { ProductRes } from "@/types/product-interface";
import { CategoriesRecomendationRes } from "@/types/recomendations-interface";
import { dummyRecomendationsClassic } from "../data/recomendations-classic";
import { dummyCategoriesRecomendations } from "../data/recomendations-categories";
import { dummyOffersRecomendations } from "../data/recomendations-offers";

export const recomendationsHandlers = [
  http.get("/recomendations/classic", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<ProductRes[]>>({
      data: dummyRecomendationsClassic,
    });
  }),

  http.get("/recomendations/categories", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<CategoriesRecomendationRes[]>>({
      data: dummyCategoriesRecomendations,
    });
  }),

  http.get("/recomendations/offers", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<ProductRes[]>>({
      data: dummyOffersRecomendations,
    });
  }),
];
