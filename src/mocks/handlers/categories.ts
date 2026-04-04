import { http, HttpResponse, delay } from "msw"; //
import { WebResponse } from "@/types/common-interface";
import { CategoriesRes } from "@/types/categories-interface";
import { dummyCategories } from "../data/categories";

export const categoriesHandlers = [
  http.get("/categories", async () => {
    await delay(500);

    return HttpResponse.json<WebResponse<CategoriesRes[]>>({
      data: dummyCategories,
    });
  }),
];
