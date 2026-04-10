import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { WebResponse } from "@/types/common-interface";
import { CatalogDto, CatalogRes } from "@/types/products-interface";
import { mocksProducts } from "../data/products/products";

export const productsHandlers = [
  http.get("/products", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());

    const filters: CatalogDto = {
      q: searchParams.q || undefined,
      sort: (searchParams.sort as CatalogDto["sort"]) || "default",
      min: searchParams.min ? Number(searchParams.min) : undefined,
      max: searchParams.max ? Number(searchParams.max) : undefined,
      cat: searchParams.cat ? searchParams.cat.split(",") : [],
    };

    console.log(filters);

    return HttpResponse.json<WebResponse<CatalogRes[]>>({
      data: mocksProducts,
    });
  }),
];
