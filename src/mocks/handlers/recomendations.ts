import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { WebResponse } from "@/types/common-interface";
import {
  CategoriesRecomendationRes,
  ProductRecomendationRes,
} from "@/types/recomendations-interface";
import { mocksRecomendationsClassic } from "../data/recomendations/recomendations-classic";
import { mocksCategoriesRecomendations } from "../data/recomendations/recomendations-categories";
import { mocksOffersRecomendations } from "../data/recomendations/recomendations-offers";

export const recomendationsHandlers = [
  http.get("/recomendations/classic", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<ProductRecomendationRes[]>>({
      data: mocksRecomendationsClassic,
    });
  }),

  http.get("/recomendations/categories", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<CategoriesRecomendationRes[]>>({
      data: mocksCategoriesRecomendations,
    });
  }),

  http.get("/recomendations/offers", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<ProductRecomendationRes[]>>({
      data: mocksOffersRecomendations,
    });
  }),
];
