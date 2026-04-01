import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { dummyRecomendationsClassic } from "./data/classic";
import { WebResponse } from "@/types/common-interface";
import { ProductRes } from "@/types/product-res";
import { dummyCategoriesRecomendations } from "./data/categories";
import { CategoriesRecomendationRes } from "@/types/categories-recomendations-interface";
import { dummyOffersRecomendations } from "./data/offers";

export const handlers = [
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
