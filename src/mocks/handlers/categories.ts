import { http, HttpResponse, delay } from "msw"; //
import { WebResponse } from "@/types/common-interface";
import { CategoriesRes } from "@/types/categories-interface";
import { mocksCategories } from "../data/categories/categories";

export const categoriesHandlers = [
  http.get<never, never, WebResponse<CategoriesRes[]>>(
    "/categories",
    async () => {
      await delay(500);

      return HttpResponse.json<WebResponse<CategoriesRes[]>>({
        data: mocksCategories,
      });
    },
  ),
];
